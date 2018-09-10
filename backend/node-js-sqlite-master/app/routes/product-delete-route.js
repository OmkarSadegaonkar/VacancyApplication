module.exports = function (app, db) {
    

    app.delete('/api/product/:id', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
		processData(res, "DELETE FROM products where id == "+req.params.id);
  
	});	
function processData(res, sql){
    db.serialize(function() {
      db.all(sql, 
        function(err, rows) {
          if(err){
            console.error(err);
            res.status(500).send(err);
          }
          else
            sendData(res, rows, err);
      });
    });
  }

  function sendData(res, data, err){
    res.setHeader("Access-Control-Allow-Origin","*");

    if(data[0])
      res.send(data);
    
    else{
      res.status(404).send("Product not found");
    }
  }
};