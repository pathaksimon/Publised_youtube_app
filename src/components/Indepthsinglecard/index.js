import './index.css'

import {Link} from 'react-router-dom'
import {
  Lista12,
  Toplistacard,
  Bottomlistacard,
  Cardimage,
  Bottomfirst1,
  Bottomsecond2,
  Prara,
} from './styledComponents'
import Differentcontext from '../../context'

const Indepthsinglecard = props => {
  const {first1} = props
  const {channel, thumbnailUrl, title, viewCount, publishedAt, id} = first1
  const {name, profilImageUrl} = channel
  return (
    <Differentcontext>
      {value => {
        const {backColor} = value
        return (
          <Lista12 bgcolor1={backColor}>
            <Link to={`/videos/${id}`} className="underline">
              <Toplistacard>
                <Cardimage src={thumbnailUrl} alt="video thumbnail" />
              </Toplistacard>
              <Bottomlistacard>
                <Bottomfirst1 src={profilImageUrl} alt="channel logo" />
                <Bottomsecond2>
                  <Prara bgcolor1={backColor}>{title}</Prara>
                  <Prara bgcolor1={backColor}>{name}</Prara>
                  <Prara bgcolor1={backColor}>{viewCount}</Prara>
                  <Prara bgcolor1={backColor}>{publishedAt}</Prara>
                </Bottomsecond2>
              </Bottomlistacard>
            </Link>
          </Lista12>
        )
      }}
    </Differentcontext>
  )
}

export default Indepthsinglecard
