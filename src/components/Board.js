import "./board.css";
import Square from "./Square.js";

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function createBoard(start, end) {
    const boardRow = [];
    for (let i = start; i < end; i++) {
      boardRow.push(
        <Square value={squares[i]} OnSquareClick={() => handleClick(i)} />
      );
    }
    return boardRow;
  }

  return (
    <>
      <div className="status">{status}</div>

      <div className="board-row">{createBoard(0, 3)}</div>
      <div className="board-row">{createBoard(3, 6)}</div>
      <div className="board-row">{createBoard(6, 9)}</div>
    </>
  );
}
