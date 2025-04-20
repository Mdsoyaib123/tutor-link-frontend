import Footer from "../../components/shared/footer";
import NavBar from "../../components/shared/navbar";



const CommonLayout = ({children}: {children : React.ReactNode}) => {
    return (
        <>
            <NavBar></NavBar>
            <div className= "min-h-screen  bg-gray-50" >
            {
                children
            }

            </div>
            
            <Footer></Footer>
        </>
    );
};

export default CommonLayout;

