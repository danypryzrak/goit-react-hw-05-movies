"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[113],{583:function(t,e,n){n.d(e,{IR:function(){return u},Jh:function(){return x},gW:function(){return p},s_:function(){return l},yO:function(){return d}});var r=n(861),a=n(757),s=n.n(a),c=n(243),i="68e3775246544a4b01e0cb7df43b357c";function u(){return o.apply(this,arguments)}function o(){return o=(0,r.Z)(s().mark((function t(){var e,n,r=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,(0,c.Z)("trending/all/day",{params:{api_key:i,page:e}});case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function p(t,e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function t(e,n){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/search/movie",{params:{api_key:i,page:n,query:e}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(e),{params:{api_key:i}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(e,"/credits"),{params:{api_key:i}});case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(e,"/reviews"),{params:{api_key:i}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"},113:function(t,e,n){n.r(e),n.d(e,{MovieDetails:function(){return o}});var r=n(439),a=n(791),s=n(689),c=n(87),i=n(583),u=n(184),o=function(){var t=(0,s.UO)().id,e=(0,a.useState)(),n=(0,r.Z)(e,2),o=n[0],p=n[1],h=(0,s.TH)(),l=(0,s.s0)();return(0,a.useEffect)((function(){(0,i.s_)(t).then(p).catch((function(t){return console.log(t)}))}),[t]),o&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{onClick:function(){return l(h.state.back)},type:"button",children:"Back"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(o.poster_path),alt:"",width:"200",height:"320"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsxs)("h2",{children:[o.title," (",o.release_date.slice(0,4),")"]})}),(0,u.jsxs)("li",{children:[(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:o.overview})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{children:o.genres.map((function(t){return t.name})).join("  ")})]})]})]}),(0,u.jsx)("div",{children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"cast",state:{back:"".concat(h.state.back)},children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"reviews",state:{back:"".concat(h.state.back)},children:"Reviews"})})]})}),(0,u.jsx)(s.j3,{})]})}}}]);
//# sourceMappingURL=113.666835ef.chunk.js.map