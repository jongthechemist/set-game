import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useHost } from "../hooks/useHost";
import { Deck } from "../types/Game";
import { MessageType, PeerMessage } from "../types/PeerMessage";

const Game: FC<{}> = () => {
  const { hostId } = useParams();
  const { host } = useHost({});
  const [gameId, setGameId] = useState("");
  const [deck, setDeck] = useState<Deck>();

  useEffect(() => {
    if (hostId && host?.id) {
      console.log("Connecting ..." + hostId);
      const conn = host.connect(hostId, { reliable: true });
      conn.on('open', () => {
        console.log("Connected to " + conn.peer);
        setGameId(conn.peer);
        conn.on('data', (data) => {
          const message = data as PeerMessage;
          if (message.type === MessageType.FullDeck) {
            setDeck(message.deck);
          }
        });
      });
      conn.on('close', () => {
        console.log("Connection closed.")
      })
      return () => {
        conn.close();
      }
    }
  }, [host, hostId]);

  return (
    <article>
      <header>ID: {host?.id}</header>
      <header>Game ID: {gameId}</header>
      <section className='grid grid-rows-3 h-screen grid-flow-col gap-8 p-8'>
        {
          deck?.filter((_, i) => i < 12).map((props, index) => <Card
            key={index}
            {...props} />)
        }
      </section>
    </article>
  )
}

export default Game