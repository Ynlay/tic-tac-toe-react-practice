import "./square.css";

export default function Square({ value, OnSquareClick }) {
  return <button className="square" onClick={OnSquareClick}>{value}</button>;
}
