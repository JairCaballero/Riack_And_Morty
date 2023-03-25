import React from 'react'

const Pagination = ({  prev,next,onP,onN }) => {

  return (
    <nav className='container my-5'>
      <ul className='pagination justify-content-center'>
        {prev?(
            <li className='page-item'>
              <button className='page-link' onClick={onP}>Prev</button>
            </li>
        ) : null}
        {next?(
            <li className='page-item'>
              <button className='page-link' onClick={onN}>Next</button>
            </li>
          ) : null}
      </ul>
    </nav>
  )
}

export default Pagination