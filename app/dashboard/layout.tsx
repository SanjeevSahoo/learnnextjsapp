export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
        children: React.ReactNode
    }) {
    return (
        <section>
            <div>This is Dashboard Layout</div>
            {children}
        </section>
    )
}