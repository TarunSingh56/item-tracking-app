import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './Content.css';

const Content = ({ items, deleteItem }) => {
  const list = items.map((item) => {
    return (
      <div className="content" key={items.indexOf(item)}>
        <p>{item}</p>
        <DeleteIcon
          onClick={() => deleteItem(item)}
          className="content__deleteicon"
        />
      </div>
    );
  });
  return <div>{list}</div>;
};

export default Content;
