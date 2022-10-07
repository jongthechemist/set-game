import Peer, { DataConnection } from "peerjs"
import { useEffect, useState } from "react"

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

  useEffect(() => {
    const newPeer = defaultPeerId ? new Peer(defaultPeerId) : new Peer();

    newPeer.on('open', (id) => {
      setPeer(newPeer);
      setPeerId(id);
    });

    newPeer.on('connection', (c) => onConnection?.(c));

    newPeer.on('disconnected', () => {
      console.log("Peer disconnected. Attempt reconnection");
      newPeer.reconnect();
    });

    newPeer.on('close', () => {
      console.log('Peer closed.');
      cleanUp();
    });

    newPeer.on('error', (error) => {
      console.log("Peer error: ", error);
    });

  }, [])

  return {
    peer,
    peerId
  }
}