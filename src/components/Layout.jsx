import HeaderMenu from "./HeaderMenu.jsx";
import Footer from "./Footer";
import Call2Action from "../components/Call2Action";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderMenu />
      <main className="flex-1 pt-8 p-4">{children}</main>
      <Call2Action />
      <Footer />
    </div>
  );
}
