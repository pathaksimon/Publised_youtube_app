import './index.css'

import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {GiSaveArrow} from 'react-icons/gi'
import {useState} from 'react'
import {
  Homefirstcard,
  Hometop,
  Homebottom,
  ULL,
  LI,
  Bottomfirst,
  Imageicon,
  Paragraphs,
  Heada,
  LEFTY,
} from './styledComponents'
import Differentcontext from '../../context'

const Leftsection = () => (
  <Differentcontext.Consumer>
    {value => {
      const {backColor, changeTab, active} = value

      const first2 = () => {
        changeTab('Home')
        localStorage.setItem('first', 'Home')
      }

      const second2 = () => {
        changeTab('Trending')
        localStorage.setItem('first', 'Trending')
      }

      const third2 = () => {
        changeTab('Gaming')
        localStorage.setItem('first', 'Gaming')
      }

      const fourth2 = () => {
        changeTab('Saved')
        localStorage.setItem('first', 'Saved')
      }

      const mixi = () => {
        if (active === 'Home') {
          return 'whity'
        }
        return ''
      }

      const mixi1 = () => {
        if (active === 'Trending') {
          return 'whity'
        }
        return ''
      }

      const mixi2 = () => {
        if (active === 'Gaming') {
          return 'whity'
        }
        return ''
      }

      const mixi3 = () => {
        if (active === 'Saved') {
          return 'whity'
        }
        return ''
      }

      return (
        <Homefirstcard bgcolor1={backColor}>
          <Hometop>
            <ULL>
              <Link className="underline" to="/" activeClassName="active-link">
                <LI onClick={first2} className={mixi()}>
                  {' '}
                  <AiFillHome color={backColor ? 'white' : 'black'} />
                  <LEFTY bgcolor1={backColor}>Home</LEFTY>
                </LI>
              </Link>

              <Link
                className="underline"
                to="/trending"
                activeClassName="active-link"
              >
                <LI onClick={second2} className={mixi1()}>
                  {' '}
                  <AiFillFire color={backColor ? 'white' : 'black'} />
                  <LEFTY bgcolor1={backColor}>Trending</LEFTY>
                </LI>
              </Link>

              <Link
                className="underline"
                to="/gaming"
                activeClassName="active-link"
              >
                <LI onClick={third2} className={mixi2()}>
                  <SiYoutubegaming color={backColor ? 'white' : 'black'} />

                  <LEFTY bgcolor1={backColor}>Gaming</LEFTY>
                </LI>
              </Link>

              <Link
                className="underline"
                to="/savedvideos"
                activeClassName="active-link"
              >
                <LI onClick={fourth2} className={mixi3()}>
                  <GiSaveArrow color={backColor ? 'white' : 'black'} />

                  <LEFTY bgcolor1={backColor}>Saved Videos</LEFTY>
                </LI>
              </Link>
            </ULL>
          </Hometop>
          <Homebottom>
            <Bottomfirst>
              <Paragraphs bgcolor1={backColor}>CONTACT US</Paragraphs>
            </Bottomfirst>
            <Bottomfirst>
              <Imageicon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                alt="facebook logo"
              />
              <Imageicon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Imageicon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
            </Bottomfirst>

            <Bottomfirst>
              <Paragraphs bgcolor1={backColor}>
                Enjoy! Now to see your channels and recommendations!
              </Paragraphs>
            </Bottomfirst>
          </Homebottom>
        </Homefirstcard>
      )
    }}
  </Differentcontext.Consumer>
)

export default Leftsection
