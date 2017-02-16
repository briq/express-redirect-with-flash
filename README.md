# express-redirect-with-flash
An express middleware allowing to include flash variables with your redirect.

This brings some syntactic sugar on top of express' built-in redirect.

# Getting started
Add the package to your node.js project

```
$ npm install express-redirect-with-flash --save
```

Then add the middleware in your express server

```Javascript
const app = express();
...
app.use(require('express-redirect-with-flash');
```

Now, in your route/controller/whatever-you-call-it, you can do

```Javascript
app.get('/one/redirect/route', (req, res) => {
  return res.redirect('/another/route', { info: 'You were redirected' });
});
```

It is the equivalent of writing:

```Javascript
app.get('/one/redirect/route', (req, res) => {
  req.flash('info', 'You were redirected');
  return res.redirect('/another/route');
});
```

# Dependencies
This package has no dependency, although it is obviously meant to be used in a connect- or express-based environment.
It requires the existence of a `res.redirect` method (built-in in express, or available separately with [connect-redirection](https://www.npmjs.com/package/connect-redirection) and the existence of a `req.flash` method (available through [various](https://www.npmjs.com/package/connect-flash) [modules](https://www.npmjs.com/package/express-flash))

The middlewares adding those methods must be added before this package in your connect or express app.
