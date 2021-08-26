import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function Number(){
  let m=0;
  
m=Math.floor(Math.random() * 10);
return m
}

function CountSumm(n){
 let m=0;
m=(n*(n+1)/2);
return m
}
let b=0;
b=Number();
ReactDOM.render(
  <div>Исходное число выбранное в в диапазоне от 0 до 100: {b} . Сумма первых натуральных чисел равна {CountSumm(b)}</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
