import { PageResponse } from "@/api/page";

export type PageActions =
  | {
      type: "SET_PAGES";
      payload: PageResponse[];
    }
  | {
      type: "SET_PAGE_TOTAL";
      payload: number;
    }
  | {
      type: "TOGGLE_RELOAD_PAGE";
    };

export const toggleReloadPage = (): PageActions => ({
  type: "TOGGLE_RELOAD_PAGE",
});
