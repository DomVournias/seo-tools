import { useEffect, useState } from "react";

const options = {
  method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "e11fdea180mshc9fdd8e8fb14fbap1990fcjsna531dcdcad63",
  //     "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  //   },
};

export function useSearchPageSEO(url) {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://localhost:5000/api/pageseo/${url}`, options)
      .then((response) => response.json())
      .then((response) => setSearchResults(response))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { searchResults, loading, error };
}
