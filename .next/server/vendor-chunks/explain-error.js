/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/explain-error";
exports.ids = ["vendor-chunks/explain-error"];
exports.modules = {

/***/ "(ssr)/./node_modules/explain-error/index.js":
/*!*********************************************!*\
  !*** ./node_modules/explain-error/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\nfunction getStack(err) {\n  if(err.stack && err.name && err.message)\n    return err.stack.substring(err.name.length + 3 + err.message.length)\n      .split('\\n')\n  else if(err.stack)\n    return err.stack.split('\\n')\n}\n\nfunction removePrefix (a, b) {\n  return a.filter(function (e) {\n    return !~b.indexOf(e)\n  })\n}\n\nvar explain = module.exports = function (err, message) {\n  if(!(err.stack && err.name && err.message)) {\n    console.error(new Error('stackless error'))\n    return err\n  }\n\n  var _err = new Error(message)\n  var stack = removePrefix(getStack(_err).slice(1), getStack(err)).join('\\n')\n\n  _err.__proto__ = err\n\n  _err.stack =\n    _err.name + ': ' + _err.message + '\\n' +\n    stack + '\\n  ' + err.stack\n\n  return _err\n}\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXhwbGFpbi1lcnJvci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NyeXB0by1jbGllbnQvLi9ub2RlX21vZHVsZXMvZXhwbGFpbi1lcnJvci9pbmRleC5qcz81Nzg5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gZ2V0U3RhY2soZXJyKSB7XG4gIGlmKGVyci5zdGFjayAmJiBlcnIubmFtZSAmJiBlcnIubWVzc2FnZSlcbiAgICByZXR1cm4gZXJyLnN0YWNrLnN1YnN0cmluZyhlcnIubmFtZS5sZW5ndGggKyAzICsgZXJyLm1lc3NhZ2UubGVuZ3RoKVxuICAgICAgLnNwbGl0KCdcXG4nKVxuICBlbHNlIGlmKGVyci5zdGFjaylcbiAgICByZXR1cm4gZXJyLnN0YWNrLnNwbGl0KCdcXG4nKVxufVxuXG5mdW5jdGlvbiByZW1vdmVQcmVmaXggKGEsIGIpIHtcbiAgcmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuICF+Yi5pbmRleE9mKGUpXG4gIH0pXG59XG5cbnZhciBleHBsYWluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXJyLCBtZXNzYWdlKSB7XG4gIGlmKCEoZXJyLnN0YWNrICYmIGVyci5uYW1lICYmIGVyci5tZXNzYWdlKSkge1xuICAgIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKCdzdGFja2xlc3MgZXJyb3InKSlcbiAgICByZXR1cm4gZXJyXG4gIH1cblxuICB2YXIgX2VyciA9IG5ldyBFcnJvcihtZXNzYWdlKVxuICB2YXIgc3RhY2sgPSByZW1vdmVQcmVmaXgoZ2V0U3RhY2soX2Vycikuc2xpY2UoMSksIGdldFN0YWNrKGVycikpLmpvaW4oJ1xcbicpXG5cbiAgX2Vyci5fX3Byb3RvX18gPSBlcnJcblxuICBfZXJyLnN0YWNrID1cbiAgICBfZXJyLm5hbWUgKyAnOiAnICsgX2Vyci5tZXNzYWdlICsgJ1xcbicgK1xuICAgIHN0YWNrICsgJ1xcbiAgJyArIGVyci5zdGFja1xuXG4gIHJldHVybiBfZXJyXG59XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/explain-error/index.js\n");

/***/ })

};
;