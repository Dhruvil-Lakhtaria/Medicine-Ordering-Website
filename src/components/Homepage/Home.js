import TopSection from "./TopSection";
import MainSection from "./MainSection";
import Footer from "./Footer";
import Copyrights from "./Copyrights";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <div className="homepage">
      <TopSection />
      <MainSection />
      <Feedback />
      <Footer />
      <Copyrights />
    </div>
  );
};

export default Home;
