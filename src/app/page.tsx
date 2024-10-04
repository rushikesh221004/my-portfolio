import Header from "./common/header";
import backImage from "./assets/images/heroBg.jpg"; // Your image import
import Hero from "./components/hero";
import Excellence from "./components/excellence"
import IAmDeveloper from "./components/iAmDeveloper"
import Projects from "./components/projects"
import AmazingWorks from "./components/amazingWorks"
export default function Page() {
  return (
    <div className="min-h-screen bg-[#252439] py-1 w-full">
      <div
        className="h-screen flex items-center flex-col w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backImage.src})` }} // Dynamically set the background image
      >
        <Header />
        <Hero />
      </div>
      <Excellence />
      <IAmDeveloper/>
      <Projects/>
      <AmazingWorks/>
    </div>
  );
}
