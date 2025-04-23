"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
  const params = useParams();
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_0uesYypY_qQsquJ79nD6Ri97jC9ZM0pviF7sNYOG99P1ISOzusYFGhYpTCThuhJE"
      }
    >
      {/* /*<LiveblocksProvider throttle={16} authEndpoint="/api/liveblocks-auth">*/}
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
