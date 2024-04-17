// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'

function App() {
  const [mark,setMark]=useState([null,null,null,null,null,null,null,null,null]);
  const[isX,setIsX ]=useState(true);
  function clickHandler(indx){
   let newMark=[...mark];
   newMark[indx] = isX ? 'X' : 'O';
   setMark(newMark);
   setIsX(!isX);
   checkWinner(newMark);
 }


  function checkWinner(mark) {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (mark[a] && mark[a] === mark[b] && mark[a] === mark[c]) {
        alert(`${mark[a]} wins!`);
        return;
      }
    }

    if (!mark.includes(null)) {
      alert("It's a tie!");
    }
  }
  return(
    <>
    <div>
        <button onClick={() => clickHandler(0)} style={{ border: "1px solid black", width: "50px", height: "50px" }}>{mark[0]}</button>
        <button onClick={() => clickHandler(1)} style={{ border: "1px solid black", width: "50px", height: "50px" }}>{mark[1]}</button>
        <button onClick={() => clickHandler(2)} style={{ border: "1px solid black", width: "50px", height: "50px" }}>{mark[2]}</button>
      </div>
      <div>
        <button onClick={() => clickHandler(3)} style={{ border: "1px solid black", width: "50px", height: "50px" }}>{mark[3]}</button>
        <button onClick={() => clickHandler(4)} style={{ border: "1px solid black", width: "50px", height: "50px" }}>{mark[4]}</button>
        <button onClick={() => clickHandler(5)} style={{ border: "1px solid black", width: "50px", height: "50px" }}>{mark[5]}</button>
      </div>
      <div>
        <button onClick={() => clickHandler(6)} style={{ border: "1px solid black", width: "50px", height: "50px" }}>{mark[6]}</button>
        <button onClick={() => clickHandler(7)} style={{ border: "1px solid black", width: "50px", height: "50px" }}>{mark[7]}</button>
        <button onClick={() => clickHandler(8)} style={{ border: "1px solid black", width: "50px", height: "50px" }}>{mark[8]}</button>
      </div>
  </>)
}
export default App;