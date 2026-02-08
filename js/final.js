const text = `
Kalau kamu sampai di sini,
artinya kamu sudah membaca semuanya.

Aku cuma mau bilang,
terima kasih sudah ada,
dengan caramu sendiri.

— dari seseorang
yang mungkin
tidak selalu terlihat.
`;

const typingEl = document.getElementById("typing");
const photo = document.querySelector(".final-photo");
const btn = document.getElementById("nextBtn");
const music = document.getElementById("bgMusic");

let i = 0;
const speed = 45;

/* ===== TYPE EFFECT ===== */
function typeText() {
  if (i < text.length) {
    typingEl.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    setTimeout(typeText, speed);
  } else {
    showPhoto();
  }
}

/* ===== SHOW PHOTO ===== */
function showPhoto() {
  photo.classList.remove("hidden");
  requestAnimationFrame(() => {
    photo.classList.add("show");
  });

  setTimeout(showButton, 1200);
}

/* ===== SHOW BUTTON ===== */
function showButton() {
  btn.classList.remove("hidden");
  requestAnimationFrame(() => {
    btn.classList.add("show");
  });
}

/* ===== BUTTON ACTION ===== */
btn.addEventListener("click", () => {
  window.location.href = "index.html"; 
  // ganti ke halaman mana pun yang kamu mau
});

/* ===== MUSIC (tap once) ===== */
document.body.addEventListener("click", () => {
  music.volume = 0.5;
  music.play().catch(()=>{});
}, { once:true });

/* ===== START ===== */
window.addEventListener("load", typeText);
