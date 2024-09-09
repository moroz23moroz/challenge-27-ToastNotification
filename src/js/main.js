window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const toasts = document.getElementById("toasts");

  button.addEventListener("click", () => {
    const sphere = document.createElement("div");
    sphere.classList.add("sphere");

    sphere.style.cssText = `
            width: 0;
            height: 0;
            background-color: white;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            transition: all 0.5s ease-out;
        `;

    toasts.appendChild(sphere);

    // Trigger reflow
    sphere.offsetWidth;

    // Animate the sphere
    sphere.style.width = "200px";
    sphere.style.height = "200px";
    sphere.style.transform = "translate(-50%, -50%) scale(1)";

    // Set sphere properties
    sphere.style.backgroundColor = "rebeccapurple";
    sphere.style.width = "40px";
    sphere.style.height = "40px";

    // Position the sphere inside the button
    const buttonRect = button.getBoundingClientRect();
    sphere.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
    sphere.style.left = `${buttonRect.left + buttonRect.width / 2}px`;

    // Animate the sphere
    sphere.style.transform = "translate(-50%, -50%) scale(1)";

    // Remove the sphere after animation
    setTimeout(() => {
      // Remove the sphere
      sphere.remove();

      // Create ripple effect
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      button.appendChild(ripple);

      // Set ripple position
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

      // Remove ripple after animation
      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    }, 500);
  });
});
