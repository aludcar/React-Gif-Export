export const getGifs = async (category) => {
  const URL = `http://api.giphy.com/v1/gifs/search?api_key=Y6FTq4w4INw9eT4gCtXd3Eaq3KpoYEAR&q=${category}&limit=10`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
