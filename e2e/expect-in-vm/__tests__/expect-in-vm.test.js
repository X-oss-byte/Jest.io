/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const vm = require('vm');

it('correctly expects RegExp inside a new VM context', () => {
  const fn = vm.runInNewContext(
    `(function(require, module, exports, __dirname, __filename, expect) {
  expect('ab12cd').toMatch(/ab12cd/);
})`,
    globalThis,
  );

  const module = {
    exports: {},
  };

  fn.call(
    module.exports,
    require,
    module,
    module.exports,
    __dirname,
    __filename,
    expect,
  );
});
