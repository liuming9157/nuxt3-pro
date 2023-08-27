import { useRequest } from "./useRequest";
export const usePost = async (url: string, body?: object) => {
  const options = {
    method: "POST",
    body: body,
  };

  return useRequest(url, options);
};
