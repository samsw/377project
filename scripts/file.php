<?php
  $week = $_POST['week'];
  if (isset($week)) {
    $connection = mysqli_connect('localhost', 'root', 'mysql', 'mydb');

    $result = mysqli_query($connection, "SELECT *, (((Score+1)/(Score_Opp+1)) +
              ((Off_1st_Downs+0.1)/(Def_1st_Downs+0.1)) + ((Off_Tot_Yds+1)/(Def_Pass_Yds+Def_Run_Yds+1)))
              AS Power_Rank FROM nfldata WHERE `Week` = $week") or die(mysql_error());

    $rank = 1;
    while($row = mysqli_fetch_array($result)){
      echo "<tr>
        <td>" . $row[15] . "</td>
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
