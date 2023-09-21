document.addEventListener("DOMContentLoaded", function () {
    // Parola alanını seçin
    var passwordInput = document.getElementById("password");

    // Login düğmesini seçin
    var loginButton = document.getElementById("login-button");

    // Login düğmesine tıklama olayını dinleyin
    loginButton.addEventListener("click", function () {
        // Parola alanındaki değeri alın
        var password = passwordInput.value;

        // Şifrenin sadece rakamlardan oluşup oluşmadığını kontrol edin
        var passwordRegex = /^[0-9]+$/;
        if (!passwordRegex.test(password)) {
            // Şifre geçerli bir rakam değilse kullanıcıya hata mesajı gösterin
            alert("Şifreniz sadece numara içermelidir.");
            // Hata mesajını gösterdikten sonra parola alanını temizleyin
            passwordInput.value = "";
        }
    });
});