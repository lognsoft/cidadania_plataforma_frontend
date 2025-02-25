import { MobileSelectLanguage } from "@/components/features/language-selection";
import "./route-register.css";

const TabRoot = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <div id="register-page">
      <div className="app-presentation">{children}</div>
      <MobileSelectLanguage />
    </div>
  );
};

export default TabRoot;
