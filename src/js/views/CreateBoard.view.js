import { createHTMLElement } from '../example';
const boardContainer = document.getElementById('boardContainer');

export function createBoardDiv() {
  const Board = createHTMLElement(`
  <div id="board">
  <h6 data-toggle="modal" data-target="#boardNameChange">Name of the Board</h6>
    <div class="row">
        <div class="col-sm-3">
            <div class="card">
                <div class="card-body">
                <form>
                <div class="form-group input-append"  id="cardBody">
                  <input type="text" class="form-control" id="listName" aria-describedby="listName" placeholder="Add list">
                      <button class="btn" id="cardAdd">Add</button>
                </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</div>`);
  boardContainer.appendChild(Board);
  const cardAdd = document.getElementById('cardAdd');
  cardAdd.onclick = () => {
    createCardDiv();
  }

}

export function createCardDiv() {
  const Card = createHTMLElement(`          
                <div class="form-group">
                  <input type="text" class="form-control" id="listName" aria-describedby="listName" placeholder="Add list">
                </div>
  `)
  document.getElementById("cardBody").appendChild(Card);
}
