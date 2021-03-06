import { Box, Stack, Typography } from "@mui/material";
import Step from "../Step";

const FirstStep = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth="800px">
        <Box display="flex">
          <Box mr={4}>
            <Step color="primary">1</Step>
          </Box>
          <Box>
            <Typography variant="body1">
              Apply to the Embassy of Ukraine in your country with the intention
              to join the Foreign Legion of Territorial Defense of Ukraine (ask
              a military diplomat or Consul, contact details – on the Embassy
              website)
            </Typography>
          </Box>
        </Box>
        <Box mt={4}>
          <Typography variant="h6">
            <strong>How to apply:</strong>
          </Typography>
          <Stack spacing={4} direction="row">
            <Typography>come to the Embassy physically</Typography>
            <Typography>phone call</Typography>
            <Typography>write to email</Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstStep;
