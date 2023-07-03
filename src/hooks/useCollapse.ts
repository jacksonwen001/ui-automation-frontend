import { useState } from "react";

export const useCollapse = (initial: boolean) => {
  const [visible, setVisible] = useState(initial);
  const close = () => setVisible(false);
  const open = () => setVisible(true);
  return { visible, open, close };
};
