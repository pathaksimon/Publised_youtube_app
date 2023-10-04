import {Imagecard, Image31, Apara, Heada, Failbutton} from './styledComponents'
import Differentcontext from '../../context'

const Failureview = props => {
  const {fail} = props

  const failure = () => {
    fail()
  }

  return (
    <Differentcontext.Consumer>
      {value => {
        const {backColor} = value

        const gettingImage = () => {
          if (backColor) {
            return 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          }
          return 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }

        return (
          <Imagecard>
            <Image31 src={gettingImage()} alt="failure view" />
            <Heada apara1color={backColor}>Oops! Something Went Wrong</Heada>
            <Apara aparacolor={backColor}>
              We are having some trouble to complete your request. Please try
              again.
            </Apara>
            <Failbutton onClick={failure}>Retry</Failbutton>
          </Imagecard>
        )
      }}
    </Differentcontext.Consumer>
  )
}

export default Failureview
