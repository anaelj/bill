import React from 'react'
import { MdCircle } from 'react-icons/md'

import { DefaultPalettColors } from '../../assets/colors'
import { Container } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <MdCircle color={DefaultPalettColors.travel.green} />
        <span>Concluído</span>
      </div>
      <div>
        <MdCircle color={DefaultPalettColors.travel.orange} />
        <span>Em andamento</span>
      </div>
    </Container>
  )
}

export default Footer
