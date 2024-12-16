"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/slices/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const dispath = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.removeItem("blog-storage");
    dispath(logoutAction());
  };
  return (
    <nav className="bg-slate-400">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>
          <div className="flex cursor-pointer items-center gap-8 font-medium">
            <Link href="/">Home</Link>
            <Link href="/">Profile</Link>
            {!user.id && <Link href="/login">Sign in</Link>}
            {!!user.id && (
              <>
                <p onClick={() => router.push("/write")}>write</p>
                <p onClick={logout}>Logout</p>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
