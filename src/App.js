import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.js';
import { Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const App = () => {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [cardcategory, setCardcategory] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    setCardcategory([...cardcategory, category]);
  };

  const deleteCategory = (categoryname) => {
    const filterItems = cardcategory.filter((i) => i !== categoryname);
    setCardcategory(filterItems);
  };

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__form" value={category} onSubmit={onFormSubmit}>
            <Input
              type="text"
              placeholder="Enter Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onSubmit={onFormSubmit}
            >
              Add
            </Button>
          </form>
        </div>
      </Modal>
      <div className="app__createcategorybutton">
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          color="secondary"
          size="large"
        >
          Create Category
        </Button>
      </div>
      <div className="app__cardcomponents">
        <>
          {cardcategory.map((cc) => (
            <div key={cc}>
              <Card categoryname={cc} deleteCategory={deleteCategory} />
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default App;
