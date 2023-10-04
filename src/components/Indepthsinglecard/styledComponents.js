import styled from 'styled-components'

export const Lista12 = styled.li`
  list-style-type: none;
  background-color: white;
  margin: 10px;
  display: flex;
  width: 30%;
  flex-direction: column;
  background-color: ${props => (props.bgcolor1 ? 'black' : 'white')};
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const Toplistacard = styled.div`
  width: 100%;
`
export const Bottomlistacard = styled.div`
  width: 100%;
  display: flex;
`
export const Cardimage = styled.img`
  width: 100%;
`
export const Bottomfirst1 = styled.img`
  width: 20%;
  height: 45px;
  margin-top: 10px;
`
export const Bottomsecond2 = styled.div`
  width: 75%;
`
export const Prara = styled.p`
  font-size: 15px;
  color: black;
  text-decoration: none;
  color: ${props => (props.bgcolor1 ? 'white' : 'black')};
  font-family: 'Roboto';
`
