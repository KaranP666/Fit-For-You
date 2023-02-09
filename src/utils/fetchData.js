export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
      };

export const fetchData = async(url,options)=>{
    const reponse = await fetch(url,options);
    const data = await reponse.json();

    return data;
}