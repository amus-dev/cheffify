import { toast } from "sonner";
interface ShowToastProps {
  message: string;
  icon?: string;
  duration?: number;
}

export const showSuccessToast = ({
  message,
  icon,
  duration = 3000,
}: ShowToastProps) => {
  return toast.success(
    <div className="flex items-center justify-center gap-3">
      <img src={icon} className="size-8" alt="Success" />
      <span className="text-sm text-primary font-bold">{message}</span>
    </div>,
    { duration }
  );
};
