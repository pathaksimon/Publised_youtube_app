import styled from 'styled-components'

export const Imagecard = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 100px;
`
export const Image31 = styled.img`
  width: 80%;
`
export const Apara = styled.p`
  font-size: 20px;
  color: ${props => (props.aparacolor ? 'white' : '#0f0f0f')};
`
export const Heada = styled.h1`
  font-size: 20px;
  color: ${props => (props.apara1color ? 'white' : '#0f0f0f')};
`

export const Failbutton = styled.button`
  width: 20%;
`
