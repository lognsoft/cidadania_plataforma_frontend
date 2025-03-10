import { Header } from "@/components/layout/header";

const TabRoot = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {children}
    </div>
  );
};

export default TabRoot;
