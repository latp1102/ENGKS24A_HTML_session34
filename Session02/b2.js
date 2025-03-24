let courses = JSON.parse(localStorage.getItem('tasks')) || [
    {
      id: 1,
      content: 'Learn Javascript Session 01',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Anh Bách',
    },
    {
      id: 2,
      content: 'Learn Javascript Session 2',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Lâm',
    },
    {
      id: 3,
      content: 'Learn CSS Session 1',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Hiếu Ci ớt ớt',
    },
  ];
  
  function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(courses));
  }
  
  function renderTasks() {
    const table = document.getElementById('taskTable');
    table.innerHTML = '';
    courses.forEach((task, index) => {
      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${task.content}</td>
          <td>${task.dueDate}</td>
          <td>${task.status}</td>
          <td>${task.assignedTo}</td>
          <td>
            <button class="action-btn" onclick="editTask(${task.id})">Sửa</button>
            <button class="action-btn" onclick="deleteTask(${task.id})">Xóa</button>
          </td>
        </tr>
      `;
      table.innerHTML += row;
    });
  }
  renderTasks();
  
  function addTask() {
    const content = document.getElementById('content').value;
    const dueDate = document.getElementById('dueDate').value;
    const status = document.getElementById('status').value;
    const assignedTo = document.getElementById('assignedTo').value;
    
    if (!content || !dueDate || !assignedTo) {
      alert('Thông tin không được để trống');
      return;
    }
  
    const newTask = {
      id: Date.now(),
      content,
      dueDate,
      status,
      assignedTo,
    };
  
    courses.push(newTask);
    saveToLocalStorage();
    renderTasks();
    
    document.getElementById('content').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('status').value = 'Pending';
    document.getElementById('assignedTo').value = '';
  }
  
  function deleteTask(id) {
    if (confirm('Bạn chắc chắn muốn xóa không')) {
      courses = courses.filter(task => task.id !== id);
      saveToLocalStorage();
      renderTasks();
    }
  }
  
  function editTask(id) {
    const task = courses.find(task => task.id === id);
    const content = prompt('Edit Content:', task.content);
    const dueDate = prompt('Edit Due Date:', task.dueDate);
    const status = prompt('Edit Status (Pending/Completed):', task.status);
    const assignedTo = prompt('Edit Assigned To:', task.assignedTo);
  
    if (content && dueDate && status && assignedTo) {
      task.content = content;
      task.dueDate = dueDate;
      task.status = status;
      task.assignedTo = assignedTo;
      saveToLocalStorage();
      renderTasks();
    } else {
      alert('Điền thông tin sửa');
    }
  }
  