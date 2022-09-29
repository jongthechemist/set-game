import { FC } from "react";
import Card from "../components/Card";
import { useDeck } from "../hooks/useDeck";

const Deck: FC<{}> = () => {
  const { deck } = useDeck(true);
  return (<section className='grid grid-rows-3 h-screen grid-flow-col gap-8 p-8'>
    {
      deck.map((props, index) => <Card
        key={index}
        {...props} />)
    }
  </section>)
}

export default Deck