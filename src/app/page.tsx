import NavBar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import Banner from "./home/banner";



export default function Home() {
  return (
    <div className="bg-gray-50">
      <NavBar></NavBar>
 
      <main className="min-h-screen  bg-gray-50">
        <Banner></Banner>

      </main>

      <Footer></Footer>
      
     
    </div>
    )
}
