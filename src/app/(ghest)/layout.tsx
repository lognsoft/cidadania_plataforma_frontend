export default function GhestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="content-main">
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
    </div>
  );
}
