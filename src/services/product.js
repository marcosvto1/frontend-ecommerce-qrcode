import Api from './api';

const ProductService = ({
  findAll: () => Api.get('/products'),
  findById: (productId) => Api.get(`products?id=${productId}`)
})

export default ProductService;