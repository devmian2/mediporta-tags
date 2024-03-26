import type { Meta, StoryObj } from "@storybook/react";

import Wrapper from "./index";

const meta: Meta<typeof Wrapper> = {
  component: Wrapper,
};

export default meta;
type Story = StoryObj<typeof Wrapper>;

export const Default: Story = {
  args: {
    children: "Wrapper content",
    sx: {
      backgroundColor: "primary.main",
      color: "primary.contrastText",
      padding: 2,
      borderRadius: 1,
    },
  },
};
