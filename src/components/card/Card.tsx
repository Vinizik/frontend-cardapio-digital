import './Card.css';

interface CardProps {
  price: number;
  title: string;
  image: string;
}

const Card = ({ price, title, image }: CardProps) => {
  return (
    <div className="card">
      <img src={image} />
      <h2>{title}</h2>
      <p>R${price}</p>
    </div>
  );
};

export default Card;
