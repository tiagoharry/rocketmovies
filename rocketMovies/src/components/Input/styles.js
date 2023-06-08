import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  align-items: center; 

  > input {
    padding: 17px;
    width: 100%;
    border: none;
    background: #262529;
    border-radius: 10px;
    color: white;
  }
  
  &:placeholder  {
    color: #948F99;
  }    
`