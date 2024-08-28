const createFunction = (_create) => {
  if (_create === true) {
    setTimeout(() => {
      console.log("file created");
    }, 1000);
  }
};

const readFile = (_isRead) => {
  if (_isRead === true) {
    setTimeout(() => {
      console.log("file is readed");
    }, 1000);
  }
};

createFunction(true)
  .then(() => {
    readFile(false);
  })
  .then(() => {});
