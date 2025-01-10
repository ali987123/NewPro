// import Card2 from '../../components/Card2'
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Section2 from "../../components/Section2";
import Students1 from "../../components/Students1";
// import { Students } from '../../Data'

const HomePage = () => {
  return (
    <div className="min-h-screen mx-auto bg-black text-white">
      <Hero />
      <Section />
      <Section2 />
      <Cards />
      <Students1 />
      <Footer />
    </div>
  );
};

export default HomePage;
