import { createBoardDiv, createCardDiv } from '../views/CreateBoard.view';

const createBoard = document.getElementById('createBoard');

createBoard.onclick = () => {
  createBoardDiv();
};
