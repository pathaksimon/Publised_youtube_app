import {Link} from 'react-router-dom'
import {
  Lista34,
  Imaggecard,
  Detailscard,
  Imageofprofile,
  Heading,
  Paragraph,
  Gamehead,
} from './styledComponents'
import Differentcontext from '../../context'

const DetailsGamecard = props => {
  const {first} = props
  const {thumbnailUrl, title, viewCount, id} = first
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
                <Gamehead gamepara={backColor}>{title}</Gamehead>
                <Paragraph gamepara={backColor}>
                  {viewCount} Worldwide watching
                </Paragraph>
              </Detailscard>
            </Lista34>
          </Link>
        )
      }}
    </Differentcontext>
  )
}

export default DetailsGamecard
