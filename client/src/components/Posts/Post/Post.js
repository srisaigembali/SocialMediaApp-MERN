import React, { useState } from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("memoryprofile"));
  const [likes, setLikes] = useState(post?.likes);
  const userId = user?.result.sub || user?.result?._id;

  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <ThumbUpAltIcon fontSize='small' />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize='small' />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize='small' />
        &nbsp;Like
      </>
    );
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.name}</Typography>
        <Typography variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.sub === post?.creator ||
        user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size='small'
            onClick={() => {
              setCurrentId(post._id);
            }}
          >
            <MoreHorizIcon fontSize='medium' />
          </Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary' component='h2'>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        component='h2'
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size='small'
          color='primary'
          disabled={!user?.result}
          onClick={handleLike}
        >
          <Likes />
        </Button>
        {(user?.result?.sub === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Typography>
            <Button
              size='small'
              color='primary'
              onClick={() => {
                setCurrentId(post._id);
              }}
              style={{ margin: "0 10px" }}
            >
              <EditIcon fontSize='small' /> Edit
            </Button>
            <Button
              size='small'
              color='secondary'
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon fontSize='small' /> Delete
            </Button>
          </Typography>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
