import { ReactNode } from "react";
import NeuralBackground from "./NeuralBackground";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <NeuralBackground />
      <Navbar />
      <main className="relative z-10 pt-24 pb-16 px-2 sm:px-6 flex-1 w-full max-w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
