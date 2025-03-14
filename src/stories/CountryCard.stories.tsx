import { CountryCard } from "@/components/common/card-country";
import ICountryCard from "@/types/ICounrtyCard";
import type { Meta, StoryObj } from "@storybook/react";

const dummyCountry: ICountryCard = {
  name: "USA",
  image: "/images/countrys/country-usa.svg",
};

const meta: Meta<typeof CountryCard> = {
  title: "Components/CountryCard",
  component: CountryCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CountryCard>;

export const Default: Story = {
  args: {
    country: dummyCountry,
    selectedCountry: "",
    onSelect: (name: string) => console.log(`Country selected: ${name}`),
  },
};

export const Selected: Story = {
  args: {
    country: dummyCountry,
    selectedCountry: dummyCountry.name,
    onSelect: (name: string) => console.log(`Country selected: ${name}`),
  },
};
