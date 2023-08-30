
export default function LoginRoute() {
  
  
  return (
    <div>
      <main>
        <div className="grid w-full grid-cols-2">
          <div className="relative">
            <img
             alt="icon"
              src="http://brandscore.in/assets/images/img1.jpg"
              className="h-[100vh] w-full"
            />
            <div className="absolute top-0 h-full w-full bg-[#6b46c1] bg-opacity-80"></div>
            <div className="absolute left-[25%] top-[50%]">
              <img
                alt="icon"
                src="http://brandscore.in/assets/images/incight-logo-white.png"
                className="w-[300px]"
              />
              <p className="-ml-2 text-lg font-bold text-white">
                BRAND SCORECARDS FOR BUSINESS
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col justify-center px-24">
            <h2 className="text-2xl font-bold">Sign In to your account.</h2>
            <p className="mt-1 text-lg font-medium">
              Fill out the form below to login to incight panel.
            </p>
            <div className="my-4">
              <p className="mb-2 mt-4 text-sm">E-Mail Address</p>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e6e5e5] p-2 outline-none"
              ></input>
            </div>
            <div>
              <p className="mb-2 text-sm">Password</p>
              <input
                type="text"
                placeholder="Enter your password"
                className="w-full rounded-md border border-[#e6e5e5] p-2 outline-none"
              ></input>
            </div>
            <button
              type="button"
              className="my-4 w-24 rounded-md bg-[#02abfe] px-4 py-2 text-sm font-bold text-white"
            >
              Log In
            </button>
            <div className="flex">
              <input type="checkbox" />
              <p className="px-2 text-xs text-[#6b6f82]">Keep me Log In</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
