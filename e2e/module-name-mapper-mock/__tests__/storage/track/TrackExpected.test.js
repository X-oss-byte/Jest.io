/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {Track} = require('@@storage/track/Track');
jest.mock('@@storage/track/Track');

test('through moduleNameMapper', () => {
  const track = new Track();
  expect(track.someRandomFunction).not.toHaveBeenCalled();
});
