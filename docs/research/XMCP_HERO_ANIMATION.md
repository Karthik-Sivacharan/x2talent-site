# xMCP Hero Animation Research

**Source:** https://neuform.ai/page/xmcp-the-typescript-framework-for-mcp-servers
**Inspected:** 2026-04-23

## Overview

The xMCP hero has two animation layers:

1. **WebGL "X" Point Cloud** — 8,000 white particles arranged in an X shape, slowly rotating in 3D
2. **GSAP Text Reveal** — Word-by-word masked slide-up animation on the headline

---

## 1. WebGL Point Cloud ("X" Shape)

### Point Generation
- 8,000 points split 50/50 between two diagonal lines forming an X
- Line 1: `x = t, y = t` (top-left → bottom-right diagonal)
- Line 2: `x = t, y = -t` (top-right → bottom-left diagonal)
- `t` ranges from -2.0 to 2.0 (random along line)
- `spread = 0.2` adds gaussian-like fuzziness around each line
- Z-depth scattered randomly in range -0.75 to 0.75

### Rotation
- Continuous `requestAnimationFrame` loop
- `time += 0.005` per frame (very slow)
- Combined Y-axis rotation + slow Z-axis rotation (0.3x speed)
- Scale factor: 0.4

### Shaders

**Vertex Shader:**
```glsl
attribute vec3 aPosition;
uniform mat4 uMVPMatrix;
uniform float uPointSize;
varying float vAlpha;
void main() {
    gl_Position = uMVPMatrix * vec4(aPosition, 1.0);
    gl_PointSize = uPointSize * (2.0 - gl_Position.z);
    vAlpha = smoothstep(2.0, -2.0, gl_Position.z) * 0.8;
}
```

**Fragment Shader:**
```glsl
precision mediump float;
varying float vAlpha;
void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    if(length(coord) > 0.5) discard;
    gl_FragColor = vec4(1.0, 1.0, 1.0, vAlpha);
}
```

### Visual Effects
- Additive blending: `gl.blendFunc(gl.SRC_ALPHA, gl.ONE)`
- Container: `opacity: 0.8`, `mix-blend-mode: screen`
- Radial mask: `mask-image: radial-gradient(circle, black 40%, transparent 80%)` for vignette fade
- Canvas sized to 16:9 aspect ratio container

### Full JS Code
```js
const canvas = document.getElementById('hero-canvas');
const gl = canvas.getContext('webgl', { alpha: true });

if (gl) {
    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resize);
    resize();

    // [shaders as above]

    const numPoints = 8000;
    const positions = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
        const isLine1 = Math.random() > 0.5;
        const t = (Math.random() - 0.5) * 4.0;
        const spread = 0.2;

        if (isLine1) {
            positions[i * 3] = t + (Math.random() - 0.5) * spread;
            positions[i * 3 + 1] = t + (Math.random() - 0.5) * spread;
        } else {
            positions[i * 3] = t + (Math.random() - 0.5) * spread;
            positions[i * 3 + 1] = -t + (Math.random() - 0.5) * spread;
        }
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;
    }

    // Buffer setup, uniforms...
    gl.uniform1f(pointSizeLocation, window.devicePixelRatio * 1.5);

    let time = 0;
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    function render() {
        time += 0.005;
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        const s = Math.sin(time), c = Math.cos(time);
        const sz = Math.sin(time * 0.3), cz = Math.cos(time * 0.3);
        const scale = 0.4;
        const matrix = new Float32Array([
            c*scale*cz, s*scale, -s*scale, 0,
            -s*scale, c*scale, c*scale, 0,
            s*scale, -c*scale*sz, c*scale, 0,
            0, 0, 0, 1
        ]);

        gl.uniformMatrix4fv(mvpLocation, false, matrix);
        gl.drawArrays(gl.POINTS, 0, numPoints);
        requestAnimationFrame(render);
    }
    render();
}
```

---

## 2. GSAP Text Reveal

### CSS
```css
.word-wrapper {
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom;
}
```

### JS
```js
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.reveal-text').forEach((el) => {
    const words = el.innerText.split(' ');
    el.innerHTML = '';
    words.forEach(word => {
        const wrapper = document.createElement('span');
        wrapper.className = 'word-wrapper';
        const inner = document.createElement('span');
        inner.style.display = 'inline-block';
        inner.innerText = word + ' ';
        wrapper.appendChild(inner);
        el.appendChild(wrapper);
    });

    const innerSpans = el.querySelectorAll('.word-wrapper > span');

    gsap.fromTo(innerSpans,
        { y: '110%' },
        {
            y: '0%',
            duration: 0.8,
            ease: 'power4.out',
            stagger: 0.05,
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});
```

---

## Adaptation Notes for X2Talent

- The "X" shape is perfect for X2Talent branding (the "X" in "X2")
- Could use Three.js instead of raw WebGL for easier maintenance
- GSAP text reveal is straightforward to port (already using GSAP)
- Consider: mouse interaction (particles react to cursor), color gradient instead of pure white
