export type AppState = {
  collapse: boolean;
};

export type AppAction = {
  type: "TOGGLE_SIDEBAR";
};

export const toggleSidebar = (): AppAction => ({
  type: "TOGGLE_SIDEBAR"
})

export const appReducer = (
  draft: AppState,
  action: AppAction
): AppState | void => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      draft.collapse = !draft.collapse;
      break;
    default: {
      break;
    }
  }
};
