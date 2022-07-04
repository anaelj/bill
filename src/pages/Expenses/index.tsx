import total from "../../assets/total.svg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Card, Row, Col } from "react-bootstrap";

import { Container, MainContainer } from "./styles";
import { MdLocalShipping } from "react-icons/md";
import { expenses } from "../../mocks";
import { getIcon } from "../../assets/makeIcon";

const Expenses: React.FC = () => {
  return (
    <MainContainer>
      <Header
        icon={<MdLocalShipping color="#FB8500" size={24} />}
        label={"Despesas"}
      />
      <Container>
        {expenses.map((expense) => (
          <Card
            key={expense.number}
            text={"light"}
            bg={"secondary"}
            style={{ width: "100%" }}
            className="mb-2"
          >
            <Card.Header>
              {getIcon(expense.category.type)}
              {expense.category.name}
            </Card.Header>
            <Card.Body>
              {/* <Card.Title>{expense.describe}</Card.Title> */}
              <Card.Text>
                <Row>
                  <Col xs={4} style={{ marginLeft: "0px", padding: "2px" }}>
                    {expense.date}
                  </Col>
                  <Col xs={6} style={{ marginLeft: "0px", padding: "2px" }}>
                    {expense.describe}
                  </Col>
                  <Col xs={2}>{expense.total}</Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>

          // <CardContainer
          //   style={{
          //     display: "flex",
          //     margin: "5px",
          //     alignItems: "stretch",
          //     gap: "5px",
          //     height: "60px",
          //     minWidth: "100%",
          //   }}
          // >
          //   <div
          //     style={{
          //       display: "flex",
          //       flexDirection: "column",
          //       flex: "1",
          //       alignItems: "center",
          //       width: "120px",
          //       height: "60px",
          //     }}
          //   >
          //     <span>{expense.date}</span>
          //     <span>{expense.number}</span>
          //   </div>
          //   <div
          //     style={{
          //       display: "flex",
          //       flex: "2",
          //       margin: "5px",
          //       alignItems: "flex-start",
          //       height: "60px",
          //       flexDirection: "column",
          //       width: "100%",
          //     }}
          //   >
          //     <span>{expense.describe}</span>
          //     <span>{expense.category.name}</span>
          //   </div>
          //   <div
          //     style={{
          //       display: "flex",
          //       flexDirection: "column",
          //       flex: "1",
          //       width: "40px",
          //     }}
          //   >
          //     <span>{getIcon(expense.category.type)}</span>
          //   </div>
          // </CardContainer>
        ))}
      </Container>
      <Footer>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            marginTop: "-160px",
            position: "absolute",
          }}
        >
          <div>
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
          </div>
        </div>
      </Footer>
    </MainContainer>
  );
};

export default Expenses;
