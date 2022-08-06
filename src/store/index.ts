import { useState } from "react";

export const useStore = () => {
  const [state, setState] = useState();
  return { state, setState };
};
