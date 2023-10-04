import styled from 'styled-components'

export const Homefirstcard = styled.div`
  background-color: ${props => (props.bgcolor1 ? '#181818' : 'white')};
  width: 250px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: space-between;
  height: 90%;
  font-family: 'Roboto';
  @media (max-width: 576px) {
    display: none;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    display: none;
  }
`
export const LEFTY = styled.div`
  width: 30%;
  margin-right: 35%;
  color: black;
  color: ${props => (props.bgcolor1 ? 'white' : 'black')};
  font-family: 'Roboto';
`

export const Hometop = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`

export const Homebottom = styled.div`
  width: 100%;
`

export const ULL = styled.ul`
  width: 95%;

  padding-left: 0px;
`
export const LI = styled.li`
  width: 80%;
  margin-bottom: 10px;
  margin-left: 30px;

  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`
export const Bottomfirst = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const Imageicon = styled.img`
  width: 15%;
`
export const Paragraphs = styled.p`
  font-size: 15px;
  color: ${props => (props.bgcolor1 ? 'white' : 'black')};
  font-family: 'Roboto';
`
export const Heada = styled.h1`
  font-size: 10px;
  font-family: 'Roboto';
`
