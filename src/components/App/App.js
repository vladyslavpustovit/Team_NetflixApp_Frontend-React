import Footer from "../footer/footer";
import Header from "../header/header";
import AppRouter from "../../routing-module";

export default function App() {
    const pathname = window.location.pathname;

    // Routes without header and footer
    const excludeRoutes = ["/landing", "/login", "/register"];

    // Boolean value to show or hide header and footer
    const showHeaderAndFooter = !excludeRoutes.includes(pathname);
    return (
        <>
            {showHeaderAndFooter && <Header />}
                <AppRouter/>
            {showHeaderAndFooter && <Footer />}
        </>
    )
}