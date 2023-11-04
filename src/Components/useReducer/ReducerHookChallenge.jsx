import React, { useEffect, useReducer } from 'react'

const ReducerHookChallenge = () => {
  const URL = `https://jsonplaceholder.typicode.com/users`;
  const initialState = {
    data: [],
    loading: false,
    error: null
  }
  const reducer = (action, state) => {
    switch (action.type) {
      case 'FETCH_API_REQUEST':
        return { ...state, loading: true, error: null }
      case 'FETCH_API_SUCCESS':
        return { ...state, loading: false, data: action.payload }
      case 'FETCH_API_ERROR':
        return { ...state, loading: false, error: action.payload }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async (uri) => {
      dispatch({ type: 'FETCH_API_REQUEST' })
      try {
        const response = await fetch(uri);
        if (!response.ok) {
          throw new Error('Error encountered while fetching')
        }
        else {
          const data = await response.json();
          dispatch({ type: 'FETCH_API_SUCCESS', payload: data })
          console.log(data);
        }
      } catch (error) {
        dispatch({ type: 'FETCH_API_ERROR', data: error.message })
      }
    }
    fetchData(URL)
  }, [])

  return (
    <section className='landing-section'>
      <div className='row container'>
        <div className='landing-div'>
          {
            state.loading && <h1 className='landing-heading'>Loading...</h1>
          }
          {
            state.error && <h1 className='landing-heading'>Error: {state.error}</h1>
          }
          <div className='card-grid'>
            {
              state.data?.map((user, id) => {
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

export default ReducerHookChallenge