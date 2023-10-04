import styled from 'styled-components'

export const Bottom = styled.div`
  display: flex;
  width: 100%;
`

export const Rightsectionoftrending = styled.div`
  background-color: ${props => (props.bgcolor1 ? '#0f0f0f' : 'white')};

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
export const Toppy = styled.div`
  width: 100%;
  background-color: grey;
`
export const ULU2 = styled.div`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
`
export const Lista34 = styled.li`
  width: 30%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  background-color: green;
  margin: 5px;
`
export const Imaggecard = styled.div`
  width: 100%;
`
export const Detailscard = styled.div`
  width: 100%;
  margin-left: 10px;
`
export const Imageofprofile = styled.img`
  width: 100%;
`
export const Heading = styled.h1`
  font-size: 10px;
`
export const Paragraph = styled.p`
  font-size: 10px;
`
export const Heada12 = styled.h1`
  font-size: 15px;
  color: ${props => (props.headsoshead ? 'white' : 'black')};
`
export const Toppy12 = styled.div`
  width: 100%;
  background-color: ${props => (props.toppies ? '#313131' : '#f1f5f9')};

  display: flex;
  align-items: center;
`

export const Covering12 = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${props => (props.covered ? 'black' : '#cbd5e1')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
  margin-left: 2%;
`
export const Toppy78 = styled.div`
  width: 100%;
  background-color: ;
  background-color: ${props => (props.toppies ? '#313131' : '#f1f5f9')};

  display: flex;
  align-items: center;
`
