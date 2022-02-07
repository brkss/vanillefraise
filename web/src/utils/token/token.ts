let _token = "";

export const setAccessToken = (token: string) => {
  _token = token;
};

export const getAccessToken = () => {
  return _token;
};
