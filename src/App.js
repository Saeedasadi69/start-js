//import saeed from './helpers';
import { firstFunction2, defaultFunction } from './helpers';
import logo from './logo.svg';

import './App.css';


import { useEffect } from 'react';

function init() {
  // console.log(firstFunction2(5))
  // console.log(defaultFunction(5))

  // let a = 4;
  // switch (a) {
  //   case 2:
  //   case 5:
  //   case 10:
  //     console.log("2 ya 5 ya 10 bood");
  //     break;
  //   case 42:
  //     break;
  //   default:
  //     console.log("pooch");
  //   // fallback
  // }

  // (function IIFE() {
  //   console.log("Hello!");
  // })();
  // // "Hello!"

  // function makeAdder(x) {

  //   function add(y) {
  //     return y + x;
  //   };

  //   return add;
  // }
  // var plusOne = makeAdder(5);
  // var plusTen = makeAdder(10);

  // console.log(plusOne(3));
  // console.log(plusTen(41));



  // function foo() {
  //   var a = 1;
  //   if (a >= 1) {
  //     let b = 2;
  //     let c = 222;
  //     while (b < 5) {
  //       let c = b * 2;
  //       b++;
  //       console.log(a + c);
  //     }
  //     console.log(c);
  //   }
  // }
  // foo();


}

function App() {




  useEffect(init, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
