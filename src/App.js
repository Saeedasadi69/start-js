//import saeed from './helpers';
import { firstFunction2, defaultFunction } from './helpers';
import logo from './logo.svg';

import './App.css';


import { useEffect, useRef } from 'react';

function makeUser(id, name) {
  return { id, name };
}
let usersList = [
  makeUser(1, "saeed"),
  makeUser(2, "ali"),
  makeUser(3, "berni"),
  makeUser(4, "madi")
];

const usersList2 = {
  saeed: { id: 2 },
  vahi: { id: 3 },
  jahi: { id: 4 }
}


function init() {
  console.log("users list: ", usersList);


  // ***** Hoisting *****
  console.log(x) // function x () {...}
  x(); // gday world

  var x = 'hello world'

  function x() {
    console.log('gday world');
  }

  console.log(x) // hello world
  // x(); // TypeError: x is not a function

  // ***** Hoisting *****


  // ****** try catch variable scope test
  /*try {
    var d = 'doggies'; //d is function-scoped
    throw 'my exception';
  }
  catch (err) {
    console.log('error:', err); //err is block-scoped
  }

  console.log(d); */
  //console.log(err);

  // error: my exception
  // doggies
  // Uncaught ReferenceError: err is not defined
  // ****** try catch variable scope test


  // ****** let variable scope test
  /*
  var happyDays = function (day) {
    let c = 'cherries'; //c is block-scoped
    let b = day;
    function check(b) {
      if (day === 'munny') {
        console.log(c + "***");
      }
    }
    check(b);
    console.log(c + " biroon");
    //console.log(c); //ReferenceError: c is not defined
  }

  happyDays('munny')
  */
  // ****** let variable scope test

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

  const inputRef = useRef();
  const inputIdRef = useRef();

  function getInputId() {
    return inputIdRef.current.value;
  }

  function setInputText(text) {
    return inputRef.current.value = text;
  }


  function create() {
    //usersList.push(inputRef.current.value);
    //let nextId = usersList.length;

    usersList.push({ id: usersList.length + 1, name: inputRef.current.value });
    console.log("users list: ", usersList)

    // else {
    //   usersList.push({ id: inputIdRef.current.value, name: inputRef.current.value });
    //   console.log("users list: ", usersList)
    // }
    console.log('create', inputRef.current.value)
  }

  function read() {
    setInputText(getInputId());
    console.log('read', inputIdRef.current.value);
    //let filterResult = usersList.filter(search => search === inputIdRef.current.value);
    //let filterResult = usersList.filter(searchResult => searchResult.id.indexOf(1) > -1);
    let filteredObject = usersList.find(function (item) { return item.id === 1 * getInputId() });
    setInputText(filteredObject.name)
    console.log(filteredObject);
    // inputRef.current.value = (usersList.indexOf(usersList.id = inputIdRef.current.value)) ?  : "Not Found";

  }

  function update() {
    console.log('update')

    // map 
  }

  function remove() {
    console.log('delete')
    usersList = usersList.filter(function (item) { return item.id !== 1 * getInputId() });

    console.log(usersList);
  }


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
        <label>
          User name:
          <input type="text" ref={inputRef} className="text-gray-500 text-xs" />
        </label>
        <button onClick={create} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
        <button onClick={read} className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Read
        </button>
        <button onClick={update} className="bg-yellow-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
        <button onClick={remove} className="bg-red-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
        <label>
          Id:
          <input type="text" ref={inputIdRef} className="text-gray-500 text-xs" />
        </label>
      </header>

    </div>
  );
}

export default App;
