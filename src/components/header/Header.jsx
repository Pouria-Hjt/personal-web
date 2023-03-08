import {BsFillMoonFill , BsFillSunFill} from 'react-icons/bs'
import './Header.css'
export default function Header() {
  return (
    <header className='header'>
        <p className="header__logo">Poriw</p>
        <div className="heaedr__theme">
          <BsFillMoonFill className='theme-moon'/>
          <BsFillSunFill className='theme-sun'/>
        </div>
    </header>
  )
}
