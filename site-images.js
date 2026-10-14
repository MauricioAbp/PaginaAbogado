(() => {
  const config = window.SUPABASE_CONFIG;
  if (!config || config.url.includes('TU-PROYECTO') || config.publishableKey.includes('TU_CLAVE')) return;
  const publicUrl = path => `${config.url}/storage/v1/object/public/${config.bucket}/${path}`;
  const useRemoteWhenAvailable = (image, path) => {
    const probe = new Image();
    probe.onload = () => { image.src = publicUrl(path); };
    probe.src = publicUrl(path);
  };
  document.querySelectorAll('img[src^="assets/"]').forEach(image => useRemoteWhenAvailable(image, image.getAttribute('src').split('?')[0]));
  document.querySelectorAll('a[href^="assets/"]').forEach(link => {
    const path = link.getAttribute('href');
    const probe = new Image();
    probe.onload = () => { link.href = publicUrl(path); };
    probe.src = publicUrl(path);
  });
  const banner = document.querySelector('.page-banner');
  if (banner) {
    const path = 'assets/justicia.jpg';
    const probe = new Image();
    probe.onload = () => { banner.style.backgroundImage = `linear-gradient(100deg,#102638ed,#102638bb),url("${publicUrl(path)}")`; };
    probe.src = publicUrl(path);
  }
})();
