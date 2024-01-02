// Create a component that fetches a list of items from an API and displays them in a paginated manner. Include next and previous buttons to navigate through pages.

import React, { useState, useEffect } from 'react';

const Challenge12 = () => {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const URL = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`;

    const fetchPosts = async (uri) => {
        try {
            const response = await fetch(uri);
            const data = await response.json();
            const totalCountHeader = response.headers.get('x-total-count');
            const totalCount = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
            setTotalPages(Math.ceil(totalCount / 5));
            console.log(data);
            setPosts(data);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        fetchPosts(URL)
    }, [currentPage])

    const handleNextPage = ()=>{
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    const handlePrevPage = ()=>{
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <section className="landing-section">
            <div className="row container">
                <div>
                    <h1 className='title'>Posts</h1>
                </div>
                {
                    posts.map((post) => (
                        <div key={post.id}>
                            <h3 className='title'>
                               Title: {
                                    post.title
                                }
                            </h3>
                            <p className="para">
                                Body:{
                                    post.body
                                }
                            </p>
                        </div>
                    ))
                }
                <div>
                    <button className='btn btn-primary' onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span className='page'>
                        {
                            `Page ${currentPage} of ${totalPages}`
                        }
                    </span>
                    <button className='btn btn-primary' onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Challenge12;
