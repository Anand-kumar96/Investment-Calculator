/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const List = ({people}) => {
  return (
    <div>
      {people.map((birthday) => (
        <div className="people" key={birthday.id}>
          <img src={birthday.image} alt="" />
          <div className="detail">
            <h4>{birthday.name}</h4>
            <p>{birthday.age} years</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List