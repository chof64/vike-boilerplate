import "./Layout.css";

import "./tailwind.css";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"m-auto flex max-w-5xl"}>
      <Sidebar>
        <Logo />
        <Link href="/">Welcome</Link>
        <Link href="/todo">Todo</Link>
        <Link href="/star-wars">Data Fetching</Link>
      </Sidebar>
      <Content>{children}</Content>
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={"flex shrink-0 flex-col border-r-2 border-r-gray-200 p-5"}
      id="sidebar"
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div className={"min-h-screen p-5 pb-12"} id="page-content">
        {children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className={"mb-2 p-5"}>
      <a href="/">
        <img alt="logo" height={64} src={logoUrl} width={64} />
      </a>
    </div>
  );
}
