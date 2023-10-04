import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import {IoCloseSharp} from 'react-icons/io5'

import Loader from 'react-loader-spinner'
import Header from '../Header'
import Indepthsinglecard from '../Indepthsinglecard'
import Failureview from '../Failureview'
import Sucessfailure from '../Sucessfailure'
import Leftsection from '../Leftsection'

import {
  Homepage,
  Homesecondcard,
  Topimagebackground,
  Topfirst,
  Topsecond,
  Crossbutton,
  UL,
  Searchcard,
  Input21,
  Searchbutton,
  TOP,
  BOTTOM,
  Immage,
  Agpara,
  Bannerbutton,
} from './styledComponents'
import Differentcontext from '../../context'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    backgroudColorClicked: false,
    crossclick: false,
    searching: '',
    finaldata: [],
    currentstatus: apiStatus.initial,
    whatisinput: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const {searching} = this.state
    const jwtToken = Cookies.get('jwt_token')
    this.setState({currentstatus: apiStatus.inprogress})
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searching}`
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
        channel: {
          name: each.channel.name,
          profilImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
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

  clickProp = () => {
    const {backgroudColorClicked} = this.state
    this.setState(prevState => ({
      backgroudColorClicked: !prevState.backgroudColorClicked,
    }))
  }

  toggleBackground = () => {
    const {backgroudColorClicked} = this.state

    if (backgroudColorClicked) {
      return 'toggle-background-black'
    }
    return 'toggle-background-white'
  }

  crossClick = () => {
    this.setState({crossclick: true})
  }

  Searchbuttonclick = () => {
    const {whatisinput} = this.state
    this.setState({searching: whatisinput}, this.getProducts)
  }

  searchange = event => {
    this.setState({whatisinput: event.target.value})
  }

  suces = () => {
    this.setState({searching: ''}, this.getProducts)
  }

  success = () => {
    const {crossclick, finaldata} = this.state

    if (finaldata.length === 0) {
      return <Sucessfailure suces={this.suces} />
    }
    return (
      <>
        <UL>
          {finaldata.map(each1 => (
            <Indepthsinglecard first1={each1} key={each1.id} />
          ))}
        </UL>
      </>
    )
  }

  progress = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  failure = () => <Failureview fail={this.suces} />

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
    const {crossclick, finaldata} = this.state
    console.log(finaldata)
    return (
      <Differentcontext.Consumer>
        {value => {
          const {backColor} = value

          return (
            <>
              <Header />

              <BOTTOM bgcolor1={backColor}>
                <Leftsection />
                <Homepage bgcolor1={backColor} data-testid="home">
                  <Homesecondcard data-testid="banner">
                    <Topimagebackground cross={crossclick}>
                      <Topsecond>
                        <Topfirst>
                          <Immage
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                          <Agpara>
                            Buy Nxt Watch Premium Prepaid plans with UPI{' '}
                          </Agpara>
                          <Bannerbutton>GET IT NOW</Bannerbutton>
                        </Topfirst>
                        <Crossbutton
                          data-testid="close"
                          onClick={this.crossClick}
                        >
                          <IoCloseSharp />
                        </Crossbutton>
                      </Topsecond>
                    </Topimagebackground>
                    <Searchcard>
                      <Input21 onChange={this.searchange} type="search" />
                      <Searchbutton
                        data-testid="searchButton"
                        onClick={this.Searchbuttonclick}
                      >
                        <BsSearch />
                      </Searchbutton>
                    </Searchcard>

                    {this.acess()}
                  </Homesecondcard>
                </Homepage>
              </BOTTOM>
            </>
          )
        }}
      </Differentcontext.Consumer>
    )
  }
}

export default Home
