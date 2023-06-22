import { Container, Stars, Class, Section } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

export function MoviesSection({ title, text, info1, info2 }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Stars>
        <AiFillStar className="starfull" />
        <AiFillStar className="starfull" />
        <AiFillStar className="starfull" />
        <AiFillStar className="starfull" />
        <AiOutlineStar className="starfull"/>
      </Stars>

      <p>{text}</p>

      <Section>
        <Class>
          <div>
            <span>{info1}</span>
          </div>
        </Class>

        <Class>
          <div>
            <span>{info2}</span>
          </div>
        </Class>
      </Section>

    </Container>
  )
}