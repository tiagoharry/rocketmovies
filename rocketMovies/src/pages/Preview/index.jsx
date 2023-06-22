import { Container, Form, Stars, Section } from './styles';
import { Header } from "../../components/Header";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
//import { Stars } from '../../components/Stars';
//import { Tags} from "../../components/Tags";
//import { MovieType } from "../../components/MovieType";

export function Preview() {
  return (
    <Container>
      <Header />
      <Form>
        <a href=""><BsArrowLeftShort />Voltar</a>
        <header>
          <h1>O Senhor dos Aneis</h1>
          <Stars>
            <AiFillStar className="starfull" />
            <AiFillStar className="starfull" />
            <AiFillStar className="starfull" />
            <AiFillStar className="starfull" />
            <AiOutlineStar className="starfull" />
          </Stars>
        </header>
        <div className='span'>
          <span>Por Tiago de Assis</span>
          <span>23/05/22 às 08:00</span>
        </div>
        
        <Section>
          <div className='type'>
            <span>Fantasia</span>
          </div>
        </Section>


        <p>Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.</p>
      </Form>

    </Container>
  )
}