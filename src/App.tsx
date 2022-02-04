import React, { useState } from 'react';
import Modal from 'react-modal';
import { CreateGlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { DashBoard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './contexts/TransactionsContext';

Modal.setAppElement('#root'); //para questoes de acessibilidade do modal

function App() {

  //estado q diz se modal esta aberto ou nao
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }


  return (
    //TransactionsProvider é um Context.Provider que envolve o app, para compartilhar info entre os compon
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <CreateGlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
