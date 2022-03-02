<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="css/style.css">

</head>
<body>

	<h2>SHS GPA Calculator</h2>
	<p>Lorem ipsum dolor sit ametiusmod</p>


<form>
<table id = "gpaform">
  <tbody>


  <tr id = "head">
    <th>Grade</th>
    <th># of Credits</th>
    <th>Weighted?</th>
    <th>Course Name (Optional)</th>
  </tr>
  <tr id = "formrow">
<td><select id="g0" name="Grade">
  <option value="A">A</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B">B</option>
  <option value="B-">B-</option>
  <option value="C+">C+</option>
  <option value="C">C</option>
  <option value="C-">C-</option>
  <option value="D+">D+</option>
  <option value="D">D</option>
  <option value="D-">D-</option>
  <option value="F">F</option>
</select></td>
<td><input type="number" step="0.5" id="c0" /></td>
<td><input type="checkbox" id="w0" /></td>
<td><input type="text" id = "n0"	 /></td>
  </tr>
  </tbody>
</table>

</form>
<button type="button" name="button" onclick="addRow()">ADD ROW</button>
<script src="js/scripts.js"></script>

</body>

</html>
