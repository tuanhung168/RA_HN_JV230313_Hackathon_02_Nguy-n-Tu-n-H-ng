document.querySelector(".btn-primary").addEventListener("click", function () {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const hometown = document.getElementById("hometown").value;
  const gioitinhnam = document.getElementById("gioitinhnam").checked
    ? "Nam"
    : "Nữ";
  const table = document.getElementsByTagName("table")[0];
  const newRow = table.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);
  const cell7 = newRow.insertCell(6);
  cell1.innerHTML = table.rows.length - 1;
  cell2.innerHTML = fullname;
  cell3.innerHTML = email;
  cell4.innerHTML = tel;
  cell5.innerHTML = hometown;
  cell6.innerHTML = gioitinhnam;
  cell7.innerHTML =
    '<button type="button" class="btn btn-success">Edit</button> <button type="button" class="btn btn-danger">Delete</button>';


  document.getElementById("fullname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("tel").value = "";
  document.getElementById("hometown").value = "";


  alert("Thêm học viên thành công!");
});

document.querySelectorAll(".btn-success").forEach(function (button) {
  button.addEventListener("click", function () {
    const row = this.parentNode.parentNode;
    const cells = row.getElementsByTagName("td");
    document.getElementById("fullname").value = cells[1].innerHTML;
    document.getElementById("email").value = cells[2].innerHTML;
    document.getElementById("tel").value = cells[3].innerHTML;
    document.getElementById("hometown").value = cells[4].innerHTML;
    if (cells[5].innerHTML === "Nam") {
      document.getElementById("gioitinhnam").checked = true;
    } else {
      document.getElementById("gioitinhnu").checked = true;
    }
  });
});

document.querySelectorAll(".btn-danger").forEach(function (button) {
  button.addEventListener("click", function () {
    const row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
    alert("Xóa học viên thành công!");
  });
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const keyword = this.querySelector("input").value;
  const rows = document.getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let found = false;
    for (let j = 1; j < cells.length - 1; j++) {
      if (cells[j].innerHTML.includes(keyword)) {
        found = true;
        break;
      }
    }
    if (found) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});
