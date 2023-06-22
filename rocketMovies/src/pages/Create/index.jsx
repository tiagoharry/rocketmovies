import { Header } from "../../components/Header";
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Tags } from "../../components/Tags";
import { Container, Form } from "./style";
import { BsArrowLeftShort } from "react-icons/bs"
import { Link } from "react-router-dom";

export function Create() {
  return (
    <Container>
      <Header />
      <Form>
        <Link to="/"><BsArrowLeftShort />Voltar</Link>
        <h1>Novo filme</h1>
        <div>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>
        <Textarea placeholder="Obsevações" />

        <h2>Marcadores</h2>
        <div className="marcadoresBackground">
          <Tags value="React" />
         
        </div>
        <div >
          <Button className="buttonDelete" title="Excluir filme" />
          <Button title="Salvar alterações" />
        </div>

      </Form>
    </Container>
  )
}