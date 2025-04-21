import Footer from "../../components/shared/footer";
import NavBar from "../../components/shared/navbar";



const CommonLayout = ({children}: {children : React.ReactNode}) => {
    return (
        <>
            <NavBar></NavBar> 
            <main className="min-h-screen bg-gray-50 mt-8">{children}</main>
            
            <Footer></Footer>
        </>
    );
};

export default CommonLayout;

