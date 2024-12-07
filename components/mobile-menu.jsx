"use client";

import Link from "next/link";
import { useLanguage } from "./language-provider";
import { Moon, Sun, Users, LogIn, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function MobileMenu({ theme, setTheme }) {
  const { language, setLanguage, languages } = useLanguage();

  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium leading-none px-2">
            Select Language
          </h4>
          <RadioGroup
            defaultValue={language}
            onValueChange={setLanguage}
            className="grid grid-cols-2 gap-2 pt-2"
          >
            {languages.map((lang) => (
              <div key={lang.value}>
                <RadioGroupItem
                  value={lang.value}
                  id={lang.value}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={lang.value}
                  className="flex flex-col items-center cursor-pointer justify-between rounded-md border border-muted bg-transparent p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                >
                  <span
                    className={`text-sm ${
                      language === lang.value ? "font-medium" : "font-normal"
                    }`}
                  >
                    {lang.label}
                  </span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <div className="space-y-1">
        <Link href="/about-us" className="w-full">
          <Button variant="ghost" className="w-full justify-start h-10" asChild>
            <SheetClose className="w-full justify-start flex items-center gap-2">
              <Info className="h-4 w-4" />
              About Us
            </SheetClose>
          </Button>
        </Link>

        {/* <Link href="/contributors" className="w-full">
          <Button variant="ghost" className="w-full justify-start h-10" asChild>
            <SheetClose className="w-full justify-start flex items-center gap-2">
              <Users className="h-4 w-4" />
              Contributors
            </SheetClose>
          </Button>
        </Link>

        <Link href="/login" className="w-full">
          <Button variant="ghost" className="w-full justify-start h-10" asChild>
            <SheetClose className="w-full justify-start flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </SheetClose>
          </Button>
        </Link> */}
      </div>

      <div className="border-t pt-4">
        <Button
          variant="ghost"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-full justify-start h-10"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="ml-2 text-sm">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
}
