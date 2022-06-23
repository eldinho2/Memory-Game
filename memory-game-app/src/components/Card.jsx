export default function Card({ card, id, handleClick }) {

  const itemClass = card.stat ? " active " + card.stat : ""

  return (
    <div className={`rotateAnimation${itemClass}`}onClick={ () => handleClick(id) }>
      <img src={card.img} alt={card.id} className={`rotateAnimationIMG${itemClass}`}/>
    </div>
  )
}