"use client";

import { initMoisesExtension } from "@moises.ai/extension";
import { Box, HeaderPanel, Flex } from "@moises.ai/design-system";
import { Cross1Icon } from "@moises.ai/design-system/icons";
import { useEffect } from "react";
import ExampleForm from "./form";

const useMoisesExtension = initMoisesExtension({
  id: "ui-kitchen-sink",
  name: "UI Kitchen Sink",
  description: "A comprehensive example extension for the Moises platform",
  icon: "🔌",
  author: "Moises Systems Inc",
  version: "1.0.0",
});

function ModalLayout({ children, moises, width, height, title }) {
  useEffect(() => {
    if (!moises) return;

    moises.ui.setPluginSize({ width, height });
  }, [width, height, moises]);

  return (
    <Box
      height="100vh"
      style={{
        height: "100vh",
        backgroundColor: "var(--gray-1)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        p="4"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "var(--neutral-2)",
        }}
      >
        <HeaderPanel title={title}>
          <HeaderPanel.Button
            onClick={() => {
              moises.ui.close();
            }}
          >
            <Cross1Icon />
          </HeaderPanel.Button>
        </HeaderPanel>
      </Box>
      <Box
        px="4"
        style={{
          flex: 1,
          overflowY: "auto",
          backgroundColor: "var(--neutral-2)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default function Page() {
  const { moises, isConnected } = useMoisesExtension();

  useEffect(() => {
    if (!isConnected) return;

    // Add extension to the footer menu
    moises.link(
      "footer:menu",
      { label: "Kitchen Sink", icon: "UserIcon" },
      () => {
        moises.ui.open();
      }
    );

    // Add extension to the track context menu
    moises.link("track:contextMenu", { label: "Alert Kitchen Sink" }, async ({ trackId }) => {
      moises.ui.alert({
        title: "Kitchen Sink",
        description: "Open the kitchen sink",
      });
    });

    moises.link("track:contextMenu", { label: "Open Kitchen Sink" }, async ({ trackId }) => {
      moises.ui.open()
    });

    // Add extension to the toolbar
    moises.link("toolbar:button", { label: "Kitchen Sink", icon: "UserIcon" }, async () => {
      moises.ui.confirm({
        title: "Kitchen Sink",
        description: "Open the kitchen sink",
      });
    });
  }, [isConnected, moises]);

  return (
    <ModalLayout
      moises={moises}
      height="600px"
      width="480px"
      title="Kitchen Sink"
    >
      <Flex direction="column">
        <ExampleForm moises={moises} />
      </Flex>
    </ModalLayout>
  );
}
