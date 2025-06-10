"use client";

import {
  Heading,
  Button,
  Flex,
} from "@moises.ai/design-system";

export default function ExampleForm({ moises }) {
  return (
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
  );
}
