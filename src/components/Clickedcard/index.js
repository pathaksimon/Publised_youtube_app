import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike, BiSave} from 'react-icons/bi'

import Header from '../Header'
import './index.css'
import Failureview from '../Failureview'

import Leftsection from '../Leftsection'
import Differentcontext from '../../context'

import {
  Clickedcardright,
  VideoPlayer,
  Bottomvideocard,
  Bottomfirst1,
  Bottomsecond1,
  Bottomleft,
  Bottomright,
  Likebutton,
  Dislikebutton,
  Savebutton,
  Hori,
  Belowhorifirst,
  Belowhorisecond,
  Thumbnailholder,
  Imageofprofile,
  Updown,
  Closingpara,
  Bottom,
  Paragraph12,
  Paragraph1212,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class Clickedcard extends Component {
  state = {
    newData: {},
    channel1: {},
    liked: false,
    disliked: false,
    status1: apiStatus.initial,
    saved: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    this.setState({status1: apiStatus.inprogress})
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const api = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(api, options)

    if (response.ok === true) {
      const data = await response.json()
      const updated = [data.video_details].map(each2 => ({
        channel: {
          name: each2.channel.name,
          profileImageurl: each2.channel.profile_image_url,
          subscriberCount: each2.channel.subscriber_count,
        },
        description: each2.description,
        id: each2.id,
        publishedAt: each2.published_at,
        thumbnailUrl: each2.thumbnail_url,
        title: each2.title,
        videoUrl: each2.video_url,
        viewCount: each2.view_count,
      }))
      this.setState({newData: updated[0]})
      this.setState({channel1: updated[0].channel})
      this.setState({status1: apiStatus.success})
    } else {
      this.setState({status1: apiStatus.failure})
    }
  }

  likebutton = () => {
    this.setState({liked: true})
    this.setState({disliked: false})
  }

  unlikebutton = () => {
    this.setState({liked: false})
    this.setState({disliked: true})
  }

  render() {
    const {newData, channel1, liked, disliked, saved} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      description,
      channel,
      id,
    } = newData
    const {profileImageurl, name, subscriberCount} = channel1

    return (
      <Differentcontext>
        {value => {
          const {backColor, clickingonsave, savedbutton, saveddata} = value

          const saving = () => {
            clickingonsave(newData)
          }

          let isSaved
          const index = saveddata.findIndex(
            eachVideo => eachVideo.id === newData.id,
          )
          if (index === -1) {
            isSaved = false
          } else {
            isSaved = true
          }

          const acess123 = () => {
            if (isSaved) {
              return 'Saved'
            }
            return 'Save'
          }

          const success = () => (
            <>
              <VideoPlayer>
                <ReactPlayer className="player" url={videoUrl} />
              </VideoPlayer>
              <Bottomvideocard>
                <Bottomfirst1>
                  <Paragraph1212 bgcolor1={backColor}>{title}</Paragraph1212>
                </Bottomfirst1>
                <Bottomsecond1>
                  <Bottomleft>
                    <Paragraph12 bgcolor1={backColor}>{viewCount}</Paragraph12>
                    <Paragraph12 bgcolor1={backColor}>
                      {publishedAt}
                    </Paragraph12>
                  </Bottomleft>
                  <Bottomright>
                    <Likebutton back={liked} onClick={this.likebutton}>
                      <BiLike fontSize={20} margin={5} />
                      Like
                    </Likebutton>
                    <Dislikebutton back1={disliked} onClick={this.unlikebutton}>
                      <BiDislike fontSize={20} />
                      Dislike
                    </Dislikebutton>
                    <Savebutton back2={isSaved} onClick={saving}>
                      <BiSave />
                      {acess123()}
                    </Savebutton>
                  </Bottomright>
                </Bottomsecond1>
                <Hori />
                <Belowhorifirst>
                  <Thumbnailholder>
                    <Imageofprofile src={profileImageurl} />
                    <Updown>
                      <Closingpara>
                        <Paragraph12 bgcolor1={backColor}>{name}</Paragraph12>
                      </Closingpara>
                      <Closingpara>
                        <Paragraph12 bgcolor1={backColor}>
                          {subscriberCount}
                        </Paragraph12>
                      </Closingpara>
                    </Updown>
                  </Thumbnailholder>
                </Belowhorifirst>
                <Belowhorisecond>
                  <Paragraph12 bgcolor1={backColor}>{description}</Paragraph12>
                </Belowhorisecond>
              </Bottomvideocard>
            </>
          )

          const progress = () => (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
          )

          const failure = () => <Failureview />

          const acess = () => {
            const {status1} = this.state
            switch (status1) {
              case apiStatus.success:
                return success()
              case apiStatus.inprogress:
                return progress()
              case apiStatus.failure:
                return failure()
              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <Bottom>
                <Leftsection />

                <Clickedcardright
                  data-testid="videoItemDetails"
                  bgcolor1={backColor}
                >
                  {acess()}
                </Clickedcardright>
              </Bottom>
            </>
          )
        }}
      </Differentcontext>
    )
  }
}

export default Clickedcard
