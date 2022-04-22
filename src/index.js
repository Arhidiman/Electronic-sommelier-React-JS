import react, { useEffect, useRef,useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Block from './components/Block/Block'
import reportWebVitals from './reportWebVitals';


// function Example() {
//   const [count, setCount] = useState(0);
//   const [sliderCounter, setSliderCounter] = useState(0);

//   useEffect(() => {
//     document.title = `Вы нажали ${count} раз`;
//     console.log(`Вы нажали ${count} раз`);
//   });

//   useEffect(()=>{

//     console.log(`Вы нажали ${sliderCounter} раз`);
//     document.title = `Вы нажали ${sliderCounter} раз`;
//   },[])

//   function changeCount() {
//     setSliderCounter(sliderCounter + 1)
//     console.log(sliderCounter)

    // setCount(count + 1)
    // console.log(count)
    
    // document.title = `Вы нажали ${count} раз`;
    // document.title = `Вы нажали ${sliderCounter} раз`;
  // }

//   return (
//     <div>
//       <p>Вы нажали {count} раз</p>
//       <button onClick={() => changeCount()}>
//         Click me
//       </button>
//     </div>
//   );
// }




// function Clock() {
//   setInterval(()=> {
//     const element = (
//           <div>
//             <h1>Привет, мир!</h1>
//             <h2 style = {{color: 'red'}}>Сейчас {new Date().toLocaleTimeString()}.</h2>
//           </div>

//     );
//     ReactDOM.render(element, document.getElementById('body'));
//   },1000)
// }

// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>Вы кликнули {this.state.count} раз</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Кликни меня
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Clock/> */}
//     <Example/>
//   </React.StrictMode>,
//   document.getElementById('body')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// function Square() {

//   const element = useRef();

//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState('red');
//   const [colorName, setColorName] = useState('red');

//   // let color = 'red';
//   // let colorName = 'red';

//   useEffect(()=>{
//     // element.current.style.backgroundColor = color;
//     // element.current.onclick = changeColor;
//     element.current.style.backgroundColor = color;
//     console.log(element.current)
//     // setCount(count +1);
//   })



//   function changeColor() {
//     console.log(element.current)
//     console.log(document.getElementById('square'));
//     setColor('blue');
//     setCount(count + 1);
//     console.log(`count = ${count}`);
//     element.current.style.backgroundColor = color;
    

//   }
 
//   // setColor('lightBlue');
//   // setColor('grey');

//   console.log('гыыыыгы')
//   // element.current.style.backgroundColor = color;

//   return(
//     <div onClick = {changeColor} id = 'square' ref = {element} style={{width: '100px', height: '100px'}}>{count}</div>
//   )
// }

// function ChangeState() {
//   const [count, setCount] = useState(0);
//   useEffect(()=>{
//     if(count === 0) {
//       setCount(1);
//     }

//     if(count === 3) {
//       setCount(4);
//     }
//   })
     

//   console.log('count', count);
// }


function P() {
  // constructor() {
  //     this.output = this.output.bind(this)
  //     this.state = {
  //         count: 0
  //     }
  // }
  // const [count, setCount] = useState()

  const title = useRef();

let count = 10;
  function output(a) {
    count = a;
    console.log(count);
    title.current.style.fontSize = `${Math.round(count)}px`;
  }

  return (
      <div>
          <h1 ref = {title} style = {{fontSize: `${Math.round(count)}px`}}>Count: {count}</h1>
          <C func={output} />
      </div>
  )
}
function C(props) {
    return (
        <div>
            C component
            <button onClick={(evt) => props.func(Math.random()*50)}>Send To Parent</button>
        </div>
    )
}




ReactDOM.render(
  <React.StrictMode>
    {/* <P/> */}
    <App/>
  {/* <Example/> */}
  {/* <Square/> */}
  {/* <ChangeState/> */}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
