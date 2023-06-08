import { Container, Form, Title, Background } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <Form>
        <Title>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Faça seu login</h2>
        </Title>

        <Input type="text" placeholder="E-mail" />
        <Input type="text" placeholder="Senha" />

        <Link to="/perfil" className="entrar">
          <Button title="Entrar" />
        </Link>

        <Link to="signup">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}