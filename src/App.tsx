import React from 'react';
import { CreateGlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { DashBoard } from './components/Dashboard';


function App() {
  return (
    <>
      <Header />
      <DashBoard />
      <CreateGlobalStyle />
    </>
  );
}

export default App;
