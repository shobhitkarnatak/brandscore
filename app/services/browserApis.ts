interface IEnvironment {
  readonly [key: string]: string;
}

const getClientApis = () => {
  const windowEnv = window as any;
  if (windowEnv?.ENV?.BROWSER_ENV === "production") {
    return BROWSER_APIS_PROD;
  } else {
    return BROWSER_APIS_UAT;
  }
};

const BROWSER_APIS_UAT = {} as IEnvironment;

const BROWSER_APIS_PROD = {} as IEnvironment;

export default getClientApis;
