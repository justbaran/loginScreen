document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-button");

  loginButton.addEventListener("click", function () {
      // E-posta ve şifre alanlarından verileri al
      const email = document.querySelector(".email-id").value;
      const password = document.querySelector("#password").value;

      // Verileri konsola yazdır
      console.log("E-posta: " + email);
      console.log("Şifre: " + password);


      document.addEventListener("DOMContentLoaded", function () {
        const loginButton = document.getElementById("login-button");
    
        loginButton.addEventListener("click", function () {
            // E-posta ve şifre alanlarından verileri al
            const email = document.querySelector(".email-id").value;
            const password = document.querySelector("#password").value;
    
            // Verileri sunucuya gönder
            fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })
            .then((response) => response.text())
            .then((data) => {
                // Sunucudan gelen yanıtı işleyin
                console.log("Sunucu Yanıtı: " + data);
            })
            .catch((error) => {
                console.error("Hata:", error);
          });
        });
      });
    });
  });