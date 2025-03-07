import type { Meta, StoryObj } from "@storybook/react";
import type IRootEasy from "@/types/IRootEasyAdd";
import { CardRooteasy } from "@/components/common/card-rooteasy/intex";

const dummyData: IRootEasy = {
  icon: "/images/icons/TikTok.svg",
  width: 100,
  height: 100,
  text: "Sample Card",
};

const meta: Meta<typeof CardRooteasy> = {
  title: "Components/CardRooteasy",
  component: CardRooteasy,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardRooteasy>;

export const Default: Story = {
  args: {
    data: dummyData,
    selected: false,
    onSelect: () => console.log("Card clicked!"),
  },
};

export const Selected: Story = {
  args: {
    data: dummyData,
    selected: true,
    onSelect: () => console.log("Card clicked!"),
  },
};
