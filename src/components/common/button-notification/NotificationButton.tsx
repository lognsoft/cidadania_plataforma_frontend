import CitizenshipButton from "../button-citizenship/CitizenshipButton";

interface NotificationButtonProps {
  icon: string;
  alt?: string;
  label: string;
  notificationCount: number;
  onClick?: () => void;
  selected?: boolean;
}

const NotificationButton = ({
  icon,
  alt = "",
  label,
  notificationCount,
  onClick,
  selected = false,
}: NotificationButtonProps) => {
  return (
    <CitizenshipButton
      icon={icon}
      label={label}
      rightAddon={
        notificationCount > 0 && (
          <span className="bg-default-red-primary text-white text-[10px] font-bold font-poppins rounded-full w-5 h-5 flex items-center justify-center">
            {notificationCount > 99 ? "99+" : notificationCount}
          </span>
        )
      }
      onClick={onClick}
      selected={selected}
      className="w-[258.6px] h-[45.07px]"
    />
  );
};

export default NotificationButton;
