import './About.css'
import MainHeader from '../MainHeader'
export default function About() {
  return (
        <div className="about">
            <MainHeader text={"about me"}/>
            <div className="about__box">
                <p className="about__box-text">Hello <br />
                                                I'm Pouria , I'm a Web designer, Py programmer and trying to learn <a href="https://golang.org">GoLang</a> . <br />
                                                if you want to know me more you can contact me with my <a href="#social">Socials</a> 

                </p>
            </div>
        </div>  
    )
}
