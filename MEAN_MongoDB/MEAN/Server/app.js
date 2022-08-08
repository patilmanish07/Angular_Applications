express = require('express');
mongoose = require('mongoose');
batchesRoutes = require("./routes/batchesRoutes.js");
bodyParser = require('body-parser')

eobj = express();
eobj.use(bodyParser.json());
eobj.use(batchesRoutes);

eobj.listen(4000, (request,responce) => {
  console.log("Server is running at 4000");
});

eobj.get('/', (request, responce) =>{
  responce.send("Marvellous server is running");
});

Database = 'mongodb+srv://marvellous:marvellous@batches.7u5bl.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(Database).then(()=> {
  console.log("Database connection is succesful");
}).catch((err)=>{
  console.log("Connection failed");
});