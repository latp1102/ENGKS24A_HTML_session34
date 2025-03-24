document.addEventListener('DOMContentLoaded', function() {
    const storedData = localStorage.getItem('employees');
    if (storedData) {
        employees = JSON.parse(storedData);
    } else {
        employees = [
            { name: 'Nguyễn Văn A', position: 'Developer' },
            { name: 'Trần Thị B', position: 'Designer' },
            { name: 'Phạm Văn C', position: 'Project Manager' }
        ];
        localStorage.setItem('employees', JSON.stringify(employees));
    }
    renderTable();
});

function renderTable() {
    const tableBody = document.querySelector('#employeeTable tbody');
    tableBody.innerHTML = '';
    employees.forEach((employee, index) => {
        const row = `<tr>
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function addEmployee() {
    const name = document.getElementById('nameInput').value.trim();
    const position = document.getElementById('positionInput').value.trim();

    if (name === '' || position === '') {
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }

    employees.push({ name, position });
    localStorage.setItem('employees', JSON.stringify(employees));
    renderTable();

    document.getElementById('nameInput').value = '';
    document.getElementById('positionInput').value = '';
}
