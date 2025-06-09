"use client";

import { useState } from "react";
import {
  Text,
  Card,
  Heading,
  Button,
  Select,
  Flex,
  Switch,
} from "@moises.ai/design-system";
import { PlusIcon } from "@moises.ai/design-system/icons";

export default function ExampleForm({ moises }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "option1",
    enabled: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    //  Example of an extension action
    setIsLoading(true);
    setMessage("");

    moises.ui.alert({
      title: "Hello",
      description: "Hello from the extension",
    });

    try {
      // Simulate API call or action
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage("Action completed successfully!");
      console.log("Extension processing:", formData);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }

    console.log("Extension processing:", formData);
  };

  return (
    <Card>
      <Flex direction="column" gap="5" p="3">
        <Heading as="h2" size="3">
          Extension Controls
        </Heading>

        <Select
          title="Options"
          items={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
          size="2"
          onChange={(value) => handleChange("type", value)}
          defaultValue="option1"
          variant="soft"
        />

        <Flex align="center" justify="between">
          <Text as="label" size="2" weight="bold">
            Enable Feature
          </Text>
          <Switch
            checked={formData.enabled}
            onCheckedChange={(checked) => handleChange("enabled", checked)}
          />
        </Flex>

        <Button
          onClick={handleSubmit}
          disabled={!formData.enabled}
          loading={isLoading}
          color="cyan"
        >
          <PlusIcon /> Submit
        </Button>

        {message && (
          <Text color={message.includes("Error") ? "red" : "green"} size="2">
            {message}
          </Text>
        )}
      </Flex>
    </Card>
  );
}
