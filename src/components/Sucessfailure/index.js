import Differentcontext from '../../context'
import {
  Sucessfailcontainer,
  Para3,
  Head3,
  Imagefail,
  Retrybutton,
} from './styledComponents'

const Sucessfailure = props => {
  const {suces} = props
  const clickonRetry = () => {
    suces()
  }

  return (
    <Differentcontext.Consumer>
      {value => {
        const {backColor} = value

        return (
          <Sucessfailcontainer>
            <Imagefail
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Head3 new1color={backColor}>No Search results Found</Head3>
            <Para3 newcolor={backColor}>
              Try different key words or remove search filter
            </Para3>
            <Retrybutton onClick={clickonRetry}>Retry</Retrybutton>
          </Sucessfailcontainer>
        )
      }}
    </Differentcontext.Consumer>
  )
}

export default Sucessfailure
