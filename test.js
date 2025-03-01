const lodash = require('./src/lodash.js');
const lodash_compat = require('./src/lodash.compat.js');

test("Lodash: template variable containing invalid characters throws exception", () => {
  expect(() => {
    lodash.template("", "", {
      variable: "){console.log(process.env)}; with(obj",
    });
  }).toThrow("Invalid `variable` option passed into `_.template`");
});

test("Lodash-compat: template variable containing invalid characters throws exception", () => {
  expect(() => {
    lodash_compat.template("", "", {
      variable: "){console.log(process.env)}; with(obj",
    });
  }).toThrow("Invalid `variable` option passed into `_.template`");
});
