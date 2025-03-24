const inputValue = document.querySelector("#form-input");
const inputElement = document.querySelector("#form-input");
const formElement = document.querySelector("form-input");
const jobLocals = JSON.parse(localStorage.getItem("jobs")) || [];
console.log(jobLocals);

// lắng nghe sự kiện
formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Submit");
  // b1: Lấy dữ liệu từ người dùng

  const inputValue = inputElement.value.trim();
  // console.log(inputValue);

  // b2. Validate dữ liệu đầu vào

  if (!inputValue) {
    alert("Tên công việc ko đc để trống");
    return;
  }
  // b3. Lưu trữ dữ lieuj lên localStorage

  // b3.1: xác định các thông tin của công việc
  const job = {
    id: Math.ceil(Math.random() * 1000),
    jobName: inputValue,
    status: false,
  };
  // push công việc mới nhất

  jobLocals.push(job);

  // b3.2: Lữu trữ dữ liệu
  localStorage.setItem("jobs", JSON.stringify(job));
  // console.log(job);

  // clear giả trị
  inputElement.value = "";
  // b4.
});

function renderDat() {
  const jobHtmls = jobLocals.map((job) => {
    return `
    <li
        class="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
        style="background-color: #f4f6f7"
    >
        <div>
        <input
            class="form-check-input me-2"
            type="checkbox"
            checked
        />
        <s>Cras justo odio</s>
        </div>
        <div>
        <a href="#!" class="text-info" title="Sửa công việc"
            ><i class="fas fa-pencil-alt me-3"></i>
        </a>
        <a href="#!" class="text-danger" title="Xóa công việc"
            ><i class="fas fa-trash-alt"></i>
        </a>
        </div>
    </li>`;
  });
  // convert từ mảng
  const convertArray = jobHtmls.join("");
  console.log(convertArray);
  renderDat()
  
}
