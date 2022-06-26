import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      {window.location.pathname === "/" && <Header />}
      <NavigationBar />
      <main className="bg-color">{children}</main>
      <Footer />
    </>
  );
}
