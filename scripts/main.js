var nav = $("#nav");
var header = `<thead>
  <tr>
    <th colspan="4"></th>
    <th colspan="5">Offense</th>
    <th colspan="5">Defense</th>
  </tr>
  <tr>
<!--<th>Rank</th> -->
    <th>Team</th>
    <th>W/L</th>
    <th>Score</th>
    <th>Opp. Score</th>
    <th>1st Down</th>
    <th>Total Y</th>
    <th>Pass Y</th>
    <th>Rush Y</th>
    <th>TO</th>
    <th>1st Down</th>
    <th>Total Y</th>
    <th>Pass Y</th>
    <th>Rush Y</th>
    <th>TO</th>
  </tr>
</thead>
<tbody id="tBody">
</tbody>`;

function buildNav(n) {
  for (i = 1; i <= n; i++) {
    nav.append(
      `<li class="nav-item">
        <a id="week${i}" class="nav-link" href="#" onClick="populate(${i})">Week ${i}</a>
      </li>`)
  }
}

function populate(week) {
  $('#table').html(header);
  var tBody = $("#tBody");
  $.ajax({
    type: "POST",
    url: "scripts/file.php",
    data: {week: week},
    success: function (data) {
      tBody.append(data);
      $('#table').DataTable();
    }
  });
}

$(document).ready(function() {
  buildNav(12);
  populate(1);
});
