// Write a React.js code snippet using React hooks to implement a breadcrumbs component in a React application.

// In a web application, breadcrumbs are a navigation aid that provides users with a visual representation of their location within the site's hierarchy. Breadcrumbs typically appear near the top of a page and display a trail of links, each representing a level in the hierarchy leading to the current page.

import React, { useState, useEffect } from 'react'

const Challenge40 = () => {
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        //set breadcrumbs data here
        const breadcrumbData = [
            { label: 'Home', path: '/' },
            { label: 'About', path: '/about' },
            { label: 'Service', path: '/service' },
            { label: 'Contact', path: '/contact' }
        ];
        setBreadcrumbs(breadcrumbData);
    }, []);

    return (
        <section className='timeline-landing'>
            <nav area-label='breadcrumb'>
                <ol className='breadcrumb'>
                    {
                        breadcrumbs.map((breadcrumb, index) => (
                            <li key={index} className='breadcrumb-item'>
                                {
                                    index === breadcrumbs.length - 1 ? (
                                        <span>
                                            {breadcrumb.label}
                                        </span>
                                    ) : (
                                        <a href={breadcrumb.path}>
                                            {breadcrumb.label}
                                        </a>
                                    )
                                }
                            </li>
                        ))
                    }
                </ol>
            </nav>
        </section>
    )
}

export default Challenge40
