
var users = [
    { username: "slimani mira", password: "1616" },
    { username: "bouchemal nerdjess", password: "0000" },
    { username: "houda", password: "1111" }
];


var maxAttempts = 3;
var attempts = 0;


document.getElementById("login-btn").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    var foundUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (foundUser) {
        window.location.href = "home.html";
    } else {
        attempts++;
		
        if (attempts >= maxAttempts) {
            alert("Vous ne pouvez plus essayer.");
            setTimeout(function() {
                window.close();
            }, 2000); 
        } else {
            
            alert("Nom d'utilisateur ou mot de passe incorrect. Il vous reste " + (maxAttempts - attempts) + " essais.");
        }
    }
});