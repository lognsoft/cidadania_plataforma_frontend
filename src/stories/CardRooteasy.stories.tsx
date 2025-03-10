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

export const DefaultShadow: Story = {
  args: {
    data: dummyData,
    selected: false,
    shadow: true,
    onSelect: () => console.log("Card clicked!"),
  },
};

export const SelectedGreen: Story = {
  args: {
    data: dummyData,
    selected: true,
    variant: "green",
    onSelect: () => console.log("Card clicked!"),
  },
};

export const SelectedGreenShadow: Story = {
  args: {
    data: dummyData,
    selected: true,
    variant: "green",
    shadow: true,
    onSelect: () => console.log("Card clicked!"),
  },
};

export const SelectedGreenShadowColor: Story = {
  args: {
    data: dummyData,
    selected: true,
    variant: "green",
    shadow: true,
    colorShadow: true,
    onSelect: () => console.log("Card clicked!"),
  },
};

export const SelectedRed: Story = {
  args: {
    data: dummyData,
    selected: true,
    variant: "red",
    onSelect: () => console.log("Card clicked!"),
  },
};

export const SelectedRedShadow: Story = {
  args: {
    data: dummyData,
    selected: true,
    variant: "red",
    shadow: true,
    onSelect: () => console.log("Card clicked!"),
  },
};

export const SelectedRedShadowColor: Story = {
  args: {
    data: dummyData,
    selected: true,
    variant: "red",
    shadow: true,
    colorShadow: true,
    onSelect: () => console.log("Card clicked!"),
  },
};
