import './Service.css'
import MainHeader from '../MainHeader'
import ServicCard from './serviceCard/ServiceCard'
export default function Service() {
  return (
    <div className="service">
        <MainHeader text={"Services"}/>
        <div className="service__card-container">
            <ServicCard image={"public/img/UiUx.png"}  imageAlt={"UI& UX"} title={"ui / ux"} status={"( finished learning )"}/>
            <ServicCard image={"public/img/web-design.png"}  imageAlt={"Web design"} title={"web design"} status={"( finished learning )"}/>
            <ServicCard image={"public/img/web-settings.png"}  imageAlt={"back end"} title={"back end"} status={"( still learning )"}/>
            <ServicCard image={"public/img/browser.png"}  imageAlt={"Api"} title={"api"} status={"( still learning )"}/>
        </div>
    </div>
  )
}
