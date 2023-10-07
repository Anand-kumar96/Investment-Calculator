import {tours} from './data'
const Tour = () => {
  return (
    <div className="section-center featured-center">
      {tours.map((tour) => (
        <article className="tour-card" key={tour.id}>
          <div className="tour-img-container">
            <img src={tour.img} className="tour-img" alt={tour.title} />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tour.title}</h4>
            </div>
            <p>{tour.info}</p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>
                {tour.country}
              </p>
              <p>{`${tour.days} days`}</p>
              <p>{`from $${tour.amount}`}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
export default Tour
