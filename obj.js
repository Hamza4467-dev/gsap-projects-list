import * as lucide from "lucide"

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons()

  // Theme toggle functionality
  const themeToggleBtn = document.getElementById("theme-toggle-btn")

  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.body.classList.add("dark-theme")
  }

  // Toggle theme when button is clicked
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    // Save theme preference
    const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light"
    localStorage.setItem("theme", currentTheme)
  })

  // Tab switching functionality
  const tabs = document.querySelectorAll(".tab")
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Job card selection functionality
  const jobCards = document.querySelectorAll(".job-card")
  jobCards.forEach((card) => {
    card.addEventListener("click", function () {
      jobCards.forEach((c) => c.classList.remove("selected"))
      this.classList.add("selected")
    })
  })
})

