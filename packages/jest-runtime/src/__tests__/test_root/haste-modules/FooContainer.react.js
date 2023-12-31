/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

const Foo = require('Foo.react');

class FooContainer {
  render() {
    return `<div>${new Foo().render()}</div>`;
  }
}

module.exports = FooContainer;
