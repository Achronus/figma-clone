"use client";

import { ReactNode } from "react";
import { RoomProvider } from "@root/liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";

export function Room({ children }: { children: ReactNode }) {
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
      <ClientSideSuspense
        fallback={
          <div className="h-screen w-full flex justify-center items-center text-center text-white custom-cursor">
            <h1 className="text-2xl text-white">Loading...</h1>
          </div>
        }
      >
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
