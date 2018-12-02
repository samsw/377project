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

function buildRow(rank = '#', team = 'n', opp = 'n', score = 'n - n', oPassY = 'n', oRushY = 'n',
  dPassY = 'n', dRushY = 'n', offP = 'n', defP = 'n', spTms = 'n') {
  row =
  `<tr>
    <td>${rank}</td>
    <td>${team}</td>
    <td>${opp}</td>
    <td>${score}</td>
    <td>${oPassY}</td>
    <td>${oRushY}</td>
    <td>${dPassY}</td>
    <td>${dRushY}</td>
    <td>${offP}</td>
    <td>${defP}</td>
    <td>${spTms}</td>
  </tr>`;
  return row;
}

$(document).ready(function() {
  buildNav(12);
  for (i = 1; i <= 32; i++) {
    tBody.append(buildRow(i,i));
  }
  $('#table').DataTable();
});
