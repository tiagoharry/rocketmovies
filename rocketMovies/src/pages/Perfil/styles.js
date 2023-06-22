import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  
`
export const Header = styled.div`
 width: 100%;
  height: 144px;
  background: rgba(255, 133, 155, 0.05);
  margin-bottom: 150px;
  padding: 64px 140px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 0 auto;

  >div:nth-child(4) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  margin: -234px auto 32px;

  > img {
    border-radius: 93px;
    width: 186px;
    height: 186px;
  }
  
`