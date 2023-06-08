import styled from 'styled-components'
import backgroundImg from '../../assets/sala.png'

export const Container = styled.div`
 height: 100vh;
 display: flex;
 align-items: stretch;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  > h1 {
    font-size: 48px;
    color: #FF859B;
    font-weight: 700;
  }

  > p {
    color: #CAC4CF;
    font-size: 14px;
  }

  > h2 {
    color: #F4EDE8;
    font-weight: 500;
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 48px;
  }
`

export const Form = styled.form`
  padding: 0 139px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .entrar {
    margin-top: 0;
    width: 100%;
  }

  > a {
    margin-top: 52px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
`