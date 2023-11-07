import * as React from "react";
import { Container, Box, Button } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { styles as classes } from "./styles";

type IProps = {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleChange: (index: number) => void;
  images: { url: string; alt: string }[];
};

const Navigation: React.FC<IProps> = ({
  activeStep,
  handleNext,
  handleBack,
  handleChange,
  images,
}) => {
  return (
    <Container sx={classes.navContainer}>
      <Button
        startIcon={<KeyboardArrowLeft />}
        variant="contained"
        size="small"
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        Back
      </Button>

      <Box sx={classes.navImgContainer}>
        {images.map((image, index) => (
          <img
            key={image.alt}
            src={image.url}
            alt={image.alt}
            style={classes.navImg(activeStep === index)}
            onClick={() => handleChange(index)}
          />
        ))}
      </Box>

      <Button
        startIcon={<KeyboardArrowRight />}
        size="small"
        variant="contained"
        onClick={handleNext}
        disabled={activeStep === images.length - 1}
      >
        Next
      </Button>
    </Container>
  );
};

export default Navigation;
