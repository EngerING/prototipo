// Noticias falsas de ejemplo
const news = [
  { title: "Nuevo tráiler de GTA VI", date: "2025-05-10", content: "Rockstar Games lanza nuevo avance." },
  { title: "Se anuncia Call of Duty 2025", date: "2025-05-12", content: "Activision sorprende con nuevo título." },
  { title: "Nintendo Direct revela sorpresas", date: "2025-05-15", content: "Nuevo Mario y Zelda anunciados." },
  { title: "Steam Summer Sale comienza", date: "2025-06-01", content: "Ofertas increíbles en juegos top." }
];

// Simular login simple (sin backend)
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const errorMsg = document.getElementById("login-error");

  if (user === "admin" && pass === "1234") {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    showNews(news);
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos.";
  }
}

// Mostrar noticias
function showNews(newsArray) {
  const container = document.getElementById("news-container");
  container.innerHTML = "";
  newsArray.forEach(item => {
    const div = document.createElement("div");
    div.className = "news-item";
    div.innerHTML = `<h3>${item.title}</h3><small>${item.date}</small><p>${item.content}</p>`;
    container.appendChild(div);
  });
}

// Filtrar por fecha
function filterByDate() {
  const selectedDate = document.getElementById("filter-date").value;
  const filtered = news.filter(n => n.date === selectedDate);
  showNews(filtered.length > 0 ? filtered : [{ title: "Sin noticias", date: selectedDate, content: "No hay noticias para esta fecha." }]);
}
// Agregar nueva noticia desde formulario
function addNews(event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const date = document.getElementById("date").value;
  const content = document.getElementById("content").value.trim();
  const error = document.getElementById("form-error");

  // Validación simple
  if (!title || !date || !content) {
    error.textContent = "Por favor, completa todos los campos.";
    return;
  }

  if (title.length < 5 || content.length < 10) {
    error.textContent = "El título debe tener al menos 5 caracteres y la descripción 10.";
    return;
  }

  // Limpia el error
  error.textContent = "";

  // Crear nueva noticia
  const newItem = {
    title,
    date,
    content
  };

  news.push(newItem); // Agrega a la lista general
  showNews(news);     // Refresca la lista

  // Limpia el formulario
  document.getElementById("news-form").reset();
}
