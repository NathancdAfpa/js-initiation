var table = document.createElement('table');
table.style.borderCollapse = 'collapse';

for (var i = 0; i <= 10; i++) {
  var row = table.insertRow();

  for (var j = 0; j <= 10; j++) {
    var cell = row.insertCell();

    if (i === 0 || j === 0) {
      cell.style.backgroundColor = 'blue';
      cell.style.color = 'white';
    }

    if (i === 0 && j === 0) {
      cell.innerHTML = 'x';
      cell.style.fontWeight = 'bold';
    } else if (i === 0) {
      cell.innerHTML = j;
      cell.style.fontWeight = 'bold';
    } else if (j === 0) {
      cell.innerHTML = i;
      cell.style.fontWeight = 'bold';
    } else {
      cell.innerHTML = i * j;
    }

    cell.style.padding = '10px';
    cell.style.border = '1px solid black';
  }
}

document.body.appendChild(table);
table.style.margin = 'auto';