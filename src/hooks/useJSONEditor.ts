import JSONEditor, { JSONEditorMode, JSONEditorOptions } from "jsoneditor";

export const useJSONEditor = (
  container: HTMLElement,
  onChangeJSON: (json: any) => void,
  mode: JSONEditorMode
) => {
  const options: JSONEditorOptions = {
    history: false,
    statusBar: false,
    navigationBar: false,
    mainMenuBar: false,
    mode: mode,
    onChangeJSON: onChangeJSON,
  };
  return new JSONEditor(container, options);
};
