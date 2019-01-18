const fs = require('fs-extra');
const path = require('path');

const readFiles = (dirname, onFileContent, onError) => {
    fs.readdir(dirname, function(err, filenames) {
      if (err) {
        onError(err);
        return;
      }
  
      filenames.forEach(function(filename) {
        const pathDir = path.join(dirname, filename);
        const isDir = fs.lstatSync(pathDir).isDirectory();
  
        if (isDir) {
          readFiles(pathDir, onFileContent, onError);
        } else {
          fs.readFile(pathDir, 'utf-8', function(err, content) {
            if (err) {
              onError(err);
              return;
            }
            onFileContent(pathDir, content);
          });
        }
      });
    });
};

module.exports = {
  readFiles
};