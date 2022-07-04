import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container, CardContainer, Card, MainContainer } from "./styles";
import { MdLocalShipping } from "react-icons/md";
import { expenses } from "../../mocks";

const Expenses: React.FC = () => {
  return (
    <MainContainer>
      <Header
        icon={<MdLocalShipping color="#FB8500" size={24} />}
        label={"Despesas"}
      />
      <Container>
        {expenses.map((expense) => (
          <div>
            <div>
              {expense.date}
              {expense.number}
            </div>
            <div>
              {expense.describe}
              {expense.category.name}
            </div>
          </div>
        ))}
      </Container>
      <Footer>
        <CardContainer
          style={{
            display: "flex",
            alignContent: "center",
            marginTop: "-160px",
            position: "absolute",
          }}
        >
          <Card total>
            <header
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "space-between",
                justifyContent: "flex-start",
              }}
            >
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">{100}</h1>
          </Card>
        </CardContainer>
      </Footer>
    </MainContainer>
  );
};

export default Expenses;
