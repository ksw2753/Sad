
  function checkPassword() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var status_span = document.getElementById("password_match_status");

    if (password === confirm_password) {
        status_span.innerHTML = "일치";
        status_span.style.color = "green";
    } else {
        status_span.innerHTML = "불일치";
        status_span.style.color = "red";
    }
}
