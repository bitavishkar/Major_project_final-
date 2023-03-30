import react from 'react'
import './box.css'
const box = () => {

    return(


<div className='container'>

<div className="row">
      <div className="col-sm-4 py-3 py-sm-0">
        <div className="card box-shadow cardd" style={{ width: "100 rem" }}>
          <img
            className="card-img-top"
            src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Clearify Images </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
            Upload Image To Deblurr
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card box-shadow cardd" style={{ width: "100 rem" }}>
          <img
            className="card-img-top"
            src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Book An Appointment </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
             
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card box-shadow cardd" style={{ width: "100 rem" }}>
          <img
            className="card-img-top"
            src="https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Explore more into edge of machinelearning and medicine</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>


   
  
    
  );
}

export default box ;