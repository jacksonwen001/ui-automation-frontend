import { useLocalStorage } from "usehooks-ts";

import { STORAGE_PROJECT_ID } from "@/constants";

export const DashboardIndexView = () => {
  const [storage, ] = useLocalStorage(STORAGE_PROJECT_ID, null);
  return <div>{storage}</div>;
};
