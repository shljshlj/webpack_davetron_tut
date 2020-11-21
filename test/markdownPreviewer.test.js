import markdownPreviewer from '../js/markdownPreviewer';

describe('markdownPreviewer', () => {
  it('should exist', () => {
    expect(markdownPreviewer).toBeDefined();
  });
  it('should allow deep references', () => {
    const o = {
      foo: {
        bar: 'blah'
      }
    };

    expect((o?.foo?.bar)).toBe('blah');
  });
});