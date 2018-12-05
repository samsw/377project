<?php
  $week = $_POST['week'];
  if (isset($week)) {
    $connection = mysqli_connect('localhost', 'root', 'mysql', 'mydb');

    $result = mysqli_query($connection, "SELECT * FROM `nfldata` WHERE `Week` = $week") or die(mysql_error());

    while($row = mysqli_fetch_array($result)){
      echo "<tr>
        <td>" . $row[0] . "</td>
        <td>" . $row[2] . "</td>
        <td>" . $row[3] . "</td>
        <td>" . $row[4] . "</td>
        <td>" . $row[5] . "</td>
        <td>" . $row[6] . "</td>
        <td>" . $row[7] . "</td>
        <td>" . $row[8] . "</td>
        <td>" . $row[9] . "</td>
        <td>" . $row[10] . "</td>
        <td>" . $row[11] . "</td>
        <td>" . $row[12] . "</td>
        <td>" . $row[13] . "</td>
        <td>" . $row[14] . "</td>
      </tr>";
    }

    mysqli_close($connection);
  }
?>
