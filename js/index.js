const PASSWORD = "1002";

const lock = document.getElementById("lock");
const countdown = document.getElementById("countdown");
const timerEl = document.getElementById("timer");
const lockMsg = document.getElementById("lockMsg");
const successText = document.querySelector(".success");

document.getElementById("unlockBtn").onclick = () => {
  const val = document.getElementById("password").value;

  if (val === PASSWORD) {
    lock.classList.add("hidden");
    countdown.classList.remove("hidden");

    timerEl.textContent = "• • •";

    setTimeout(() => {
      successText.style.opacity = "1";
    }, 500);

    setTimeout(() => {
      window.location.href = "gift.html";
    }, 1500);

  } else {
    lockMsg.textContent = "Kode salah";
  }
};
