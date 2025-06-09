"use client";
import {
  Heading,
  Text,
  Flex,
  Button,
  Card,
  Box,
  Tabs,
} from "@moises.ai/design-system";
import {
  PlusIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
} from "@moises.ai/design-system/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Flex
      direction="column"
      gap="6"
      align="center"
      justify="center"
      style={{
        width: "100%",
        padding: "2rem",
      }}
    >
      <Flex direction="column" align="center" gap="4">
        <Image
          src="/moises-logo.svg"
          width={150}
          height={60}
          alt="Moises Logo"
        />
        <Heading as="h1" size="6">
          Moises Extensions Boilerplate
        </Heading>
        <Text as="p" size="2" color="gray">
          Create powerful Moises extensions with the Extensions and Design
          System
        </Text>
      </Flex>

      <Card style={{ width: "100%", maxWidth: "800px" }}>
        <Tabs.Root defaultValue="extensions">
          <Tabs.List>
            <Tabs.Trigger value="extensions">Extensions</Tabs.Trigger>
            <Tabs.Trigger value="components">Design System</Tabs.Trigger>
          </Tabs.List>

          <Box p="4">
            <Tabs.Content value="extensions">
              <Flex direction="column" gap="4">
                <Heading as="h2" size="4">
                  Moises Extensions
                </Heading>
                <Text as="p" size="2">
                  This boilerplate provides everything you need to build, test,
                  and deploy Moises extensions. Use the Extensions to integrate
                  with the Moises platform and enhance its capabilities.
                </Text>

                <Heading as="h3" size="3" mt="3">
                  Starter Template
                </Heading>
                <Text as="p" size="2">
                  Explore the included starter extension that demonstrates key
                  features:
                </Text>

                <Card style={{ width: "100%" }}>
                  <Flex direction="column" gap="2" p="3">
                    <Flex align="center" gap="2">
                      <Text as="span" size="4">
                        🔌
                      </Text>
                      <Heading as="h4" size="3">
                        Example Extension
                      </Heading>
                    </Flex>
                    <Text as="p" size="2">
                      A comprehensive extension template showing how to use the
                      Moises Extensions
                    </Text>
                    <Flex justify="end">
                      <Link href="/example-extension" passHref>
                        <Button as="a" size="2" variant="soft" color="cyan">
                          <Flex gap="1" align="center">
                            View Extension <ArrowRightIcon />
                          </Flex>
                        </Button>
                      </Link>
                    </Flex>
                  </Flex>
                </Card>

                <Flex justify="end" mt="2">
                  <Button
                    as="a"
                    href="https://design-system.moises.ai/?path=/docs/introduction--docs"
                    target="_blank"
                    variant="soft"
                    color="cyan"
                    size="2"
                  >
                    <Flex gap="1" align="center">
                      View Full Documentation <ExternalLinkIcon />
                    </Flex>
                  </Button>
                </Flex>
              </Flex>
            </Tabs.Content>

            <Tabs.Content value="components">
              <Flex direction="column" gap="3">
                <Heading as="h2" size="4">
                  Moises Design System
                </Heading>
                <Text as="p" size="2">
                  Build beautiful, consistent interfaces with the official
                  Moises Design System. This boilerplate includes all UI
                  components you need to create professional extensions.
                </Text>
                <Button
                  variant="soft"
                  color="cyan"
                  onClick={() => {
                    window.open(
                      "https://design-system.moises.ai/?path=/docs/introduction--docs",
                      "_blank"
                    );
                  }}
                >
                  <Flex gap="1" align="center">
                    View Documentation <ExternalLinkIcon />
                  </Flex>
                </Button>
              </Flex>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Card>

      <Text as="p" size="1" color="gray">
        Get started by editing src/app/page.js
      </Text>
    </Flex>
  );
}
