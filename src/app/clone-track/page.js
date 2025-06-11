"use client";

import { useEffect } from "react";
import { initMoisesExtension } from "@moises.ai/extension";

const useMoisesExtension = initMoisesExtension({
  id: "clone-track",
  name: "Clone Track",
  description: "Clone selected audio tracks",
  version: "1.0.0",
  author: "You name goes here"
});

export default function Page() {
  const { moises, isConnected } = useMoisesExtension();

  useEffect(() => {
    // First, we must check if isConnected is true before making any API calls
    if (!isConnected) return;

    // Use moises.link to connect with the DAW and create context menu items
    moises.link.trackContextMenu({ label: "Clone track" }, async ({ trackId }) => {
      // Get the track data using the track ID
      const track = await moises.track.get({ trackId });
      
      // Create a new track using the original track's data
      await moises.track.create({ 
        arrayBuffer: track.arrayBuffer, 
        name: `Clone of ${track.name}` 
      });
    })
  }, [moises, isConnected]);

  return null
}