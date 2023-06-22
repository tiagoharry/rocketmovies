import { Container } from "./styles";

export function Tags({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <button value={value} {...rest}/>
      
      <button type="button" value={value}></button>
    </Container>
  )
}