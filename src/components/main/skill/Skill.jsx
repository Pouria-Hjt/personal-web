import SkillBar from "./skillBar/SkillBar"
import MainHeader from "../MainHeader"
import './Skill.css'
export default function Skill() {
  return (
        <div className="skill">
            <MainHeader text={"skills"}/>
            <div className="skill__box">
                <SkillBar percent={95} langName={"Html"}/>
                <SkillBar percent={80} langName={"Css"}/>
                <SkillBar percent={60} langName={"Js"}/>
                <SkillBar percent={30} langName={"React"}/>
            </div>
        </div>
    )
}
