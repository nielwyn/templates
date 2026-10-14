/* HALO template — hero 3D background (Three.js, loaded from CDN in index.html).
   Deliberately not a discrete "object" (a sphere, a ring, a letterform) —
   those all need to be offset to one side of the text, and a fixed
   world-space offset combined with perspective projection drifts out of
   sync with percentage-based CSS as the viewport width changes. Instead
   this is a full-bleed, centered field of drifting points — ambient
   texture behind the whole hero, with nothing positioned off-axis, so
   there's nothing that can misalign on resize in the first place.
   Fails silently if Three.js didn't load or WebGL isn't available — the
   CSS radial-gradient behind the canvas (.hero-scene-fallback) carries
   the hero visually either way. */
(function () {
  if (typeof THREE === 'undefined') return;

  var mount = document.getElementById('heroCanvas');
  if (!mount) return;

  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var scene, camera, renderer, points, raf;
  var container = mount.parentElement;
  var PALETTE = [
    [1.0, 0.773, 0.239],   // gold
    [1.0, 0.478, 0.408],   // coral
    [0.965, 0.945, 0.914], // cream
    [0.663, 0.612, 0.709]  // lavender-grey
  ];
  var COUNT = 420;
  var basePositions, phases;

  try {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    renderer = new THREE.WebGLRenderer({ canvas: mount, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    var positions = new Float32Array(COUNT * 3);
    var colors = new Float32Array(COUNT * 3);
    basePositions = new Float32Array(COUNT * 3);
    phases = new Float32Array(COUNT);

    for (var i = 0; i < COUNT; i++) {
      var x = (Math.random() - 0.5) * 11;
      var y = (Math.random() - 0.5) * 6;
      var z = (Math.random() - 0.5) * 5;
      positions[i * 3] = basePositions[i * 3] = x;
      positions[i * 3 + 1] = basePositions[i * 3 + 1] = y;
      positions[i * 3 + 2] = basePositions[i * 3 + 2] = z;
      phases[i] = Math.random() * Math.PI * 2;

      var c = PALETTE[i % PALETTE.length];
      colors[i * 3] = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];
    }

    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    var material = new THREE.PointsMaterial({
      size: 0.05, vertexColors: true, transparent: true, opacity: 0.8,
      sizeAttenuation: true, depthWrite: false
    });
    points = new THREE.Points(geometry, material);
    scene.add(points);

    var targetX = 0, targetY = 0;
    window.addEventListener('mousemove', function (e) {
      targetX = (e.clientX / window.innerWidth - 0.5);
      targetY = (e.clientY / window.innerHeight - 0.5);
    });

    function resize() {
      if (!container.clientWidth || !container.clientHeight) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });

    var paused = false;
    document.addEventListener('visibilitychange', function () {
      paused = document.hidden;
    });

    var clock = new THREE.Clock();

    function animate() {
      if (!paused && !prefersReducedMotion) {
        var t = clock.getElapsedTime();
        var posAttr = points.geometry.attributes.position;
        for (var i = 0; i < COUNT; i++) {
          posAttr.array[i * 3 + 1] = basePositions[i * 3 + 1] + Math.sin(t * 0.4 + phases[i]) * 0.18;
        }
        posAttr.needsUpdate = true;
        points.rotation.y += 0.0006;
        /* Subtle parallax: the whole field drifts slightly opposite the cursor. */
        points.position.x += (-targetX * 0.6 - points.position.x) * 0.03;
        points.position.y += (targetY * 0.4 - points.position.y) * 0.03;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    }
    animate();
  } catch (err) {
    if (raf) cancelAnimationFrame(raf);
  }
})();
