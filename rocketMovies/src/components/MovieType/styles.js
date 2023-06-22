import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

   > div {
    background: #312E38;
    border-radius: 8px;
    padding: 5px 16px;
    width: 100px;
    display: flex;
    justify-content: center;
   }

   span {
    font-size: 12px;
    color: #E5E5E5;
  }
`