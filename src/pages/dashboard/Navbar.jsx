import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const Navbar = ({refetch}) => {
  const { user, logOutUser } = useAuthContext();
  const axiosPublic = useAxios();
  const navList = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOutUser();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newTask = {
      user_email: user?.email,
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
      status: "Todo",
    };
    console.log(newTask);
    axiosPublic.post("/todo", newTask).then((res) => {
      console.log(res);
      toast.success("Successfully added.");
      reset();
      refetch();
    });
  };
  return (
    <div className="py-1">
      <div className={`navbar max-w-7xl mx-auto`}>
        <div className="navbar-start">
          <div className="">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              + add task
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box max-w-5xl">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="md:flex gap-5">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text font-bold text-lg">
                          Title*
                        </span>
                      </label>
                      <input
                        {...register("title", { required: true })}
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full"
                      />
                      {errors.title && (
                        <p className="text-red-700">title is required.</p>
                      )}
                    </div>
                  </div>

                  <div className="md:flex gap-5">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text font-bold text-lg">
                          Deadline*
                        </span>
                      </label>
                      <input
                        {...register("deadline", {
                          pattern: /\d+/,
                          required: true,
                        })}
                        type="text"
                        placeholder="Deadline"
                        className="input input-bordered w-full"
                      />
                      {errors.deadline && (
                        <p className="text-red-700">
                          please enter a number for deadline
                        </p>
                      )}
                    </div>

                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text font-bold text-lg">
                          Priority*
                        </span>
                      </label>
                      <select
                        {...register("priority", { required: true })}
                        className="select select-bordered w-full"
                      >
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                      </select>
                      {errors.priority && (
                        <p className="text-red-700">priority is required.</p>
                      )}
                    </div>
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-bold text-lg">
                        Description*
                      </span>
                    </label>
                    <textarea
                      {...register("description", { required: true })}
                      rows={5}
                      className="textarea textarea-bordered"
                      placeholder="Description"
                    ></textarea>
                    {errors.description && (
                      <p className="text-red-700"> description is required.</p>
                    )}
                  </div>
                  <input
                    className="btn text-white mt-10 bg-[#2B3440] px-10"
                    type="submit"
                    value="Add"
                  />
                </form>
              </div>
            </dialog>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal space-x-6 font-bold text-white active-hover">
            {navList}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-5">
          {user ? (
            <div>
              <div className="dropdown hidden md:block">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <img
                    className="rounded-full w-28 h-28"
                    src={user?.photoURL ? user?.photoURL : ""}
                    alt=""
                  />
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content w-60 mt-2 z-[3] -ml-48 border rounded p-6 shadow text-neutral-content bg-black"
                >
                  <div>
                    <img
                      className="rounded-full w-16 h-16 mx-auto"
                      src={user?.photoURL ? user?.photoURL : ""}
                      alt=""
                    />
                    <h1 className="text-white text-xl text-center pt-2 pb-6">
                      {user?.displayName}
                    </h1>
                  </div>
                  <ul className="font-bold">
                    <li>
                      <Link
                        onClick={handleLogOut}
                        className="flex items-center gap-1"
                        to={"/"}
                      >
                        <span>Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
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
                  <div className="p-4 w-72 min-h-full bg-[#1D1D1D] text-white font-semibold">
                    <img
                      className="rounded-full w-16 h-16 mx-auto"
                      src={user?.photoURL ? user?.photoURL : ""}
                      alt=""
                    />
                    <h1 className="text-white text-xl text-center pt-2 pb-6">
                      {user?.displayName}
                    </h1>
                    <ul className="menu menu-md">
                      {navList}
                      <li>
                        <Link onClick={handleLogOut} to={"/"}>
                          <span>Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link className={"py-1 px-4 font-bold bg-[#A8CA73]"} to={"/login"}>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
