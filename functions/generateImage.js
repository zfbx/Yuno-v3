//TODO WIP

var gd = require('node-gd');

var img = gd.createSync(200, 80); // Create blank new image in memory

img.colorAllocate(0, 255, 0); // Set background color

var txtColor = img.colorAllocate(255, 0, 255); // Set text color

var fontPath = '../data/fonts/Yuno.ttf';

img.stringFT(txtColor, fontPath, 24, 0, 10, 60, 'Hello world!'); // Render string in image

img.savePng('../data/temp/output.png', 1, function(err) { // Write image buffer to disk
  if(err) {
    throw err;
  }
});

img.destroy(); // Destroy image to clean memory