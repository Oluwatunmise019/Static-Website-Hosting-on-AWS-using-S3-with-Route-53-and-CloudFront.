// Get modal elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.getElementById("closeModal");

// Project data (easy to extend later)
const projects = {
  project1: {
    title: "Static Website Hosting — S3 + Route 53 & CloudFront",
    body: `
      <p>
        This project demonstrates a complete AWS static website deployment using core cloud services
        commonly used in production environments.
      </p>

      <ul>
        <li>Hosted a static website using Amazon S3</li>
        <li>Purchased and configured a custom .com domain using Route 53</li>
        <li>Integrated CloudFront for global content delivery</li>
        <li>Enabled HTTPS using AWS Certificate Manager (ACM)</li>
        <li>Improved performance, security, and reliability of content delivery</li>
      </ul>

      <p>
         Through this project, I gained hands-on experience with DNS management,
         CDN configuration, and deploying cloud infrastructure that follows real-world best practices.
      </p>
    `
  }

  // You can add more projects here later:
  // project2: { title: "", body: "" }
};

// Open modal
function openModal(projectKey) {
  const project = projects[projectKey];
  if (!project) return;

  modalTitle.innerText = project.title;
  modalBody.innerHTML = project.body;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

// Close modal
function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

// Close when clicking button
closeBtn.addEventListener("click", closeModal);

// Close when clicking outside modal card
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Smooth scroll to projects
document.getElementById("view-projects").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

