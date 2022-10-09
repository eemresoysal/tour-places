import Card from "../../components/cards/Card.js";

const Header = ({ data }) => {
  return (
    <div className="header">
      <h1>Popular Tour Places</h1>
      <Card data={data} />
    </div>
  );
};

export default Header;
