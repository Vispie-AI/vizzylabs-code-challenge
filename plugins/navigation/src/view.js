export function mount(container) {
  const root = document.createElement('nav');
  root.className = 'navigation-' + RELEASE;
  root.setAttribute('aria-label', 'Project navigation');
  root.innerHTML = '<strong>Lantern Studio</strong><a href="#projects">Projects</a><a href="#assets">Assets</a><a href="#publish">Publish</a>';
  const style = document.createElement('style');
  style.textContent = STYLE;
  root.prepend(style);
  container.append(root);
  return () => root.remove();
}
