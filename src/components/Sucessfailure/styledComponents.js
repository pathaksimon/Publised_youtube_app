import styled from 'styled-components'

export const Sucessfailcontainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 100px;
`
export const Imagefail = styled.img`
  width: 80%;
`

export const Para3 = styled.p`
  font-size: 20px;
  color: ${props => (props.newcolor ? 'white' : '#0f0f0f')};
`

export const Head3 = styled.h1`
  font-size: 10px;
  color: ${props => (props.new1color ? 'white' : '#0f0f0f')};
`
export const Retrybutton = styled.button`
  width: 20%;
`
