import { useTransactions } from "../../hooks/useTransactions";
import incomeImg from "./../../assets/income.svg";
import outcomeImg from "./../../assets/outcome.svg";
import totalImg from "./../../assets/total.svg";


import { Container } from "./styles";

export function Summary() {
    
    const { transactions } = useTransactions();

    //usando reduce para fazedr os somatorios de depositos e retiradas; 
    //ele é como se fosse um map, que itera sobre um array (transactions) e recebe dois param:
    //uma funcao, q contem um acumulador e o item em questao do array, e um obj com os totalizadores
    //que serao retornados (deposits, withdraws e total); esses totalizadores precisam de um valor 
    //inicial (no caso zero); dentro da funcao, o acumulador pode ir acrescentando valores dentro dos
    //totalizadores, de acordo com a logica q vc quiser;
    // os totais acumulados sao retornados num obj (summary)
    const summary = transactions.reduce((acumulator, transactionItem) => {
        if(transactionItem.type === 'deposit'){
            acumulator.deposits += transactionItem.value;
            acumulator.total += transactionItem.value;
        } else {
            acumulator.withdraws += transactionItem.value;
            acumulator.total -= transactionItem.value;
        }

        return acumulator;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    });

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.deposits)}</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.withdraws)}</strong>
            </div>

            <div className="test">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.total)}</strong>
            </div>

        </Container>
    )
}