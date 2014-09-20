var wantit = function wantit(moduleId){
  try {
    return require(moduleId);
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return null;
    }
    throw err;
  }
};

module.exports = wantit;
