import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const root = document.documentElement;

// Get the toggle button
const toggle = document.getElementById("toggle");
// Get the user's preference from localStorage
const darkMode = localStorage.getItem("dark-mode");
// Check if the user has already chosen a theme
if (darkMode) {
  // If yes, apply it to the root element
  root.classList.add("dark-theme");
}
// Add an event listener to the toggle button
if (toggle != null){
toggle.addEventListener("click", () => {
  // Toggle the dark-theme class on the root element
  root.classList.toggle("dark-theme");
  // Store or remove the user's preference in localStorage
  if (root.classList.contains("dark-theme")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.removeItem("dark-mode");
  }
});
}
