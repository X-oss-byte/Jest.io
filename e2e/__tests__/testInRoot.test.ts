/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as path from 'path';
import {json as runWithJson} from '../runJest';

it('runs tests in only test.js and spec.js', () => {
  const {json: result} = runWithJson('test-in-root');

  expect(result.success).toBe(true);
  expect(result.numTotalTests).toBe(2);

  const testNames = result.testResults
    .map(res => res.name)
    .map(name => path.basename(name))
    .sort();

  expect(testNames).toHaveLength(2);
  expect(testNames[0]).toBe('spec.js');
  expect(testNames[1]).toBe('test.js');
});
