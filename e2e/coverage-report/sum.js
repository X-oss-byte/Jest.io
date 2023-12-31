/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

require('./sumDependency.js');
require('./otherFile');
require('./file');

// eslint-disable-next-line prefer-template
const uncoveredFunction = () => 1 + 'abc';

const sum = (a, b) => a + b;

module.exports = {
  sum,
  uncoveredFunction,
};
