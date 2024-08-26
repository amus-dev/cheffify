import { toast } from "sonner";

interface ShowToastProps {
  message: string;
  icon?: string;
  duration?: number;
  type: "success" | "error";
}

export const showToast = ({
  message,
  icon,
  duration = 3000,
  type,
}: ShowToastProps) => {
  const toastContent = (
    <div className="flex items-center justify-center gap-3">
      {icon && <img src={icon} alt={`${type} icon`} />}
      <span
        className={`text-sm font-bold ${
          type === "success" ? "text-primary" : "text-red-600"
        }`}
      >
        {message}
      </span>
    </div>
  );

  if (type === "success") {
    return toast.success(toastContent, { duration });
  } else {
    return toast.error(toastContent, { duration });
  }
};
