import "./App.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { GET_SEO_DATA } from "./api/fetchData.js";
import toast, { Toaster } from "react-hot-toast";
import styled, { ThemeProvider } from "styled-components";
import ArticleOptimization from "./components/ArticleOptimization";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";

function App() {
  //* Backend featuress
  // const [searchUrl, setSearchUrl] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");
  // const [inputUrl, setInputUrl] = useState(null);
  // const [seoData, setSeoData] = useState([]);

  // const inputRef = useRef(null);

  // const searchPageUrl = (e) => {
  //   setSearchUrl(e.target.value);
  // };

  // const onKeyResults = async (e) => {
  //   if (e.key === "Enter") {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get(`/api/pageseo/${searchUrl}`);
  //       if (res) {
  //         setLoading(false);
  //         setSeoData(res.data);
  //         toast.success("Scan completed!");
  //       }
  //     } catch (error) {
  //       setLoading(false);
  //       toast.error("This website doesn't exist, please try something else.");
  //       console.log(error.message);
  //     }
  //   }
  // };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container">
        {/* <Block className="block">
          <input
            className="url_input"
            type="search"
            name="search"
            placeholder="Maybe Avengers?"
            onChange={searchPageUrl}
            onKeyDown={onKeyResults}
          ></input>
          <button className="submit_url">Analize</button>
        </Block> */}
        {/* <Section>
          {loading ? (
            <ProgressBar className="loading">Loading...</ProgressBar>
          ) : (
            <div>
              <p>Meta title:</p>
              <h2>{seoData.metaTitle}</h2>
              <span>{message}</span>
            </div>
          )}
          <ProgressBar>
            <span id="front" />
            <span id="back" />
          </ProgressBar>
        </Section> */}
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

const Block = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ProgressBar = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #fff;

  & #front {
    position: absolute;
  }

  & #back {
    position: absolute;
  }
`;
