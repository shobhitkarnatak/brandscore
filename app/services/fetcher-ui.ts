export async function fetcherUi(
  url: any,
  session: any,
  body?: any,
  method = "post",
  isFormData = false
) {
  // console.log("url", url);
  try {
    const fetchOptions: any = {
      method,
      headers: {
        "Content-Type": isFormData ? "multipart/form-data" : "application/json",
        "x-auth-token": session.data["x-auth-token"],
        sessionid: session.data["sessionId"],
      },
    };

    if (
      (method?.toLowerCase() === "post" && !isFormData) ||
      method?.toLowerCase() === "put"
    ) {
      fetchOptions["body"] = JSON.stringify(body);
    } else if (method?.toLowerCase() === "post" && isFormData) {
      // console.log("Line 24", fetchOptions);
      fetchOptions["body"] = body;
    }

    const res = await fetch(`${url}`, fetchOptions);
    const data = await res.json();
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}
