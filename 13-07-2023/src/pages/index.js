import Link from "next/link";
import Layout from "../components/";
import Header from "../components";
import Hero from "../components";
import About from "../components";
import Footer from "../components";

export default function HomePage() {
  return (
    <>
      <Layout />
      <Header />
      <Link href="/contacts">Contacts</Link>
      <Link href="/about">About</Link>
      <Hero />
      <About />
      <Footer />
    </>
  );
}
