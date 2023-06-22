import { Container } from "./styled";

export function Textarea({...rest}) {
  return (

    <Container>
      <textarea {...rest} />
    </Container>
  )
}