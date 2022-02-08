import clsx from "clsx";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

import Button from "./buttons/Button";

import clsxm from "@/lib/helpers/clsxm";

const HeaderComponent = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  const handleChangeTheme = () => {
    return setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 z-50 w-full bg-gray-300 p-0.5 opacity-90 dark:bg-gray-800">
      <div
        className={clsx(
          "layout flex items-center justify-between",
          "mx-auto h-14 max-w-4xl px-2 md:px-1"
        )}
      >
        <h5 className="font-bold text-black dark:text-white">
          Open Graph Image Generator
        </h5>
        <Button
          variant="outline"
          className={clsxm(
            "dark:border-white dark:text-white dark:hover:bg-gray-500",
            "hover:border-black hover:bg-gray-200",
            "border-black p-2 text-black"
          )}
          onClick={() => handleChangeTheme()}
        >
          {resolvedTheme === "light" ? (
            <BiMoon size={20} />
          ) : (
            <BiSun size={20} />
          )}
        </Button>
      </div>
    </header>
  );
};

export default HeaderComponent;
