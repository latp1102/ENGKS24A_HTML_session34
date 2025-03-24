// 1. Thêm dữ liệu
localStorage.setItem("number", 10);
localStorage.setItem("userName", "NVA");
const user = {
    id: 1,
    userName: "NVA",
    age: 18,
};
// Lưu trữ dữ liệu với dạng Objecrt
localStorage.setItem("person", JSON.stringify(user));
// 2. Lấy dữ liệu
let a = localStorage.getItem(user);
console.log(a);

const userLocal = localStorage.getItem("user");

console.log(userLocal);

// convert kiểu JSON thành kiểu dữ liệu của js

const userPared = JSON.parse(userLocal);
console.log(userPared);
// 3. Xóa 1 key trên lo
localStorage.removeItem("userName");
localStorage.removeItem("number");
// 4 xóa tất cả (key đc áp dụng khi đăng xuất)
localStorage.clear();


