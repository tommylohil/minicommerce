const routes = [
    {
      method: 'Get',
      url: '/api/products',
      status: 200,
      response: {
        data: [
          {
            id: 'product-1',
            image: 'https://via.placeholder.com/200',
            title: 'Product 1',
            price: 'Rp.100.000'
          },
          {
            id: 'product-2',
            image: 'https://via.placeholder.com/200',
            title: 'Product 2',
            price: 'Rp.100.000'
          },
          {
            id: 'product-3',
            image: 'https://via.placeholder.com/200',
            title: 'Product 3',
            price: 'Rp.100.000'
          },
          {
            id: 'product-4',
            image: 'https://via.placeholder.com/200',
            title: 'Product 4',
            price: 'Rp.100.000'
          },
          {
            id: 'product-5',
            image: 'https://via.placeholder.com/200',
            title: 'Product 5',
            price: 'Rp.100.000'
          }
        ]
      }
    },
    {
        method: 'Get',
        url: '/api/products/product-1',
        status: 200,
        response: {
          data: [
            {
              id: 'product-1',
              image: 'https://via.placeholder.com/200',
              title: 'Product 1',
              price: 'Rp.100.000'
            }
          ]
        }
    },
    {
      method: 'Get',
      url: '/api/products/product-2',
      status: 200,
      response: {
        data: [
          {
            id: 'product-2',
            image: 'https://via.placeholder.com/200',
            title: 'Product 2',
            price: 'Rp.100.000'
          }
        ]
      }
    },
    {
      method: 'Get',
      url: '/api/carts',
      status: 200,
      response: {
        data: [
          {
            id: 'product-1',
            image: 'https://via.placeholder.com/200',
            title: 'Product 1',
            price: 'Rp.100.000'
          },
          {
            id: 'product-2',
            image: 'https://via.placeholder.com/200',
            title: 'Product 2',
            price: 'Rp.200.000'
          },
          {
            id: 'product-3',
            image: 'https://via.placeholder.com/200',
            title: 'Product 3',
            price: 'Rp.300.000'
          }
        ]
      }
    }
    
]
  
export default routes
  