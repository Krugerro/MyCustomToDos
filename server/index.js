const dotenv = require('dotenv');
dotenv.config();
const store = require('store');
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT;
const uniqid = require('uniqid')

const newToDo = { id: uniqid(), description: '', completed: false, inEdit: true, hover: true, newItem: true }

app.use(express.json()) 

app.get('/list', (req , res ) => {

  const data = store.get('data');

  if ( data === undefined ) {store.set('data', []);}

  res.json(store.get('data'));

});

app.post('/create', (req , res ) => {

  const currData = store.get("data");

  const newlyCreatedToDo = {...newToDo, id: uniqid() };

  const appendedData = [{...newlyCreatedToDo}].concat(currData);

  store.set('data', appendedData);

  res.json(newlyCreatedToDo);


});

app.delete('/:id', (req , res ) => {

  const { id } = req.params;

  const currData = store.get("data");

  const currDataCopy = currData.filter(ele => ele.id !== id);
 
  store.set('data', currDataCopy);
 
  res.send();
  
});

app.put('/:id', (req , res ) => {

  const { id } = req.params;

  const body = req.body;
  
  const currData = store.get("data");

  const index = currData.findIndex(ele => ele.id === id);

  const currDataCopy = [...currData];

  if (Object.keys(body).length === 0 && body.constructor === Object) {
    currDataCopy[index].completed = !currData[index].completed;
    
  }
  else {

    currDataCopy[index] = body;
  }
 
  store.set('data', currDataCopy);
 
  res.json(currDataCopy);
  
});


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});