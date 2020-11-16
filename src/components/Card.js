import React, { useState } from 'react';
import './Card.css';
import Content from './Content.js';
import { Button, Input } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const Card = ({ categoryname, deleteCategory }) => {
  const [items, setItems] = useState([]);
  const [additem, setadditem] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (additem !== '') {
      setItems([...items, additem]);
    }
  };

  const deleteItem = (item) => {
    const filterItems = items.filter((i) => i !== item);
    setItems(filterItems);
  };

  return (
    <div className="card">
      <div>
        <div className="card__header">
          <h2>{categoryname}</h2>
          <CancelOutlinedIcon
            onClick={() => deleteCategory(categoryname)}
            className="card__deleteicon"
          />
        </div>

        <h3>
          <span>Total Items : {items.length}</span>
        </h3>
        <form onSubmit={onFormSubmit} className="card__header">
          <Input
            size="large"
            type="text"
            placeholder="Enter Item"
            value={additem}
            onChange={(e) => {
              setadditem(e.target.value);
            }}
          />
          <Button type="submit" variant="outlined" color="primary">
            Add Item
          </Button>
        </form>
      </div>
      <Content items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default Card;
