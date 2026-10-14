(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('header');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const selectors = [
    '.section-head > *', '.service-grid > *', '.about-grid > *',
    '.process > *', '.process li', '.values-grid > *', '.detail-grid > *',
    '.contact-grid > *', '.footer-grid > *', '.empty-events > *'
  ];
  const elements = [...document.querySelectorAll(selectors.join(','))];
  elements.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--i', String(index % 3));
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    elements.forEach(element => element.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    elements.forEach(element => observer.observe(element));
  }

  document.querySelectorAll('a[href]:not([target]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])').forEach(link => {
    link.addEventListener('click', event => {
      if (reduceMotion || link.origin !== location.origin || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      document.body.classList.add('is-leaving');
      window.setTimeout(() => { location.href = link.href; }, 250);
    });
  });
  window.addEventListener('pageshow', () => document.body.classList.remove('is-leaving'));
})();
