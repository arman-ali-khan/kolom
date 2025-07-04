import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../../../context/ContextProvider";

const Navbar = () => {
  const router = useRouter();
  // context
  const { logOut, user, settings } = useContext(UserContext);

  // logout
  const handleLogout = () => {
    logOut().then(() => {
      router.push(`/start/login`);
    });
  };

  // const settings = data[0]
  return (
    <div className="flex justify-center ">
      <div className="navbar md:fixed md:w-9/12 mx-auto py-2 sm:py-0 sm:rounded-full border sm:border-orange-400 px-4 z-50 min-h-0 md:top-0 bg-base-100">
        <div className="navbar-start">
          <Link
            href={"/"}
            className="flex relative items-center gap-2 normal-case text-xl"
          >
            {settings?.logo ? (
              <Image
                width={200}
                height={100}
                alt=""
                className=" w-full h-10 p-2 sm:h-12"
                src={settings?.logo}
              />
            ) : (
              <span className="font-bold">
                <span className=" ">{settings.title}</span>
              </span>
            )}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/search"}>Search</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <button
              className="hover:underline btn btn-sm btn-ghost"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          ) : (
            <Link
              href={`/start/login`}
              className="hover:underline btn btn-sm btn-ghost"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
