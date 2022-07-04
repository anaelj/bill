import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Card, Row, Col } from 'react-bootstrap'

import { Container, MainContainer } from './styles'
import { MdArrowBack, MdLocalShipping, MdPostAdd } from 'react-icons/md'
import { expenses } from '../../mocks'
import { getIcon } from '../../assets/makeIcon'
import { useNavigate } from 'react-router-dom'

const Expenses = () => {
  const navigate = useNavigate()
  return (
    <MainContainer>
      <Header
        icon={<MdLocalShipping color="#FB8500" size={24} />}
        label={'Despesas'}
      />
      <Container>
        {expenses.map(expense => (
          <Card
            key={expense.number}
            text={'light'}
            bg={'secondary'}
            style={{ width: '100%' }}
            className="mb-2"
          >
            <Card.Header
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {getIcon(expense.category.type)}
              {expense.category.name}
            </Card.Header>
            <Card.Body>
              {/* <Card.Title>{expense.describe}</Card.Title> */}
              <Card.Text>
                <Row>
                  <Col xs={4} style={{ marginLeft: '0px', padding: '2px' }}>
                    {expense.date}
                  </Col>
                  <Col xs={5} style={{ marginLeft: '0px', padding: '2px' }}>
                    {expense.describe}
                  </Col>
                  <Col xs={3} style={{ marginLeft: '0px', padding: '2px' }}>
                    {expense.total.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Footer>
        <Card
          text={'dark'}
          bg={'light'}
          style={{
            width: '200px',
            borderRadius: '0.8em',
            position: 'absolute',
            marginTop: '-80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="mb-2"
        >
          <Card.Header
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            Total
          </Card.Header>
          <Card.Body>
            <Card.Title>R$ 870.00</Card.Title>
          </Card.Body>
        </Card>
        <Row style={{ width: '100%' }}>
          <Col xs={1}></Col>
          <Col xs={2}>
            <MdArrowBack size={32} onClick={() => navigate('/travels')} />
          </Col>
        </Row>
        <Row style={{ width: '100%' }}>
          <Col xs={10}></Col>
          <Col xs={2}>
            <MdPostAdd size={32} onClick={() => navigate('/expenseitem')} />
          </Col>
        </Row>
      </Footer>
    </MainContainer>
  )
}

export default Expenses
