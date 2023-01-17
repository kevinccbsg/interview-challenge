const cleanApp = require('../src');
const mockApplication = require('../mock_application.json');
const filterMockApplication = require('./fixtures/filter_mock_application.json');

describe('Retrieve duplicate numbers', () => {
  it('should throw error when no input is added', () => {
    expect(() => {
      cleanApp();
    }).toThrow('Missing App object');
  });

  it('should throw error when input schema is not valid', () => {
    expect(() => {
      cleanApp({ invalidSchema: 'Invalid object' });
    }).toThrow('Invalid schema');
  });

  it('should not throw error with the right schema', () => {
    const result = cleanApp(mockApplication);
    expect(result).toEqual(filterMockApplication);
  });
});
