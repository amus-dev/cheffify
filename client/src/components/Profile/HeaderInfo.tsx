import IconEdit from "@/assets/images/icons/icon-edit.svg";
import Avatar from "@/assets/images/img/user-1.svg";
import { useUpdatePhone } from "@/hooks/useUpdatePhone";
import useUserStore from "@/stores/userStore";
import { useEffect, useState } from "react";

const HeaderInfo = () => {
  const { updatePhoneHandler } = useUpdatePhone();
  const userStore = useUserStore((state) => state.user);
  const [userPhone, setUserPhone] = useState<number>(0);

  const updateUserPhone = () => {
    if (userStore) {
      updatePhoneHandler({
        id: userStore?.id,
        phone: userPhone,
      });
    }
  };

  useEffect(() => {
    if (userStore?.celular) {
      setUserPhone(userStore.celular);
    }
  }, [userStore?.celular]);

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
        <h2 className="text-primary text-[17px] font-bold">{`${userStore?.nombre} ${userStore?.apellido}`}</h2>
        <p className="text-primary text-[13px]">{userStore?.email}</p>
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
