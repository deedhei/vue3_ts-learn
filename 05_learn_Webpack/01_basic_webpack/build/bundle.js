(() => {
  var r = {
      466: (r) => {
        r.exports = {
          priceFormat: function () {
            return "$99.88";
          },
        };
      },
    },
    o = {};
  function t(e) {
    var n = o[e];
    if (void 0 !== n) return n.exports;
    var s = (o[e] = { exports: {} });
    return r[e](s, s.exports, t), s.exports;
  }
  (() => {
    "use strict";
    var r = t(466);
    console.log((0, r.priceFormat)()), console.log(30);
  })();
})();
