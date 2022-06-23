import { useState } from "react";

import Card from "./Card";

const initialCards = [
  { id: 1, img: '/assets/html.png', stat: "" },
  { id: 1, img: '/assets/html.png', stat: "" },
  { id: 2, img: '/assets/css.png', stat: "" },
  { id: 2, img: '/assets/css.png', stat: "" },
  { id: 3, img: '/assets/js.png', stat: "" },
  { id: 3, img: '/assets/js.png', stat: "" },
  { id: 4, img: '/assets/scss.png', stat: "" },
  { id: 4, img: '/assets/scss.png', stat: "" },
  { id: 5, img: '/assets/react.png', stat: "" },
  { id: 5, img: '/assets/react.png', stat: "" },
  { id: 6, img: '/assets/vue.png', stat: "" },
  { id: 6, img: '/assets/vue.png', stat: "" },
  { id: 7, img: '/assets/angular.png', stat: "" },
  { id: 7, img: '/assets/angular.png', stat: "" },
  { id: 8, img: '/assets/nodejs.png', stat: "" },
  { id: 8, img: '/assets/nodejs.png', stat: "" }
];

export default function Cards() {
  const [cards, setCards] = useState(initialCards.sort(() => Math.random() - 0.5));
  const [prev, setPrev] = useState(-1)

  function check(current){
      if(cards[current].id === cards[prev].id){
          cards[current].stat = "correct"
          cards[prev].stat = "correct"
          setCards([...cards])
          setPrev(-1)
      }else{
          cards[current].stat = "wrong"
          cards[prev].stat = "wrong"
          setCards([...cards])
          setTimeout(() => {
              cards[current].stat = ""
              cards[prev].stat = ""
              setCards([...cards])
              setPrev(-1)
          }, 1000)
      }
  }

  function handleClick(id){
      if(prev === -1){
          cards[id].stat = "active"
          setCards([...cards])
          setPrev(id)
      }else{
          check(id)
      }
  }

  function resetGame () {
    document.location.reload(true);
  }

  return (
    <>
    <div className="h-96 w-96 grid grid-cols-4 grid-rows-4 gap-1">
      {cards.map((card, index) => (
        <Card key={index} card={card} id={index} handleClick={ handleClick } />
      ))}
    </div>
    <div className="flex items-center justify-center m-14 border-4">
      <button type="button" className="" onClick={ () => resetGame()}>Reset Game</button>
    </div>
    </>
  )
}