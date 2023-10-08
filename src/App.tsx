import { Box, Button, Container, CssBaseline } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box>
      <CssBaseline />
      <Container maxWidth="sm">
        <Button color="secondary" variant="contained">
          Test
        </Button>
      </Container>
    </Box>
  );
}

export default App;
