import IconPedido from "@/assets/images/icons/icon-pedido.svg";
import IconOrden from "@/assets/images/icons/icon-orden.svg";
import IconDelivery from "@/assets/images/icons/icon-delivery.svg";
import IconRecibido from "@/assets/images/icons/icon-recibido.svg";

const ComoFunciona = () => {
  return (
    <section className="flex flex-col items-center mt-10">
      <h2 className="text-primary text-5xl font-bold text-center">
        Cómo funciona
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <li className="flex flex-col items-center">
          <img src={IconPedido} className="size-14 mb-2" alt="Haz tu pedido" />
          <h5 className="text-primary text-center font-bold">Haz tu pedido</h5>
          <p className="text-primary text-center text-sm font-normal">
            Elige tus platos y añádelos al carrito de compras, luego elige la
            opción de pago que te acomode y paga tu pedido. No hay un valor
            mínimo de compra.
          </p>
        </li>
        <li className="flex flex-col items-center">
          <img
            src={IconOrden}
            className="size-14 mb-2"
            alt="Recibimos tu orden"
          />
          <h5 className="text-primary text-center font-bold">
            Recibimos tu orden
          </h5>
          <p className="text-primary text-center text-sm font-normal">
            Una vez confirmado tu pedido, recibimos la orden y comenzamos con la
            preparación de tus platos, los cuales se envían congelados.
          </p>
        </li>
        <li className="flex flex-col items-center">
          <img
            src={IconDelivery}
            className="size-14 mb-2"
            alt="Enviamos tu compra"
          />
          <h5 className="text-primary text-center font-bold">
            Enviamos tu compra
          </h5>
          <p className="text-primary text-center text-sm font-normal">
            El envío se hará 24 horas después de haber realizado la compra. Los
            despachos se realizan de lunes a viernes (solo días hábiles) de 9:00
            a 16:30 horas. Valor del envío $4.000 para todas las comunas (solo
            Región Metropolitana).
          </p>
        </li>
        <li className="flex flex-col items-center">
          <img
            src={IconRecibido}
            className="size-14 mb-2"
            alt="Recibe tu pedido"
          />
          <h5 className="text-primary text-center font-bold">
            Recibe tu pedido
          </h5>
          <p className="text-primary text-center text-sm font-normal">
            Una vez que has recibido tus platos, solo queda descongelarlos para
            disfrutar. Puedes calentar tu comida desde un horno o microondas.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default ComoFunciona;
