import ActionBanner from "@/components/homePage/ActionBanner";
import Banner from "@/components/homePage/Banner";
import BenefitsSection from "@/components/homePage/BenefitsSection"
import Partnerships from "@/components/homePage/PartnershipSection";
import Slider from "@/components/homePage/Slider"
import TutorSection from "@/components/homePage/TutorSection"
 



export default function HomePage() {
  return (
    <div className="mt-12">
      
      <Banner/>
      <BenefitsSection/>
      <Slider/>
      <ActionBanner/>
      <TutorSection/>
      <Partnerships/>

     
      
     
    </div>
    )
}
