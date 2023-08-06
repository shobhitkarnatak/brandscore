import { Link } from "@remix-run/react";
import { useLocation } from "@remix-run/react";

export default function Navbar({ userInfo }: any) {
  const location = useLocation();
  // const [isLogin, setIsLogin] = useState();
  // console.log("location:", location.pathname.split("/")[1]);
  const value = location.pathname.split("/")[1];

  return (
    <nav className=" flex bg-white p-4 shadow-md shadow-[#00000029]">
      <div className="mx-4 flex w-full items-center justify-between">
        <div className="w-40">
          {/* Default Route After Login */}
          <img src="/brandscore_logo.svg" alt="brandscore-logo" />
          {/* </Link> */}
        </div>

        {value !== "login" ? (
          <div>{/* <DropDown userInfo={userInfo} /> */}</div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
