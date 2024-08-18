interface ButtonLinkProps {
  icon: string;
  alt: string;
  ariaLabel: string;
  text: string;
  url: string;
}

const ButtonLink = ({ icon, alt, ariaLabel, text, url }: ButtonLinkProps) => {
  return (
    <a
      className="text-primaryColor text-[15px] flex items-center gap-1 hover:scale-110 transition-all duration-500"
      href={url}
    >
      <img
        src={icon}
        alt={alt}
        aria-label={ariaLabel}
        className="size-[14px]"
      />
      <span>{text}</span>
    </a>
  );
};

export default ButtonLink;
