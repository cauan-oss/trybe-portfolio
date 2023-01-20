import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [locale, setLocale] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const refresh = (url) => {
      fetch(url)
        .then((result) => result.json())
        .then((locale) => setLocale(locale.result))
        .catch((err) => setError(err))
        .finally(setLoading(false));
    };
    refresh();
  }, []);
  return [locale, error, loading];
}

export default useFetch;
