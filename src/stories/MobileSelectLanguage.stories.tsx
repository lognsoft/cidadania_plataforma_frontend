import { MobileSelectLanguage } from "@/components/features/language-selection";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MobileSelectLanguage> = {
  title: "Components/MobileSelectLanguage",
  component: MobileSelectLanguage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MobileSelectLanguage>;

export const Visible: Story = {
  args: {
    pathname: "/",
  },
};
