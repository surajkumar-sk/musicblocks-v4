(this.webpackJsonpmusicblocks=this.webpackJsonpmusicblocks||[]).push([[12],{24:function(n,t,e){"use strict";e.r(t),e.d(t,"generateAPI",(function(){return l})),e.d(t,"buildProgram",(function(){return f})),e.d(t,"resetProgram",(function(){return m}));var r,a=e(22),c=e(19),o=e(76),i=e(52),u=e(32),s=e(27);function l(){r=Object.fromEntries(Object.entries(Object(i.getSpecificationSnapshot)()).map((function(n){var t=Object(c.a)(n,2),e=t[0],r=t[1];return[e,Object(a.a)(Object(a.a)({},r),{},{args:null})]}))),Object.entries(r).forEach((function(n){var t=Object(c.a)(n,2),e=t[0],a=(t[1],Object(u.addInstance)(e)),o=Object(u.getInstance)(a).instance;r[e].args=0===o.argLabels.length?null:o.argLabels.map((function(n){return[n,o.getArgType(n)]})),Object(u.removeInstance)(a)}));var n={};Object.entries(r).forEach((function(t){var e=Object(c.a)(t,2),r=e[0],a=e[1],o=a.category;o in n||(n[o]=[]),n[o].push([r,a.type,a.args])}));var t=[];return Object.entries(n).forEach((function(n){var e=Object(c.a)(n,2),r=e[0],a=e[1];t.push('# "'.concat(r,'" elements\n# ------------------------')),a.forEach((function(n){var e=Object(c.a)(n,3),r=e[0],a=e[1],o=e[2];"Data"===a?t.push("- [instruction]:\n    [param]:\n      ".concat(r,": string")):"Expression"===a?null===o||(1===o.length?t.push("- [instruction]:\n    ".concat(r,":\n").concat(o.map((function(n){var t=Object(c.a)(n,2),e=t[0],r=t[1];return"      ".concat(e,": ").concat(r.join("|"))})).join("\n"))):t.push("- [instruction]:\n    [param]:\n      ".concat(r,":\n").concat(o.map((function(n){var t=Object(c.a)(n,2),e=t[0],r=t[1];return"        ".concat(e,": ").concat(r.join("|"))})).join("\n")))):"Statement"===a?null===o?t.push("- ".concat(r)):1===o.length?t.push("- ".concat(r,": ").concat(o[0][1].join("|"))):t.push("- ".concat(r,":\n").concat(o.map((function(n){var t=Object(c.a)(n,2),e=t[0],r=t[1];return"    ".concat(e,": ").concat(r.join("|"))})).join("\n"))):"Block"===a&&(null===o?t.push("- ".concat(r,":\n    scope:\n      - [instruction]\n      - ...")):t.push("- ".concat(r,":\n").concat(o.map((function(n){var t=Object(c.a)(n,2),e=t[0],r=t[1];return"    ".concat(e,": ").concat(r.join("|"))})).join("\n"),"\n    scope:\n      - [instruction]\n      - ...")))})),t.push("\n")})),t.join("\n")}function f(n){var t;function e(){function n(n){var t=r[n].args;if(null===t)throw new s.InvalidArgumentError('"'.concat(n,'" does not take arguments'));if(1!==t.length)throw new s.InvalidArgumentError('"'.concat(n,'" takes ').concat(t.length," arguments but only 1 argument supplied"));return t[0][0]}function e(n,t){var e=r[n].args;if(null===e)throw new s.InvalidArgumentError('"'.concat(n,'" does not take arguments'));var a="Block"===r[n].type,o=e.map((function(n){var t=Object(c.a)(n,2),e=t[0];t[1];return e})),i=Object.keys(t);if(a){if(!i.includes("scope"))throw new s.InvalidInstructionError('"'.concat(n,'" expects a scope'));if(!(t.scope instanceof Array))throw new s.InvalidInstructionError('"'.concat(n,'" supplied with invalid scope'));o.push("scope")}if(o.length!==i.length)throw new s.InvalidArgumentError('invalid number of arguments supplied for "'.concat(n,'"'));if(0!==o.filter((function(n){return!i.includes(n)})).length)throw new s.InvalidArgumentError('invalid arguments supplied for "'.concat(n,'"'))}function a(t,o,i){if("object"!==typeof i)return{elementName:"boolean"===typeof i?"value-boolean":"number"===typeof i?"value-number":"value-string",value:i.toString()};if(1!==Object.keys(i).length)throw new s.InvalidArgumentError('invalid argument for parameter "'.concat(o,'" of "').concat(t,'"'));var u=Object(c.a)(Object.entries(i)[0],2),l=u[0],f=u[1];if(o===l)return a(t,o,f);if(!(l in r))throw new s.InvalidInstructionError('"'.concat(l,'" is not a valid argument for "').concat(l,'"'));var m=r[l];if("Data"===m.type){if("string"===typeof f)return{elementName:l,value:f};throw new s.InvalidArgumentError("invalid argument for 'Data' element \"".concat(l,'"'))}if("Expression"===m.type){var p={elementName:"",argMap:null};if(p.elementName=l,"object"!==typeof f||1===Object.keys(f).length){var b=n(l);p.argMap=Object.fromEntries([[b,a(l,b,f)]])}else e(l,f),p.argMap=Object.fromEntries(Object.entries(f).map((function(n){var t=Object(c.a)(n,2),e=t[0],r=t[1];return[e,a(l,e,r)]})));return p}throw new s.InvalidArgumentError('"'.concat(l,"\" is not a 'Data' or 'Expression' element"))}function o(t){if("string"===typeof t){if(!(t in r))throw new s.InvalidInstructionError('"'.concat(t,'" is not a valid instruction'));return{elementName:t,argMap:null}}if(1!==Object.keys(t).length)throw new s.InvalidInstructionError("wrong instruction format encountered");var i=Object(c.a)(Object.entries(t)[0],2),u=i[0],l=i[1];if(!(u in r))throw new s.InvalidInstructionError('"'.concat(t,'" is not a valid instruction'));var f={elementName:"",argMap:null};if(f.elementName=u,"object"!==typeof l||1===Object.keys(l).length){var m=n(u);f.argMap=Object.fromEntries([[m,a(u,m,l)]])}else e(u,l),f.argMap=Object.fromEntries(Object.entries(l).filter((function(n){var t=Object(c.a)(n,2),e=t[0];t[1];return"scope"!==e})).map((function(n){var t=Object(c.a)(n,2),e=t[0],r=t[1];return[e,a(u,e,r)]}))),"scope"in l&&(f.scope=l.scope.map((function(n){return o(n)})));return f}var u={process:[],routine:[],crumbs:[t.map((function(n){return o(n)}))]};Object(i.generateFromSnapshot)(u)}return new Promise((function(r){if(!1===function(){try{return(t=Object(o.load)(n))instanceof Array}catch(r){var e=r;return console.log({mark:e.mark,message:e.message,name:e.name,reason:e.reason}),!1}}())r(!1);else{var a=Object(i.generateSnapshot)();try{e(),r(!0)}catch(c){console.log(c),Object(i.generateFromSnapshot)(a),r(!1)}}}))}function m(){Object(i.resetSyntaxTree)()}},27:function(n,t,e){"use strict";e.r(t),e.d(t,"InvalidInstructionError",(function(){return s})),e.d(t,"InvalidArgumentError",(function(){return l}));var r=e(33),a=e(34),c=e(35),o=e(51),i=e(62),u=function(n){Object(c.a)(e,n);var t=Object(o.a)(e);function e(n,a){var c;return Object(r.a)(this,e),(c=t.call(this,a))._name=void 0,c._message=void 0,c._name=n,c._message=a,c}return Object(a.a)(e,[{key:"toString",value:function(){return"".concat(this._name,": ").concat(this._message)}},{key:"type",get:function(){return this._name}}]),e}(Object(i.a)(Error)),s=function(n){Object(c.a)(e,n);var t=Object(o.a)(e);function e(n){return Object(r.a)(this,e),t.call(this,"InvalidInstructionError",n)}return Object(a.a)(e)}(u),l=function(n){Object(c.a)(e,n);var t=Object(o.a)(e);function e(n){return Object(r.a)(this,e),t.call(this,"InvalidArgumentError",n)}return Object(a.a)(e)}(u)}}]);
//# sourceMappingURL=12.43471f1d.chunk.js.map