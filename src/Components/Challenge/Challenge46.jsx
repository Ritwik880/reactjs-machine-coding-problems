import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Challenge46 = () => {
    const [jobIds, setJobIds] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // Fetch initial job IDs
        axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json')
            .then(response => setJobIds(response.data.slice(0, 6)))
            .catch(error => console.error('Error fetching job IDs:', error));
    }, []);

    useEffect(() => {
        // Fetch job details based on job IDs
        const fetchJobs = async () => {
            const jobDetails = await Promise.all(jobIds.map(id =>
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            ));

            setJobs(prevJobs => {
                const newJobs = jobDetails.map(response => response.data);
                const uniqueJobs = [...prevJobs, ...newJobs].reduce((acc, job) => {
                    if (!acc.some(existingJob => existingJob.id === job.id)) {
                        acc.push(job);
                    }
                    return acc;
                }, []);

                return uniqueJobs;
            });
        };

        fetchJobs();
    }, [jobIds]);

    const loadMoreJobs = () => {
        console.log('hii');
        const startIndex = page * 6;
        const endIndex = startIndex + 6;

        // Fetch job details based on updated jobIds
        const newJobIds = jobIds.slice(startIndex, endIndex);
        setJobIds(prevJobIds => [...prevJobIds, ...newJobIds]);

        setPage(prevPage => prevPage + 1);
    };

    return (
        <section className='timeline-landing'>
            <div className='row container'>
                <div className='job-board'>
                    {jobs.map(job => (
                        <div key={job.id}>
                            {job.url ? (
                                <a href={job.url} target="_blank" rel="noopener noreferrer">
                                    <strong>{job.title}</strong>
                                </a>
                            ) : (
                                <strong>{job.title}</strong>
                            )}
                            <p>{`Posted by ${job.by} on ${new Date(job.time * 1000).toLocaleString()}`}</p>
                        </div>
                    ))}
                    
                    {/* Check if there are more jobs to load */}
                    {jobIds.length > jobs.length && jobs.length > 0 && (
                        <button onClick={loadMoreJobs}>Load more</button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Challenge46;
