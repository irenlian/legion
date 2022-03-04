import { Box } from '@mui/material'
import './App.css';
import FirstStep from "./components/steps/FirstStep";

function App() {
  return (
    <>
      <Box height="50vh" display="flex" justifyContent="center" alignItems="center">
        Header
      </Box>
      <FirstStep />
      <Box height="50vh" display="flex" justifyContent="center"  alignItems="center">
        Footer
      </Box>
    </>
  );
}

export default App;
