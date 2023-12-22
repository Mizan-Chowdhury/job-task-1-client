import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navList = (
    <>
      <li><NavLink> Home</NavLink></li>
      <li><NavLink to={'dashboard'}> Dashboard</NavLink></li>
    </>
  );
  return (
    <div className="py-1">
      <div className={`navbar max-w-7xl mx-auto`}>
        <div className="navbar-start">
          <h1 className="font-bold">Task Management</h1>
        </div>
        <div className="navbar-center hidden lg:flex nav-list">
          <ul className="menu-horizontal space-x-6">{navList}</ul>
        </div>

        <div className="navbar-end items-center gap-5">
          <div>
            <div className="dropdown hidden md:block">
              <Link to={'/login'}><button className="btn btn-sm">Login</button></Link>
            </div>

            {/* for small device */}

            <div className="drawer drawer-end md:hidden">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="btn btn-square btn-ghost text-slate-500"
                >
                  <svg
                    xmlns=""
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="p-4 w-72 min-h-full bg-[#1D1D1D] bg-opacity-20 backdrop-blur-sm  font-semibold">
                  <ul className="space-y-2 text-xl mt-5 text-white">
                    {navList}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
