import styled from 'styled-components'

export const Container = styled.div`

`
export const Form = styled.div`
  padding: 40px 150px;
  scroll-behavior: auto;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  header {
    display: flex;
    align-items: center;
    gap: 19px;
    margin-top: 24px;
  }
  
   h1 {
    color: #F4EDE8;
    font-weight: 500;
    font-size: 36px;
 }

 .span {
  color: #F4EDE8;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
 }

 p {
  color: #F4EDE8;
  text-align: justify;
  margin-top: 40px;
 }
`

export const Stars = styled.div`
  display: flex;

 .starfull {
  color: #FF859B;  
  margin-top: 8px;
 }
 `
export const Section = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
.type {
    background: #312E38;
    border-radius: 8px;
    padding: 5px 16px;
    width: 100px;
    display: flex;
    justify-content: center;

    span {
    font-size: 12px;
    color: #E5E5E5;
  }
   }
`
