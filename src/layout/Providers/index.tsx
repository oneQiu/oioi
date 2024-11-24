import { ThemeProvider } from '@mui/material';
import { theme } from '@/layout/Providers/theme/theme';

const Providers: RFC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Providers;
