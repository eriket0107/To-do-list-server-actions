"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../Button";

export const ThemeButton = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("@app-todo:theme") as
      | "light"
      | "dark"
      | null;
    return (
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
    localStorage.setItem("@app-todo:theme", theme);
  }, [theme]);

  return (
    <Button
      onClick={handleThemeChange}
      style={{ backgroundColor: "transparent" }}
    >
      {theme === "light" ? (
        <Moon color="black" height={24} width={24} />
      ) : (
        <Sun color="white" height={24} width={24} />
      )}
    </Button>
  );
};
