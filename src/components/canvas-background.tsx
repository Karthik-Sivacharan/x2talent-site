"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  varying float vElevation;
  uniform float uTime;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Primary wave
    float elevation = sin(pos.x * 0.2 + uTime * 0.5) *
                      cos(pos.z * 0.2 + uTime * 0.3) * 2.0;

    // Secondary detail wave
    elevation += sin(pos.x * 0.5 - uTime * 0.2) *
                 cos(pos.z * 0.5 + uTime * 0.4) * 0.5;

    pos.y += elevation;
    vElevation = pos.y;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying float vElevation;

  void main() {
    // Mix based on elevation
    float mixStrength = (vElevation + 2.0) / 4.0;
    mixStrength = clamp(mixStrength, 0.0, 1.0);

    vec3 accent = vec3(0.106, 0.188, 0.133);    // #1B3022
    vec3 lightBase = vec3(0.961, 0.949, 0.933);  // #F5F2EE

    vec3 color = mix(lightBase, accent, mixStrength);

    // Alpha fade
    float alpha = smoothstep(-1.0, 2.0, vElevation) * 0.5;

    gl_FragColor = vec4(color, alpha);
  }
`;

export function CanvasBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;
    camera.position.y = 5;
    camera.rotation.x = -0.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(60, 60, 64, 64);
    geometry.rotateX(-Math.PI / 2);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
      },
      wireframe: true,
      transparent: true,
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    let mouseX = 0;
    const windowHalfX = window.innerWidth / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - windowHalfX) * 0.001;
    };
    document.addEventListener("mousemove", onMouseMove);

    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      material.uniforms.uTime.value = clock.getElapsedTime();

      plane.rotation.y += 0.0015;
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

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

  return <div id="canvas-container" ref={containerRef} />;
}
