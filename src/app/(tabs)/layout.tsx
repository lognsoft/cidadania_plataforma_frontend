import { Header } from "@/components/layout/header";

const TabRoot = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default TabRoot;
