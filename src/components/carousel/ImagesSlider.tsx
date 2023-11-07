import * as React from "react";
import { Box } from "@mui/material";
import { styles as classes } from "./styles";

type IProps = {
  images: { url: string; alt: string }[];
  activeStep: number;
};

const ImagesSlider: React.FC<IProps> = ({ images, activeStep }) => {
  return (
    <Box sx={classes.imgContainer}>
      {images.map((image, index) => (
        <React.Fragment key={image.alt}>
          {activeStep === index && <img src={image.url} alt={image.alt} />}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default ImagesSlider;
