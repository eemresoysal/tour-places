//?CARD STRUCTURE

const Card = ({ data }) => {
  return (
    <div className="container">
      {data.map((item) => {
        const { id, title, desc, image } = item;
        return (
          <div key={id} className="card">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <img className="image" src={image} alt={id} />
            <div className="desc">
              <p className="text">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
