// Build a job board that displays the latest job postings fetched from the Hacker News API, with each posting displaying the job title, poster, and date posted.

// Fetches a list of job posting IDs.

// URL: https://hacker-news.firebaseio.com/v0/jobstories.json
// HTTP Method: GET
// Content Type: json

// Sample response:

// [35908337, 35904973, 35900922, 35893439, 35890114, 35880345, ...]

// Job Details
// Fetches job posting details given its ID.

// URL: https://hacker-news.firebaseio.com/v0/item/{id}.json
// HTTP Method: GET
// Content Type: json

// Sample response for https://hacker-news.firebaseio.com/v0/item/35908337.json:

// {
//     "by": "jamilbk",
//     "id": 35908337,
//     "score": 1,
//     "time": 1683838872,
//     "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
//     "type": "job",
//     "url": "https://www.ycombinator.com/companies/firezone/jobs"
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';

const Challenge47 = () => {
    const [jobIds, setJobIds] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //fetch initial job IDs
        axios.get(`https://hacker-news.firebaseio.com/v0/jobstories.json`)
            .then(response => setJobIds(response.data.slice(0, 6)))
            .catch(error => console.log('Error fetching job IDs:', error))
    }, [])


    useEffect(() => {
        //fetch job details based on job IDs
        const fetchJobs = async () => {
            setLoading(true);
            try {
                const jobDetails = await Promise.all(jobIds.map(id =>
                    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)));

                setJobs(prevJobs => {
                    const newJobs = jobDetails.map(response => response.data);
                    const uniqueJobs = [...prevJobs, ...newJobs].reduce((item, job) => {
                        if (!item.some(existingJob => existingJob.id === job.id)) {
                            item.push(job)
                        }
                        return item;
                    }, [])

                    return uniqueJobs
                })
            } catch (error) {
                console.error('Error fetching job details:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs()
    }, [jobIds])


    return (
        <section className='timeline-landing'>
            <div className='row container'>
                <div className='job-board'>
                    {
                        loading ? (
                            <div className='d-flex justify-content-center align-items-center'>
                                <ColorRing
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="color-ring-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="color-ring-wrapper"
                                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                />
                            </div>
                        ):(
                            <>
                                {
                                    jobs.map(job=>(
                                        <div key={job.id}>
                                            {
                                                job.url ? (
                                                    <a href={job.url} target='_blank' rel='noopener noreferrer'>
                                                        <strong>
                                                            {job.title}
                                                        </strong>
                                                    </a>
                                                ):(
                                                    <strong>
                                                        {job.title}
                                                    </strong>
                                                )
                                            }
                                            <p>
                                                {`Posted by ${job.by} on ${new Date(job.time * 1000).toLocaleString()}`}
                                            </p>
                                        </div>
                                    ))
                                }
                            </>
                        )
                }
                </div>
            </div>
        </section>
    )
}

export default Challenge47


