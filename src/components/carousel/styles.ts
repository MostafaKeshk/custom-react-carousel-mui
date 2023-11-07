export const styles = {
  imgContainer: {
    width: "100%",
    height: "60vh",
    display: "flex",
    "& img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navImgContainer: {
    marginTop: "20px",
    display: "flex",
  },
  navImg: (isActive: boolean) =>
    ({
      width: "100px",
      height: "100px",
      objectFit: "cover",
      margin: "0 10px",
      opacity: isActive ? 1 : 0.5,
      cursor: "pointer",
      borderRadius: "5px",
    } as any),
};
