import axios from "axios";

export const GET_SEO_DATA = async (url) => {
  const res = await axios.get(`/api/pageseo/${url}`);
  return res;
};
