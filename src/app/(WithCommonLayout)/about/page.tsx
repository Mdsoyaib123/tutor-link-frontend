import BannerSection from "@/components/AboutPage/BannerSection";
import MissionSection from "@/components/AboutPage/MissionSection";
import WorkingSection from "@/components/AboutPage/WorkingSection";
import TeamSection from "@/components/AboutPage/TeamSection";
import ReviewSection from "@/components/AboutPage/ReviewSection"


const AboutPage = () => {
    return (
        <div >
            <MissionSection/>
            <BannerSection/>
            <WorkingSection/>
            <TeamSection/>
            <ReviewSection/>
        </div>
    );
};

export default AboutPage;