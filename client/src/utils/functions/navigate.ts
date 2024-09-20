import { NavigateFunction } from "react-router-dom";

/**
 * Navega a una nueva ruta con View Transition si está disponible,
 * o usa un fallback si no lo está.
 *
 * @param navigate - La función de navegación de React Router
 * @param path - La ruta a la que se debe navegar
 */
export const navigateWithViewTransition = (
  navigate: NavigateFunction,
  path: string
) => {
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      navigate(path);
    });
  } else {
    // Fallback si viewTransition no está disponible
    navigate(path);
  }
};

/**
 * Navega hacia el inicio de la página con un desplazamiento suave.
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Esto hace que el desplazamiento sea suave
  });
};
