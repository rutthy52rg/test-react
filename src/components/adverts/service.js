import client from "../../api/client";
export const urlAdverts = "/api/v1/adverts";

export const getLatestAdverts = () => {
  const url = urlAdverts;
  return client.get(url);
};

export const getAdvertDetail = (id) => {
  const url = `${urlAdverts}/${id}`;
  return client.get(url);
};

export const deleteAdvert = (id) => {
  const url = `${urlAdverts}/${id}`;
  return client.delete(url);
};
export const getAdversTags = () => {
  const url = `${urlAdverts}/tags`;
  return client.get(url);
};

export const createAdverts = (formData) => {
  const url = `${urlAdverts}`;
  return client.post(url, formData);
};
