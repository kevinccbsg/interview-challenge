const fs = require('fs').promises;
const generateFile = require('../index');
const mockApplication = require('../mock_application.json');

describe('File was created', () => {
  it('should create a new file with the filtered result', async () => {
    const writeFile = jest.spyOn(fs, 'writeFile');
    writeFile.mockImplementation(path => {
      if (path === 'clean_application.json') {
        // mock the writeFile function
        return Promise.resolve();
      } else {
        return Promise.reject(new Error('File not created at expected location'));
      }
    });
    await generateFile(mockApplication);

    expect(writeFile).toHaveBeenCalled();
  });
});
