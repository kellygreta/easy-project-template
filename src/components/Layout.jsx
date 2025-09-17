import Header from "./Header.jsx";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20 p-6">{children}</main>
      <Footer />
    </div>
  );
}
