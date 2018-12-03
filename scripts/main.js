var tBody = $("#tBody");
var nav = $("#nav");

function buildNav(n) {
  for (i = 1; i <= n; i++) {
    nav.append(
      `<li class="nav-item">
        <a id="week${i}" class="nav-link" href="#">Week ${i}</a>
      </li>`)
  }
}

function buildRow(rank = '#', team = 'n', winLose = 'W/L', score1 = 'n',
  score2 = 'n', down1 = 'n', total1 = 'n', pass1 = 'n', rush1 = 'n', to1 = 'n',
  down2 = 'n', total2 = 'n', pass2 = 'n', rush2 = 'n', to2 = 'n') {
  row =
  `<tr>
    <td>${rank}</td>
    <td>${team}</td>
    <td>${winLose}</td>
    <td>${score1}</td>
    <td>${score2}</td>
    <td>${down1}</td>
    <td>${total1}</td>
    <td>${pass1}</td>
    <td>${rush1}</td>
    <td>${to1}</td>
    <td>${down2}</td>
    <td>${total2}</td>
    <td>${pass2}</td>
    <td>${rush2}</td>
    <td>${to2}</td>
  </tr>`;
   tBody.append(row);
}

function populate(week) {
  $.ajax({
      url: 'file.php',
      type: 'POST',
      data: { date : week },
      dataType:"json",
      success: function(data) {
        // get data and build table with buildRow function
      }
    });
}

$(document).ready(function() {
  buildNav(17);
  populate(1); // Start Page at Week 1
  $('#table').DataTable();
});
