/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('test_1', () => {
  beforeAll(() => {
    console.log('beforeAll 1');
  });
  beforeEach(() => {
    console.log('beforeEach 1');
  });
  afterEach(() => {
    console.log('afterEach 1');
  });
  afterAll(() => {
    console.log('afterAll 1');
  });
  it('foo', () => {
    console.log('It Foo');
  });
});

describe('test_2', () => {
  beforeAll(() => {
    console.log('beforeAll 2');
  });
  beforeEach(() => {
    console.log('beforeEach 2');
  });
  afterEach(() => {
    console.log('afterEach 2');
  });
  afterAll(() => {
    console.log('afterAll 2');
  });
  it('foo', () => {
    console.log('It Foo');
  });
});
