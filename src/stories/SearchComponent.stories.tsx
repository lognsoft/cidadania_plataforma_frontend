import { SearchComponent } from "@/components/features/search-component";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchComponent> = {
  title: "Components/SearchComponent",
  component: SearchComponent,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SearchComponent>;

export const Default: Story = {
  args: {},
};

export const Centered: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
