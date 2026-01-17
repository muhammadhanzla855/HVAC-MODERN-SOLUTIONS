// ==================== LOAD HEADER ====================
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    // ===== HEADER INTERACTIONS (MOBILE MENU) =====
    const mobileToggle = document.getElementById("mobileToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener("click", () => {
        const isOpen = mobileMenu.style.display === "flex";
        mobileMenu.style.display = isOpen ? "none" : "flex";
        mobileToggle.textContent = isOpen ? "☰" : "✕";
      });
    }
  });

// ==================== LOAD FOOTER ====================
fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
});

// ==================== PAGE SCRIPTS ====================
document.addEventListener("DOMContentLoaded", function () {

  // --------- FORM VALIDATION ----------
  const form = document.getElementById('getCallForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('input').forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.classList.add('invalid');
          setTimeout(() => input.classList.remove('invalid'), 500);
        }
      });
      if (valid) {
        alert("Thanks! We'll call you shortly.");
        form.reset();
      }
    });
  }

  // --------- SEE MORE / HIDE CARDS ----------
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const hideBtn = document.getElementById("hideBtn");
  const hiddenCards = document.querySelectorAll(".cards-grid .card.hidden");

  if (seeMoreBtn && hideBtn && hiddenCards.length) {
    seeMoreBtn.addEventListener("click", () => {
      hiddenCards.forEach(card => {
        card.style.display = "flex";
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
          card.style.transition = "all 0.4s ease";
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
        }, 50);
      });
      seeMoreBtn.style.display = "none";
      hideBtn.style.display = "inline-block";
    });

    hideBtn.addEventListener("click", () => {
      hiddenCards.forEach(card => {
        card.style.transition = "all 0.3s ease";
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        setTimeout(() => { card.style.display = "none"; }, 300);
      });
      hideBtn.style.display = "none";
      seeMoreBtn.style.display = "inline-block";
    });
  }
});
