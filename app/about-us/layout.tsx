export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      &copy; Nest JS is great!
    </div>
  );
}
