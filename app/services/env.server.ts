interface IEnvironment {
  readonly [key: string]: string;
}

const getServerApis = () => {
  // console.log("node env", process.env.NODE_ENV);
  // console.log("node environment ", process.env.ENV);
  if (process.env.ENV === "production") {
    return ENV_APIS_PROD;
  } else {
    return ENV_APIS_UAT;
  }
};
const ENV_APIS_UAT = {
  API_LOGIN:
    "https://grouppolicy-uat.iiflinsurance.com:5050/Authentication.Web.Api/api/v2/SSO/Login",
  API_LOGOUT:
    "https://grouppolicy-uat.iiflinsurance.com:5050/Authentication.Web.Api/api/v2/SSO/Logout",
} as IEnvironment;
const ENV_APIS_PROD = {
  API_LOGIN: "https://api.livlong.com/Authentication/api/v2/SSO/Login",
  API_LOGOUT: "https://api.livlong.com/Authentication/api/v2/SSO/Logout",
} as IEnvironment;

export default getServerApis;
