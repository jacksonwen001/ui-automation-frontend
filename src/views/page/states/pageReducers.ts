import { PageActions } from "./pageActions";
export interface PageState {
  reload: boolean;
}

export const pageReducer = (
  draft: PageState,
  action: PageActions
): PageState | void => {
  switch (action.type) {
    case "TOGGLE_RELOAD_PAGE":
      draft.reload = !draft.reload;
      break;
    default: {
      break;
    }
  }
};
