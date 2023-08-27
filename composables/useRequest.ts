type Response = {
  url: string;
  body:any,
  status: number;
  type:string,
  statusText?: string;
  _data?: any;
  headers?:object,
  ok?:boolean,
  redirected?:boolean,
  bodyUsed?:boolean,
};
type ResponseData={
  code:number,
  msg:string,
  data:object|object[]
}

export const useRequest = async (url: string,options:object) => {
  const router = useRouter();
  const store=useMainStore();
  const appConfig=useAppConfig();
  const host = window.location.hostname;
  const headers = {
    // Authorization:'Bearer '+store.user?.token,
    token:store.user?.token||null

  };
  const defaultOptions:object = {
    baseURL: appConfig.app.apiUrl,
    headers: headers,
    onResponse({ response }: { response: Response }) {
      console.log("response", response);
      const res = response._data;
      if (res.code == 0) {
        ElMessage.error(res.msg);
      }
    },
    onResponseError({ response }: { response: Response }) {
      console.log("response-error", response);
      const res = response._data;
      if (response.status == 401) {
        router.replace("/login");
        store.logout()
      }
    },
  };
  const newOptions:object={...defaultOptions,...options};
  const loadingInstance = ElLoading.service({fullscreen:false});
  const { data, pending,refresh } = await useFetch(url, newOptions);
  if (!pending.value) {
    loadingInstance.close();
  }
  return {data,refresh};
};
