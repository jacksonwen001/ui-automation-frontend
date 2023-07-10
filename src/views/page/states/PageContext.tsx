import { FC, PropsWithChildren, createContext, useContext } from "react";
import { PageActions } from "./pageActions";
import { useImmerReducer } from "use-immer";
import { pageReducer } from "./pageReducers";

type PageContextProps = {
  reload: boolean;
  dispatch: React.Dispatch<PageActions>;
};

const PageContext = createContext<PageContextProps>({} as PageContextProps);

export const usePageState = () => {
  return useContext(PageContext);
};

export const PageContextProvider: FC<PropsWithChildren> = ({ children }) => {

  const initPageState = {
    reload: false
  };
  const [state, dispatch] = useImmerReducer(pageReducer, initPageState);
  const {reload} = state; 
  return (
    <PageContext.Provider value={{ reload, dispatch }}>{children}</PageContext.Provider>
  );
};
