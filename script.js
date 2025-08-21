// Replace this with your Render URL after you deploy the backend, e.g.
// const BACKEND_URL = "https://sree-sastha-backend.onrender.com";
const BACKEND_URL = "https://sree-sastha-backend.onrender.com";

const form = document.getElementById('contactForm');
const note = document.getElementById('note');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  note.textContent = "Sending…";
  try {
    const res = await fetch(`${BACKEND_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const out = await res.json();
    if(!res.ok || !out.ok) throw new Error(out.error || "Failed");
    note.textContent = "Thanks! Your message was sent.";
    form.reset();
  } catch (err) {
    console.error(err);
    note.textContent = "Could not send. Please try again later.";
  }
});
