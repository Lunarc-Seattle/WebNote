const express = require('express');
const app = express();
const port = 3000;

const catStatus = {
  Jorts: 'in trash bin',
  Jean: 'opening closet',
  Nyan: 'flying high',
  YJ: 'qaz', 
};

app.get('/lookup', (req, res) => {
  const { cat } = req.query;
  const activity = catStatus[cat] || 'cat not found';
  res.send(activity);
});
app.get('', (req,res) => {
    res.send("hello")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
