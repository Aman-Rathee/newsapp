import React from 'react'

const Newsitem = (props) => {

  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <img src={!imageUrl ? 'Not given' : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">{description}....</p>
          <p className="card-text"><small className="text-muted">Author: {!author ? 'Unknown' : author}  </small></p>
          <p className="card-text"><small className="text-muted">Date: {!date ? 'Not given' : new Date(date).toGMTString()} </small></p>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Newsitem
