/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useCallback } from 'react';

import {
  Box,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from '@mui/material';

import FetchRepos from '../components/FetchRepos';
import Repository from '../components/Repository';

const Github = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, hasMore, repos } = FetchRepos(pageNumber);

  const observer = useRef();
  const lastRowRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
      }}
    >
      <Box sx={{ flex: 1 }} />
      <Box
        sx={{
          flex: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='bold'
          sx={{ fontSize: '4rem', margin: '0 0 2rem 0' }}
        >
          Trending Repositories
        </Typography>

        {/* Repositories List */}
        <List>
          {repos.map((repo, index) => {
            if (repos.length === index + 1) {
              return (
                <ListItem key={repo.id} ref={lastRowRef}>
                  <Repository
                    avatar={repo.owner.avatar_url}
                    name={repo.name}
                    description={repo.description}
                    stars={repo.stargazers_count}
                    issues={repo.issues_count}
                    created_at={repo.created_at}
                    login={repo.owner.login}
                    url={repo.html_url}
                  />
                </ListItem>
              );
            } else {
              return (
                <ListItem key={repo.id}>
                  <Repository
                    avatar={repo.owner.avatar_url}
                    name={repo.name}
                    description={repo.description}
                    stars={repo.stargazers_count}
                    issues={repo.issues_count}
                    created_at={repo.created_at}
                    login={repo.owner.login}
                    url={repo.html_url}
                  />
                </ListItem>
              );
            }
          })}
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: '0 1rem 0 0',
            }}
          >
            {loading && <CircularProgress />}
          </ListItem>
        </List>
      </Box>
      <Box sx={{ flex: 1 }} />
    </Box>
  );
};
export default Github;
