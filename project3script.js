// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Highlight video section when playing
  const video = document.querySelector("video");
  const videoSection = video.closest("section");

  video.addEventListener("play", () => {
    videoSection.style.backgroundColor = "#f0f8ff"; // Light blue
    videoSection.style.transition = "background-color 0.5s ease";
  });

  video.addEventListener("pause", () => {
    videoSection.style.backgroundColor = "transparent"; // Reset
  });

  // Navigation hover animation
  const navLinks = document.querySelectorAll(".nav-list li a");
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.color = "#ff6347"; // Highlight color
      link.style.transition = "color 0.3s ease";
    });

    link.addEventListener("mouseleave", () => {
      link.style.color = "black"; // Reset color
    });
  });

  // Add a dynamic feature to the song list
  const songList = document.querySelector("ol");
  const listItems = songList.querySelectorAll("li");

  listItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Mark the clicked song as "favorite"
      item.style.fontWeight = "bold";
      item.style.color = "#ff4500"; // Orange-red
      item.textContent = `${index + 1}. ${item.textContent} (Favorite!)`;

      // Reset other list items
      listItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.style.fontWeight = "normal";
          otherItem.style.color = "#333"; // Reset color
          otherItem.textContent = otherItem.textContent.replace(" (Favorite!)", "");
        }
      });
    });
  });

  // Scroll to the top functionality
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.textContent = "⬆ Scroll to Top";
  scrollToTopButton.style.position = "fixed";
  scrollToTopButton.style.bottom = "20px";
  scrollToTopButton.style.right = "20px";
  scrollToTopButton.style.padding = "10px 15px";
  scrollToTopButton.style.backgroundColor = "#333";
  scrollToTopButton.style.color = "#fff";
  scrollToTopButton.style.border = "none";
  scrollToTopButton.style.borderRadius = "5px";
  scrollToTopButton.style.cursor = "pointer";
  scrollToTopButton.style.display = "none"; // Initially hidden
  scrollToTopButton.style.zIndex = "1000";
  document.body.appendChild(scrollToTopButton);

  // Show button when scrolled down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // Scroll to top when button clicked
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
