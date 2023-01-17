const { removeJSONDuplicates } = require('../utils');
const duplicateFields = require('./fixtures/objects.json');

describe('remove duplicate util', () => {
  it('should remove all the duplicates in a json array', () => {
    const result = removeJSONDuplicates(duplicateFields);
    expect(result).toHaveLength(1);
  });
});
