
"use client";

import Link from "next/link";
import { menuList } from "@/lib/menu-list";

interface NavbarProps {
  className?: string;
  logo?: {
    url: string;
    text: string;
  };
  auth?: {
    login: { title: string; url: string };
    signup: { title: string; url: string };
  };
}

const defaultLogo = {
  url: "/",
  text: "Hello world",
};

const defaultAuth = {
  login: { title: "Login", url: "/login" },
  signup: { title: "Sign up", url: "/register" },
};

const NavbarComponent = ({
  className = "",
  logo = defaultLogo,
  auth = defaultAuth,
}: NavbarProps) => {
  return (
    <nav
      className={`flex flex-wrap items-center justify-between gap-4 border-b px-6 py-4 ${className}`}
    >
      {/* Logo */}
      <Link
        href={logo.url}
        className="text-xl font-bold tracking-tight"
      >
        {logo.text}
      </Link>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center gap-5">
        {menuList.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Authentication Buttons */}
      <div className="flex items-center gap-3">
        <Link
          href={auth.login.url}
          className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          {auth.login.title}
        </Link>

        <Link
          href={auth.signup.url}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {auth.signup.title}
        </Link>
      </div>
    </nav>
  );
};

export { NavbarComponent };
