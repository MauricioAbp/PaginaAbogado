// Datos de contacto: actualizar aquí y en los enlaces HTML si cambian.
const WHATSAPP_NUMBER = '51923324528';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  menuButton.textContent = '☰';
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  menuButton.textContent = open ? '×' : '☰';
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
window.addEventListener('resize', () => { if (window.innerWidth > 1100) closeMenu(); });const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = ['name', 'email', 'subject', 'message'];
  const values = Object.fromEntries(fields.map(key => [key, form.elements[key].value.trim()]));
  const status = document.querySelector('#form-status');
  status.hidden = false;
  if (fields.some(key => !values[key])) { status.textContent = 'Completa todos los campos.'; return; }
  const body = 'Nombre: ' + values.name + '\nEmail: ' + values.email + '\n\n' + values.message;
  const url = 'mailto:estudiobardalesabogados@hotmail.com?subject=' + encodeURIComponent(values.subject) + '&body=' + encodeURIComponent(body);
  window.location.href = url;
  status.textContent = 'El envío se completa en tu aplicación de correo. Si no se abrió, usa este enlace: ';
  const link = document.createElement('a');
  link.href = url;
  link.textContent = 'Abrir correo';
  link.className = 'text-link';
  status.append(link);
});

// Carga imágenes publicadas desde el panel; conserva las locales como respaldo.
(() => {
  const configScript = document.createElement('script');
  configScript.src = 'supabase-config.js';
  configScript.onload = () => {
    const imagesScript = document.createElement('script');
    imagesScript.src = 'site-images.js';
    document.head.append(imagesScript);
  };
  document.head.append(configScript);
})();

// Carga el módulo visual compartido en todas las páginas públicas.
const motionStyles = document.createElement('link');
motionStyles.rel = 'stylesheet';
motionStyles.href = 'animations.css';
document.head.append(motionStyles);
const motionScript = document.createElement('script');
motionScript.src = 'animations.js';
document.head.append(motionScript);
