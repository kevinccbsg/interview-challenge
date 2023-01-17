const generateFile = require('./');
const mockApplication = require('./mock_application.json');

generateFile(mockApplication)
  .then((result) => console.log(result));
