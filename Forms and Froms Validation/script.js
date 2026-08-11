let nm = document.querySelector("#name");
let form = document.querySelector("#myForm");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (nm.value.length <= 2) {
    document.querySelector("#hide").style.display = "initial";
  } else {
    document.querySelector("#hide").style.display = "none";
  }
});
