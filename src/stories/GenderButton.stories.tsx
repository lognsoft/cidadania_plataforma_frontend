import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import GenderButton from "@/components/common/gender-button/GenderButton";

const meta: Meta<typeof GenderButton> = {
  title: "Components/GenderButton",
  component: GenderButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GenderButton>;

export const MainButtonWithoutIcon: Story = {
  args: {
    label: "Sim, eu sei!",
    selected: false,
    onClick: () => console.log("Botão principal clicado"),
    hasChevron: true,
  },
};

export const MainButtonWithIcon: Story = {
  args: {
    icon: "/images/icons/emoji-smile.svg",
    alt: "Emoji Smile",
    label: "Sim, eu sei!",
    selected: false,
    onClick: () => console.log("Botão com ícone clicado"),
    hasChevron: true,
  },
};

export const NotSure: Story = {
  args: {
    icon: "/images/icons/emoji-sad.svg",
    alt: "Emoji Sad",
    label: "Eu não sei!",
    selected: false,
    onClick: () => console.log("Opção 'Eu não sei!' clicada"),
  },
};

export const Dropdown: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <GenderButton
          icon="/images/icons/emoji-smile.svg"
          alt="Emoji Smile"
          label="Sim, eu sei!"
          selected={open}
          onClick={() => setOpen(!open)}
          hasChevron={true}
        />
        {open && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <GenderButton
              label="Homem"
              selected={false}
              onClick={() => {
                console.log("Homem clicado");
                setOpen(false);
              }}
            />
            <GenderButton
              label="Mulher"
              selected={false}
              onClick={() => {
                console.log("Mulher clicada");
                setOpen(false);
              }}
            />
          </div>
        )}
      </div>
    );
  },
};
