"use client";

import { useEffect } from "react";
import { initMoisesExtension } from "@moises.ai/extension";

const useMoisesExtension = initMoisesExtension({
  id: "clone-track",
  name: "Clone Track",
  description: "Clone selected audio tracks",
  icon: "🎵",
  version: "1.0.0",
  author: "Moises Systems Inc"
});

export default function Page() {
  const { moises, isConnected } = useMoisesExtension();

  useEffect(() => {
    // First, we must check if isConnected is true before making any API calls
    if (!isConnected) return;

    // Use moises.link to connect with the DAW and create context menu items
    moises.link("track:contextMenu", { label: "Clone track" }, async ({ trackId }) => {
      // Get the track data using the track ID
      const track = await moises.track.get({ trackId });
      
      // Create a new track using the original track's data
      await moises.track.create({ 
        arrayBuffer: track.arrayBuffer, 
        name: `${track.name} (Clone)` 
      });
    })
  }, [moises, isConnected]);

  return null
}