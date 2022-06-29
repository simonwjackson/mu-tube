import { calc2 } from './index'
import calc from './calc'

test('fake calc', () => {
  expect(calc()).toBe(3);
});

test('fake calc 2', () => {
  expect(calc2()).toBe(4);
});
