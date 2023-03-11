import './Service.css'
import MainHeader from '../MainHeader'
import ServicCard from './serviceCard/ServiceCard'
export default function Service() {
  return (
    <div className="service">
        <MainHeader text={"Services"}/>
        <div className="service__card-container">
            <ServicCard image={"https://s27.picofile.com/file/8460847326/UiUx.png"}  imageAlt={"UI& UX"} title={"ui / ux"} status={"( finished learning )"}/>
            <ServicCard image={"https://s26.picofile.com/file/8460847334/web_design.png"}  imageAlt={"Web design"} title={"web design"} status={"( finished learning )"}/>
            <ServicCard image={"https://s26.picofile.com/file/8460847342/web_settings.png"}  imageAlt={"back end"} title={"back end"} status={"( still learning )"}/>
            <ServicCard image={"https://s26.picofile.com/file/8460847292/browser.png"}  imageAlt={"Api"} title={"api"} status={"( still learning )"}/>
        </div>
    </div>
  )
}
