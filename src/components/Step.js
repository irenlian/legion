import { Box, Typography } from '@mui/material'

function Step({children, color}) {
  return (
    <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderRadius="50%"
    width="100px"
    height="100px"
    style={{ backgroundColor: color === 'primary' ? 'grey' : 'white' }}
    >
        <Typography variant="h2" noWrap color={color === 'primary' ? 'white' : 'grey'}>
            {children}
        </Typography>
    </Box>      
  );
}

export default Step;
