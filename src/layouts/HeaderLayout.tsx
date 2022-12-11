import Header from "../components/Header";

interface Props {
  children: React.ReactNode;
}

export default function HeaderLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
