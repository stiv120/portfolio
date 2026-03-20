// Keep the navbar highlight in sync when using showTab() from anywhere (e.g. "View My Work").
function updateActiveNavTab(tabId) {
  const menu = document.getElementById("menu");
  if (!menu) return;
  menu.querySelectorAll("li > a").forEach(function (link) {
    link.classList.remove("active");
  });
  const tabLink = menu.querySelector('a[data-nav-tab="' + tabId + '"]');
  if (tabLink) {
    tabLink.classList.add("active");
  }
}

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
    updateActiveNavTab(tabId);
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

// Show the first section (about) when page loads (showTab also marks the nav item active)
document.addEventListener("DOMContentLoaded", function () {
  showTab("about");
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
let currentLanguage = "en";

// Detect browser language or load from localStorage
function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("portfolioLanguage");
  if (savedLanguage) {
    return savedLanguage;
  }
  const browserLang = navigator.language || navigator.userLanguage;
  // Default to English, or use browser language if it's Spanish
  if (browserLang.startsWith("es")) {
    return "es";
  }
  // Default to English for all other languages
  return "en";
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

  // After the DOM is translated, convert technology lists into chips.
  renderTechChips();
}

// Render technology label lists as visual chips.
function renderTechChips() {
  document.querySelectorAll("[data-tech-chips]").forEach((el) => {
    const raw = (el.textContent || "").trim();
    if (!raw) return;

    // Split by commas only when we are not inside parentheses.
    // This keeps tokens like "AWS (Lambda, SQS, SNS)" as a single chip.
    const parts = [];
    let buf = "";
    let depth = 0;
    for (const ch of raw) {
      if (ch === "(") depth += 1;
      if (ch === ")") depth = Math.max(0, depth - 1);

      if (ch === "," && depth === 0) {
        const item = buf.trim().replace(/\.$/, "");
        if (item) parts.push(item);
        buf = "";
        continue;
      }

      buf += ch;
    }
    const last = buf.trim().replace(/\.$/, "");
    if (last) parts.push(last);

    el.innerHTML = "";
    parts.forEach((part) => {
      const chip = document.createElement("span");
      chip.className = "tech-chip";
      chip.textContent = part;
      el.appendChild(chip);
    });
  });
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
