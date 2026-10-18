/* HALO — Ambient Fluid Wave & Constellation Canvas (Three.js)
   Sophisticated, low-contrast atmospheric motion.
   Provides depth and luxury atmosphere without harsh glare or heavy geometry. */
(function () {
  'use strict';

  if (typeof THREE === 'undefined') return;

  var mount = document.getElementById('heroCanvas');
  if (!mount) return;

  var container = mount.parentElement;
  if (!container) return;

  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var scene, camera, renderer;
  var waveParticles, waveGeometry, waveLines;
  var raf;
  var currentMode = 'fluid'; // 'fluid' | 'constellation' | 'ambient'
  var mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

  try {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 1.2, 5.5);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({
      canvas: mount,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // 1. Fluid Silk Wavefield Geometry
    // A structured grid of points that undulates smoothly in 3D
    var COLS = 84;
    var ROWS = 66;
    var COUNT = COLS * ROWS;

    var positions = new Float32Array(COUNT * 3);
    var colors = new Float32Array(COUNT * 3);
    var basePositions = new Float32Array(COUNT * 3);

    var cGold = new THREE.Color(0xffc53d);
    var cCoral = new THREE.Color(0xff7a68);
    var cMuted = new THREE.Color(0x523d60);

    var idx = 0;
    for (var r = 0; r < ROWS; r++) {
      var z = -4 + (r / (ROWS - 1)) * 11;
      for (var c = 0; c < COLS; c++) {
        var x = (c / (COLS - 1) - 0.5) * 18;
        var y = -0.6;

        positions[idx * 3] = basePositions[idx * 3] = x;
        positions[idx * 3 + 1] = basePositions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = basePositions[idx * 3 + 2] = z;

        // Subtle gradient from left to right (Gold into Coral into soft violet)
        var t = c / (COLS - 1);
        var col = t < 0.5 ? cGold.clone().lerp(cCoral, t * 2) : cCoral.clone().lerp(cMuted, (t - 0.5) * 2);

        colors[idx * 3] = col.r;
        colors[idx * 3 + 1] = col.g;
        colors[idx * 3 + 2] = col.b;

        idx++;
      }
    }

    waveGeometry = new THREE.BufferGeometry();
    waveGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    waveGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    var particleMat = new THREE.PointsMaterial({
      size: 0.042,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    waveParticles = new THREE.Points(waveGeometry, particleMat);
    scene.add(waveParticles);

    // 2. Subtle Atmospheric Constellation Floating Particles
    var DUST_COUNT = 180;
    var dustGeo = new THREE.BufferGeometry();
    var dPos = new Float32Array(DUST_COUNT * 3);
    var dCol = new Float32Array(DUST_COUNT * 3);

    for (var i = 0; i < DUST_COUNT; i++) {
      dPos[i * 3] = (Math.random() - 0.5) * 12;
      dPos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      dPos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      var rnd = Math.random();
      var c = rnd < 0.6 ? cGold : cCoral;
      dCol[i * 3] = c.r;
      dCol[i * 3 + 1] = c.g;
      dCol[i * 3 + 2] = c.b;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dCol, 3));

    var dustMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    var dustField = new THREE.Points(dustGeo, dustMat);
    scene.add(dustField);

    // Mouse movement
    function onMouseMove(e) {
      var rect = container.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      var y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Resize
    function resize() {
      if (!container.clientWidth || !container.clientHeight) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 120);
    });

    var paused = false;
    document.addEventListener('visibilitychange', function () {
      paused = document.hidden;
    });

    // Mode Selector Controls
    window.setHaloSculptureMode = function (mode) {
      currentMode = mode;
      if (mode === 'fluid') {
        particleMat.size = 0.042;
        particleMat.opacity = 0.72;
        waveParticles.visible = true;
      } else if (mode === 'aura') {
        particleMat.size = 0.065;
        particleMat.opacity = 0.9;
        waveParticles.visible = true;
      } else if (mode === 'wireframe') {
        particleMat.size = 0.025;
        particleMat.opacity = 0.45;
        waveParticles.visible = true;
      } else if (mode === 'vortex') {
        particleMat.size = 0.055;
        particleMat.opacity = 0.85;
      }
    };

    var clock = new THREE.Clock();

    function animate() {
      raf = requestAnimationFrame(animate);
      if (paused) return;

      var delta = clock.getDelta();
      var t = clock.getElapsedTime();

      // Fluid mouse damping
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      if (!prefersReducedMotion) {
        var posArray = waveGeometry.attributes.position.array;
        var pIdx = 0;

        for (var r = 0; r < ROWS; r++) {
          for (var c = 0; c < COLS; c++) {
            var bx = basePositions[pIdx * 3];
            var bz = basePositions[pIdx * 3 + 2];

            // Wave height equation: smooth composite sines with mouse ripple
            var wave1 = Math.sin(bx * 0.55 + t * 0.8) * 0.32;
            var wave2 = Math.cos(bz * 0.7 + t * 0.6) * 0.22;
            var wave3 = Math.sin((bx + bz) * 0.4 + t * 0.9) * 0.15;

            // Subtle interactive mouse deflection
            var distToMouse = Math.sqrt((bx - mouse.x * 4) * (bx - mouse.x * 4) + (bz - mouse.y * 3) * (bz - mouse.y * 3));
            var mouseWave = Math.sin(distToMouse * 2.0 - t * 2.0) * Math.max(0, 0.4 - distToMouse * 0.08);

            posArray[pIdx * 3 + 1] = basePositions[pIdx * 3 + 1] + wave1 + wave2 + wave3 + mouseWave;
            pIdx++;
          }
        }
        waveGeometry.attributes.position.needsUpdate = true;

        // Gentle camera float
        camera.position.x = mouse.x * 0.4;
        camera.position.y = 1.2 + mouse.y * 0.25;
        camera.lookAt(0, 0, 0);

        // Drift dust
        dustField.rotation.y = t * 0.02;
      }

      renderer.render(scene, camera);
    }

    animate();
  } catch (e) {
    if (raf) cancelAnimationFrame(raf);
  }
})();
