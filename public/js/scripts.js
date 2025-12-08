// Function to show only the selected section
function showTab(tabId) {
  // Hide all sections
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });

  // Show only the selected section
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add("active");
    setTimeout(function () {
      selectedTab.scrollIntoView({ behavior: "smooth" });
    }, 0); // 0ms delay
  }
}

// Add click event to each tab
const tabsLinks = document.querySelectorAll(".tab-link");
tabsLinks.forEach(function (tabLink) {
  tabLink.addEventListener("click", function (e) {
    e.preventDefault();
    const tabId = tabLink.getAttribute("href").replace("#", "");
    showTab(tabId);
  });
});

// Show the first section (about) when page loads
document.addEventListener("DOMContentLoaded", function () {
  showTab("about");

  // Add 'active' class to the first menu option
  const firstTabLink = document.querySelector("#menu li a");
  if (firstTabLink) {
    firstTabLink.classList.add("active");
  }
});

// Get menu elements and button
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
    // Close main menu only if it's not a submenu or the "Contact" option
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
    const submenu = toggle.nextElementSibling; // Get associated submenu
    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block"; // Toggle visibility
  });
});

// Close submenu if clicking outside of it
document.addEventListener("click", (event) => {
  if (!event.target.closest("#navbar")) {
    document.querySelectorAll(".submenu").forEach((submenu) => {
      submenu.style.display = "none";
    });
    menu.classList.remove("menu-open"); // Close main menu
  }
});

// Language Translation System
let currentLanguage = "es";

// Detect browser language or load from localStorage
function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("portfolioLanguage");
  if (savedLanguage) {
    return savedLanguage;
  }
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith("en") ? "en" : "es";
}

// Apply translations
function translatePage(lang) {
  currentLanguage = lang;
  const t = translations[lang];
  if (!t) return;

  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (t[key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.value = t[key];
      } else {
        element.textContent = t[key];
      }
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update page title
  document.title = `Portfolio - ${t.title}`;

  // Save language preference
  localStorage.setItem("portfolioLanguage", lang);

  // Update language selector active state
  document.querySelectorAll(".language-option").forEach((option) => {
    if (option.dataset.lang === lang) {
      option.classList.add("active");
    } else {
      option.classList.remove("active");
    }
  });

  // Update language selector button
  const selectorButton = document.querySelector(".language-selector-button");
  const flagImg = selectorButton?.querySelector("img");
  const langText = selectorButton?.querySelector("span");
  if (flagImg) {
    if (lang === "es") {
      flagImg.src = "https://flagcdn.com/w40/co.png";
      flagImg.alt = "Colombia";
      if (langText) langText.textContent = "ES";
    } else {
      flagImg.src = "https://flagcdn.com/w40/us.png";
      flagImg.alt = "United States";
      if (langText) langText.textContent = "EN";
    }
  }
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", function () {
  currentLanguage = getInitialLanguage();
  translatePage(currentLanguage);

  // Language selector toggle
  const languageSelector = document.querySelector(".language-selector");
  const languageButton = document.querySelector(".language-selector-button");

  if (languageButton) {
    languageButton.addEventListener("click", (e) => {
      e.stopPropagation();
      languageSelector.classList.toggle("open");
    });
  }

  // Language option click handlers
  document.querySelectorAll(".language-option").forEach((option) => {
    option.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = option.dataset.lang;
      if (lang && lang !== currentLanguage) {
        translatePage(lang);
        languageSelector.classList.remove("open");
      }
    });
  });

  // Close language selector when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".language-selector")) {
      languageSelector.classList.remove("open");
    }
  });
});
