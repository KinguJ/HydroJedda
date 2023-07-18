import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card 
      className='my-3 p-3 rounded'
      style={{
        width: '300px', // Or any other width that suits your layout
        height: 'auto', // Let the height adjust automatically based on the content
      }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img 
          src={product.image} 
          variant='top' 
          style={{
            width: '100%', // Make the image take up the full width of the card
            height: '200px', // Or any other height that suits your layout
            objectFit: 'contain', // Keep the aspect ratio of the image intact
          }} 
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
