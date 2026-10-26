// Substitua a URL abaixo pelo seu link oficial de checkout (ex.: Kiwify).
const CHECKOUT_URL = "";
const purchase = document.getElementById("purchase");
const note = document.getElementById("purchase-note");
document.getElementById("year").textContent = new Date().getFullYear();
if (CHECKOUT_URL && /^https:\/\//i.test(CHECKOUT_URL)) {
  purchase.href = CHECKOUT_URL;
  purchase.removeAttribute("aria-label");
  note.hidden = true;
} else {
  purchase.addEventListener("click", event => {
    event.preventDefault();
    note.textContent = "O link de compra ainda não foi configurado.";
  });
}
