import { Container, Profile } from "./styles";
import { Input } from "../Input"
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Link to='/'>
        <h2>RocketMovies</h2>
      </Link>

      <Input type="text" placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>Tiago Assis</strong>
          <a href="/signin">sair</a>
        </div>
        <Link to="/perfil">
          <img src="http://github.com/tiagoharry.png" alt="foto do usuário" />
        </Link>

      </Profile>

    </Container>
  )
}