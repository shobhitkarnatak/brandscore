import getServerApis from "~/services/env.server";

export const getURL = (caseType: string, services: string, type: string) => {
  const envPath = `API_${caseType?.toUpperCase()}_${services?.toUpperCase()}_${type?.toUpperCase()}`;
  // console.log("env Path ...", envPath);
  console.log("envPath", envPath);
  console.log("api url", getServerApis()[envPath]);
  return getServerApis()[envPath];
};

export const getQuery = (url: string) => {
  const mappedUrl = new URL(url);
  const search = mappedUrl.searchParams.get("search") ?? "";
  const page = mappedUrl.searchParams.get("page") ?? 1;
  const size = mappedUrl.searchParams.get("size") ?? 10;
  const statusId = mappedUrl.searchParams.get("statusId");
  const startDate = mappedUrl.searchParams.get("startDate");
  const endDate = mappedUrl.searchParams.get("endDate");
  const sectionId = mappedUrl.searchParams.get("sectionId");
  const bucketId = mappedUrl.searchParams.get("bucketId");
  const tabIndex = mappedUrl.searchParams.get("tabIndex");
  // console.log("181818181818181818188181", statusId);
  return {
    search,
    page,
    size,
    statusId,
    startDate,
    endDate,
    sectionId,
    bucketId,
    tabIndex,
  };
};
export class UnauthenticatedError extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 401;
  }
}
