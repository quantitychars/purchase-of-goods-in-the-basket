import { productsRepo } from "./../repositories/index";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [state, set] = useState({ data: null, error: null, loading: true });

  useEffect(() => {
    let cancelled = false;
    productsRepo
      .getAll()
      .then((d) => !cancelled && set({ data: d, error: null, loading: false }))
      .catch(
        (e) => !cancelled && set({ data: null, error: e, loading: false })
      );
    return () => (cancelled = true);
  }, []);

  return state;
}
