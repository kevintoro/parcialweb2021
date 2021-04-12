function loadInfo() {
  fetch('https://demo6497253.mockable.io/noticias')
      .then(response => response.json())
      .then(data => loadNews(data));

  fetch('https://demo6497253.mockable.io/categoria/deporte')
      .then(response => response.json())
      .then(data => deportesContent(data));

  fetch('https://demo6497253.mockable.io/categoria/tecnologia')
      .then(response => response.json())
      .then(data => tecnologiaContent(data));
}

function loadNews(data) {
  let main_img = document.getElementById('main_img');
  main_img.src = data[0].img;


  let news_content = document.getElementById('news_content');

  for (let i = 0; i < data.length; i++) {
    const new_data = document.createElement("div");
    const title = document.createElement("h5");
    title.classList.add("text-primary");
    title.textContent = `${data[i].titulo} - ${data[i].categoria} - ${data[i].fecha}`
    new_data.appendChild(title);

    const hr = document.createElement("hr");
    new_data.appendChild(hr);

    const description = document.createElement("p");
    description.textContent = data[i].descripcion;

    const see_more = document.createElement("a");
    see_more.textContent = ". Ver Mas";
    see_more.href = "#";
    see_more.classList.add("link-success")
    if (i === 0) {
      see_more.href = "./pages/noticia.html";
    }
    description.appendChild(see_more);

    new_data.appendChild(description);

    news_content.appendChild(new_data);

    if (i === 2) {
      break;
    }
  }
}

function deportesContent(data) {
  const deportes = document.getElementById('deportes-ul');
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = data[i].titulo;
    deportes.appendChild(li);
    if (i === 2){
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