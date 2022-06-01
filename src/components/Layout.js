import Footer from "./Footer";
import Navigation from "./Navigation";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      {window.location.pathname === "/" && <Header />}
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
