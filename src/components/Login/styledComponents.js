import styled from 'styled-components'

export const Bigcontainer = styled.div`
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#212121' : 'white')};
`

export const LoginContainer = styled.div`
  width: 40%; 
  height:60%;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5); 
  background-color:${props => (props.color1 ? 'black' : 'white')};
   border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  @media (max-width: 767px) {
    width: 100%; 
    height:35%;
  }
}
`

export const Toplogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 5%;
`
export const Bottomlogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const BringCenter = styled.div`
  width: 85%;

  margin-top: 35px;
`
export const Image = styled.img`
  width: 60%;
`
export const Label1 = styled.label`
  font-size: 18px;

  color: ${props => (props.color1 ? 'white' : 'black')};
`

export const Input1 = styled.input`
  background-color: white;
  width: 100%;
  height: 30px;
  border-width: 1px;
  border-color: #94a3b8;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`
export const Input2 = styled.input`
  background-color: white;
`

export const Button = styled.button`
  background-color: #3b82f6;
  width: 100%;
  margin-top: 20px;
  color: #ffffff;
  height: 30px;
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`
export const Para = styled.p`
  font-size: 15px;
  color: red;
`
export const Tick = styled.div`
  display: flex;
`

export const Form = styled.form`
  background-color: transparent;
`
