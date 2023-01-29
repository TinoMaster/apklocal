export const httpHelper = () => {
  const funcionHttps = (endpoint, options) => {
    const defaultHeaders = {
      accept: "application/json",
    };
    const error = {};

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";

    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    setTimeout(() => {
      controller.abort();
    }, 50000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: "Error con la base de datos",
            })
      )
      .catch((err) => error.err = err);
  };

  const get = (url, options = {}) => funcionHttps(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return funcionHttps(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return funcionHttps(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return funcionHttps(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
