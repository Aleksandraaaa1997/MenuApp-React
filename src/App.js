import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// If the list changes, we have these values for categories that will filter out only the unique categories.
// If we add an additional category, it will always show up categories list
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

//console.log(allCategories)
// allCategories without new Set return nine items: three times=> breakfast, lunch and shakes 
//when we add new Set allCategoires return 3 items: breakfast, lunch and shakes

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* Categories component */}
        <Categories categories={categories} filterItems={filterItems} />
        {/* Menu component */}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
