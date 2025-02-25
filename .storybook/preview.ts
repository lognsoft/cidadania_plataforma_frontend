import type { Preview } from "@storybook/react";
import "../src/app/globals.scss"; // ajuste o caminho conforme sua estrutura de pastas

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
