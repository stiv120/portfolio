// Función para mostrar solo la sección seleccionada
function showTab(tabId) {
  // Ocultamos todas las secciones
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });

  // Mostramos solo la sección seleccionada
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add("active");
    setTimeout(function () {
      selectedTab.scrollIntoView({ behavior: "smooth" });
    }, 0); // Retraso de 0ms
  }
}

// Agregamos un evento de clic a cada tab
const tabsLinks = document.querySelectorAll(".tab-link");
tabsLinks.forEach(function (tabLink) {
  tabLink.addEventListener("click", function (e) {
    e.preventDefault();
    const tabId = tabLink.getAttribute("href").replace("#", "");
    showTab(tabId);
  });
});

// Mostramos la primera sección (sobre mí) al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  showTab("about");

  // Agregamos la clase 'active' a la primera opción del menú
  const firstTabLink = document.querySelector("#menu li a");
  if (firstTabLink) {
    firstTabLink.classList.add("active");
  }
});

// Obtenémos los elementos del menú y el botón
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

menu.querySelectorAll("li > a").forEach((item) => {
  item.addEventListener("click", (e) => {
    menu
      .querySelectorAll("li > a")
      .forEach((link) => link.classList.remove("active"));

    item.classList.add("active");
    // Cerramos el menú principal solo si no es un submenú o la opción "Contacto"
    if (
      !item.closest("li").classList.contains("submenu-toggle") &&
      !item.closest("li").querySelector(".submenu")
    ) {
      menu.classList.remove("menu-open");
    }
  });
});

document.querySelectorAll(".submenu-toggle").forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const submenu = toggle.nextElementSibling; // Obtenemos el submenú asociado
    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block"; // Alternamos la visibilidad
  });
});

// Cierra el submenú si se hace clic fuera de él
document.addEventListener("click", (event) => {
  if (!event.target.closest("#navbar")) {
    document.querySelectorAll(".submenu").forEach((submenu) => {
      submenu.style.display = "none";
    });
    menu.classList.remove("menu-open"); // Cerramos el menú principal
  }
});
