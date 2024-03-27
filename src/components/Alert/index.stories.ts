import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "@mui/material";

const meta: Meta<typeof Alert> = {
  component: Alert,
  argTypes: {
    severity: {
      options: ["info", "error", "success", "warning"],
      control: { type: "select" },
    },
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    severity: "info",
    children: "Alert content",
    sx: {
      width: "100%",
    },
  },
};
