import React, { useState } from "react";

import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container, CardContainer, Card, MainContainer } from "./styles";

// interface Transaction {
//   id: string;
//   title: string;
//   value: number;
//   formattedValue: string;
//   formattedDate: string;
//   type: "income" | "outcome";
//   category: { title: string };
//   created_at: Date;
// }

// interface Balance {
//   income: string;
//   outcome: string;
//   total: string;
// }

const Dashboard: React.FC = () => {
  // const [transactions, setTransactions] = useState<Transaction[]>([]);
  // const [balance, setBalance] = useState<Balance>({} as Balance);

  // useEffect(() => {
  //   async function loadTransactions(): Promise<void> {
  //     // TODO
  //     // const response = await api.get("/transactions");

  //     // const { transactions: newTransactions, balance: newBalance } =
  //     //   response.data;

  //     // const formattedTransactions = newTransactions.map(
  //     //   (transaction: Transaction) => {
  //     //     return {
  //     //       ...transaction,
  //     //       formattedValue: formatValue(transaction.value),
  //     //       formattedDate: new Date(transaction.created_at).toLocaleDateString(
  //     //         "pt-BR"
  //     //       ),
  //     //     };
  //     //   }
  //     // );

  //     const formattedBalance = {
  //       income: formatValue(newBalance.income),
  //       outcome: formatValue(newBalance.outcome),
  //       total: formatValue(newBalance.total),
  //     };

  //     setTransactions(formattedTransactions);
  //     setBalance(formattedBalance);
  //   }

  //   loadTransactions();
  // }, []);

  return (
    <MainContainer>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1 data-testid="balance-income">{1000}</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">{900}</h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">{100}</h1>
          </Card>
        </CardContainer>

        {/* <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="title">{transaction.title}</td>
                  <td className={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {transaction.formattedValue}
                  </td>
                  <td>{transaction.category.title}</td>
                  <td>{transaction.formattedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer> */}
      </Container>
      <Footer />
    </MainContainer>
  );
};

export default Dashboard;
