import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";

const Layout = () => {
  return (
    <div className="relative z-0 h-screen">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <Sidebar />
    </div>
  );
};

export default Layout;
