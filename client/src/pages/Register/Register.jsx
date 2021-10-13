import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from './RegisterStyles'

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='first name' />
          <Input placeholder='last name' />
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            error deserunt laboriosam non eius quasi saepe illo voluptas,
            molestiae nam?
          </Agreement>
          <Button>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
