import react, { useEffect, useRef, useState, memo } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// function Example() {
//   const [count, setCount] = useState(0);
//   const [sliderCounter, setSliderCounter] = useState(0);

//   useEffect(() => {
//     document.title = `Вы нажали ${count} раз`;
//      //console.log(`Вы нажали ${count} раз`);
//   });

//   useEffect(()=>{

//      //console.log(`Вы нажали ${sliderCounter} раз`);
//     document.title = `Вы нажали ${sliderCounter} раз`;
//   },[])

//   function changeCount() {
//     setSliderCounter(sliderCounter + 1)
//      //console.log(sliderCounter)

    // setCount(count + 1)
    //  //console.log(count)
    
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
// to log results (for example: reportWebVitals( //console.log))
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
//      //console.log(element.current)
//     // setCount(count +1);
//   })



//   function changeColor() {
//      //console.log(element.current)
//      //console.log(document.getElementById('square'));
//     setColor('blue');
//     setCount(count + 1);
//      //console.log(`count = ${count}`);
//     element.current.style.backgroundColor = color;
    

//   }
 
//   // setColor('lightBlue');
//   // setColor('grey');

//    //console.log('гыыыыгы')
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
     

//    //console.log('count', count);
// }


function P(props) {


  const [count, setCount] = useState(0)

  console.log('P RENDERED')
  return (
      <div onClick={()=>{setCount(count+1)}}>
          <h1 style = {{fontSize: `${Math.round()}px`}}>Count: </h1>
          <C count = {count} />
      </div>
  )
}
function C(props) {
  // console.log('C RENDERED')

  // const childCount = useRef(0);

  let childCount = 0;
  useEffect(()=>{
  console.log('count = ' + props.count)
  console.log('childCount = ' + childCount)
  })

  return (
      <div>
          C component
          <button onClick={(evt) => {childCount++}}>Send To Parent</button>
      </div>
  )
}
// //console.log(React.memo);
// //console.log(C)
C = React.memo(C);


function Component() {
  console.log('Component RENDERED')
  return(
    <div>Lololol</div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/* <Component/> */}
    {/* <P/> */}
    {/* <Example/> */}
    {/* <Square/> */}
    {/* <ChangeState/> */}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
