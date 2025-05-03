const grid = document.getElementById('grid');

for (let row = 1; row <= 30; row++) {
  for (let column = 1; column <= 20; column++) {
    const background = document.createElement('div');
    background.className = 'grid__background';

    const cell = document.createElement('div');
    cell.classList = 'grid__cell';

    //Save the data of column and row
    background.dataset.row = row;
    background.dataset.column = column;

    //Add onclick event
    cell.addEventListener('click', (event) => {
      //   let selectedCell = document.querySelector('.grid__cell--selected');

      let selectedCells = document.querySelectorAll('.grid__cell--selected');

      if (!event.shiftKey && selectedCells) {
        selectedCells.forEach((item) => {
          item.classList.remove('grid__cell--selected');
          item.innerHTML = '';
        });
      }

      let selectedCellRow = background.getAttribute('data-row');
      let selectedCellColumn = background.getAttribute('data-column');

      cell.innerText = selectedCellRow + '/' + selectedCellColumn;
      cell.classList.toggle('grid__cell--selected');

      let backgrounds = document.querySelectorAll('.grid__background');
      console.log(backgrounds);

      backgrounds.forEach((item) => {
        if (!event.shiftKey && selectedCells) {
          item.classList.remove('grid__background--highlighted');
        }

        if (item.dataset.row === selectedCellRow || item.dataset.column === selectedCellColumn) {
          item.classList.add('grid__background--highlighted');
        }
      });
    });

    background.appendChild(cell);
    grid.appendChild(background);
  }
}
