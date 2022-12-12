import React, { useState } from 'react';
import { Paper, Typography, Collapse } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import InputCard from './InputCard';
import '../Input/inputaddStyle.css'

const useStyle = makeStyles((theme) => ({
  root: {
    width: '300px',
    marginTop: theme.spacing(1),
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: 'white',
    '&:hover': {
      backgroundColor: fade('#ABE9CE', 0.25),
    },
  },
}));

export default function InputContainer({ listId, type }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className='index-root-10'>
      <div className='toor-01'>
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === 'card' ? '+ Add a Card' : 'Add to Card'}
          </Typography>
        </Paper>
      </Collapse>
    </div>
    </div>
    </div>
  );
}
