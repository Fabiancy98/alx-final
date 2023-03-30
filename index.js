const express = require('express');
const http = require('http');
const userRoutes = require('./routes/userRoutes');
const { mongoConnect } = require('./services/db');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 5000;

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

// headers
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Content-Type, Authorization, Accept'
//   );
//   next();
// });

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);
app.use(morgan('tiny'));
app.disable('x-powered-by');

// routes
app.use(userRoutes);
const server = http.createServer(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

async function startServer() {
  await mongoConnect();

  server.listen(port, () => {
    console.log(`Backend server running on ${port} .....`);
  });
}
startServer();
