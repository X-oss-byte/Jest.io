/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

test('Default Timeout Interval', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
  expect(true).toBe(true);
});
