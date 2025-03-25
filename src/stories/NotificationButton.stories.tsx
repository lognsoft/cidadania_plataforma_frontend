import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Bell } from "lucide-react";
import NotificationButton from "@/components/common/button-notification/NotificationButton";

const meta: Meta<typeof NotificationButton> = {
  title: "Components/NotificationButton",
  component: NotificationButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NotificationButton>;

export const WithNotifications: Story = {
  args: {
    icon: "/images/icons/icone-alertas.svg",
    label: "Pendências",
    notificationCount: 100,
    selected: false,
    onClick: () => console.log("Notificações clicadas"),
  },
};

export const NoNotifications: Story = {
  args: {
    icon: "/images/icons/icone-alertas.svg",
    label: "Pendências",
    notificationCount: 0,
    selected: false,
    onClick: () => console.log("Sem notificações"),
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    const [count, setCount] = useState(3);

    return (
      <div style={{ gap: "1rem" }}>
        <NotificationButton
          icon={"/images/icons/icone-alertas.svg"}
          label="Pendências"
          notificationCount={count}
          selected={selected}
          onClick={() => {
            setSelected(!selected);
            setCount((c) => (c === 0 ? 3 : 0));
          }}
        />
      </div>
    );
  },
};
