import './ServiceCard.css'
export default function ServiceCard({image ,imageAlt, title , status}) {
  return (
        <div className="card">
            <img src={image} alt={imageAlt} className="card__image"/>
            <h3 className="card__title">{title}</h3>
            <p className="card__status">{status}</p>
        </div>
    )
}
