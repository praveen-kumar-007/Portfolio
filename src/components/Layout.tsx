import { ReactNode } from "react";
import NeuralBackground from "./NeuralBackground";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NeuralBackground />
      <Navbar />
      <main className="relative z-10 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
