import styled from 'styled-components'

export const Container = styled.div`
 width: 100%;
`

export const Form = styled.form`
  width: 80%;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 90px;

  > a {
    display: flex;
    align-items: center;
    gap: 8px;
  }

> h1 {
  color: #F4EDE8;
  font-weight: 500;
  font-size: 36px;
  margin-top: 24px;
  margin-bottom: 40px;
 }

 div {
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
 }

 > h2 {
  font-size: 20px;
  color: #999591;
 }

 .marcadoresBackground {
  background: #0D0C0F;
  width: 100%;
  height: 88px;
  border-radius: 8px;
  margin-top: 24px;
 }

 .buttonDelete {
  background: #0D0C0F;
  color: #FF859B;
  transition: 0.2 ease;
 }

 .buttonDelete:hover {
  background-color: whitesmoke;
 }
`