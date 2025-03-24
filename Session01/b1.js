document.getElementById("btn").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    if (email === "" || password === "" || confirmPassword === "") {
      alert("Thông tin không được để trống");
      return;
    }

    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;
    if (!email.match(emailCheck)) {
      alert("Eamil không hợp lệ");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords không trùng");
      return;
    }

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    const emailExists = accounts.some((account) => account.email === email);
    if (emailExists) {
      alert("Eamil đã đăng kí");
      return;
    }

    accounts.push({ email: email, password: password });
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Đăng kí thành công");

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
  });