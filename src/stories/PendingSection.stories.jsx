import React from "react";
import PendingSection from "@/components/common/pending-section/PendingSection";

export default {
  title: "Components/PendingSection",
  component: PendingSection,
};

const Template = (args) => <PendingSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Ficha do Pai",
  percentage: 50,
  items: [
    "Certidão de Nascimento",
    "Certidão de Casamento",
    "Documento de Identificação RG",
  ],
};

export const Profile = Template.bind({});
Profile.args = {
  title: "Seu perfil",
  percentage: 20,
  items: ["Foto", "Tipo Sanguíneo", "Endereço"],
};

