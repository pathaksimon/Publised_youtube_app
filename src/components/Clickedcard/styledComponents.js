import styled from 'styled-components'

export const Bottom = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`

export const Clickedcardright = styled.div`
  background-color: ${props => (props.bgcolor1 ? '#231f20' : '#f1f5f9')};
  min-height: 100vh;
  margin-top: 60px;

  width: calc(100% - 250px);
  margin-left: 250px;
`
export const VideoPlayer = styled.div`
  width: 100%;
  margin-left: 2%;
`
export const Bottomvideocard = styled.div`
  width: 100%;
`
export const Bottomfirst1 = styled.div`
  width: 100%;
`

export const Paragraph12 = styled.p`
  font-size: 15px;
  color: ${props => (props.bgcolor1 ? 'white' : '#0f0f0f')};
  font-family: 'Roboto';
  margin-left: 8%;
`
export const Paragraph1212 = styled.p`
  font-size: 15px;
  color: ${props => (props.bgcolor1 ? 'white' : '#0f0f0f')};
  font-family: 'Roboto';
  margin-left: 2%;
`

export const Bottomsecond1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const Bottomleft = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`

export const Bottomright = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`
export const Likebutton = styled.button`
  width: 30%;
  color: ${props => (props.back ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`
export const Dislikebutton = styled.button`
  width: 30%;
  color: ${props => (props.back1 ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`
export const Savebutton = styled.button`
  width: 30%;
  color: ${props => (props.back2 ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`
export const Hori = styled.hr`
  width: 100%;
`
export const Belowhorifirst = styled.div`
  width: 100%;
`
export const Belowhorisecond = styled.div`
  width: 100%;
`
export const Thumbnailholder = styled.div`
  width: 25%;
  display: flex;
`
export const Imageofprofile = styled.img`
  width: 25%;
  height: 10%;
  margin-left: 2%;
`

export const Updown = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`
export const Closingpara = styled.p`
  font-size: 15px;
`
