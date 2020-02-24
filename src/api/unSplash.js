/**
 * ************************************
 *
 * @module unsplash
 * @description Calls the unsplash API to give user the top 4 images and allow them to 
 *              select an image. API is used using an accessKey.
 * 
 *              Normally you would not want to share this access key publicly because someone can
 *              abuse the API under your key. (For simplicity I've applied it directly);
 *
 * ************************************
 */

import Unsplash from "unsplash-js";

const unsplash = new Unsplash({ accessKey: `eeyYdgXiJXhn-VIgIyoUZmoyPh2OByLDtCpPIWLGrok` });

export const fetchImages = word => {
  return unsplash.search
    .photos(word, 1, 4)
    .then(res => res.json());
};