import RightSidebarHome from "#/components/sidebar/RightSidebarHome";
import Footer from "#/components/Footer";

export default function HomePageLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <RightSidebarHome />

            <main className="main full-width">
                {children}

                <Footer />

            </main>
        </>

    )
}

