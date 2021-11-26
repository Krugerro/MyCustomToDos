const dotenv = require('dotenv');
dotenv.config();
const store = require('store');
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT;
const uniqid = require('uniqid')

const newToDo = { id: uniqid(), description: '', completed: false, inEdit: true, hover: true, newItem: true }

app.get('/list', (req , res ) => {

  store.set('data', []);

  let data = store.get('data');

  res.json(data);

});
app.post('/create', (req , res ) => {

  const currData = store.get("data");

  const newlyCreatedToDo = {...newToDo, id: uniqid() };

  const appendedData = [{...newlyCreatedToDo}].concat(currData);

  store.set('data', appendedData);

  res.json(newlyCreatedToDo);

});

app.delete('/:id', (req , res ) => {

  console.log(req.params)

  const { id } = req.params;

  const currData = store.get("data");

  const currDataCopy = currData.filter(ele => ele.id !== id);
 
  store.set('data', currDataCopy);
 
  res.send();
  
});

app.put('/:id', (req , res ) => {

  const { id } = req.params;
  
  const currData = store.get("data");

  //const currDataCopy = currData.filter(ele => ele.id === id);
 
  //store.set('data', currDataCopy);
 
  res.send();
  
});

// Create	POST/PUT	/create
// Read	GET	/list/$id
// Update	PUT/POST/PATCH	/update
// Delete	DELETE	/delete

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});