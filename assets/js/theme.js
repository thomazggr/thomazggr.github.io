(function () {
  var button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  var root = document.documentElement;
  var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    return root.dataset.theme || (systemTheme.matches ? "dark" : "light");
  }

  function updateButton() {
    var dark = currentTheme() === "dark";
    button.setAttribute("aria-pressed", String(dark));
    button.setAttribute("aria-label", dark ? "Ativar tema claro" : "Ativar tema escuro");
    button.querySelector("span").textContent = dark ? "Tema claro" : "Tema escuro";
    button.querySelector(".moon-icon").hidden = dark;
    button.querySelector(".sun-icon").hidden = !dark;
  }

  button.addEventListener("click", function () {
    var nextTheme = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (error) {}
    updateButton();
  });

  systemTheme.addEventListener("change", function () {
    if (!root.dataset.theme) updateButton();
  });

  updateButton();
})();
