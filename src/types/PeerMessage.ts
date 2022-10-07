import { CardProps } from "./CardProps";

export const MessageType = {
  FullDeck: "FULL_DECK" as const
}

type FullDeckMessage = {
  type: typeof MessageType.FullDeck,
  deck: CardProps[],
}

export type PeerMessage = FullDeckMessage;