document.getElementById("btn").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (email === "" || password === "") {
      message.textContent = "Email và Password không để trống";
      return;
    }

    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;
    if (!email.match(emailCheck)) {
      message.textContent = "Email không hợp lệ";
      return;
    }

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    const validUser = accounts.find(
      (account) => account.email === email && account.password === password
    );

    if (validUser) {
      alert("Đăng nhập thành công");
      window.location.href = "b1.html"; 
    } else {
      message.textContent = "Eamil , mật khẩu sai";
    }
  });