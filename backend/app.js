const express = require('express');
const app = express();
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;
const questions = require('./routes/api/questions')
//any routes imported here 

app.use(express.json())

mongoose
  .connect(db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  .then(() => console.log(`Mongo's Mango Open`))
  .catch(err => console.log(err))


app.get('/', (req,res) => res.send("working bam bam!"))
app.use('/api/questions', questions)
// app.use additional routes go here 

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is serving on on port ${port}`));

