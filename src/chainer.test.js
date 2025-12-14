'use strict';

const { chainer } = require('./chainer');

describe('chainer', () => {
  it(`should call first function in arg array with input like arg`, () => {
    const f = jest.fn();

    chainer([f])(8);
    expect(f).toHaveBeenCalledWith(8);
  });

  it(`should call second function in arg array
     with first fnction in this array like arg`, () => {
    const f = jest.fn();
    const f2 = jest.fn();

    chainer([f, f2])(8);
    expect(f).toHaveBeenCalledWith(8);
    expect(f2).toHaveBeenCalledWith(f(8));
  });
});
