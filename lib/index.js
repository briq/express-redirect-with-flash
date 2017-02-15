let warned = false;

const redirectWithFlash = (req, res, next) => {
  if (!req.flash) {
    if (!warned) {
      console.warn('No req.flash method found. express-redirect-with-flash will not work.');
      warned = true;
    }
    return next();
  }

  const originalRedirect = res.redirect;
  res.redirect = function () {
    const flash = arguments[arguments.length - 1];
    if (flash != null && typeof flash == 'object') {
      Object.keys(flash).forEach(key => {
        req.flash(key, flash[key]);
      });
      const args = [...arguments].slice(0, -1);
      return originalRedirect.apply(res, args);
    } else {
      return originalRedirect.apply(res, arguments);
    }
  };

  return next();
};

module.exports = redirectWithFlash;