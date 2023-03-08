import {BsFillBookmarkFill} from 'react-icons/bs'
import './MainHeader.css'
export default function MainHeader({text}) {
  return (
          <div className="about-header">
            <BsFillBookmarkFill className='about-header__icon'/>
              <p className='about-header__text'>{text}</p>
          </div>
  )
}
