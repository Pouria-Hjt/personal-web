import './Main.css'
import About from './about/About'
import Service from './services/Service'
import Skill from './skill/Skill'
import Social from './social/Social'
export default function Main() {
  return (
        <main className='main'>
            <About/>
            <Service/>
            <Skill/>
            <Social/>
        </main>
    )
}
