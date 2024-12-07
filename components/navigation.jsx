"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useLanguage } from "./language-provider";
import { Menu, Moon, Sun, Languages, Users, LogIn, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, languages } = useLanguage();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/pattern.jpg"
              alt="Shlokas Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-xl font-semibold">Shlokas</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 h-9">
                  <Languages className="h-4 w-4" />
                  <span className="sr-only">Switch language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.value}
                    onClick={() => setLanguage(lang.value)}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Link href="/about-us">
              <Button variant="ghost">About Us</Button>
            </Link>

            {/* <Link href="/contributors">
              <Button variant="ghost">Contributors</Button>
            </Link> */}

            {/* <Link href="/login">
              <Button>Login</Button>
            </Link> */}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 h-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <Link href="/about-us">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <SheetClose className="w-full justify-start">
                        About Us
                      </SheetClose>
                    </Button>
                  </Link>

                  {/* <Link href="/contributors">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <SheetClose className="w-full justify-start flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Contributors
                      </SheetClose>
                    </Button>
                  </Link>

                  <Link href="/login">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <SheetClose className="w-full justify-start flex items-center gap-2">
                        <LogIn className="h-4 w-4" />
                        Login
                      </SheetClose>
                    </Button>
                  </Link> */}

                  <div className="flex items-center gap-2 px-4 py-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                      className="w-9 h-9"
                    >
                      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="w-9 h-9">
                          <Languages className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {languages.map((lang) => (
                          <DropdownMenuItem
                            key={lang.value}
                            onClick={() => setLanguage(lang.value)}
                          >
                            {lang.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
