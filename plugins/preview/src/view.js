export function mount(container) {
  const root = document.createElement('div');
  root.className = 'preview-' + RELEASE;
  root.innerHTML = '<h2>Scene preview</h2><canvas width="360" height="210" role="img" aria-label="Lantern Garden preview"></canvas><p role="status">Preview ready</p><button type="button">Run preview</button>';
  const style = document.createElement('style');
  style.textContent = STYLE;
  root.prepend(style);
  const canvas = root.querySelector('canvas');
  const status = root.querySelector('[role="status"]');
  const run = root.querySelector('button');
  let frame = 0;
  let timer;
  function draw() {
    const pen = canvas.getContext('2d');
    pen.fillStyle = '#18243d';
    pen.fillRect(0, 0, canvas.width, canvas.height);
    pen.fillStyle = '#355a4c';
    pen.fillRect(0, 150, canvas.width, 60);
    pen.fillStyle = '#f7c86e';
    pen.beginPath();
    pen.arc(62 + Math.sin(frame / 18) * 18, 72, 18, 0, Math.PI * 2);
    pen.fill();
    pen.fillStyle = '#fff4c9';
    pen.fillText('Lantern Garden', 18, 190);
  }
  function runPreview() {
    frame = 0;
    status.textContent = 'Preview running';
    clearInterval(timer);
    timer = setInterval(() => {
      frame++;
      draw();
      if (frame === 36) { status.textContent = 'Preview ready'; clearInterval(timer); }
    }, 30);
  }
  run.addEventListener('click', runPreview);
  draw();
  container.append(root);
  return () => { clearInterval(timer); run.removeEventListener('click', runPreview); root.remove(); };
}
