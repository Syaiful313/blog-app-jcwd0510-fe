"use client";

import LoadingScreen from "@/components/LoadingScreen";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/userSlice";
import { PropsWithChildren, useEffect, useState } from "react";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const dispath = useAppDispatch();

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const data = localStorage.getItem("blog-storage");

    if (data) {
      dispath(loginAction(JSON.parse(data)));
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

export default AuthProvider;
