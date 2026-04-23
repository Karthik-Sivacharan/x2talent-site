"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Matches the xMCP approach: raw GL_POINTS with tiny crisp circles,
 * depth-based alpha, additive blending on a transparent canvas.
 * Adapted for light background by using dark particles + CSS mix-blend-mode.
 */

const NUM_POINTS = 8000;
const SPREAD = 0.2;
const LINE_RANGE = 4.0;
const Z_DEPTH = 1.5;

const vertexShader = `
  uniform float uPointSize;
  varying float vAlpha;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Depth-based size: closer = slightly larger (matches original's 2.0 - z logic)
    float depth = clamp(-mvPosition.z, 1.0, 20.0);
    gl_PointSize = uPointSize * (8.0 / depth);

    // Alpha fades with distance — closer particles are more opaque
    vAlpha = smoothstep(12.0, 3.0, depth) * 0.95;
  }
`;

const fragmentShader = `
  precision mediump float;
  varying float vAlpha;
  uniform vec3 uColor;

  void main() {
    // Hard circle — discard outside radius
    vec2 coord = gl_PointCoord - vec2(0.5);
    if (length(coord) > 0.5) discard;

    gl_FragColor = vec4(uColor, vAlpha);
  }
`;

function generateXPoints(): Float32Array {
  const positions = new Float32Array(NUM_POINTS * 3);

  for (let i = 0; i < NUM_POINTS; i++) {
    const isLine1 = Math.random() > 0.5;
    const t = (Math.random() - 0.5) * LINE_RANGE;

    if (isLine1) {
      // Diagonal: top-left → bottom-right
      positions[i * 3] = t + (Math.random() - 0.5) * SPREAD;
      positions[i * 3 + 1] = t + (Math.random() - 0.5) * SPREAD;
    } else {
      // Diagonal: top-right → bottom-left
      positions[i * 3] = t + (Math.random() - 0.5) * SPREAD;
      positions[i * 3 + 1] = -t + (Math.random() - 0.5) * SPREAD;
    }

    positions[i * 3 + 2] = (Math.random() - 0.5) * Z_DEPTH;
  }

  return positions;
}

export function XParticleCloud() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scene = new THREE.Scene();

    // OrthographicCamera-like feel: far back, narrow FOV
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
    });
    const dpr = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(dpr);
    el.appendChild(renderer.domElement);

    // Point cloud
    const positions = generateXPoints();
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uPointSize: { value: dpr * 2.5 },
        uColor: { value: new THREE.Color(0.08, 0.14, 0.09) }, // rich dark green
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.15;
    };
    document.addEventListener("mousemove", onMouseMove);

    // Resize
    const onResize = () => {
      const rect = el.getBoundingClientRect();
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
      renderer.setSize(rect.width, rect.height);
    };
    window.addEventListener("resize", onResize);
    onResize();

    // Animate — slow Y rotation + gentle Z oscillation
    let time = 0;
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.005;

      points.rotation.y = time;
      points.rotation.z = Math.sin(time * 0.3) * 0.12;

      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 1.2 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="x-particle-cloud"
      aria-hidden="true"
    />
  );
}
