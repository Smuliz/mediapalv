import React, { useContext, useState, useEffect } from 'react';
import { MediaContext } from '../contexts/MediaContext';
import { Card, CardMedia, CardContent, makeStyles, Typography } from '@material-ui/core';
import { getAvatarImage } from '../hooks/ApiHooks';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

const Profile = () => {
  const classes= useStyles();
  const [user] = useContext(MediaContext)
  const [avatar, setAvatar] = useState([]);
  useEffect(() => {
    if (user !== null) {
      (async () => {
        setAvatar(await getAvatarImage(user.user_id));
      })();
    }
  }, [user]);
  return (
    <>
      <Typography component="h2" variant="h5" gutterBottom>Profile</Typography>
      {user !== null && avatar.length > 0 &&
        <Card>
          <CardMedia
          className={classes.media}
          image={mediaUrl + avatar[0].filename}
          title="Avatar image"
          />
          <CardContent>
          <Typography variant="body2" color="textSecondary">Username: {user.username}</Typography>
          <Typography variant="body2" color="textSecondary">email: {user.email}</Typography>
          <Typography variant="body2" color="textSecondary">Full name: {user.full_name}</Typography>
          </CardContent>
        </Card>
      }
    </>
  );
};

export default Profile;