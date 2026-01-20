/* ---- Footer ---- */
.footers {
  background: #1a1a1a;
  color: white;
  padding: 40px 20px 20px;
  font-family: 'JetBrains Mono', monospace;
}

.footers .footer-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 30px;
}

/* BRAND SECTION */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.footer-logo {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 2px;
  color:#FF3B00
}

.footer-social {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.follow-text,
.chat-text {
  font-size: 14px;
  color: #888;
}

.social-icons,
.chat-icons {
  display: flex;
  gap: 15px;
}

.icon {
  width: 38px;
  height: 38px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: all 0.25s;
}

.icon:hover {
  background: #444;
}

/* CHAT / CONTACT SECTION */
.footer-chat {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.footer-logo-right {
  width: 100px;
  height: 100px;
}

/* COPYRIGHT */
.footer-copyright {
  text-align: center;
  font-size: 14px;
  color: #888;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 1400px;
  margin: 0 auto;
}

/* ================== MEDIA QUERIES ================== */
@media (max-width: 992px) {
  .footer-container {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
  .footer-brand {
    align-items: center;
  }
}

@media (max-width: 576px) {
  .footer-logo {
    font-size: 36px;
  }
}




<section class="tf-section" id="section-2">
  <div class="tf-container">

    <span class="tf-badge">Testimonials</span>
    <h2 class="tf-title">What Our Clients Say</h2>

    <div class="tf-stack" id="card-stack">

      <!-- CARD 1 -->
      <div class="tf-card tf-pos-1">
        <div class="tf-card-header">
          <span class="tf-dot"></span><span class="tf-dot"></span><span class="tf-dot"></span>
        </div>
        <div class="tf-card-content">
          <div class="tf-card-text">
            <h2>Outstanding Experience</h2>
            <p>
              Working with this team was effortless. Communication was clear,
              delivery was on time, and the final product exceeded expectations.
              Anyone can contact me to verify this experience.
            </p>
            <p><strong>Client:</strong> Sarah Mitchell</p>
            <p><strong>Phone:</strong> +1 415 555 0192</p>
          </div>
          <div class="tf-card-image">
            <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe" alt="Client">
          </div>
        </div>
      </div>

      <!-- CARD 2 -->
      <div class="tf-card tf-pos-2">
        <div class="tf-card-header">
          <span class="tf-dot"></span><span class="tf-dot"></span><span class="tf-dot"></span>
        </div>
        <div class="tf-card-content">
          <div class="tf-card-text">
            <h2>Highly Professional Team</h2>
            <p>
              Their attention to detail and professionalism really stands out.
              I’ve already recommended them to others. Feel free to call me
              for confirmation.
            </p>
            <p><strong>Client:</strong> Daniel Rodriguez</p>
            <p><strong>Phone:</strong> +1 312 555 8841</p>
          </div>
          <div class="tf-card-image">
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91" alt="Client">
          </div>
        </div>
      </div>

      <!-- CARD 3 -->
      <div class="tf-card tf-pos-3">
        <div class="tf-card-header">
          <span class="tf-dot"></span><span class="tf-dot"></span><span class="tf-dot"></span>
        </div>
        <div class="tf-card-content">
          <div class="tf-card-text">
            <h2>Reliable & Transparent</h2>
            <p>
              From start to finish, everything was transparent and well-managed.
              No hidden surprises. You can reach out to me anytime to verify.
            </p>
            <p><strong>Client:</strong> Emily Carter</p>
            <p><strong>Phone:</strong> +1 646 555 7704</p>
          </div>
          <div class="tf-card-image">
            <img src="https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9" alt="Client">
          </div>
        </div>
      </div>

      <!-- CARD 4 -->
      <div class="tf-card">
        <div class="tf-card-header">
          <span class="tf-dot"></span><span class="tf-dot"></span><span class="tf-dot"></span>
        </div>
        <div class="tf-card-content">
          <div class="tf-card-text">
            <h2>Exceeded Expectations</h2>
            <p>
              The final outcome was better than what we initially discussed.
              Their expertise really shows. I’m happy to vouch for them.
            </p>
            <p><strong>Client:</strong> Michael Thompson</p>
            <p><strong>Phone:</strong> +1 213 555 3398</p>
          </div>
          <div class="tf-card-image">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12" alt="Client">
          </div>
        </div>
      </div>

      <!-- CARD 5 -->
      <div class="tf-card">
        <div class="tf-card-header">
          <span class="tf-dot"></span><span class="tf-dot"></span><span class="tf-dot"></span>
        </div>
        <div class="tf-card-content">
          <div class="tf-card-text">
            <h2>Trustworthy & Skilled</h2>
            <p>
              I felt confident throughout the entire process.
              They delivered exactly what was promised.
              Anyone can contact me for verification.
            </p>
            <p><strong>Client:</strong> Ayesha Khan</p>
            <p><strong>Phone:</strong> +92 300 555 8124</p>
          </div>
          <div class="tf-card-image">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" alt="Client">
          </div>
        </div>
      </div>

      <!-- CARD 6 -->
      <div class="tf-card">
        <div class="tf-card-header">
          <span class="tf-dot"></span><span class="tf-dot"></span><span class="tf-dot"></span>
        </div>
        <div class="tf-card-content">
          <div class="tf-card-text">
            <h2>Exceptional Support</h2>
            <p>
              Their support didn’t end after delivery.
              They stayed involved and responsive.
              Feel free to call me to confirm this.
            </p>
            <p><strong>Client:</strong> James Walker</p>
            <p><strong>Phone:</strong> +44 7700 900231</p>
          </div>
          <div class="tf-card-image">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" alt="Client">
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


/*

<section class="get-call">
  <div class="get-call__container">

    <div class="get-call__text">
      <h2 class="get-call__title">Get a Call Back</h2>
      <p class="get-call__subtitle">
        Leave your details and our HVAC experts will contact you shortly.
      </p>
    </div>

    <form class="get-call__form" id="getCallForm">
      <div class="form-field floating-label">
        <input type="text" id="full-name" required />
        <label for="full-name">Full Name</label>
      </div>

      <div class="form-field floating-label">
        <input type="email" id="email" required />
        <label for="email">Email Address</label>
      </div>

      <div class="form-field floating-label">
        <input type="tel" id="phone" required />
        <label for="phone">Phone Number</label>
      </div>

      <!-- CTA Button -->
    <div class="header__cta">
      <button class="btn">
        Get a Call
        <span class="btn__icon">
          <img src="./assets/icons/arrow.svg" alt="Arrow" />
        </span>
      </button>
    </div>
    </form>

  </div>
</section>
/* =============================== 
   GET A CALL - NEXT LEVEL UI
================================ */

.get-call {
  padding: 5rem 0;
  font-family: 'Inter', sans-serif;
}

.get-call__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* Heading */
.get-call__title {
  font-size: 36px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
  opacity: 0;
  transform: translateY(-15px);
  animation: fadeInUp 0.6s forwards 0.1s;
}

.get-call__subtitle {
  font-size: 16px;
  color: #4b5563;
  max-width: 520px;
  opacity: 0;
  transform: translateY(-10px);
  animation: fadeInUp 0.6s forwards 0.3s;
}

/* ================= FORM ================= */

.get-call__form {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 1.5rem;

  background: #ffffff;
  padding: 2rem;
  border-radius: 18px;

  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.get-call__form:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

/* ================= FIELDS ================= */

.floating-label {
  position: relative;
  flex: 1;
}

.floating-label input {
  width: 100%;
  padding: 16px 14px 16px 14px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  font-size: 15px;
  color: #111827;
  background: #ffffff;
  transition: all 0.3s ease;
}

.floating-label label {
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  font-size: 15px;
  color: #9ca3af;
  pointer-events: none;
  transition: all 0.25s ease;
}

/* Focus / active state */
.floating-label input:focus {
  border-color: #FF3B00;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15);
}

.floating-label input:focus + label,
.floating-label input:not(:placeholder-shown) + label {
  top: -8px;
  left: 12px;
  font-size: 12px;
  color: #161313;
  background: #ffffff;
  padding: 0 4px;
}

/* Placeholder hidden */
.floating-label input::placeholder {
  color: transparent;
}

/* Invalid animation */
.floating-label input.invalid {
  animation: shake 0.35s;
  border-color: #FF3B00;
}

/* ================= CTA BUTTON ================= */

.get-call__btn {
  height: 50px;
  padding: 0 32px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(90deg, #f97316, #fb923c);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.get-call__btn::before {
  content: "";
  position: absolute;
  top: 0; left: -75%;
  width: 50%;
  height: 100%;
  background: rgba(255,255,255,0.25);
  transform: skewX(-25deg);
  transition: left 0.5s ease;
}

.get-call__btn:hover::before {
  left: 125%;
}

.get-call__btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.15);
}

.get-call__btn:active {
  transform: translateY(1px);
}

/* ================= MOBILE ================= */

@media (max-width: 768px) {
  .get-call__form {
    flex-direction: column;
    align-items: stretch;
  }

  .get-call__btn {
    width: 100%;
  }
}

/* ================= KEYFRAMES ================= */

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}


*/