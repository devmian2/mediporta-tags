import type { Meta, StoryObj } from "@storybook/react";

import TagsTable from "./index";
import { generateDummyTags } from "./index.utils";

const meta: Meta<typeof TagsTable> = {
  component: TagsTable,
};

export default meta;
type Story = StoryObj<typeof TagsTable>;

export const Default: Story = {
  args: {
    tags: generateDummyTags(30),
    options: {
      contentColumnWidth: 500,
      countColumnWidth: 500,
    },
  },
};
