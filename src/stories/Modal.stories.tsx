import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/common/modal-content";
import { Separator } from "@/components/ui/separator";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const AgentMessageModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="p-4">
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>

        <Modal trigger={null} open={open} onOpenChange={setOpen}>
          <div className="text-left font-poppins">
            <h2 className="text-[15px] font-bold text-default-gray-ligth mb-2">
              LEIA COM ATENÇÃO
            </h2>

            <Separator className="my-2 h-[1px] bg-default-gray-ligth" />

            <p className="text-[12px] font-normal text-default-gray-ligth">
              Do lado direito você tem uma pré-visualização dos seus últimos
              clientes que fizeram progresso e do lado esquerdo, a barra de
              progresso de todos os seus clientes ativos com o menu de navegação
              da Rooteasy.
            </p>
          </div>
        </Modal>
      </div>
    );
  },
};
