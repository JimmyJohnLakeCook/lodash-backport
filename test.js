const lodash = require('./src/lodash.js');

test("template variable containing invalid characters throws exception", () => {
  expect(() => {
    lodash.template("", "", {
      variable: "){console.log(process.env)}; with(obj",
    });
  }).toThrow("Invalid `variable` option passed into `_.template`");
});
