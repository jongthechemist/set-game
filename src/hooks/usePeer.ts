import Peer, { DataConnection } from "peerjs"
import { useEffect, useState } from "react"
import { useCallbackRef } from "./useCallbackRef";

export const usePeer = (props: {
  defaultPeerId?: string,
  onConnection?: (connection: DataConnection) => void,
  onClose?: () => void,
}) => {
  const { defaultPeerId, onConnection, onClose } = props;
  const [peer, setPeer] = useState<Peer>();
  const [peerId, setPeerId] = useState<string>();

  const cleanUp = () => {
    if (peer) {
      peer.disconnect();
      peer.destroy();
    }
    setPeer(undefined);
    setPeerId(undefined);
    onClose?.();
  }

  const savedCleanup = useCallbackRef(cleanUp);
  const savedOnConnection = useCallbackRef(onConnection);

  useEffect(() => {
    const newPeer = defaultPeerId ? new Peer(defaultPeerId) : new Peer();

    newPeer.on('open', (id) => {
      setPeer(newPeer);
      setPeerId(id);
    });

    newPeer.on('connection', (c) => savedOnConnection.current?.(c));

    newPeer.on('disconnected', () => {
      console.log("Peer disconnected. Attempt reconnection");
      newPeer.reconnect();
    });

    newPeer.on('close', () => {
      console.log('Peer closed.');
      savedCleanup.current();
    });

    newPeer.on('error', (error) => {
      console.log("Peer error: ", error);
    });

  }, [savedCleanup, savedOnConnection, defaultPeerId])

  return {
    peer,
    peerId
  }
}