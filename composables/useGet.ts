import { useRequest } from "./useRequest";
export const useGet = async (url: string, params: object) => {
  const options = {
    method: "GET",
    params: params,
  };

  return useRequest(url, options);
};
