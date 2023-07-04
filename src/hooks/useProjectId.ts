import { STORAGE_PROJECT_ID } from "@/constants";
import { useLocalStorage } from "usehooks-ts";

export const useProjectId = () => {
  const [storage] = useLocalStorage(STORAGE_PROJECT_ID, null);
  return storage!;
};
