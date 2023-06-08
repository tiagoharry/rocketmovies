import { Container, Form,Title, Background } from "./styles"
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom"

export function SignUp() {
  return (
    <Container>
      <Form>
        <Title>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Crie sua conta</h2>
        </Title>

        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="E-mail" />
        <Input type="text" placeholder="Senha" />

        <Button title="Cadastrar" />

        <Link to="/">Voltar para login</Link>
      </Form>
      <Background />
    </Container>
  )
}