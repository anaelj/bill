import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Container, CardContainer, Card, MainContainer } from './styles'

const Despesas: React.FC = () => {
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
      </Container>
      <Footer />
    </MainContainer>
  )
}

export default Despesas
