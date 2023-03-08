import './SkillBar.css'
export default function SkillBar({langName , percent}) {
    let style = {
        "--width": `${percent}%`
    }
  return (
        <div className="skillbar">
            <div className="skill__container">
                <div className="skill__container-name">{langName}</div>
                <div className="skill__container-percent">{percent}%</div>
            </div>
            <div className="skill__graph" style={style}></div>
        </div>
    )
}
