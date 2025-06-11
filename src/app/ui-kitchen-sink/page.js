"use client";

import { useEffect } from "react";
import { initMoisesExtension } from "@moises.ai/extension";
import { Flex, Heading, Button } from "@moises.ai/design-system";

const useMoisesExtension = initMoisesExtension({
  id: "ui-kitchen-sink",
  name: "UI Kitchen Sink",
  description: "A comprehensive example extension for the Moises platform",
  author: "You name goes here",
  version: "1.0.0",
});

export default function Page() {
  const { moises, isConnected, SidebarLayout } = useMoisesExtension();

  useEffect(() => {
    if (!isConnected) return;

    // Add extension to the footer menu
    moises.link.footerButton({ label: "Kitchen Sink", icon: "UserIcon" }, () => {
      moises.ui.open();
    });

    // Add extension to the track context menu
    moises.link.trackContextMenu({ label: "Alert Kitchen Sink" }, async ({ trackId }) => {
      moises.ui.alert({
        title: "Kitchen Sink",
        description: `Open the kitchen sink for track ${trackId}`,
      });
    });

    moises.link.trackContextMenu({ label: "Open Kitchen Sink" }, async ({ trackId }) => {
      moises.ui.open()
    });

    // Add extension to the toolbar
    moises.link.tollbarButton({ label: "Kitchen Sink", icon: "UserIcon" }, async () => {
      moises.ui.confirm({
        title: "Kitchen Sink",
        description: "Open the kitchen sink",
      });
    });
  }, [isConnected, moises]);

  return (
    <SidebarLayout
      width="600"
      title="Kitchen Sink"
    >
      <Flex direction="column">
        <Flex direction="column" gap="5">
          <Heading as="h2" size="3">
            Example Actions
          </Heading>

          <Button color="cyan" onClick={() => moises.ui.alert({
            title: "Hello",
            description: "Hello from the extension",
          })}>
            Alert
          </Button>

          <Button color="cyan" onClick={() => moises.ui.close()}>
            Close
          </Button>

          <Button color="cyan" onClick={() => moises.ui.confirm({
            title: "Hello",
            description: "Hello from the extension",
          })}>
            Confirm
          </Button>

          <Button color="cyan" onClick={() => moises.ui.progress({
            title: "Progress",
            duration: 1000,
          })}>
            Progress
          </Button>

          <Button color="cyan" onClick={() => moises.ui.prompt({
            title: "Prompt",
            label: "Write your prompt here"
          })}>
            Prompt
          </Button>
        </Flex>
      </Flex>
    </SidebarLayout>
  );
}
