import Routes from "./routes/Routes";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./theme/global";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
