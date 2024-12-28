import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// Configure Poppins
const poppins = Poppins({
  subsets: ["latin"], // Use subsets based on your language needs
  weight: ["400", "500", "600", "700"], // Specify font weights
  variable: "--font-poppins", // Define a custom CSS variable
});

export const metadata = {
  title: "Bloggy - Your Gateway to Travel, Lifestyle, and Inspiration",
  description:
    "Explore captivating stories, travel tips, lifestyle hacks, and inspiring ideas on Bloggy. Stay informed, entertained, and inspired with our curated blogs designed for adventurers, dreamers, and storytellers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
