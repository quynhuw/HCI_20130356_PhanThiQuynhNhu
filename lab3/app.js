// Select all tab elements
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

// Function to handle tab switching
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove 'active' class from all tabs and contents
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    // Add 'active' class to clicked tab and associated content
    tab.classList.add("active");
    document
      .getElementById(tab.getAttribute("data-tab"))
      .classList.add("active");
  });
});
