import './index.css'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {withRouter, Link} from 'react-router-dom'
import {HiMoon} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'
import {BsSun} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import {
  Header1,
  T1,
  T2,
  Imageheader,
  Buttonheader,
  Profileimage,
  LogoutButton,
  ModalContainer,
  CloseButton,
  ConfirmButton,
  ModalDesc,
  ButtonsContainer,
  LogoLink,
  LogoutIconButton,
} from './styledComponents'
import Differentcontext from '../../context'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('./login')
  }

  return (
    <Differentcontext.Consumer>
      {value => {
        const {backColor, togglebackground} = value

        const clickontogglebutton = () => {
          togglebackground()
        }

        const newacess = () => {
          if (backColor) {
            return <HiMoon fontSize={25} color="white" />
          }
          return <BsSun fontSize={25} />
        }

        const imageacess = () => {
          if (backColor) {
            return (
              <Imageheader
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
              />
            )
          }
          return (
            <Imageheader
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          )
        }

        return (
          <Header1 bgcolor1={backColor}>
            <Link to="/">
              <T1>{imageacess()}</T1>
            </Link>
            <T2>
              <Buttonheader
                bgcolor9={backColor}
                onClick={clickontogglebutton}
                data-testid="theme"
              >
                {newacess()}
              </Buttonheader>
              <Buttonheader bgcolor9={backColor} onClick={clickontogglebutton}>
                <Profileimage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </Buttonheader>

              <Popup
                modal
                trigger={
                  <LogoutButton
                    type="button"
                    bgColor={backColor}
                    color={backColor}
                  >
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <ModalContainer>
                    <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                    <ButtonsContainer>
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>

                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutIconButton type="button">
                    <FiLogOut size={25} color={backColor} />
                  </LogoutIconButton>
                }
                className="popup-content"
              >
                {close => (
                  <ModalContainer>
                    <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                    <ButtonsContainer>
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>

                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
            </T2>
          </Header1>
        )
      }}
    </Differentcontext.Consumer>
  )
}
export default withRouter(Header)
