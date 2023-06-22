import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #1C1B1E;
  border-bottom: 1px solid #3E3B47; 
  padding: 30px 123px;
  display: flex;
  align-items: center;
  justify-content: center;

   h2 {
    color: #FF859B;
    margin-right: 64px;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

 > div {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 64px;

  strong {
    font-weight: 700;
    font-size: 14px;
    color: #F4EDE8; 
  }

   a {
    font-size: 14px;
    color: #948F99;
  }
 }

  img {
      width: 64px;
      height: 64px;
      border: 1px solid #3E3B47;
      border-radius: 35px;
      margin-left: 9px;
    }
  
`
