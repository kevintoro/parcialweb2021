function loadInfo() {
  fetch('http://demo6497253.mockable.io/noticias')
      .then(response => response.json())
      .then(data => loadNews(data));
}

function loadNews(data) {
  let main_img = document.getElementById('main_img');
  main_img.src = data[0].img;


  let news_content = document.getElementById('news_content');

  for (let i = 0; i < data.length; i++) {
    const new_data = document.createElement("div");
    const title = document.createElement("h5");
    title.classList.add("text-primary");
    title.textContent = data[i].titulo;
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
    }
    description.appendChild(see_more);

    new_data.appendChild(description);

    news_content.appendChild(new_data);

    if (i === 2) {
      break;
    }
  }
}

loadInfo();