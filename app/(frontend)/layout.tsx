
export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main className="flex-grow container px-4 mx-auto">{children}</main>
  );
}
