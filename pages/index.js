
import Benefits from "@/components/Layout/Benefits";
import Contact from "@/components/Layout/Contact";
import Explore from "@/components/Layout/Explore";
import Joining from "@/components/Layout/Joining";
import Nav from "@/components/Layout/Nav";
import Overview from "@/components/Layout/Overview";




function Index() {
  return (
    <>
      <Nav />
      <Overview />
      <Explore />
      <Benefits />
      <Joining />
      <Contact />
    </>
  
  );
}

export default Index;