// import { useState } from 'react'
// import { publicRequest } from '../../requestMethods'
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
  // const [email, setEmail] = useState('')

  // const handleClick = async (e) => {
  //   e.preventDefault()
  //   try {
  //     await publicRequest.post('/users/newsletter', { email })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dolores.
      </Description>
      <InputContainer>
        <Input
          type='email'
          name='email'
          placeholder='example@email.com'
          // onChange={(e) => setEmail(e.target.value)}
        />
        <Button>
          {/* <Send onClick={handleClick} /> */}
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
