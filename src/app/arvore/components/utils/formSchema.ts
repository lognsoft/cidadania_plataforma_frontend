import { z } from "zod";

export const Formschema = z.object({
  name: z.string().min(1, "nome muito pequeno"),
  email: z.string().email("email invalido"),
  pdf: z.instanceof(FileList).refine((pdf) => pdf.length == 1, "preencher"),
});

export type FormProps = z.infer<typeof Formschema>;
