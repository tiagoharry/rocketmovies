import { FiPlus } from 'react-icons/fi';
import { Container, Form } from "./styles";
import { Header } from "../../components/Header";

import { MoviesSection } from "../../components/MoviesSection";
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Meus filmes</h1>

            <Link to="/create">
              <FiPlus />
              Adicionar filme
            </Link>

          </header>

          <MoviesSection title="O Senhor dos Aneis" text="Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel." info1="Aventura" info2="Fantasia" />

          <MoviesSection title="Harry Potter" text="Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger." info1="Fantasia" />

          <MoviesSection title="Homem Aranha" text="Depois de lutar ao lado dos Vingadores, chegou a hora do jovem Peter Parker voltar para casa em Nova York ao lado de sua tia May. Sob o olhar atento do mentor Tony Stark, Peter começa a abraçar sua nova identidade como Homem-Aranha e combate diariamente pequenos crimes nas redondezas. Ele acredita que encontrou a missão de sua vida quando o terrível vilão Abutre surge ameaçando a cidade. O problema é que a tarefa não será tão fácil como ele imaginava." info1="Ação" info2="Aventura"/>

        </Form>

      </main>

    </Container>
  )
}