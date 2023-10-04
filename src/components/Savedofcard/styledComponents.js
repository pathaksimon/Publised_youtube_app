import styled from 'styled-components'

export const Bottom = styled.div`
  display: flex;
  width: 100%;
`

export const Rightsectionoftrending = styled.div`
  background-color: ${props => (props.bgcolor1 ? '#0f0f0f' : 'white')};
  min-height: 100vh;
  margin-top: 60px;

  width: calc(100% - 250px);
  margin-left: 250px;
  @media (max-width: 576px) {
    margin-left: 0px;
    width: 100%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    margin-left: 0px;
    width: 100%;
  }
`
export const Topbar = styled.div`
  width: 100%;
  background-color: grey;
`
export const Par = styled.p`
  font-size: 20px;
`
export const ULU2 = styled.ul`
  width: 95%;
  padding-left: 0px;
`
export const Lista34 = styled.li`
  width: 80%;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: space-between;
`
export const Imaggecard = styled.div`
  width: 45%;
  margin-left: 10px;
`
export const Detailscard = styled.div`
  width: 55%;
  margin-left: 10px;
`
export const Imageofprofile = styled.img`
  width: 100%;
`
export const Heading = styled.h1`
  font-size: 12px;
  color: ${props => (props.bgcolor1 ? 'white' : '#0f0f0f')};
  margin-left: 5%;
  font-family: 'Roboto';
`
export const Paragraph = styled.p`
  font-size: 12px;
  color: ${props => (props.bgcolor1 ? 'white' : '#0f0f0f')};
  margin-left: 5%;
  font-family: 'Roboto';
`
export const Nosavedcard = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
`
export const Nosavedimage = styled.img`
  width: 90%;
`
export const Nosavedhead = styled.h1`
  color: ${props => (props.aparacolor12 ? 'white' : '#0f0f0f')};
`
export const Nosavedpara = styled.p`
  color: ${props => (props.aparacolor13 ? 'white' : '#0f0f0f')};
`
