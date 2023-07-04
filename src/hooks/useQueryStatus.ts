import { useState } from "react";

export const useQueryStatus = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();

  return {
    isLoading,
    isError,
    errorMessage,
    setIsLoading,
    setIsError,
    setErrorMessage,
  };
};
