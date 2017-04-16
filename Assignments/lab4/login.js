$(document).ready(function() {
    $("#loginForm").submit(function(e) {
        var inputs = $('form').find('input');
        var admin = 0;
        var undergrad = 0;
        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].name == 'username') {
                if (/^U.*$/.test($(inputs[i]).val())) {
                    undergrad++;
                } else if ($(inputs[i]).val() == 'admin') {
                    admin++;
                }
                localStorage.setItem('username', $(inputs[i]).val())
            }
            if (inputs[i].name == 'password') {
                if ($(inputs[i]).val() == 'admin') {
                    admin++;
                }
            }
        }
        if (admin == 2) {
            localStorage.setItem('ID', 'admin');
            window.location.href = 'booksLibrary.html';
        } else if (undergrad == 1) {
            localStorage.setItem('ID', 'undergrad');
            window.location.href = "booksLibrary.html";
        } else {
            alert("Login details are incorrect. Try again!");
        }
        return false;
    });
});
