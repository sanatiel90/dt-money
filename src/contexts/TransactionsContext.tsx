import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

//tipo para a transaction (completa com id e createdAt)
interface TransactionType {
    id: number;
    title: string;
    type: string;
    value: number;
    category: string;
    createdAt: string;
}

/*
//tipo para a transaction (recebida do input do user, sem id e createdAt)
interface TransactionInputType {
    title: string;
    type: string;
    value: number;
    category: string;
}*/

//sintaxe alternativa do typescript: TransactionInputType vai ser igual TransactionType, omitindo apenas
//os campos id e createdAt
type TransactionInputType = Omit<TransactionType, 'id' | 'createdAt'>;


interface TransactionsProviderProps {
    children: ReactNode; //aceita qualquer elemento como children
}

interface TransactionsContextData {
    transactions: TransactionType[],
    createTransaction: (transaction: TransactionInputType) => Promise<void>;

}

//esse é o contexto, que vai compartilhar info pela app
//no caso vai compartilhar um objeto tipo TransactionsContextData, que contem um array de transactions,
//e uma funcao para criar nova Transaction
export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
  );


//esse é o Provider do contexto acima, nele vai ficar a logica da info que vai ser colocada nas transactions
//ele vai retonar o .Provider do contexto acima, indicando no value os valores compartilhados 
export function TransactionsProvider({ children }: TransactionsProviderProps) {   

    const [transactions, setTransactions] = useState<TransactionType[]>([]);

    useEffect(() => {
        
        api.get('http://localhost:3000/api/transactions')
            .then(response => setTransactions(response.data.transactions));    

    }, []);



    async function createTransaction(transactionInput: TransactionInputType) {       
        //no post da API, vai mandar um obj contendo todo o input do user + um campo createdAt
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        }); 

        const { transaction } = response.data; //pega a transc criada

        //usando o conceito de imutabilidade, atualiza as transactions, copiando o que ja tinha
        //antes (spread operator) e adicionando a nova transaction 
        setTransactions([
            ...transactions,
            transaction
        ])

    }


    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}