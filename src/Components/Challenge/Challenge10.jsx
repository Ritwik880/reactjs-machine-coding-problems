import React, {useState, useEffect} from 'react';

const Challenge10 = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
      let interval;

      if (isRunning) {
        interval = setInterval(()=>{
            setElapsedTime((prev)=> prev + 10)
        }, 10)
      }
      else{
        clearInterval(interval)
      }
    
      return () => {
        clearInterval(interval)
      }
    }, [isRunning])

    const startStopWatch = ()=>{
        setIsRunning(true)
    }
    const stopStopWatch = ()=>{
        setIsRunning(false);
    }
    const resetStopWatch = ()=>{
        setIsRunning(false);
        setElapsedTime(0);
    }

    const formatTime = (time)=>{
        	const minutes = Math.floor(time/ 60000);
            const seconds = Math.floor((time % 60000) / 1000);
            const milliseconds = Math.floor((time % 1000) / 10);

            return `${minutes}:${seconds < 10 ? '0': ''}${seconds}.${milliseconds< 10 ? '0': ''}${milliseconds}`
    }
    
    return (
        <section className="landing-section">
            <div className="row container">
                <h1 className='landing-heading'>Stopwatch</h1>
                <h1 className='landing-heading'>
                    {formatTime(elapsedTime)}
                </h1>
                <div className='d-flex justify-content-center'>
                    <button onClick={startStopWatch} disabled={isRunning} className='btn btn-primary mx-2'>
                        Start
                    </button>
                    <button onClick={stopStopWatch} disabled={!isRunning} className='btn btn-primary mx-2'>
                        Stop
                    </button>
                    <button onClick={resetStopWatch} className='btn btn-primary mx-2'>
                        Reset
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Challenge10;
