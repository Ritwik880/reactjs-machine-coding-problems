// Create an accordion component using React and React Hooks. An accordion typically consists of multiple sections, and only one section is expanded at a time.

import React, {useState} from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import '../../Accordion.css'
const Accordian = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index)=>{
        setActiveIndex(index=== activeIndex? null: index)
    }
    return (
        <div className="accordion-container">
            {
                items.map((item, index) => (
                    <div key={index} className='accordion-item'>
                        <div className="accordion-title" onClick={()=> handleClick(index)}>
                            {item.title}
                            <div className='toggle-icon'>
                                {index === activeIndex ? <FaAngleUp /> : <FaAngleDown />}
                            </div>
                        </div>
                        {index === activeIndex && (
                            <div className='accordion-content'>
                                {item.content}
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    )

}

const Challenge26 = () => {
    const accordianItem = [
        {
            title: 'Title 1',
            content: 'content for title 1'
        },
        {
            title: 'Title 2',
            content: 'content for title 2'
        },
        {
            title: 'Title 3',
            content: 'content for title 3'
        },
    ]
    return (
        <Accordian items={accordianItem} />
    )
}

export default Challenge26