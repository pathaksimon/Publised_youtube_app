import styled from 'styled-components'

export const Lista34 = styled.li`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin: 10px;
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
  font-size: 12px;
  color: ${props => (props.gamepara ? 'white' : 'black')};
  font-family: 'Roboto';
`
export const Gamehead = styled.h1`
  font-size: 14px;
  color: ${props => (props.gamepara ? 'white' : 'black')};
  font-family: 'Roboto';
`
