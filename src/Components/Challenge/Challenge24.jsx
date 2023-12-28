// You are tasked with creating a progress bar in a React.js application that dynamically updates its value based on the progress of an API call. You need to fetch data from a remote server, and the progress bar should reflect the percentage of completion of the API call.

import React, {useState} from 'react'
import axios from 'axios'
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css'

const Challenge24 = () => {
    const [progress, setProgress] = useState(0);

    const fetchData = async ()=>{
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`, {
                onDownloadProgress: (progressEvent)=>{
                    const total = progressEvent.total || 1;
                    const percentCompleted = Math.round((progressEvent.loaded * 100)/ total);
                    const increment = 100;
                    if (progress + increment <= percentCompleted) {
                        setProgress(progress + increment);
                        console.log(progress + increment);
                    }
                    else{
                        setProgress(percentCompleted);
                        console.log(percentCompleted);
                    }
                    if (percentCompleted === 100) {
                        setProgress(0);
                    }
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error.message);
        }
    }

  return (
    <section className="landing-section">
        <div className="row container">
            <div className="form">
                <button className='btn btn-primary' onClick={fetchData}>
                    Fetch Data
                </button>

                <ProgressBar
                percent={progress}
                autoIncrement={false}
                spinner={false}
                style={{width: '100%', height: '40px'}}
                />
            </div>
        </div>
    </section>
  )
}

export default Challenge24