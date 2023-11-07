import ImagesSlider from "../components/carousel/ImagesSlider";
import Navigation from "../components/carousel/Navigation";
import useNavigation from "../hooks/useNavigation";

const Home = () => {
  const { activeStep, handleNext, handleBack, handleChange } = useNavigation();

  const images = [
    { url: "/images/1.jpg", alt: "tree1" },
    { url: "/images/2.jpg", alt: "tree2" },
    { url: "/images/3.jpg", alt: "tree3" },
  ];

  return (
    <>
      <ImagesSlider images={images} activeStep={activeStep} />
      <Navigation
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
        handleChange={handleChange}
        images={images}
      />
    </>
  );
};

export default Home;
