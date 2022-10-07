import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import { useDeck } from "../hooks/useDeck";
import { publish, useHost } from "../hooks/useHost";
import { MessageType } from "../types/PeerMessage";

const Host: FC<{}> = () => {
  const navigate = useNavigate();
  const { hostId } = useParams();
  const { deck } = useDeck(true);

  const { host, peers } = useHost({
    defaultPeerId: hostId, onConnection: (peer) => {
      publish(peer, { type: MessageType.FullDeck, deck })
    }
  });

  useEffect(() => {
    if (host?.id) {
      if (hostId !== host.id) {
        navigate(host.id);
      }
    }
  }, [hostId, host?.id]);

  return (
    <main>
      <header>
        <h1>Host: {host?.id}</h1>
        <ul>
          {
            peers.map((p) => <li key={p.connectionId}>{p.connectionId}</li>)
          }
        </ul>
      </header>
      <section className='grid grid-rows-3 h-screen grid-flow-col gap-8 p-8'>
        {
          deck.filter((_, i) => i < 12).map((props, index) => <Card
            key={index}
            {...props} />)
        }
      </section>
    </main>
  )
}

export default Host