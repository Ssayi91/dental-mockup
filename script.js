
  // Toggle mobile menu
  const toggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Read More Toggle Logic
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.readmore-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const paragraph = btn.previousElementSibling;

        paragraph.classList.toggle('max-h-24');
        paragraph.classList.toggle('max-h-full');
        paragraph.classList.toggle('overflow-hidden');

        btn.textContent = paragraph.classList.contains('max-h-full') ? 'Read Less' : 'Read More';
      });
    });
  });

function sendToWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const phoneNumber = "254737853782"; // Replace with your clinic WhatsApp number (no +)

    const fullMessage = `Hello, I would like to book an appointment:\n\n` +
                        `👤 Name: ${name}\n📧 Email: ${email}\n📞 Phone: ${phone}\n📅 Date: ${date}\n🦷 Service: ${service}\n📝 Message: ${message}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
    return false; // Prevent default form submission
  }

  // index contact form
    document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const fullMessage = `Hello, my name is ${name}. I'm interested in *${service}*. Message: ${message}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const phoneNumber = "254737853782"; // Your WhatsApp number here without '+' or spaces
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  });