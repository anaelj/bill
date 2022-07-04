import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdCircle, MdLocalShipping } from 'react-icons/md'

import { ContainerTravels, MainContainer } from './styles'
import { DefaultPalettColors } from '../../assets/colors'

import { EnumStatusTravel, travels } from '../../mocks'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Card, Row, Col } from 'react-bootstrap'

const Travels = () => {
  const navigate = useNavigate()

  return (
    <MainContainer>
      <Header
        icon={
          <MdLocalShipping
            color={DefaultPalettColors.travel.orange}
            size={24}
          />
        }
        label={'Viagens'}
      />
      <ContainerTravels>
        {travels.map(travel => (
          <Card
            key={travel.number}
            text={'light'}
            bg={'secondary'}
            style={{ width: '100%', margin: '0px' }}
            className="mb-2"
            onClick={() => navigate('/expenses')}
          >
            <Card.Header>
              <span>Viagem: </span>
              <span>{travel.number}</span>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Row style={{ margin: '0px' }}>
                  <Col xs={11} style={{ marginLeft: '0px', padding: '2px' }}>
                    <Row>
                      <span>{travel.origin}</span>
                    </Row>
                    <Row>
                      <span>{travel.destiny}</span>
                    </Row>
                  </Col>
                  <Col xs={1} style={{ marginLeft: '0px', padding: '2px' }}>
                    <MdCircle
                      size={16}
                      color={
                        travel.status === EnumStatusTravel.finished
                          ? DefaultPalettColors.travel.green
                          : DefaultPalettColors.travel.orange
                      }
                    />
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </ContainerTravels>
      <Footer>
        <div>
          <MdCircle color={DefaultPalettColors.travel.green} />
          <span>Concluído</span>
        </div>
        <div>
          <MdCircle color={DefaultPalettColors.travel.orange} />
          <span>Em andamento</span>
        </div>
      </Footer>
    </MainContainer>
  )
}

export default Travels
