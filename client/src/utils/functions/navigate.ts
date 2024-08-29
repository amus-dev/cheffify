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
