const GRID_SECTION = 'gridSection';
const ADD_SECTION = 'addSection';
const ERROR_SECTION = 'errorSection';
const DISPLAY_BLOCK = 'display-block';

function onClickAdd() {
    document.getElementById(ADD_SECTION).classList.add(DISPLAY_BLOCK);
    document.getElementById(GRID_SECTION).classList.remove(DISPLAY_BLOCK);
}

function onClickSave() {

    let hobby = document.getElementById('hobby').value;

    if (!hobby) {
        document.getElementById(ERROR_SECTION).classList.add(DISPLAY_BLOCK);
        return;
    }
    const tbody = document.getElementById('grid').getElementsByTagName('tbody')[0];
    let newRow = tbody.insertRow(tbody.rows.length);
    newRow.innerHTML = '<td>' + hobby + '</td>';
    onClickCancel();
}
function onClickCancel() {
    document.getElementById(ADD_SECTION).classList.remove(DISPLAY_BLOCK);
    document.getElementById(GRID_SECTION).classList.add(DISPLAY_BLOCK);
    clearFileds();
}

function clearFileds() {

    document.getElementById('hobby').value = '';
}