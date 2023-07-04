import { createContext, useContext } from "react";
import { PageActions } from "./pageActions";

type PageContextProps = {
  total: number;
  reload: boolean;
  dispatch: React.Dispatch<PageActions>;
};

const PageContext = createContext<PageContextProps>({} as PageContextProps)

export const usePageState = () => {
  return useContext(PageContext);
};
