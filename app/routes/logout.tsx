import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import getServerApis from "~/services/env.server";

export const loader: LoaderFunction = async ({ request }: any) => {};

export const logoutApi = async (user: any, session: any) => {
  try {
    const detail = {
      loginId: user?.empId,
      sessionId: session,
    };
    const res = await fetch(getServerApis().API_LOGOUT, {
      method: "POST",
      body: JSON.stringify(detail),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    if (response?.head?.responseCode !== 200) {
      throw response?.head?.errorDescription;
    }
    return response;
  } catch (err: any) {
    console.error(err);
    throw err;
  }
};
