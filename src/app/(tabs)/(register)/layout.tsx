import "./route-register.css";
import MobileSelectLanguage from "@/components/mobile-select-language/MobileSelectLanguage";

const TabRoot = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <div id="register-page">
      <div className="app-presentation">{children}</div>
      <MobileSelectLanguage />
    </div>
  );
};

export default TabRoot;
