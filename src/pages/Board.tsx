import { FC } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useDeck } from "../hooks/useDeck";

const Board: FC<{}> = () => {
  const { deck } = useDeck(true);
  return (
    <>
      <section className='grid grid-rows-3 h-screen grid-flow-col gap-8 p-8'>
        {
          deck.filter((_, i) => i < 12).map((props, index) => <Card
            key={index}
            {...props} />)
        }
      </section>
      <nav>
        <Link to={"/deck"}>Deck</Link>
      </nav>
    </>
  )
}

export default Board