if (window.lucide) {
  window.lucide.createIcons();
}

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.innerText);
      const label = button.querySelector("span");
      if (!label) return;
      const original = label.textContent;
      label.textContent = "Copied";
      window.setTimeout(() => {
        label.textContent = original;
      }, 1400);
    } catch {
      target.focus();
    }
  });
});
