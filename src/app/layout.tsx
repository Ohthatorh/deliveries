import "../styles/globals.css";
import Header from "@/shared/components/header";
import Footer from "@/shared/components/footer";
import { Metadata, Viewport } from "next";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "@/shared/components/app-provider";

export const viewport: Viewport = {
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Deliveries.io - список доставок",
  description: "Deliveries.io - список доставок",
  openGraph: {
    title: "Deliveries.io - список доставок",
    description: "Deliveries.io - список доставок",
    locale: "ru_RU",
    type: "website",
    siteName: "Deliveries.io",
  },
  icons: {
    apple: "/favicon.png",
    icon: "/favicon.ico",
    shortcut: {
      type: "image/x-icon",
      url: "/favicon.ico",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <AppProvider>
          <Header />
          <main className="py-5">{children}</main>
          <Footer />
          <ToastContainer stacked />
        </AppProvider>
      </body>
    </html>
  );
}
