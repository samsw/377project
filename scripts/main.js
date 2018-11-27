var tBody = $("#tBody");
var nav = $("#nav");

function buildNav(n) {
  for (i = 1; i <= n; i++) {
    nav.append(`
      <li class="nav-item">
        <a id="week${i}" class="nav-link" href="#">Week ${i}</a>
      </li>`)
  }
}

function buildRow(rank = '#', team = 'n', opp = 'n', opy = 'n', ory = 'n', opt = 'n',
  ort = 'n', dpy = 'n', dry = 'n', dpt = 'n') {
  row = `
  <tr>
    <td>${rank}</td>
    <td>${team}</td>
    <td>${opp}</td>
    <td>${opy}</td>
    <td>${ory}</td>
    <td>${opt}</td>
    <td>${ort}</td>
    <td>${dpy}</td>
    <td>${dry}</td>
    <td>${dpt}</td>
  </tr>`;
  return row;
}

$(document).ready(function() {
  buildNav(10);
  for (i = 1; i <= 32; i++) {
    tBody.append(buildRow(i));
  }
  $('#table').DataTable();
});
