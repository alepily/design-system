function toastFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("toast3");

  // Add the "show" class to DIV
  x.className = "appear";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("appear", ""); }, 5000);
}
