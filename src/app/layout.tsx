import "./globals.css";
export const metadata = { title: "clientflow-crm", description: "A serious CRM for small sales teams: pipeline, accounts, follow-ups, activities and revenue visibility." };
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}