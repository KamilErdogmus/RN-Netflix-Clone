const getRequest = async (URL: string, params: object) => {
  const response = await Client.get(URL, {params: params});
  return response;
};

const postRequest = async (URL: string, payload: object) => {
  const response = await Client.post(URL, payload);
  return response;
};

const patchRequest = async (URL: string, payload: object) => {
  const response = await Client.patch(URL, payload);
  return response;
};

const putRequest = async (URL: string, payload: object) => {
  const response = await Client.put(URL, payload);
  return response;
};

const deleteRequest = async (URL: string, payload: object) => {
  const response = await Client.delete(URL, payload);
  return response;
};

export {getRequest, postRequest, patchRequest, putRequest, deleteRequest};
