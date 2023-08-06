import { UnauthenticatedError } from "./helpers.server";

export async function fetchApi(url: any, session: any) {
  // Fetch data from external API
  // console.log("process" , process.env.BASE_URL)
  try {
    console.log("url api.server.ts", url);
    const auth = session.get("x-auth-token");
    const sessionId = session.get("sessionId");

    const res = await fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": auth,
        sessionid: sessionId,
      },
    });
    if (res.status == 200 || res.status == 400) {
      const data = await res.json();
      console.log("data", data);
      return data;
    }
    if (res.status == 401) {
      throw new UnauthenticatedError("Unauthenticated");
    }

    // return new Response(null, {
    //   status: 303,
    //   headers: {
    //     Location: "/login",
    //   },
    // });
  } catch (err: any) {
    console.error(err);

    if (err.statusCode == 401) {
      throw new UnauthenticatedError("Unauthenticated");
    }
    throw new Error(err);
  }
}

export async function postApi(
  url: any,
  session: any,
  method: string,
  body: any,
  formData?: boolean | false
) {
  // Fetch data from external API
  // console.log(method, session, body, formData, "POST API CALLING");
  try {
    // console.log("url", url);
    const auth = session.get("x-auth-token");
    const sessionId = session.get("sessionId");
    const res = await fetch(`${url}`, {
      method: method,
      headers: {
        "Content-Type": formData ? "multipart/form-data" : "application/json",
        "x-auth-token": auth,
        sessionid: sessionId,
      },
      body: JSON.stringify(body),
    });
    // console.log("res", res);
    if (res.status == 200 || res.status == 400) {
      const data = await res.json();
      // console.log("data", data);
      return data;
    }
    throw new UnauthenticatedError("Unauthenticated");
  } catch (err) {
    console.error(err);
    throw new UnauthenticatedError("Unauthenticated");
  }
}
