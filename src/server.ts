import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  const app = express();

  const port = process.env.PORT || 8082;
  
  app.use(bodyParser.json());
  
// Middleware to check if the URL is valid
async function validateImageUrl(req, res, next) {
  const { imageUrl } = req.query;

  if (!imageUrl) {
    return res.status(400).json({ error: 'Image URL is missing' });
  }

  try {
    new URL(imageUrl);
    next(); // Proceed to the next middleware
  } catch (error) {
    return res.status(400).json({ error: 'Invalid image URL' });
  }
}
  

  app.get( "/filteredimage", validateImageUrl, async(req:express.Request, res:express.Response) => {
    const {image_url} = req.query;
    if (!image_url){
      res.status(400).send('The image url cannot be empty!');
    } else {
      await filterImageFromURL(image_url).then( function (image_filtered_path){
        res.sendFile(image_filtered_path, () => {       
          deleteLocalFiles([image_filtered_path]);       
        });   
      }).catch(function(err){
        res.status(400).send('Please make sure that the image url is valid!');
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
