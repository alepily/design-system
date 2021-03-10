function Passfunction() {
  var x = document.getElementById("input-pw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
