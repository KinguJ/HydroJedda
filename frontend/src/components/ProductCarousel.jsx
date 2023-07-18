import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import '../styles.css'
const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover'     >
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image 
            src={product.image} 
            alt={product.name} 
            className="d-block w-100" 
            fluid 
            style={{
              width: '1000px', // adjust to suit your layout
              height: '500px', // adjust to suit your layout
              objectFit: 'contain',
              margin: 'auto',
            }} 
          />
          </div>
            <Carousel.Caption className='carousel-caption'>
              <h2 className='text-white text-right'>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
