
const scriptURL = "https://script.google.com/macros/s/AKfycbxfJHJ5K-iuJf6Fk5QD8wU4FIb2XP6_eptByHMqFaLqEExG077NP0EP7WGaiePGdap1/exec";
const form = document.forms["kontak-form"];
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.btn-alert')

form.addEventListener("submit", (e) => {
e.preventDefault();
// Menghilakan Tombol Kirim
btnLoading.classList.toggle('d-none');
btnKirim.classList.toggle('d-none');
fetch(scriptURL, { method: "POST", body: new FormData(form) })
.then((response) => {
  console.log("Success!", response)
  myAlert.classList.toggle('d-none')
  btnLoading.classList.toggle('d-none')
  btnKirim.classList.toggle('d-none')
  form.reset();
})
.catch((error) => console.error("Error!", error.message));
});