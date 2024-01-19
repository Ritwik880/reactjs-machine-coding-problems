// Your task is to create a custom tab component using React.js and React Hooks. The component should have the following features:

// Display a set of tabs with labels.
// Highlight the active tab.
// Show the content of the active tab.

import React, {useState} from 'react';

const Tab = ({label, isActive, onClick})=>(
    <div className={`tab ${isActive ? 'active': ''}`} onClick={onClick}>
    {label}
    </div>
)

const TabContent = ({children, isActive})=>(
    <div className={`tab-content ${isActive ? 'active': ''}`}>
    {children}
    </div>
)
const Tabs = ({children})=>{
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index)=>{
        setActiveTab(index)
    }
    return(
        <section className='landing-section'>
            <div className='row container'>
                <div className='tabs'>
                    <div className='tab-list'>
                        {children.map((child, index)=>(
                            <Tab
                                key={index}
                                label={child.props.label}
                                isActive={index === activeTab}
                                onClick={()=> handleClick(index)}
                            />
                        ))}
                    </div>
                    <div className='tab-contents'>
                        {children.map((child, index)=>(
                            <TabContent
                                key={index}
                                isActive={index === activeTab}
                            
                            >
                            {child.props.children}
                            </TabContent>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const Challenge31 = () => {
  return (
    <Tabs>
        <div label='Tab 1'>
            <p>
                Content for Tab 1
            </p>
        </div>
        <div label='Tab 2'>
            <p>
                Content for Tab 2
            </p>
        </div>
        <div label='Tab 3'>
            <p>
                Content for Tab 3
            </p>
        </div>
    </Tabs>
  )
}

export default Challenge31