import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { redirect } from "@remix-run/server-runtime";
import axios from "axios";
import { useEffect, useRef } from "react";
import getServerApis from "~/services/env.server";
// import { cookieVal } from "~/utils/tokenCookies";

const validateUsername = (username: unknown) => {
  if (!username) {
    return "Username is required";
  } else if (typeof username !== "string" || username.length < 3) {
    return "Username must be 3 characters long";
  }
};

const validatePassword = (password: unknown) => {
  if (!password) {
    return "Password is required";
  } else if (typeof password !== "string" || password.length < 6) {
    return "Password must be 6 characters long";
  }
};

// export const loader: LoaderFunction = async ({ request }: any) => {
//   try {
//     const session = await cookieVal.getSession(request.headers.get("Cookie"));
//     const authToken = session.get("x-auth-token");
//     // console.log("authToken", authToken);
//     const expirationTime = session.get("expiry");
//     if (Date.now() < expirationTime && authToken) {
//       return redirect("/cases/labs/pending?sectionId=1");
//     }
//     return null;
//   } catch (err: any) {
//     console.error(err);
//     throw new Error(err);
//   }
// };

// export const action: ActionFunction = async ({ request }) => {
//   const formData = await request.formData();
//   const userName = formData.get("username");
//   const passWord = formData.get("password");

//   let { _action, ...values } = Object.fromEntries(formData);

//   const errors = {
//     username: validateUsername(values.username),
//     password: validatePassword(values.password),
//   };

//   if (Object.values(errors).some(Boolean))
//     return json({ errors }, { status: 422 });

//   // make an api call and save token in cookie

//   try {
//     const { data, headers } = await axios({
//       method: "post",
//       url: getServerApis()?.API_LOGIN,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: {
//         EmployeeId: userName,
//         Password: passWord,
//       },
//     });
//     // console.log("data", data);
//     if (data?.head?.responseCode === 200) {
//       const session = await cookieVal.getSession(request.headers.get("Cookie"));
//       session.set("x-auth-token", headers["x-auth-token"]);
//       session.set("sessionId", headers["sessionid"]);
//       session.set("user", data?.body?.responseData?.body);
//       const authToken = headers["x-auth-token"];
//       // const { exp } = authToken && (jwt_decode(authToken.split(" ")[1]) as any);
//       const expirationTime = 1000 * 1000 - 60000;
//       session.set("expiry", expirationTime);
//       // const cookie = await cookieVal.commitSession(session);
//       return redirect(`/cases/labs/pending?sectionId=1`, {
//         headers: {
//           "Set-Cookie": cookie,
//         },
//       });
//     } else if (data?.head?.responseCode === 1) {
//       return json(
//         { formErrors: data?.head?.errorDescription },
//         { status: data?.head?.errorCode }
//       );
//     }

//     return json({});
//   } catch (errors: any) {
//     throw new Error(errors);
//   }
// };

export default function LoginRoute() {
  let transition = useTransition();
  let actionData = useActionData();
  const isLoading = transition.state === "submitting";

  let formRef = useRef<HTMLFormElement>(null);

  // useEffect(() => {
  // const getCategoryList = async () => {
  //   const { data } = await axios({
  //     method: "get",
  //     url: "http://localhost:3001/api/categories/list",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNDAzZDA1NWItYjdhMC00ZDBmLTk5NTEtMmIyMWZiZDU1OTI0IiwiZW1haWxJZCI6ImJodXNoYW4ucmFqcHV0QGlpZmwuY29tIiwiZW1wQ29kZSI6IkMxODgxODQiLCJ1c2VyRnVsbE5hbWUiOiJCaHVzaGFuIERhdHRhcmFtIFJhanB1dCIsInRva2VuIjoibG9naW4iLCJ0eXBlIjoiYXBwIiwiaWF0IjoxNjYyMzgwNTMxLCJleHAiOjE2NjI0NjY5MzF9.VuOV_YG8RkcKVXCI5i3REHTwKnBMW7Yng5QyqoAkNIw",
  //     },
  //   });
  //   console.log("Data", data);
  // };
  // getCategoryList();
  // }, []);

  useEffect(() => {
    if (!isLoading) {
      formRef.current?.reset();
    }
  }, [isLoading]);

  return (
    <div>
      <header></header>
      <main className="">
        <div className="mx-auto w-4/5 px-12 py-16">
          <div className="flex flex-col-reverse overflow-hidden rounded-3xl md:flex-row">
            <div className="w-full rounded-3xl bg-sinbad-500 py-8 md:w-1/2 xl:w-2/5">
              <div className="flex h-full flex-col items-center justify-center space-y-8">
                <div className="w-full px-6">
                  <Form
                    ref={formRef}
                    className="mx-auto flex max-w-sm flex-col justify-center space-y-6"
                    method="post"
                  >
                    <div className="space-y-2">
                      <input
                        className="focus:border-1 w-full rounded border border-gray-300 p-3 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-4"
                        name="username"
                        type="text"
                        // required
                        placeholder="User Id"
                        autoComplete="username"
                      />
                      {actionData?.errors?.username && (
                        <p className="text-red-500">
                          {actionData?.errors?.username}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <input
                        className="focus:border-1
                         w-full rounded border border-gray-300 p-3 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-4"
                        name="password"
                        // required
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                      {actionData?.errors?.password && (
                        <p className="text-red-500">
                          {actionData?.errors?.password}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-2">
                      {actionData?.formErrors && (
                        <p className="text-center text-red-500">
                          {actionData?.formErrors}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="focus:border-1 inline-flex items-center justify-center rounded-full border border-gray-50 bg-flamingo py-3 text-white focus:border-flamingo-300 focus:outline-none focus:ring-2 focus:ring-flamingo-500 focus:ring-offset-4"
                        aria-label="login"
                        name="_action"
                        value="login"
                      >
                        {isLoading ? (
                          <svg
                            className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        ) : (
                          "Login"
                        )}
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-full">
                <img
                  className="h-full object-cover"
                  src="/login-route-image.png"
                  alt="login-app"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
