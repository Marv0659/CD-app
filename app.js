document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const cdArtist = e.target.cdArtist.value.trim();
  const cdTitle = e.target.cdTitle.value.trim();
  const year = e.target.year.value.trim();

  // if (!cdArtist || cdTitle || year) {
  //   alert("Please fill in all fields");
  //   return;
  // }

  const newRow = document.createElement("tr");
  const template = `
    <td>${cdTitle}</td>
    <td>${cdArtist}</td>
    <td>${year}</td>
    <td><button class="delete">X</button></td>
    `;

  newRow.innerHTML = template;

  document.getElementById("cdTableBody").appendChild(newRow);

  e.target.reset();

  newRow.querySelector(".delete").addEventListener("click", () => {
    newRow.remove();
  });
});
