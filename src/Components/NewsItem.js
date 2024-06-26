import React from 'react'

const NewsItem =(props) => {


        let {title, description, iUrl, newsUrl, author, date} = props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "19rem"}}>
                    <img src={iUrl?iUrl:"https://www.livemint.com/lm-img/img/2024/06/04/1600x900/INDIA-MARKETS_1663128119810_1717465247209.JPG"} className="card-img-top" alt="..." width={280} height={150}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className='card-text'><small className="text-muted">By {author} on {new Date(date).toGMTString()}.</small></p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
}

export default NewsItem