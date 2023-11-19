import Navbar from "./navbar";

export default async function Nav({ lang }: { lang: string }) {
  return <Navbar lang={lang} />;
}
