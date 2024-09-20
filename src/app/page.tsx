import Header from "./common/header";
import backImage from "./assets/images/heroBg.jpg"; // Your image import

export default function Page() {
  return (
    <div className="min-h-screen bg-[#252439] w-full">
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backImage.src})` }} // Dynamically set the background image
      >
        <Header />
      </div>
    </div>
  );
}
