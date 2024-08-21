import InstaIcon from "@/assets/images/icons/icon-inst.svg";
import MailIcon from "@/assets/images/icons/icon-mail.svg";
import PhoneIcon from "@/assets/images/icons/icon-phone.svg";
import LogoFooter from "@/assets/images/logo/cheffify-logo.svg";
import PDFPoliticas from "@/assets/pdf/politicas-de-privacidad-cheffify.pdf";
import IconWhatsapp from "@/components/common/icons/IconWhatsapp";
import { Link } from "react-router-dom";

const handleClickWhatsApp = () => {
  window.open("https://wa.link/z9otdj", "_blank", "noreferrer");
};

const Footer = () => {
  return (
    <>
      <hr className="w-full h-[80px] bg-separator mb-10" />
      <footer className="flex flex-col px-[20px] lg:px-[60px] xl:px-[170px] pb-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <Link
            to="/"
            unstable_viewTransition
            aria-label="Logo de cheffify que te lleva al home del sitio"
          >
            <img
              src={LogoFooter}
              alt="Logo de cheffify ubicado en el footer"
              className="size-24 hover:scale-110 transition-all duration-500"
            />
          </Link>
          <button
            className="group flex items-center justify-between gap-10 border-green border-2 px-8 py-4 rounded-full transition-all duration-500 hover:border-secondary hover:bg-secondary"
            onClick={handleClickWhatsApp}
          >
            <IconWhatsapp classNames="size-7" />
            <p className="text-green text-[18px] font-bold group-hover:text-white transition-all duration-500">
              Pide por Whatsapp
            </p>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-center justify-between border-t border-b border-t-separator border-b-separator py-5 my-3">
          <p className="text-xs text-grayLight">
            ©2023 cheffify · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-grayLight">Contacto y redes sociales:</p>
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href="https://www.instagram.com/cheffify_cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={InstaIcon}
                    alt="Icono de instagram"
                    className="size-5 transition-all duration-500 hover:scale-110"
                  />
                </a>
              </li>
              <li>
                <a href="mailto:cheffify@gmail.com">
                  <img
                    src={MailIcon}
                    alt="Icono de Email"
                    className="size-5 transition-all duration-500 hover:scale-110"
                  />
                </a>
              </li>
              <li>
                <a href="tel:+56944732293">
                  <img
                    src={PhoneIcon}
                    alt="Icono de celular"
                    className="size-5 transition-all duration-500 hover:scale-110"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-xs text-grayLight hidden lg:block">
            <strong className="font-extrabold">Política de privacidad</strong>:
            nuestro sitio web emplea la información con el fin de proporcionar
            el mejor servicio posible, particularmente para mantener un registro
            de usuarios, de pedidos en caso que aplique, y mejorar nuestros
            productos y servicios. Es posible que sean enviados correos
            electrónicos periódicamente a través de nuestro sitio con ofertas
            especiales, nuevos productos y otra información publicitaria que
            consideremos relevante para usted o que pueda brindarle algún
            beneficio, estos correos electrónicos serán enviados a la dirección
            que usted proporcione y podrán ser cancelados en cualquier momento.{" "}
            <a
              className="font-extrabold text-secondary transition-all duration-500 hover:text-green"
              href={PDFPoliticas}
              target="_blank"
              rel="noopener noreferrer"
            >
              Seguir leyendo +
            </a>
          </p>
          <p className="text-xs text-grayLight lg:hidden flex items-center gap-[2px] justify-center">
            <strong className="font-extrabold">Política de privacidad</strong>:
            <a
              className="font-extrabold text-secondary transition-all duration-500 hover:text-green"
              href={PDFPoliticas}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer aquí
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
