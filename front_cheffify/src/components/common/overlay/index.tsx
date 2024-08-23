import useCartStore from "@/stores/productsStore";

const Overlay = () => {
  const isCartVisible = useCartStore((state) => state.isCartVisible);
  const toggleCartVisibility = useCartStore(
    (state) => state.toggleCartVisibility
  );
  return (
    isCartVisible && (
      <div className="relative z-10" onClick={toggleCartVisibility}>
        <div className="fixed inset-0 bg-black opacity-50"></div>
      </div>
    )
  );
};

export default Overlay;
