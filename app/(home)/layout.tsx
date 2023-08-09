interface HomePageLayoutProps {
  children: React.ReactNode
}

export default async function HomePageLayout({
  children,
}: HomePageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 overflow-hidden rounded-[0.5rem] bg-background shadow">
        {children}
      </main>
    </div>
  )
}
