import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "@mui/material";

const meta: Meta<typeof TextField> = {
  component: TextField,
  argTypes: {
    type: {
      options: ["text", "number"],
      control: { type: "radio" },
    },
    label: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    type: "text",
    label: "Label",
    sx: {
      width: 300,
    },
  },
};
3