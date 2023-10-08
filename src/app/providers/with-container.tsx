import { Container, CssBaseline } from "@mui/material";

const WithContainer = (component: () => React.ReactNode) => function withContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">{component()}</Container>
    </>
  );
};

export default WithContainer;
