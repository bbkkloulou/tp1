document.getElementById("indexForm").onsubmit = function(event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Veuillez remplir tous les champs.");
    event.preventDefault();
  } else {
    window.location.href = "home.html";
  }
};