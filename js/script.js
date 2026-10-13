const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuToggle && mobileMenu) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    mobileMenu.hidden = true;
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenu.hidden && !event.target.closest(".site-header")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !mobileMenu.hidden) {
      closeMenu();
      menuToggle.focus();
    }
  });
}

const activityTrack = document.querySelector(".activity-carousel__track");
const activityStatus = document.querySelector(".carousel-status");
const activitySlides = activityTrack ? [...activityTrack.children] : [];

if (activityTrack && activityStatus && activitySlides.length) {
  let activeSlide = 0;
  let scrollSettleTimer;
  let programmaticScrollTimer;
  let isProgrammaticScroll = false;

  const setActiveSlide = (index) => {
    activeSlide = (index + activitySlides.length) % activitySlides.length;
    activityStatus.textContent = `${String(activeSlide + 1).padStart(2, "0")} / 03    ━━━━━━━`;
    activitySlides.forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", String(slideIndex !== activeSlide));
      slide.inert = slideIndex !== activeSlide;
    });
  };

  const showSlide = (index) => {
    setActiveSlide(index);
    window.clearTimeout(programmaticScrollTimer);
    if (activityTrack.clientWidth === 0) {
      isProgrammaticScroll = false;
      return;
    }
    isProgrammaticScroll = true;
    activityTrack.scrollTo({
      left: activeSlide * activityTrack.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
    programmaticScrollTimer = window.setTimeout(() => {
      isProgrammaticScroll = false;
      if (activityTrack.clientWidth === 0) return;
      setActiveSlide(Math.round(activityTrack.scrollLeft / activityTrack.clientWidth));
    }, 500);
  };

  document.querySelector("[data-carousel-previous]")?.addEventListener("click", () => showSlide(activeSlide - 1));
  document.querySelector("[data-carousel-next]")?.addEventListener("click", () => showSlide(activeSlide + 1));

  activityTrack.addEventListener("scroll", () => {
    window.clearTimeout(scrollSettleTimer);
    if (scrollLinked || isProgrammaticScroll || activityTrack.clientWidth === 0) return;
    scrollSettleTimer = window.setTimeout(() => {
      if (activityTrack.clientWidth === 0) return;
      setActiveSlide(Math.round(activityTrack.scrollLeft / activityTrack.clientWidth));
    }, 100);
  }, { passive: true });

  const resumeManualScroll = () => {
    window.clearTimeout(programmaticScrollTimer);
    isProgrammaticScroll = false;
  };

  activityTrack.addEventListener("wheel", resumeManualScroll, { passive: true });
  activityTrack.addEventListener("pointerdown", resumeManualScroll);
  activityTrack.addEventListener("touchstart", resumeManualScroll, { passive: true });

  // Native page scrolling drives the horizontal carousel continuously.
  // No wheel interception, no timers, and no scroll locking.
  const activitiesSection = document.querySelector(".activities");
  const carouselPanel = activitiesSection?.querySelector(".section-shell");
  const stickyEnabled = () => window.matchMedia("(min-width: 701px) and (prefers-reduced-motion: no-preference)").matches;
  let scrollFrame = 0;
  let scrollLinked = false;
  const updateScrollCarousel = () => {
    scrollFrame = 0;
    if (!activitiesSection || !stickyEnabled() || !activityTrack.clientWidth) return;
    const bounds = activitiesSection.getBoundingClientRect();
    const distance = activitiesSection.offsetHeight - window.innerHeight;
    if (distance <= 0 || bounds.top > window.innerHeight || bounds.bottom < 0) return;
    const progress = Math.max(0, Math.min(1, -bounds.top / distance));
    const target = progress * (activityTrack.scrollWidth - activityTrack.clientWidth);
    scrollLinked = true;
    activityTrack.scrollLeft = target;
    scrollLinked = false;
    const index = Math.min(activitySlides.length - 1, Math.round(progress * (activitySlides.length - 1)));
    setActiveSlide(index);
  };
  const queueScrollCarousel = () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollCarousel);
  };
  window.addEventListener("scroll", queueScrollCarousel, {passive:true});
  window.addEventListener("resize", queueScrollCarousel, {passive:true});
  // Arrow buttons navigate to the corresponding position in the sticky section.
  document.querySelector("[data-carousel-previous]")?.addEventListener("click", (event) => {
    if (!stickyEnabled()) return;
    event.stopImmediatePropagation();
    const index = Math.max(0, activeSlide - 1);
    const top = activitiesSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({top: top + (activitiesSection.offsetHeight - innerHeight) * index / (activitySlides.length - 1),behavior:"smooth"});
  }, true);
  document.querySelector("[data-carousel-next]")?.addEventListener("click", (event) => {
    if (!stickyEnabled()) return;
    event.stopImmediatePropagation();
    const index = Math.min(activitySlides.length - 1, activeSlide + 1);
    const top = activitiesSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({top: top + (activitiesSection.offsetHeight - innerHeight) * index / (activitySlides.length - 1),behavior:"smooth"});
  }, true);
  queueScrollCarousel();

  window.addEventListener("resize", () => { if (!stickyEnabled()) showSlide(activeSlide); });
  showSlide(0);
}



// Visible, scroll-linked animation. Every frame tracks scroll position.
// Progress reverses naturally when scrolling back, including fast wheel jumps.
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const definitions = [
    ['.hero__copy > *', 'rise'],
    ['.about__eyebrow, .about__title, .about__description', 'tilt'],
    ['.about__artwork', 'fromRight'],
    ['.featured__eyebrow, .featured__title, .featured__intro', 'tilt'],
    ['.featured__project', 'fromLeft'],
    ['.featured__details', 'fromRight'],
    ['.tutorials__eyebrow, .tutorials__title, .tutorials__intro', 'tilt'],
    ['.tutorial-card', 'card'],
    ['.activities__eyebrow, .activities__title, .activities__intro', 'tilt'],
    ['.activity-carousel', 'card'],
    ['.upcoming__eyebrow, .upcoming h2, .upcoming__intro, .upcoming__note', 'rise'],
    ['.event-card', 'card'],
    ['.join__eyebrow, .join h2, .join__description, .join__button, .join__activities-link, .join__signature', 'rise'],
    ['.footer__eyebrow, .footer__brand, .footer__description, .footer__navigation, .footer__participation', 'rise']
  ];
  const items = [];
  const seen = new Set();
  for (const [selector, kind] of definitions) {
    document.querySelectorAll(selector).forEach(el => {
      if (seen.has(el)) return;
      seen.add(el);
      el.dataset.motion = kind;
      items.push({el,kind,current:0,target:0});
    });
  }
  if (!items.length) return;
  const clamp = (x) => Math.max(0, Math.min(1, x));
  const smooth = (x) => x*x*(3-2*x);
  const draw = (item, p) => {
    const t = smooth(p);
    const inv = 1-t;
    let x=0,y=0,r=0,scale=1;
    if (item.kind === 'tilt') { y=inv*92; r=inv*5; }
    if (item.kind === 'rise') { y=inv*70; r=inv*2; }
    if (item.kind === 'fromRight') { x=inv*125; r=inv*4; scale=1+inv*.045; }
    if (item.kind === 'fromLeft') { x=-inv*115; r=-inv*3; }
    if (item.kind === 'card') { y=inv*105; r=inv*4; scale=1-inv*.085; }
    item.el.style.opacity = String(.08 + .92*t);
    item.el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${r.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
  };
  // Set the initial state before activating animation to prevent a flash.
  const measure = () => {
    const vh = window.innerHeight || 800;
    items.forEach((item) => {
      const rect = item.el.getBoundingClientRect();
      // Animate across a wide entry window, instead of triggering once.
      const start = vh*.98;
      const finish = vh*.33;
      item.target = clamp((start-rect.top)/(start-finish));
      // Elements already far above viewport must stay visible.
      if (rect.bottom < 0) item.target = 1;
    });
  };
  measure();
  for (const item of items) {
    item.current = item.target;
    draw(item,item.current);
  }
  document.documentElement.classList.add('motion-active');
  let running = false;
  const tick = () => {
    measure();
    let moving = false;
    for (const item of items) {
      // Follow wheel/trackpad smoothly without skipping the animation.
      const delta = item.target - item.current;
      if (Math.abs(delta) > .002) {
        item.current += delta*.22;
        moving = true;
      } else item.current = item.target;
      draw(item,item.current);
    }
    if (moving) requestAnimationFrame(tick);
    else running = false;
  };
  const start = () => {
    if (!running) { running=true; requestAnimationFrame(tick); }
  };
  window.addEventListener('scroll',start,{passive:true});
  window.addEventListener('resize',start,{passive:true});
  window.addEventListener('pageshow',start);
  start();
})();

// Follow the mouse even when it is not hovering over the button.
(() => {
  const hero = document.querySelector('.hero');
  const button = document.querySelector('.hero__magnet .button--dark');
  if (!hero || !button || !window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
  let x = 0, y = 0, tx = 0, ty = 0, active = false, hovering = false;
  const animate = () => {
    if (hovering) { active = false; return; }
    x += (tx-x)*.14;
    y += (ty-y)*.14;
    button.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    if (Math.abs(tx-x)>.08 || Math.abs(ty-y)>.08) requestAnimationFrame(animate);
    else active = false;
  };
  const schedule = () => { if (!active) { active=true; requestAnimationFrame(animate); } };
  hero.addEventListener('pointermove', event => {
    if (hovering || (event.pointerType !== 'mouse' && event.pointerType !== 'pen')) return;
    const r = hero.getBoundingClientRect();
    const px = (event.clientX-r.left)/r.width - .5;
    const py = (event.clientY-r.top)/r.height - .5;
    tx = Math.max(-80,Math.min(80,px*160));
    ty = Math.max(-48,Math.min(48,py*96));
    schedule();
  }, {passive:true});
  button.addEventListener('pointerenter', () => { hovering = true; tx = x; ty = y; button.classList.add('is-hovered'); });
  button.addEventListener('pointerleave', event => {
    hovering = false; button.classList.remove('is-hovered');
    const r = hero.getBoundingClientRect();
    tx = Math.max(-80, Math.min(80, ((event.clientX-r.left)/r.width-.5)*160));
    ty = Math.max(-48, Math.min(48, ((event.clientY-r.top)/r.height-.5)*96));
    schedule();
  });
  hero.addEventListener('pointerleave', () => {hovering=false;button.classList.remove('is-hovered');tx=0;ty=0;schedule();});
  window.addEventListener('blur', () => {tx=0;ty=0;schedule();});
})();
