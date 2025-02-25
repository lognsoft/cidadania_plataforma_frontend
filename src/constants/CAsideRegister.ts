import type IAsideRegister from "@/types/IAsideRegister";

export const stepsAside: IAsideRegister[] = [
  {
    path: "/register/country",
    image: "/images/step-flag.svg",
    title: "Qual o País que você deseja tirar a cidadania?",
    width: 118,
    height: 94,
  },
  {
    path: "/register/gender",
    image: "/images/step-gender.svg",
    title: "Você sabe qual é o sexo da sua descendência?",
    width: 136,
    height: 92,
  },
  {
    path: "/register/kinship",
    image: "/images/step-kinship.svg",
    title: "Qual é o grau de parentesco?",
    width: 100,
    height: 104,
  },
  {
    path: "/register/confirm",
    image: "/images/step-like.svg",
    title: "Estamos quase lá...",
    width: 74,
    height: 75,
  },
];
