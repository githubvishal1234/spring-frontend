import car2 from "./car2.jpg"
import car3 from "./car3.jpg"
import car4 from "./car4.jpg"
import car5 from "./car5.jpg"
import car6 from "./car6.jpg"
function Cars(){
return <div>
    <div className="backIMg">
    <div className="text-center">
        <h1>CARS</h1>
    </div>
    </div>
    <div className="card border-secondary mb-3" ><style>"max-width: 540px"</style>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={car2} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"> (TATA NEXON)</h5>
        <p className="card-text">Near JNTU BUS STOP, Pragathi Nagar, Hyderabad</p>
        <button className="btn btn-warning">4.0</button>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-outline-primary me-md-2" type="submit"><a href="/nexon">View Detaills</a></button>
        <button className="btn btn-success" type="button"><a href="/booking">Book Now</a></button>
        </div>
        <h3>&#x20B9; 3999</h3>
        <p className="card-text"><small className="text-body-secondary">Per HOUR</small></p>
      </div>
    </div>
  </div>
</div>
<div className="card border-secondary mb-3" ><style>"max-width: 540px"</style>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={car3} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">(BMW)</h5>
        <p className="card-text">Near Raju Nagar, Vivekananda Nagar, Hyderabad</p>
        <button className="btn btn-warning">4.0</button>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-outline-primary me-md-2" type="button"><a href="/bmw">View Detaills</a></button>
        <button className="btn btn-success" type="button"><a href="/booking">Book Now</a></button>
        </div>
        <h3>&#x20B9; 5999</h3>
        <p className="card-text"><small className="text-body-secondary">Per HOUR</small></p>
      </div>
    </div>
  </div>
</div>
<div className="card border-secondary mb-3" ><style>"max-width: 540px"</style>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={car4} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">(Audi)</h5>
        <p className="card-text">Alluri Trade Centre, KPHB , 2-22-274/305, 3rd Floor, Bhagya Nagar Colony, Kukatpally,</p>
        <button className="btn btn-warning">4.0</button>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-outline-primary me-md-2" type="button"><a href="/audi">View Detaills</a></button>
        <button className="btn btn-success" type="button"><a href="/booking">Book Now</a></button>
        </div>
        <h3>&#x20B9; 4999</h3>
        <p className="card-text"><small className="text-body-secondary">Per HOUR</small></p>
      </div>
    </div>
  </div>
</div>
<div className="card border-secondary mb-3" ><style>"max-width: 540px"</style>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={car5} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"> (Land Cruiser)</h5>
        <p className="card-text">K P H B Colony Main Road, Dominos Pizza Building, Beside South India Shopping Mall, Hyderabad</p>
        <button className="btn btn-warning">4.0</button>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-outline-primary me-md-2" type="button"><a href="/cruiser">View Detaills</a></button>
        <button className="btn btn-success" type="button"><a href="/booking">Book Now</a></button>
        </div>
        <h3>&#x20B9; 4499</h3>
        <p className="card-text"><small className="text-body-secondary">Per HOUR</small></p>
      </div>
    </div>
  </div>
</div>
<div className="card border-secondary mb-3" ><style>"max-width: 540px"</style>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={car6} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">(Toyota Fortuner)</h5>
        <p className="card-text">KUKATPALLY, Hyderabad</p>
        <button className="btn btn-warning">4.0</button>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-outline-primary me-md-2" type="button"><a href="/fortuner">View Detaills</a></button>
        <button className="btn btn-success" type="button"><a href="/booking">Book Now</a></button>
        </div>
        <h3>&#x20B9; 3999</h3>
        <p className="card-text"><small className="text-body-secondary">Per HOUR</small></p>
      </div>
    </div>
  </div>
</div>
</div>
}
export default Cars;