import {
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useContext,
} from "react";
import { useImmerReducer } from "use-immer";
import { AppAction, AppState, appReducer } from "./appReducer";
type AppStateProps = {
  collapse: boolean;
  dispatch: Dispatch<AppAction>;
};
const AppContext = createContext<AppStateProps>({} as AppStateProps);
export const useAppState = () => useContext(AppContext);
export const AppContextProvdier: FC<PropsWithChildren> = ({ children }) => {
  const initAppState: AppState = {
    collapse: true,
  };
  const [state, dispatch] = useImmerReducer(appReducer, initAppState);

  const { collapse } = state;
  return (
    <AppContext.Provider value={{ collapse, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
