export function mount(container) {
  const root = document.createElement('div');
  root.className = 'editor-' + RELEASE;
  root.innerHTML = '<h1>Lantern Garden</h1><label>Scene notes<textarea aria-label="Scene notes" placeholder="Describe the next scene..."></textarea></label><button type="button">Workspace details</button><p class="workbench-details" aria-live="polite"></p>';
  const style = document.createElement('style');
  style.textContent = STYLE;
  root.prepend(style);
  const details = root.querySelector('button');
  const detailText = root.querySelector('.workbench-details');
  let disposed = false;
  async function showDetails() {
    detailText.textContent = 'Loading workspace details…';
    try {
      const response = await fetch('/api/workbench/state', { cache: 'no-store' });
      if (!response.ok) throw new Error('Workspace details unavailable');
      const state = await response.json();
      if (!disposed) detailText.textContent = 'Workspace release ' + state.release;
    } catch {
      if (!disposed) detailText.textContent = 'Workspace details unavailable';
    }
  }
  details.addEventListener('click', showDetails);
  container.append(root);
  return () => { disposed = true; details.removeEventListener('click', showDetails); root.remove(); };
}
