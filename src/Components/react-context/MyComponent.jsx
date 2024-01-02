import React, { useContext } from 'react'
import MyContext from './context'

const MyComponent = () => {
    const data = useContext(MyContext);
    console.log(data);
  return (
    <section className='landing-section'>
      <div className='row container'>
        <div className='landing-div'>
        <div className='card-grid'>
            {
              data?.map((user, id) => {
                return (
                  <div className="card" key={id}>
                      <div className="card-body">
                        <h5 className="card-title">Name: {user.name}</h5>
                        <p className="card-text">
                         Email: {
                            user.email
                          }
                        </p>

                      </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyComponent