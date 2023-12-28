export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "04abc99102mshd12805729c6a2f6p12c173jsn7731d1733b7d",
  },
};

export const fetchData = async (url, options) => {
  const reponse = await fetch(url, options);
  const data = await reponse.json(); // FOR EXTRACTING THE DATA

  return data;
};
