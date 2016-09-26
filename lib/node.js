const path = require('path');
const processDemo = require('./process-demo');


module.exports = (markdownData, config) => {
  const isDemo = /^demos\//i.test(path.dirname(markdownData.meta.filename));
  if (isDemo) {
    return processDemo(markdownData);
  }
  return markdownData;
}