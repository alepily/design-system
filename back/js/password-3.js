function Passfunction3() {
  var x = document.getElementById("input-pw3");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
