import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Differentcontext from '../../context'
import DetailsGamecard from '../DetailsGamecard'
import Failureview from '../Failureview'
import Header from '../Header'

import Leftsection from '../Leftsection'

import {
  Bottom,
  Rightsectionoftrending,
  Toppy,
  ULU2,
  Lista34,
  Imaggecard,
  Imageofprofile,
  Heading,
  Detailscard,
  Paragraph,
  Heada12,
  Toppy12,
  Covering12,
  Toppy78,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    currentstatus: apiStatus.initial,
    finaldata: [],
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const jwtToken = Cookies.get('jwt_token')
    this.setState({currentstatus: apiStatus.inprogress})
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetched = await response.json()
      const newdata = fetched.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({finaldata: newdata})
      this.setState({currentstatus: apiStatus.success})
    } else {
      this.setState({currentstatus: apiStatus.failure})
    }
  }

  suces = () => this.getProducts()

  progress = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  failure = () => <Failureview fail={this.suces} />

  success = () => {
    const {finaldata} = this.state
    return (
      <Differentcontext>
        {value => {
          const {backColor} = value
          return (
            <>
              <Toppy78 toppies={backColor}>
                <Covering12 covered={backColor}>
                  <SiYoutubegaming fontSize={40} color="red" />
                </Covering12>
                <Heada12 headsoshead={backColor}>Gaming</Heada12>
              </Toppy78>
              <ULU2>
                {finaldata.map(each4 => (
                  <DetailsGamecard first={each4} key={each4.id} />
                ))}
              </ULU2>
            </>
          )
        }}
      </Differentcontext>
    )
  }

  acess = () => {
    const {currentstatus} = this.state
    switch (currentstatus) {
      case apiStatus.success:
        return this.success()
      case apiStatus.inprogress:
        return this.progress()
      case apiStatus.failure:
        return this.failure()
      default:
        return null
    }
  }

  render() {
    const {finaldata} = this.state
    return (
      <Differentcontext.Consumer>
        {value => {
          const {backColor} = value
          return (
            <>
              <Header />
              <Bottom>
                <Leftsection />
                <Rightsectionoftrending
                  data-testid="gaming"
                  bgcolor1={backColor}
                >
                  {this.acess()}
                </Rightsectionoftrending>
              </Bottom>
            </>
          )
        }}
      </Differentcontext.Consumer>
    )
  }
}

export default Trending
