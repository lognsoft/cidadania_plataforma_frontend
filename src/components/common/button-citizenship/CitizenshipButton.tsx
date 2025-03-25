import DivSelected from "../div-selected/DivSelected";
import "./button-citizenship-component.css";

interface CitizenshipButtonProps {
  icon: string;
  label: string;
  onClick?: () => void;
  className?: string;
  selected?: boolean;
  rightAddon?: React.ReactNode;
}

const CitizenshipButton = ({
  icon,
  label,
  onClick,
  className = "",
  selected = false,
  rightAddon,
}: CitizenshipButtonProps) => {
  return (
    <DivSelected
      selected={selected}
      className={`icon-button-wrapper ${className}`}
      onClick={onClick}
    >
      <button className="icon-button" type="button">
        <img className="icon" src={icon} />
        <div className="flex items-center gap-2">
          <span className="font-bold font-poppins text-default-gray-text">
            {label}
          </span>
          {rightAddon && <span>{rightAddon}</span>}
        </div>
      </button>
    </DivSelected>
  );
};

export default CitizenshipButton;
