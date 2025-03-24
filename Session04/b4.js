document.addEventListener("DOMContentLoaded", function () {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
      renderTask(task);
    });
  });

  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Vui lòng nhập nhiệm vụ!");
      return;
    }

    renderTask(taskText);
    saveTask(taskText);

    taskInput.value = "";
  }

  function renderTask(taskText) {
    const li = document.createElement("li");
    li.innerText = taskText;

    const delBtn = document.createElement("button");
    delBtn.innerText = "Xóa";
    delBtn.className = "delete-btn";

    delBtn.onclick = function () {
      if (confirm("Bạn có chắc muốn xóa nhiệm vụ này không")) {
        li.remove();
        deleteTask(taskText);
      }
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
  }

  function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function deleteTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }