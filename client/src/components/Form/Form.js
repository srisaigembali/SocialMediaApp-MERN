import React, { useState } from "react";
import FileBase from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tage: [],
    selectedFile: "",
  });

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const clear = () => {};

  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete='off'
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant='h6'>Creating a Memory</Typography>
          <TextField
            name='creator'
            variant='outlined'
            label='Creator'
            fullWidth
            value={postData.creator}
            onChange={handleChange}
          />
          <TextField
            name='title'
            variant='outlined'
            label='Title'
            fullWidth
            value={postData.creator}
            onChange={handleChange}
          />
          <TextField
            name='message'
            variant='outlined'
            label='Message'
            fullWidth
            value={postData.creator}
            onChange={handleChange}
          />
          <TextField
            name='tags'
            variant='outlined'
            label='Tags'
            fullWidth
            value={postData.creator}
            onChange={handleChange}
          />
          <div className={classes.fileInput}>
            <FileBase
              type='file'
              multiple={false}
              onDone={(base64) => {
                setPostData({ ...postData, selectedFile: base64 });
              }}
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant='contained'
            color='secondary'
            size='small'
            fullWidth
            onClick={clear}
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
