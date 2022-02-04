import Modal from 'react-modal';
import { FormContainer, TransactionTypeContainer, RadioBoxButton } from './styles';
import closeImg from './../../assets/close.svg';
import incomeImg from './../../assets/income.svg';
import outcomeImg from './../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
          title,
          value,
          category,
          type
        });

        setTitle('');
        setValue(0);
        setCategory('');
        setType('deposit');

        onRequestClose();
    }

    return (
      <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"  //classes para sobrescrever estilizacao do react-modal
        className="react-modal-content"
      >          

            
          <button type='button' onClick={onRequestClose} className='react-modal-close' >
            <img src={closeImg} alt="Fechar Modal" />
          </button>  

          <FormContainer onSubmit={handleCreateNewTransaction} >
              <h2>Cadastrar Transação</h2>  

              <input 
                type="text" 
                placeholder='Título' 
                value={title} 
                onChange={event => setTitle(event.target.value)} />

              <input 
                type="text" 
                placeholder='Valor' 
                value={value}
                onChange={event => setValue(Number(event?.target.value))} />

              <TransactionTypeContainer>
                  <RadioBoxButton 
                    type='button' 
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor="green" >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                  </RadioBoxButton>

                  <RadioBoxButton 
                    type='button' 
                    onClick={() => setType('withdraw')} 
                    isActive={type === 'withdraw'}
                    activeColor="red" >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                  </RadioBoxButton>  

              </TransactionTypeContainer>

              <input 
                type="text" 
                placeholder='Categoria' 
                value={category}
                onChange={event => setCategory(event.target.value)} />

              <button type='submit'>
                  Cadastrar
              </button>

          </FormContainer>
      </Modal>

    );
}