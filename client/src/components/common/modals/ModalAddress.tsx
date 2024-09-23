interface ModalAddressProps {
  setIsOpen: (value: boolean) => void;
}

const ModalAddress = ({ setIsOpen }: ModalAddressProps) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ease-out"
      onClick={() => setIsOpen(false)} // Para cerrar el modal al hacer clic fuera
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg relative animate-fade-in"
        onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic dentro del modal
      >
        <h2 className="text-2xl font-bold mb-4">This is a Modal</h2>
        <p className="mb-4">You can add any content you like here.</p>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalAddress;
