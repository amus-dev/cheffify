import { Link } from "react-router-dom";

interface ButtonLinkProps {
  icon: string;
  alt: string;
  ariaLabel: string;
  text: string;
  url: string;
  ancla?: boolean;
}

const ButtonLink = ({
  icon,
  alt,
  ariaLabel,
  text,
  url,
  ancla,
}: ButtonLinkProps) => {
  return !ancla ? (
    <Link
      className="text-primary text-[14px] flex items-center gap-1 hover:scale-110 transition-all duration-500"
      to={url}
      unstable_viewTransition
    >
      <img
        src={icon}
        alt={alt}
        aria-label={ariaLabel}
        className="size-[13px]"
      />
      <span>{text}</span>
    </Link>
  ) : (
    <a
      className="text-primary text-[14px] flex items-center gap-1 hover:scale-110 transition-all duration-500"
      href={url}
      aria-label={ariaLabel}
    >
      <img
        src={icon}
        alt={alt}
        aria-label={ariaLabel}
        className="size-[13px]"
      />
      <span>{text}</span>
    </a>
  );
};

export default ButtonLink;
