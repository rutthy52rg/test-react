import client from "../../api/client";
export const urlAdverts = "/v1/adverts";

export const getLatestAdverts = () => {
  const url = `${urlAdverts}`;
  return client.get(url);
};

export const getAdvert = (id) => {
  const url = `${urlAdverts}/${id}`;
  return client.get(url);
};

// export const createAdvert = (advert) => {
//   const url = urlAdverts;
//   return client.post(url, advert);
// };

// export const getAdversTags = () => {
//   const url = `${urlAdverts}/tags`;
//   return client.get(url);
// };

export const createAdvert = (formData) => {
  const url = `${urlAdverts}`;
  return client.post(url, formData);
};
