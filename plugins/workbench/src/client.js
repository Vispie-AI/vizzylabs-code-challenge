exports.name = 'workbench';

exports.apply = function apply(ctx) {
  var release = WORKBENCH_RELEASE;
  var root = document.createElement('section');
  var nav = document.createElement('nav');
  var body = document.createElement('div');
  var studio = document.createElement('main');
  var preview = document.createElement('aside');
  var title = document.createElement('h1');
  var notes = document.createElement('textarea');
  var status = document.createElement('p');
  var run = document.createElement('button');
  var details = document.createElement('button');
  var detailText = document.createElement('p');
  var canvas = document.createElement('canvas');
  var frame = 0;
  var timer;

  root.id = 'workbench';
  root.dataset.release = release;
  root.className = 'workbench workbench-' + release;
  root.setAttribute('aria-label', 'Workbench creation studio');

  nav.className = 'workbench-nav';
  nav.setAttribute('aria-label', 'Project navigation');
  nav.innerHTML = '<strong>Lantern Studio</strong><a href="#projects">Projects</a><a href="#assets">Assets</a><a href="#publish">Publish</a>';

  body.className = 'workbench-body';
  studio.className = 'workbench-studio';
  preview.className = 'workbench-preview';
  title.textContent = 'Lantern Garden';
  notes.setAttribute('aria-label', 'Scene notes');
  notes.placeholder = 'Describe the next scene...';
  status.className = 'workbench-status';
  status.setAttribute('role', 'status');
  status.textContent = 'Preview ready';
  run.type = 'button';
  run.textContent = 'Run preview';
  details.type = 'button';
  details.textContent = 'Workspace details';
  detailText.className = 'workbench-details';
  detailText.setAttribute('aria-live', 'polite');
  canvas.width = 360;
  canvas.height = 210;
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', 'Lantern Garden preview');

  studio.append(title, notes, status, run, details, detailText);
  preview.append(canvas);
  body.append(studio, preview);
  root.append(nav, body);

  function draw() {
    var pen = canvas.getContext('2d');
    var x = 42 + Math.sin(frame / 18) * 18;
    pen.fillStyle = '#18243d';
    pen.fillRect(0, 0, canvas.width, canvas.height);
    pen.fillStyle = '#355a4c';
    pen.fillRect(0, 150, canvas.width, 60);
    pen.fillStyle = '#f7c86e';
    pen.beginPath();
    pen.arc(x, 72, 18, 0, Math.PI * 2);
    pen.fill();
    pen.fillStyle = '#fff4c9';
    pen.fillText('Lantern Garden', 18, 190);
  }

  function runPreview() {
    frame = 0;
    status.textContent = 'Preview running';
    clearInterval(timer);
    timer = setInterval(function () {
      frame += 1;
      draw();
      if (frame === 36) {
        status.textContent = 'Preview ready';
        clearInterval(timer);
      }
    }, 30);
  }

  function showDetails() {
    detailText.textContent = 'Loading workspace details…';
    fetch('/api/workbench/state')
      .then(function (response) {
        if (!response.ok) throw new Error('Workspace details unavailable');
        return response.json();
      })
      .then(function (state) { detailText.textContent = 'Workspace release ' + state.release; })
      .catch(function () { detailText.textContent = 'Workspace details unavailable'; });
  }

  run.addEventListener('click', runPreview);
  details.addEventListener('click', showDetails);
  draw();

  ctx.effect(function () {
    document.body.appendChild(root);
    return function () {
      clearInterval(timer);
      run.removeEventListener('click', runPreview);
      details.removeEventListener('click', showDetails);
      root.remove();
    };
  });
};
