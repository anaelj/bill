import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Row, Col, Form } from "react-bootstrap";

import { Container, MainContainer } from "./styles";
import { MdLocalShipping, MdCheck, MdAddAPhoto } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { expenseCategory } from "../../mocks";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

export const ExpenseItem = () => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const [showCamera, setShowCamera] = useState(false);

  const navigate = useNavigate();
  return (
    <MainContainer>
      <Header
        icon={<MdLocalShipping color="#FB8500" size={24} />}
        label={"Item de Despesa"}
      />
      <Container>
        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control type="text" placeholder="Breve descrição" />
          <Form.Label>Quantidade</Form.Label>
          <Form.Control type="text" placeholder="Quantidade" />
          <Form.Label>Valor Total</Form.Label>
          <Form.Control type="text" placeholder="Valor Total" />
          <Form.Label>Categoria</Form.Label>
          <Form.Select>
            {expenseCategory.map((category) => (
              <option>{category.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Row
          style={{
            width: "100%",
            height: "200px",
            border: "1px dashed black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {showCamera ? (
            <Webcam />
          ) : (
            <MdAddAPhoto size={150} onClick={() => setShowCamera(true)} />
          )}
        </Row>
      </Container>
      <Footer>
        <Row style={{ width: "100%" }}>
          <Col xs={10}></Col>
          <Col xs={2}>
            <MdCheck size={32} onClick={() => navigate("/expenses")} />
          </Col>
        </Row>
      </Footer>
    </MainContainer>
  );
};
