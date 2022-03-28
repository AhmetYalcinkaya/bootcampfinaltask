import { API_URL_POST } from "../env/config";

export const orderService = {
  get: async (url) => {
    let response = [];

    await fetch(API_URL_POST + url)
      .then((res) => res.json())
      .then((data) => {
        response = data;
      });

    return response;
  },
  post: async (url, data) => {
    let response = {};
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    await fetch(API_URL_POST + url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        response = data;
      });

    return response;
  },
};
