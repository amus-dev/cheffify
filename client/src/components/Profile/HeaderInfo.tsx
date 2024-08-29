import Avatar from "@/assets/images/img/user-1.svg";
import IconEdit from "@/assets/images/icons/icon-edit.svg";
import { useState } from "react";

const HeaderInfo = () => {
  const [userPhone, setUserPhone] = useState(20);

  const updateUserPhone = () => {
    console.log("Actualizar teléfono del usuario");
  };

  return (
    <section className="px-20 my-20 flex justify-center gap-4">
      <div>
        <img
          src={Avatar}
          alt="Imagen de avatar del usuario"
          className="size-16"
        />
      </div>
      <div>
        <h2 className="text-primary text-[17px] font-bold">Alexander</h2>
        <p className="text-primary text-[13px]">matias04041994@gmail.com</p>
        <div className="flex items-center gap-2 mt-4">
          <input
            type="number"
            id="userPhone"
            className="bg-transparent border-b border-secondary text-primary"
            value={userPhone}
            onChange={(e) => setUserPhone(+e.target.value)}
          />
          <button>
            <img
              src={IconEdit}
              alt="Icono de editar"
              className="size-4"
              onClick={updateUserPhone}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeaderInfo;
