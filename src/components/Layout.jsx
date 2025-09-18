import Header2 from "./Header2.jsx";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header2 />
      <main className="flex-1 pt-8 p-4">{children}</main>
      <Footer />
    </div>
  );
}
