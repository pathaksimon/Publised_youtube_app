import {Link} from 'react-router-dom'
import Differentcontext from '../../context'
import Header from '../Header'

import {
  Rightsectionoftrending,
  Topbar,
  Par,
  ULU2,
  Lista34,
  Imageofprofile,
  Imaggecard,
  Detailscard,
  Heading,
  Paragraph,
  Nosavedcard,
  Nosavedimage,
  Nosavedhead,
  Nosavedpara,
  Bottom,
} from './styledComponents'

const Savedofcard = props => {
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
    <Differentcontext.Consumer>
      {value => {
        const {backColor} = value
        return (
          <Link to={`/blogs/${id}`} className="underline">
            <Lista34>
              <Imaggecard>
                <Imageofprofile src={thumbnailUrl} alt="video thumbnail" />
              </Imaggecard>
              <Detailscard>
                <Heading bgcolor1={backColor}>{description}</Heading>
                <Paragraph bgcolor1={backColor}>{title}</Paragraph>
                <Paragraph bgcolor1={backColor}>{name}</Paragraph>
                <Paragraph bgcolor1={backColor}>{publishedAt}</Paragraph>
                <Paragraph bgcolor1={backColor}>{viewCount}</Paragraph>
              </Detailscard>
            </Lista34>
          </Link>
        )
      }}
    </Differentcontext.Consumer>
  )
}

export default Savedofcard
