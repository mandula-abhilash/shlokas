import "./globals.css";
import {
  Inter,
  Mallanna,
  Noto_Sans_Gujarati,
  Baloo_Paaji_2,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnalyticsProvider } from "@/components/providers/analytics-provider";

const inter = Inter({ subsets: ["latin"] });
const mallanna = Mallanna({
  weight: "400",
  subsets: ["telugu"],
  variable: "--font-mallanna",
});
const notoSansGujarati = Noto_Sans_Gujarati({
  weight: ["400", "700"],
  subsets: ["gujarati"],
  variable: "--font-gujarati",
});
const balooPaaji = Baloo_Paaji_2({
  weight: ["400", "700"],
  subsets: ["gurmukhi"],
  variable: "--font-punjabi",
});

export const metadata = {
  title: "Shlokas for Children",
  description: "Learn timeless Sanskrit verses through interactive learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${mallanna.variable} ${notoSansGujarati.variable} ${balooPaaji.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <LanguageProvider>
              <AnalyticsProvider>{children}</AnalyticsProvider>
            </LanguageProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
