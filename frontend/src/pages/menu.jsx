import React from 'react';
import '../pages/menu.css';


const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const {id,name,image,price,} = menuItem;

        return <article key={id} className='menu-item'>
          <img src={`src/images/${image}`} alt={name} className='photo' />
          <div className='item-info'>
            <header>
              <h4 style={{marginRight:'30px'}}>{name}</h4>
             
              <h4 className='price'>${price}</h4>
            </header>
           
          </div>
        </article>
      })}
    </div>
  );
};

export default Menu;  