document.getElementById('tableForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    createTable(rows, columns);
});

function createTable(rows, columns) {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    const table = document.createElement('table');
    for (let i = 1; i <= rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 1; j <= columns; j++) {
            const td = document.createElement('td');
            td.textContent = i * j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
}
