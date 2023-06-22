import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: rgba(255, 133, 155, 0.05);
  border-radius: 16px;
  height: auto;
  margin-bottom: 24px;
  padding: 32px;

  > h2 {
    font-weight: 700;
    font-size: 24px;
    color: #F4EDE8;
  }

  > p {
    color: #999591;
    margin-top: 15px;
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
`

export const Class = styled.div`
  margin-top: 15px;

  > div {
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


