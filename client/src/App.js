import "./App.css";
import { Toaster } from "react-hot-toast";
import styled, { ThemeProvider } from "styled-components";
import ArticleOptimization from "./components/ArticleOptimization";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container">
        <Section>
          <ArticleOptimization />
        </Section>
      </div>
    </ThemeProvider>
  );
}

export default App;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
