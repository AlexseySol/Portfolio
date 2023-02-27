import React from 'react';
import  app from './App.module.scss';
import { Header } from './conponets/Header/Header';
import { Name } from './conponets/Name/Name';

function App() {
  return (
    <div className={app.wrapper}>
<Header />
<Name />
    </div>
  );
}

export default App;
