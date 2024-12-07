"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import SlokaDetails from "./sloka-details";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function SlokaCard({
  sloka,
  language,
  isPreview = false,
  variant = "default",
  onPrevious,
  onNext,
  total,
  current,
}) {
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const getLanguageClass = (lang, size) => {
    return lang === "telugu" ? `text-telugu ${size}` : size;
  };

  if (variant === "compact") {
    return (
      <Card className="relative overflow-hidden transition-all duration-300 hover:bg-muted/50 p-3 hover:shadow-sm">
        <h3
          className={`font-medium text-primary mb-1 ${getLanguageClass(
            language,
            "text-sm"
          )}`}
        >
          {sloka.title[language]}
        </h3>
        <p
          className={`text-muted-foreground line-clamp-2 ${getLanguageClass(
            language,
            "text-xs"
          )}`}
        >
          {sloka.text[language]}
        </p>
      </Card>
    );
  }

  if (variant === "full") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-7xl mx-auto">
        <div className="lg:contents">
          <Card className="relative overflow-hidden transition-all duration-300 p-6 lg:p-8 h-full lg:min-h-[70vh]">
            <div
              className="absolute inset-0 pointer-events-none bg-repeat opacity-5"
              style={{
                backgroundImage: 'url("/assets/pattern.jpg")',
                backgroundSize: "64px 64px",
              }}
            />

            <div className="relative h-full flex flex-col justify-between">
              <div className="space-y-4 text-center flex-1">
                <div className="space-y-2">
                  <h3
                    className={`font-bold text-primary ${getLanguageClass(
                      language,
                      "text-2xl"
                    )}`}
                  >
                    {sloka.title[language]}
                  </h3>

                  <div className="flex items-center justify-between px-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={onPrevious}
                      className="h-8 w-8"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      {current} of {total}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={onNext}
                      className="h-8 w-8"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="relative bg-white/30 border-2 border-gray-100 dark:border-gray-700/5 dark:bg-white/5 px-2 py-6 rounded-lg backdrop-blur-md shadow-sm flex-1">
                  <p
                    className={`font-medium leading-relaxed whitespace-pre-line ${getLanguageClass(
                      language,
                      "text-lg"
                    )}`}
                  >
                    {sloka.text[language]}
                  </p>
                </div>
              </div>

              <div className="lg:hidden space-y-4 mt-8">
                {sloka.deityImage && (
                  <div className="flex justify-center">
                    <div className="relative w-48 h-48 rounded-full">
                      <Image
                        src={sloka.deityImage}
                        alt={`${sloka.title[language]} Deity`}
                        fill
                        className="object-cover dark:brightness-90 dark:contrast-125"
                      />
                    </div>
                  </div>
                )}

                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => setShowMobileDetails(!showMobileDetails)}
                >
                  {showMobileDetails ? (
                    <ChevronUp className="h-4 w-4 mr-2" />
                  ) : (
                    <ChevronDown className="h-4 w-4 mr-2" />
                  )}
                  {showMobileDetails ? "Hide Details" : "Show Details"}
                </Button>

                {showMobileDetails && (
                  <div>
                    <SlokaDetails
                      sloka={sloka}
                      language={language}
                      isMobile={true}
                    />
                  </div>
                )}
              </div>

              {sloka.deityImage && (
                <div className="hidden lg:flex justify-center mt-8">
                  <div className="relative w-48 h-48 rounded-full">
                    <Image
                      src={sloka.deityImage}
                      alt={`${sloka.title[language]} Deity`}
                      fill
                      className="object-cover dark:brightness-90 dark:contrast-125"
                    />
                  </div>
                </div>
              )}
            </div>
          </Card>

          <Card className="relative overflow-hidden transition-all duration-300 p-6 lg:p-8 hidden lg:block lg:sticky lg:top-24 h-full lg:min-h-[70vh]">
            <div
              className="absolute inset-0 pointer-events-none bg-repeat opacity-5"
              style={{
                backgroundImage: 'url("/assets/pattern.jpg")',
                backgroundSize: "64px 64px",
              }}
            />

            <div className="relative h-full flex flex-col">
              <SlokaDetails
                sloka={sloka}
                language={language}
                isMobile={false}
              />
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return null;
}
