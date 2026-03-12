(function () {
  'use strict';

  const TOTAL_SCENES = 10;
  let currentScene = 0;
  let isTransitioning = false;
  const scenes = document.querySelectorAll('.scene');
  const dots = document.querySelectorAll('.scene-dot');
  const progressBar = document.getElementById('progress-bar');
  const scrollHint = document.getElementById('scroll-hint');
  let scrollAcc = 0;

  /* ===================== THREE.JS PARTICLE FIELD ===================== */
  const canvas = document.getElementById('canvas-bg');
  let renderer, scene3, camera, particles, particlePositions, velocities;
  const PARTICLE_COUNT = 1800;

  function initThree() {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    scene3 = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 80;

    // Particles
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    velocities = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 300;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200 - 30;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      velocities.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.008
      });

      // Mostly teal with some white
      const teal = Math.random() > 0.35;
      if (teal) {
        colors[i * 3] = 0;
        colors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      } else {
        colors[i * 3] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      }
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlePositions = positions;

    const mat = new THREE.PointsMaterial({
      size: 0.55,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      depthWrite: false
    });

    particles = new THREE.Points(geo, mat);
    scene3.add(particles);

    // Subtle nebula clouds
    for (let n = 0; n < 3; n++) {
      const nebGeo = new THREE.SphereGeometry(20 + n * 10, 8, 8);
      const nebMat = new THREE.MeshBasicMaterial({
        color: n === 0 ? 0x00e5c8 : (n === 1 ? 0x003344 : 0x001122),
        transparent: true,
        opacity: n === 0 ? 0.015 : 0.025,
        wireframe: false,
        side: THREE.BackSide
      });
      const neb = new THREE.Mesh(nebGeo, nebMat);
      neb.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 60,
        -50 - n * 20
      );
      scene3.add(neb);
    }
  }

  let frameId, t = 0;
  let camTargetX = 0, camTargetY = 0;

  function animateThree() {
    frameId = requestAnimationFrame(animateThree);
    t += 0.003;

    // Drift camera slightly
    camera.position.x += (camTargetX - camera.position.x) * 0.03;
    camera.position.y += (camTargetY - camera.position.y) * 0.03;

    // Move particles
    const pos = particles.geometry.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;

      // Wrap
      if (pos[i * 3] > 150) pos[i * 3] = -150;
      if (pos[i * 3] < -150) pos[i * 3] = 150;
      if (pos[i * 3 + 1] > 100) pos[i * 3 + 1] = -100;
      if (pos[i * 3 + 1] < -100) pos[i * 3 + 1] = 100;
      if (pos[i * 3 + 2] > 100) pos[i * 3 + 2] = -100;
      if (pos[i * 3 + 2] < -100) pos[i * 3 + 2] = 100;
    }
    particles.geometry.attributes.position.needsUpdate = true;

    // Scene-based camera zoom  
    const targetZ = 80 - currentScene * 3;
    camera.position.z += (targetZ - camera.position.z) * 0.04;

    particles.rotation.y = t * 0.04;
    particles.rotation.x = Math.sin(t * 0.3) * 0.02;

    renderer.render(scene3, camera);
  }

  // Mouse parallax on particles
  document.addEventListener('mousemove', e => {
    camTargetX = (e.clientX / window.innerWidth - 0.5) * 8;
    camTargetY = -(e.clientY / window.innerHeight - 0.5) * 5;
  });

  /* ===================== SCENE TRANSITION ENGINE ===================== */
  function updateProgress() {
    const pct = (currentScene / (TOTAL_SCENES - 1)) * 100;
    progressBar.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(pct));
  }

  function updateDots() {
    dots.forEach((d, i) => d.classList.toggle('active', i === currentScene));
  }

  function setScene(idx, dir = 1) {
    if (idx < 0 || idx >= TOTAL_SCENES || idx === currentScene || isTransitioning) return;
    isTransitioning = true;

    const prev = scenes[currentScene];
    const next = scenes[idx];

    // Animate out current
    prev.style.transition = 'opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)';
    prev.style.opacity = '0';
    prev.style.transform = `translateY(${dir > 0 ? '-3' : '3'}vh)`;

    setTimeout(() => {
      prev.classList.remove('active');
      prev.style.opacity = '';
      prev.style.transform = '';
      prev.style.transition = '';
      prev.style.pointerEvents = 'none';

      next.style.opacity = '0';
      next.style.transform = `translateY(${dir > 0 ? '3' : '-3'}vh)`;
      next.style.transition = 'none';
      next.classList.add('active');
      next.style.pointerEvents = 'all';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          next.style.transition = 'opacity 0.6s cubic-bezier(.2,1,.2,1), transform 0.6s cubic-bezier(.2,1,.2,1)';
          next.style.opacity = '1';
          next.style.transform = 'translateY(0)';
        });
      });

      currentScene = idx;
      updateProgress();
      updateDots();

      // Scroll hint
      scrollHint.classList.toggle('hidden', currentScene > 0);

      setTimeout(() => {
        isTransitioning = false;
        next.style.opacity = '';
        next.style.transform = '';
        next.style.transition = '';
      }, 700);
    }, 450);
  }

  window.goToScene = (idx) => setScene(idx, idx > currentScene ? 1 : -1);

  // Dot nav clicks
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index);
      setScene(idx, idx > currentScene ? 1 : -1);
    });
  });

  /* ===================== SCROLL / WHEEL HANDLING ===================== */
  let wheelTimer;
  let touchStartY = 0;
  const WHEEL_THRESHOLD = 120;

  window.addEventListener('wheel', (e) => {
    // Allow scroll inside scenes that need it (work drag track, overflow-y:auto)
    const active = scenes[currentScene];
    const isScrollable = active.scrollHeight > active.clientHeight + 10;
    if (isScrollable) {
      const atTop = active.scrollTop <= 0;
      const atBottom = active.scrollTop + active.clientHeight >= active.scrollHeight - 5;
      if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) return;
    }

    e.preventDefault();
    scrollAcc += e.deltaY;

    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => { scrollAcc = 0; }, 300);

    if (Math.abs(scrollAcc) > WHEEL_THRESHOLD) {
      const dir = scrollAcc > 0 ? 1 : -1;
      setScene(currentScene + dir, dir);
      scrollAcc = 0;
    }
  }, { passive: false });

  // Touch
  window.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchend', e => {
    const diff = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) {
      const dir = diff > 0 ? 1 : -1;
      setScene(currentScene + dir, dir);
    }
  }, { passive: true });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); setScene(currentScene + 1, 1); }
    if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); setScene(currentScene - 1, -1); }
    if (e.key === 'Home') { e.preventDefault(); setScene(0, -1); }
    if (e.key === 'End') { e.preventDefault(); setScene(TOTAL_SCENES - 1, 1); }
  });

  /* ===================== CUSTOM CURSOR ===================== */
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');
  let cx = -100, cy = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
  });

  (function cursorLoop() {
    rx += (cx - rx) * 0.12;
    ry += (cy - ry) * 0.12;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    cursorRing.style.left = rx + 'px';
    cursorRing.style.top = ry + 'px';
    requestAnimationFrame(cursorLoop);
  })();

  document.querySelectorAll('a, button, .pillar-row, .case-card-imm').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });

  /* ===================== FAQ ACCORDION ===================== */
  const faqBtns = document.querySelectorAll('.faq-btn-imm');
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const exp = btn.getAttribute('aria-expanded') === 'true';
      faqBtns.forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        document.getElementById(b.getAttribute('aria-controls'))?.classList.remove('open');
      });
      if (!exp) {
        btn.setAttribute('aria-expanded', 'true');
        document.getElementById(btn.getAttribute('aria-controls'))?.classList.add('open');
      }
    });
    btn.addEventListener('keydown', e => {
      const items = [...faqBtns];
      const i = items.indexOf(btn);
      if (e.key === 'ArrowDown') { e.preventDefault(); (items[i + 1] || items[0]).focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); (items[i - 1] || items[items.length - 1]).focus(); }
    });
  });

  /* ===================== DRAG SCROLL (WORK) ===================== */
  const track = document.getElementById('work-track');
  if (track) {
    let isDragging = false, startX, scrollLeft;
    track.addEventListener('mousedown', e => {
      isDragging = true;
      track.classList.add('grabbing');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mousemove', e => {
      if (!isDragging) return;
      e.preventDefault();
      track.scrollLeft = scrollLeft - (e.pageX - track.offsetLeft - startX);
    });
    ['mouseup', 'mouseleave'].forEach(ev => track.addEventListener(ev, () => {
      isDragging = false;
      track.classList.remove('grabbing');
    }));
  }

  /* ===================== PLATFORM TOGGLE ===================== */
  const tS = document.getElementById('tbS');
  const tW = document.getElementById('tbW');
  const pData = {
    shopify: {
      p1: { time: '5–7 day Shopify launch', feats: ['Custom Shopify theme build', 'Up to 5 pages', 'Pixel setup (Meta, GA4)', 'SEO foundation', 'Performance optimization', 'Welcome email flow', '2 rounds of revisions'] },
      p2: { time: 'Full Shopify build · 10–14 days', feats: ['Everything in Launch Sprint', 'Brand identity &amp; packaging', 'Full pixel suite (Meta, GA4, TikTok)', 'Post-purchase email + SMS flows', 'CRO audit &amp; UX sprint', 'Loyalty &amp; referral setup', '30-day post-launch support'] }
    },
    woo: {
      p1: { time: '7–10 day WooCommerce launch', feats: ['Custom WooCommerce build', 'Up to 5 pages', 'Pixel setup (Meta, GA4)', 'WooCommerce performance tuning', 'SEO foundation', 'Welcome email flow', '2 rounds of revisions'] },
      p2: { time: 'Full WooCommerce build · 12–16 days', feats: ['Everything in Launch Sprint', 'Brand identity &amp; packaging', 'Full pixel suite (Meta, GA4, TikTok)', 'Post-purchase email + SMS flows', 'Plugin optimization &amp; CRO sprint', 'Loyalty &amp; referral setup', '30-day post-launch support'] }
    }
  };

  function applyPlatform(p) {
    const d = pData[p];
    document.getElementById('pk1-time').textContent = d.p1.time;
    document.getElementById('pk1-feats').innerHTML = d.p1.feats.map(f => `<div class="pkg-feat-imm">${f}</div>`).join('');
    document.getElementById('pk2-time').textContent = d.p2.time;
    document.getElementById('pk2-feats').innerHTML = d.p2.feats.map(f => `<div class="pkg-feat-imm">${f}</div>`).join('');
  }
  tS.addEventListener('click', () => { tS.classList.add('active'); tS.setAttribute('aria-pressed', 'true'); tW.classList.remove('active'); tW.setAttribute('aria-pressed', 'false'); applyPlatform('shopify'); });
  tW.addEventListener('click', () => { tW.classList.add('active'); tW.setAttribute('aria-pressed', 'true'); tS.classList.remove('active'); tS.setAttribute('aria-pressed', 'false'); applyPlatform('woo'); });

  /* ===================== RESIZE ===================== */
  window.addEventListener('resize', () => {
    if (!renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  /* ===================== INIT ===================== */
  // Check for reduced motion
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && typeof THREE !== 'undefined') {
    try {
      initThree();
      animateThree();
    } catch (e) {
      console.warn('Three.js init failed:', e);
    }
  }

  updateProgress();
  updateDots();

})();
