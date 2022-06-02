import { useEffect, useState } from 'react';

import axios from 'axios';

const FetchRepos = (pageNumber) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  const fetchRepos = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/search/repositories?q=created:%3E2022-06-01&sort=stars&order=desc&page=${pageNumber}&per_page=5`
      );
      setRepos((prevRepos) => {
        return [...prevRepos, ...data.items];
      });
      setHasMore(data.items.length > 0);
      setLoading(false);
    } catch (err) {
      return console.error(err);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, [pageNumber]);

  return { loading, hasMore, repos };
};

export default FetchRepos;
