import React from 'react';
import './App.css';
import Main from './components/Main';

const App = () => {
  // if ((localStorage.getItem('token') !== '') && (typeof (localStorage.getItem('token'))) !== 'undefined' && (localStorage.getItem('token') != null)) {
  //   return (
  //     <Main page={'content'} />
  //   );
  // }
  // else {
    return (
      <Main page={'login'} />
    )
  // }
}

export default App;
