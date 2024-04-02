import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  const app = express();

  const port = process.env.PORT || 8082;
  
  app.use(bodyParser.json());

  app.get( "/filteredimage", async(req:express.Request, res:express.Response) => {
    let {image_url} = req.query;
    if (!image_url){
      res.status(400).send('Error: The image url cannot be empty!');
    } else {
      await filterImageFromURL(image_url).then( function (image_filtered_path){
        res.sendFile(image_filtered_path, () => {       
          deleteLocalFiles([image_filtered_path]);       
        });   
      }).catch(function(err){
        res.status(400).send('Error:' + err);
      });  

    }
  });
  
  app.get( "/", async(req:express.Request, res:express.Response) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  
  app.listen( port, () => {
      console.log( `Server running http://localhost:${ port }` );
      console.log( `Press CTRL + C to stop server` );
  } );
})();