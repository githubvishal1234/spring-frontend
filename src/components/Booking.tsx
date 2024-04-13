function Booking(){
    return(
	<div id="booking" className="section">
		<div className="section-center">
			<div className="container">
				<div className="row">
					<div className="booking-form">
						<div className="booking-bg"></div>
						<form>
							<div className="form-header">
								<h2>Book Your Car</h2>
							</div>
							<div className="form-group">
								<input className="form-control" type="tel" placeholder="Enter an origin location"/>
								<span className="form-label">Pickup Location</span>
							</div>
							<div className="form-group">
								<input className="form-control" type="tel" placeholder="Enter a destination location"/>
								<span className="form-label">Destination Location</span>
							</div>
							<div className="form-group">
								<select className="form-control" required>
									<option value="" label="&nbsp;" selected hidden></option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
								</select>
								<span className="select-arrow"></span>
								<span className="form-label">Passenger Numbers</span>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<input className="form-control" type="time" required/>
										<span className="form-label">Pickup Time</span>
									</div>
								</div>
							</div>
							<div className="form-btn">
								<button className="submit-btn">Book Now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default Booking;