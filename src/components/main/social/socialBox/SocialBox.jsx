import './SocialBox.css'

export default function SocialBox({href= "#" , children}) {
  return (
        <div className="socialbox">
            <a href={href}>
                 {children}
            </a>
        </div>
    )
}

