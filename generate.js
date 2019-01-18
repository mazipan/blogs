const fs = require('fs-extra');
const path = require('path');
const log = require('console-emoji');

const fileUtils = require('./utils/file-util')


const FOLDER = path.resolve('./contents/articles');


const onSuccessReadFile = (pathDir, content) => {
  const lastDir = pathDir.replace(FOLDER, '');
  const cleanLastDir = lastDir.substring(12);

  if (pathDir.indexOf('.md') >= 0 && pathDir.indexOf('index.md') < 0 && pathDir.indexOf('about.md') < 0) {
    console.log('lastDir: ', lastDir)
    const newDir = path.join(FOLDER, '/' + cleanLastDir);
    // create new directory
    // fs.mkdirSync(newDir);

    // copy to index.md
    // fs.copy(pathDir, newDir + '/index.md')
    //   .then(() => log(':raising_hand:   success ' + newDir, 'ok'))
    //   .catch(onError);
    
    // remove original files
    fs.unlink(pathDir);
  }
}


const onError = err => {
  console.log('Error found: ', err);
};

fileUtils.readFiles(FOLDER, onSuccessReadFile, onError);