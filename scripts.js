document.getElementById("butreset").onclick = function() {
    document.getElementById("boxlogin").value = "";
    document.getElementById("boxpassword").value = "";
}

document.getElementById("butregistration").onclick = function() {
    let login = document.getElementById("boxlogin").value;
    let password = document.getElementById("boxpassword").value;
    if (login !== "" && password !== "") {
        if (password.length > 8) {
            if (/^[A-Za-z0-9_]+$/.test(login))
                document.location.href = "Главное меню.html";
            else
                alert("Логин содержит недопустимые символы");
        }
        else
            alert("Пароль содержит менее 8 символов");
    }
    else
        alert("Не все поля заполнены");
}