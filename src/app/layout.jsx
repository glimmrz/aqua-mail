import { font } from "@/lib/fonts";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Aqua Email Service",
  description: "Email management service.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <main>{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
