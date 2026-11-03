(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('section-nav');
  const desktop = window.matchMedia('(min-width: 1024px)');

  function setMenuOpen(open, restoreFocus = false) {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('is-open', open);
    if (restoreFocus) menuToggle.focus();
  }

  menuToggle.hidden = false;
  header.classList.add('has-menu');

  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false, true);
    }
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) setMenuOpen(false);
  });

  desktop.addEventListener('change', () => {
    setMenuOpen(false);
  });

  document.querySelectorAll('.waitlist-form').forEach((form) => {
    const email = form.querySelector('input[type="email"]');
    const button = form.querySelector('button[type="submit"]');
    const status = form.parentElement.querySelector('.waitlist-status');
    const buttonLabel = button.textContent;
    let submitting = false;

    // Keep native validation and submission as the no-JavaScript fallback.
    form.noValidate = true;

    function showStatus(message, state) {
      status.textContent = message;
      status.dataset.state = state;
    }

    email.addEventListener('input', () => {
      email.removeAttribute('aria-invalid');
      if (status.dataset.state === 'error') {
        status.textContent = '';
        delete status.dataset.state;
      }
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (submitting) return;

      email.value = email.value.trim();
      if (!email.validity.valid) {
        email.setAttribute('aria-invalid', 'true');
        showStatus('Please enter a valid email address.', 'error');
        email.focus();
        return;
      }

      email.removeAttribute('aria-invalid');
      submitting = true;
      button.disabled = true;
      button.textContent = 'Joining...';
      email.readOnly = true;
      form.setAttribute('aria-busy', 'true');
      showStatus('Sending your email...', 'sending');

      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 15000);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { Accept: 'application/json' },
          signal: controller.signal
        });

        if (!response.ok) {
          let message = 'Something went wrong. Please try again.';
          if (response.headers.get('content-type')?.includes('application/json')) {
            const body = await response.json();
            if (body && Array.isArray(body.errors)) {
              const error = body.errors.find((entry) => entry && typeof entry.message === 'string' && entry.message.trim());
              if (error) message = error.message;
            }
          }
          showStatus(message, 'error');
          return;
        }

        form.reset();
        form.hidden = true;
        showStatus("You're on the list. We'll be in touch.", 'success');
        status.tabIndex = -1;
        status.focus({ preventScroll: true });
      } catch (error) {
        showStatus(
          error.name === 'AbortError'
            ? 'That took too long. Please try again.'
            : "Couldn't join the waitlist. Check your connection and try again.",
          'error'
        );
      } finally {
        window.clearTimeout(timeout);
        submitting = false;
        button.disabled = false;
        button.textContent = buttonLabel;
        email.readOnly = false;
        form.removeAttribute('aria-busy');
      }
    });
  });

  // Hero: the name pill under the mascot says what Peach is doing, and the
  // mascot works (in CSS). Motion runs only while the visitor allows it and
  // has not paused it, and rests while the hero is off screen or the page is
  // hidden.
  const hero = document.querySelector('.hero');
  const doing = hero && hero.querySelector('[data-status]');
  const motionToggle = hero && hero.querySelector('[data-motion-toggle]');
  if (!doing || !motionToggle) return;

  // Only what beta users can do today (see "Coming soon" in the README).
  const activities = [
    'is working',
    'is noting that down',
    'is reading your document',
    'is setting a reminder',
    'is running your routine',
    'is researching'
  ];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  let onScreen = true;
  let step = 0;
  let timer = 0;

  function showStep(next, animate) {
    step = next;
    if (!animate) {
      doing.textContent = activities[next];
      return;
    }
    doing.classList.add('is-changing');
    window.setTimeout(() => {
      doing.textContent = activities[next];
      doing.classList.remove('is-changing');
    }, 250);
  }

  function update() {
    const allowed = !reducedMotion.matches && !paused;
    document.documentElement.classList.toggle('motion', allowed);
    hero.classList.toggle('is-offscreen', !onScreen || document.hidden);
    motionToggle.hidden = reducedMotion.matches;
    const rotate = allowed && onScreen && !document.hidden;
    if (rotate && !timer) {
      timer = window.setInterval(() => showStep((step + 1) % activities.length, true), 2600);
    } else if (!rotate && timer) {
      window.clearInterval(timer);
      timer = 0;
    }
  }

  motionToggle.addEventListener('click', () => {
    paused = !paused;
    motionToggle.classList.toggle('is-paused', paused);
    motionToggle.setAttribute('aria-label', paused ? 'Play animation' : 'Pause animation');
    update();
  });

  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) showStep(0, false);
    update();
  });

  new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    update();
  }).observe(hero);

  document.addEventListener('visibilitychange', update);

  update();
})();
