<!DOCTYPE html>
<html><head>
<title>Calling Functions</title>
<script>
function buttonReport(buttonId, buttonName, buttonValue) {
// information about the id of the button
var userMessage1 = "Button id: " + buttonId + "\n";
// then about the button name
var userMessage2 = "Button name: " + buttonName + "\n";
// and the button value
var userMessage3 = "Button value: " + buttonValue;
// alert the user
alert(userMessage1 + userMessage2 + userMessage3);
}
</script>
</head>
<body>
<input type="button" id="id1" name="Left Hand Button" value="Left"
onclick ="buttonReport(this.id, this.name, this.value)"/>
<input type="button" id="id2" name="Center Button" value="Center"
onclick ="buttonReport(this.id, this.name, this.value)"/>
<input type="button" id="id3" name="Right Hand Button" value="Right"
onclick ="buttonReport(this.id, this.name, this.value)"/>
</body>
</html>
