import Peer, { DataConnection } from "peerjs";
import { useState } from "react";
import { PeerMessage } from "../types/PeerMessage";
import { usePeer } from "./usePeer";

export const publish = (connection: DataConnection, data: PeerMessage) => {
  console.log("publishing to", connection.connectionId, data.type);
  connection.send(data);
}

export const useHost = (props: {
  defaultPeerId?: string,
  onConnection?: (connection: DataConnection) => void
}) => {

  const { defaultPeerId, onConnection } = props;

  const [peers, setPeers] = useState<DataConnection[]>([]);

  const { peer: host, peerId: hostId } = usePeer({
    defaultPeerId,
    onConnection: (connection) => {

      // Remove peer when connection closes
      connection.on('close', () => {
        setPeers(peers => peers.filter(peer => peer !== connection));
      });

      connection.on('open', () => {
        onConnection?.(connection);
      });

      setPeers(p => [...p, connection]);

    },
    onClose: () => setPeers([])
  });

  const publish = (data: PeerMessage) => {
    peers.forEach((peer) => peer.send(data));
  }

  return {
    hostId,
    host,
    peers,
    publish,
  }
}