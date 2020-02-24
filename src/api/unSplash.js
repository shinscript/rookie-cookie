import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: `eeyYdgXiJXhn-VIgIyoUZmoyPh2OByLDtCpPIWLGrok`,
});

export const fetchImages = word => {
  return unsplash.search
    .photos(word, 1, 4)
    .then(res => res.json())
};

// global scope
window.fetchImages = fetchImages;