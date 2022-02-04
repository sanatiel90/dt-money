import React from 'react';
import { createServer, Model } from 'miragejs'
import ReactDOM from 'react-dom';
import App from './App';


//MIRAGE PARA APIs FAKE
createServer({

  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          value: 6000,
          createdAt: new Date('2022-01-16 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel da casa',
          type: 'withdraw',
          category: 'Casa',
          value: 1100,
          createdAt: new Date('2022-01-18 09:00:00')
        },
        
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

