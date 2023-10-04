import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import Differentcontext from '../../context'
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
  Head123,
  Covering,
} from './styledComponents'

const Trendofcard = props => {
  const {first} = props
  const {
    channel,
    thumbnailUrl,
    title,
    viewCount,
    description,
    publishedAt,
    id,
  } = first
  const {name, profileImageurl, subscriberCount} = channel
  return (
    <Differentcontext>
      {value => {
        const {backColor} = value
        return (
          <Link to={`/videos/${id}`} className="underline">
            <Lista34>
              <Imaggecard>
                <Imageofprofile src={thumbnailUrl} alt="video thumbnail" />
              </Imaggecard>
              <Detailscard>
                <Head123 color321={backColor}>{title}</Head123>
                <Paragraph color321={backColor}>{name}</Paragraph>
                <Paragraph color321={backColor}>{publishedAt}</Paragraph>
                <Paragraph color321={backColor}>{viewCount} Views</Paragraph>
              </Detailscard>
            </Lista34>
          </Link>
        )
      }}
    </Differentcontext>
  )
}

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
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
      <>
        <ULU2>
          {finaldata.map(each4 => (
            <Trendofcard first={each4} key={each4.id} />
          ))}
        </ULU2>
      </>
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
                  bgcolor1={backColor}
                  data-testid="trending"
                >
                  <Toppy toppies={backColor}>
                    <Covering covered={backColor}>
                      <AiFillFire fontSize={40} color="red" />
                    </Covering>
                    <Heading headsoshead={backColor}>Trending</Heading>
                  </Toppy>
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
