import assert from "node:assert/strict";
import test from "node:test";
import { mean, median } from "../src/stats.mjs";

test("mean of empty is 0", () => assert.equal(mean([]), 0));
test("mean averages", () => assert.equal(mean([2, 4]), 3));

test("median of empty is 0", () => assert.equal(median([]), 0));
test("median finds the middle of an odd-sized array", () =>
  assert.equal(median([7, 1, 3]), 3));
test("median averages the middle of an even-sized array", () =>
  assert.equal(median([8, 2, 4, 6]), 5));
