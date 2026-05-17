import "./Layout.css";
import { Header } from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          margin: "auto",
          flexGrow: 1,
          width: '100%',
          maxWidth: 900,
        }}
      >
        <Content>{children}</Content>
      </div>
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="page-container"
      style={{
        width: '100%',
      }}
    >
      <div
        id="page-content"
        style={{
          padding: '1rem',
          paddingBottom: '4rem',
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
}
