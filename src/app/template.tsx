/** Re-mounts on every navigation, giving a calm cross-fade between pages. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <main id="main" className="page-in">{children}</main>;
}
