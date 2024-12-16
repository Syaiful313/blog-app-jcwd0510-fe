"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/slices/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToogleDarkMode } from "./ToogleDarkMode";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const Navbar = () => {
  const dispath = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.removeItem("blog-storage");
    dispath(logoutAction());
  };
  return (
    <nav>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="text-xl font-bold">
            BlogHub
          </Link>
          <div className="hidden cursor-pointer items-center gap-8 font-medium md:flex">
            <Link href="/">Home</Link>
            <Link href="/">Profile</Link>
            {!user.id && <Link href="/login">Sign in</Link>}
            {!!user.id && (
              <>
                <p onClick={() => router.push("/write")}>write</p>
                <p onClick={logout}>Logout</p>
              </>
            )}
            <ToogleDarkMode />
          </div>
          <div className="flex gap-3 md:hidden">
            <ToogleDarkMode />

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
