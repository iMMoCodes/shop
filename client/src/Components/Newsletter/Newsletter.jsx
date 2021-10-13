import { Send } from '@material-ui/icons'
import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from './NewsletterStyles'

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dolores.
      </Description>
      <InputContainer>
        <Input placeholder='example@email.com' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
