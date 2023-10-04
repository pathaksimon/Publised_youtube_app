import {Link} from 'react-router-dom'
import {GiSaveArrow} from 'react-icons/gi'
import Differentcontext from '../../context'

import Header from '../Header'
import Savedofcard from '../Savedofcard'

import {
  Rightsectionoftrending,
  Topbar,
  Par,
  ULU2,
  Lista34,
  Imageofprofile,
  Imaggecard,
  Detailscard,
  Heading111,
  Paragraph,
  Nosavedcard,
  Nosavedimage,
  Nosavedhead,
  Nosavedpara,
  Bottom,
  Covering,
} from './styledComponents'

import Leftsection from '../Leftsection'

const Savedvideos = () => (
  <Differentcontext.Consumer>
    {value => {
      const {saveddata, backColor} = value
      console.log([saveddata])

      const acess = () => {
        if (saveddata.length === 0) {
          return (
            <Nosavedcard>
              <Nosavedimage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <Nosavedhead aparacolor12={backColor}>
                No saved videos found
              </Nosavedhead>
              <Nosavedpara aparacolor13={backColor}>
                Save your videos by clicking a button
              </Nosavedpara>
            </Nosavedcard>
          )
        }
        return (
          <>
            <Topbar toppies={backColor}>
              <Covering covered={backColor}>
                <GiSaveArrow fontSize={40} color="red" />
              </Covering>
              <Heading111 bgcolor121={backColor}>Saved Videos</Heading111>
            </Topbar>
            <ULU2>
              {saveddata.map(each4 => (
                <Savedofcard first={each4} key={each4.id} />
              ))}
            </ULU2>
          </>
        )
      }

      return (
        <>
          <Header />
          <Bottom>
            <Leftsection />
            <Rightsectionoftrending
              data-testid="savedVideos"
              bgcolor1={backColor}
            >
              {acess()}
            </Rightsectionoftrending>
          </Bottom>
        </>
      )
    }}
  </Differentcontext.Consumer>
)

export default Savedvideos
