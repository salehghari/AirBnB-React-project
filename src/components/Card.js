export default function Card(props) {
  let badgeText;
    if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
    }
  return (
    <div className="card">
      {badgeText && <div className="cardBadge">{badgeText}</div>}
      <img src={`/images/${props.coverImg}`} className="cardImage" />
      <div className="cardDetails">
        <div className="cardStats">
            <img src="images/star.png" className="cardStar" />
            <span>{props.stats.rating}</span>
            <span className="gray">({props.stats.reviewCount}) • </span>
            <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
      </div>
    </div>
  )
}