function loadInfo() {
  fetch('https://demo6497253.mockable.io/noticias/1')
      .then(response => response.json())
      .then(data => loadNew(data));

  fetch('https://demo6497253.mockable.io/categoria/deporte')
      .then(response => response.json())
      .then(data => deportesContent(data));

  fetch('https://demo6497253.mockable.io/categoria/tecnologia')
      .then(response => response.json())
      .then(data => tecnologiaContent(data));
}

function loadNew(data) {
  const img = document.getElementById('main_img');
  img.src = data.img;

  const title = document.getElementById('main-title');
  title.textContent = `${data.titulo} - ${data.categoria} - ${data.fecha}`

  const content = document.getElementById('content');
  const description = document.createElement("p");
  description.textContent = data.descripcion;

  const detalle = document.createElement("div");
  detalle.textContent = data.detalle;

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(detalle);
}

function deportesContent(data) {
  const deportes = document.getElementById('deportes-ul');
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = data[i].titulo;
    deportes.appendChild(li);
    if (i === 2) {
      break;
    }
  }
}

function tecnologiaContent(data) {
  const tecnologia = document.getElementById('tecnologia-ul');
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = data[i].titulo;
    tecnologia.appendChild(li);
  }
}

loadInfo();