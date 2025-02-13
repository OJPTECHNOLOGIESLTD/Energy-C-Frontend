import type { AppProps } from "next/app";
// import localFont from "next/font/local";
// import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/auth.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Head from "next/head";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "900"],
//   subsets: ["latin"],
//   variable: "--font-poppins",
// });

// const poppins = localFont({
//   src: [
//     { path: "/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
//     { path: "/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
//     { path: "/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
//     { path: "/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
//     { path: "/fonts/Poppins-Black.ttf", weight: "900", style: "normal" },
//   ],
//   variable: "--font-poppins",
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <div className={` bg-white`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Energy Chleen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  );
}
