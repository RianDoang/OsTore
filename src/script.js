const search = function () {
  const searchBox = document.getElementById("searchBar").value.toUpperCase();
  //   const produkList = document.querySelector(".listGame");
  const produk = document.querySelectorAll(".games");
  const pname = document.getElementsByTagName("p");

  for (var i = 0; i < pname.length; i++) {
    let match = produk[i].getElementsByTagName("p")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        produk[i].style.display = "";
      } else {
        produk[i].style.display = "none";
      }
    }
  }
};

function reset() {
  var inputField = document.getElementById("searchBar");
  inputField.value = "";
  location.reload();
}

const sortBy = document.querySelector(".sortBy");

sortBy.addEventListener("click", function () {
  sortBy.classList.toggle("dropdown");
});
