function sortTable(columnIndex) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    direction,
    switchCount = 0;
  table = document.getElementById('sortableTable');
  switching = true;
  direction = 'asc';

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('TD')[columnIndex];
      y = rows[i + 1].getElementsByTagName('TD')[columnIndex];

      if (columnIndex === 1 || columnIndex === 3) {
        var xContent = parseFloat(x.innerHTML);
        var yContent = parseFloat(y.innerHTML);
      } else {
        var xContent = x.innerHTML.toLowerCase();
        var yContent = y.innerHTML.toLowerCase();
      }

      if (direction == 'asc') {
        if (xContent > yContent) {
          shouldSwitch = true;
          break;
        }
      } else if (direction == 'desc') {
        if (xContent < yContent) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchCount++;
    } else {
      if (switchCount == 0 && direction == 'asc') {
        direction = 'desc';
        switching = true;
      }
    }
  }
}
