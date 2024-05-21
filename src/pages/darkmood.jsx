import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from 'react';



const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  // return (
  //   <ColorModeContext.Provider value={colorMode}>
  //     <ThemeProvider theme={theme}>
  //       <Box
  //         sx={{
  //           display: 'flex',
  //           width: '100%',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           bgcolor: 'background.default',
  //           color: 'text.primary',
  //           borderRadius: 1,
  //           p: 3,
  //           position: 'fixed',
  //           bottom: 0,
  //           left: 0,
  //           right: 0,
  //         }}
  //       >
  //         {theme.palette.mode} mode
  //         <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
  //           {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  //         </IconButton>
  //       </Box>
  //     </ThemeProvider>
  //   </ColorModeContext.Provider>
  // );
}
export default ToggleColorMode;