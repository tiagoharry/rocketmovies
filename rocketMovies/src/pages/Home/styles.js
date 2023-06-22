import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`

export const Form = styled.form`
  max-width: 100%;
  margin: 50px 106px;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40.45px;

    Button {
      width: 20%;
    }
  }
  
   h1 {
    font-size: 32px;
    color: #FFFFFF;
    width: 100%;
   
  }

  a {
    width: 207px;
  height: 56px;
  padding: 0 16.8px;
  background-color: #FF859B;
  color: #312E38;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  margin-top: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  }
`
