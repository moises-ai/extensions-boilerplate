"use client";

import {
  Heading,
  Text,
  Flex,
  IconButton,
  Card,
} from "@moises.ai/design-system";

import { CopyIcon } from "@moises.ai/design-system/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const extensions = [
    { name: 'clone-track', path: '/clone-track' },
    { name: 'ui-kitchen-sink', path: '/ui-kitchen-sink' }
  ];

  const getExtensionUrl = (path) => {
    if (typeof window !== 'undefined' && window.location) {
      return `${window.location.origin}${path}`;
    }
    return `http://localhost:3000${path}`;
  };

  const copyToClipboard = (path) => {
    if (typeof window !== 'undefined' && window.location) {
      navigator.clipboard.writeText(`${window.location.origin}${path}`);
    }
  };

  return (
    <Flex
      direction="column"
      gap="6"
      align="center"
      justify="center"
      mt="6"
    >
      <Flex direction="column" align="center" gap="4">
        <Image src="/moises-logo.svg" width={150} height={60} alt="Moises Logo" />
        <Heading as="h1" size="6">
          Moises Extensions Boilerplate
        </Heading>
      </Flex>
      <Card style={{ width: "100%", maxWidth: "800px" }}>
        <Flex direction="column" gap="4" style={{ padding: "1.5rem" }}>
          <Heading as="h2" size="4">
            Usage
          </Heading>
          <Text as="p" size="2">
            To start using the extensions, follow these steps:
          </Text>
          <Flex direction="column" gap="3">
            <Text as="p" size="2">
              1. Go to <strong>Moises Studio</strong>
            </Text>
            <Text as="p" size="2">
              2. Click the <strong>session content menu</strong>
            </Text>
            <Text as="p" size="2">
              3. Select <strong>"Manage Extensions"</strong>
            </Text>
            <Text as="p" size="2">
              4. Install the following extensions:
            </Text>
          </Flex>
          <Flex direction="column" gap="2">
            {extensions.map((extension) => (
              <Card key={extension.name}>
                <Flex justify="between" gap="2">
                  <Text
                    as="code"
                    size="2"
                    color="gray"
                    style={{ flex: "1" }}
                  >
                    {getExtensionUrl(extension.path)}
                  </Text>
                  <IconButton
                    size="1"
                    variant="ghost"
                    onClick={() => copyToClipboard(extension.path)}
                  >
                    <CopyIcon size="14" />
                  </IconButton>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>
      </Card>
      <Text as="p" size="1" color="gray">
        Refer to the <Link href="https://extensions.moises.ai/">Moises Extensions documentation</Link> for more information.
      </Text>
    </Flex>
  );
}
