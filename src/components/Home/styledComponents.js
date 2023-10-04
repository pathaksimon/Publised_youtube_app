import styled from 'styled-components'

export const Bottom = styled.div`
  background-color: ${props => (props.bgcolor1 ? '#0f0f0f' : 'white')};
  width: 100%;
  display: flex;
`

export const Homepage = styled.div`
  background-color: ${props => (props.bgcolor1 ? '#0f0f0f' : '#f4f4f4')};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
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

export const Homesecondcard = styled.div`
  width: 100%;
  background-size: cover;
  min-height: 100vh;
`
export const Topimagebackground = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  display: ${props => (props.cross ? 'none' : 'block')};
`
export const Topfirst = styled.div`
  width: 25%;
  font-size: 20px;
  padding: 20px;
`
export const Topsecond = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  width: 100%;
  height: 200px;
  background-size: cover;
  display: flex;
  justify-content: space-between;
`
export const Crossbutton = styled.button`
  font-size: 20px;
  height: 25px;
`

export const UL = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
export const Searchcard = styled.div`
  width: 40%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin: 10px;
`
export const Input21 = styled.input`
  width: 90%;
  height: 30px;
`
export const Searchbutton = styled.button`
  width: 10%;
  height: 30px;
`
export const TOP = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const BOTTOM = styled.div`
  display: flex;
  width: 100%;
`
export const Immage = styled.img`
  width: 80%;
`
export const Agpara = styled.p`
  font-size: 15px;
`
export const Bannerbutton = styled.button`
  width: 70%;
  background-color: transparent;
`
