// Implement a React component that consists of two dropdowns, where the options in the second dropdown depend on the selection made in the first dropdown. The initial state should have the second dropdown disabled, and it should only become enabled once a selection is made in the first dropdown.

import React, { useState } from 'react'

const Challenge42 = () => {
    const [categories, setCategories] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [isSubCategoryEnabled, setIsSubCategoryEnabled] = useState(false);

    const category = ['Fruits', 'Vegetables', 'Dairy'];

    const subCategories = {
        Fruits: ['Apple', 'Banana'],
        Vegetables: ['Carrot', 'Broccoli'],
        Dairy: ['Milk', 'Cheese']
    }

    const handleCategoryChange = (selectedCategory) => {
        setCategories(selectedCategory);
        setSubCategory('');
        setIsSubCategoryEnabled(true);
    }
    return (
        <section className='timeline-landing'>
            <div className='row container'>
                <div className='select-div'>
                    <select className='select' id='category' onChange={(e) => handleCategoryChange(e.target.value)} value={categories}>
                        <option value="">
                            Fruits
                        </option>
                        {
                            category.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))
                        }
                    </select>

                    <br />

                    <select className='select' id='subCategory' onChange={(e) => setSubCategory(e.target.value)} value={subCategory} disabled={!isSubCategoryEnabled}>
                        <option value="">
                            Select
                        </option>
                        {isSubCategoryEnabled &&
                            subCategories[categories].map((subItem) => (
                                <option key={subItem} value={subItem}>
                                    {subItem}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </section>
    )
}

export default Challenge42