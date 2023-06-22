import { Container } from './styles'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

export function Stars() {
  return (
    <Container>
       <AiFillStar className="starfull" />
        <AiFillStar className="starfull" />
        <AiFillStar className="starfull" />
        <AiFillStar className="starfull" />
        <AiOutlineStar className="starfull"/>
    </Container>
  )
}