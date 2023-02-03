import { useEffect, useState } from "react";
import { httpHelper } from "../helpers/httpHelper";
import apiConfig from "../config/api.config.json";

const usePagMirones = () => {
  const [mirones, setMirones] = useState([]);
  const [loaderPageMiron, setLoaderPageMiron] = useState(false);
  const [errorPageMiron, setErrorPageMiron] = useState({});
  const [successPageMiron, setSuccessPageMiron] = useState({});

  useEffect(() => {
    setLoaderPageMiron(true);
    httpHelper()
      .get(`${apiConfig.api.url}/mirones`)
      .then((res) => {
        if (res.error) {
          setLoaderPageMiron(false);
          setErrorPageMiron(res);
        } else {
          setLoaderPageMiron(false);
          setMirones(res.data);
        }
      });
  }, []);

  const states = {
    mirones,
    setMirones,
    loaderPageMiron,
    errorPageMiron,
    successPageMiron,
  };
  return { states };
};

export { usePagMirones };
