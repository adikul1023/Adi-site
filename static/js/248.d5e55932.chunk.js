(self.webpackChunkadi_site=self.webpackChunkadi_site||[]).push([[248],{9248:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var r=n(2791),s=n(1523),i=n(6842),a=n(184);const u=t=>{let{label:e,link:n,value:r,format:s}=t;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{width:"70%",children:e}),(0,a.jsx)("td",{children:n?(0,a.jsx)("a",{href:n,children:s(r)}):s(r)})]})};u.defaultProps={format:t=>t,link:null,value:null};const o=u,c=t=>{let{data:e}=t;return(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:e.map((t=>(0,a.jsx)(o,{format:t.format,label:t.label,link:t.link,value:t.value},t.label)))})})},l=()=>{const[t,e]=(0,r.useState)();return(0,r.useEffect)((()=>{const t=setInterval((()=>(()=>{const t=new Date("2005-08-08T17:05:00");e(((Date.now()-t)/31556925190.079998).toFixed(11))})()),25);return()=>{clearInterval(t)}}),[]),(0,a.jsx)(a.Fragment,{children:t})},h=[{key:"age",label:"Current age",value:(0,a.jsx)(l,{})},{key:"countries",label:"Countries visited",value:2},{key:"location",label:"Current city",value:"Cleveland, Ohio"}],d=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:"Some stats about me"}),(0,a.jsx)(c,{data:h})]});var f=n(7892),$=n.n(f);const m=[{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/adikul1023/adi-site/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/adikul1023/adi-site/commits",format:t=>$()(t).format("MMMM DD, YYYY")},{label:"Lines of Javascript powering this website",value:"2115",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],v=()=>{const[t,e]=(0,r.useState)(m),n=(0,r.useCallback)((async()=>{const t=await fetch("https://api.github.com/repos/Brontomerus/brandons-site"),n=await t.json();e(m.map((t=>({...t,value:Object.keys(n).includes(t.key)?n[t.key]:t.value}))))}),[]);return(0,r.useEffect)((()=>{n()}),[n]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Some stats about this site"}),(0,a.jsx)(c,{data:t})]})},p=()=>(0,a.jsx)(i.Z,{title:"Stats",description:"Some statistics about Adi Kulkarni and adi-kulkarni.in",children:(0,a.jsxs)("article",{className:"post",id:"stats",children:[(0,a.jsx)("header",{children:(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h2",{"data-testid":"heading",children:(0,a.jsx)(s.rU,{to:"/stats",children:"Stats"})})})}),(0,a.jsx)(d,{}),(0,a.jsx)(v,{})]})})},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",u="day",o="week",c="month",l="quarter",h="year",d="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,c),i=n-s<0,a=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:u,D:d,h:a,m:i,s:s,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",b={};b[y]=v;var M=function(t){return t instanceof w},D=function t(e,n,r){var s;if(!e)return y;if("string"==typeof e){var i=e.toLowerCase();b[i]&&(s=i),n&&(b[i]=n,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;b[u]=e,s=u}return!r&&s&&(y=s),s||!r&&y},S=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},k=g;k.l=D,k.i=M,k.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function v(t){this.$L=D(t.locale,null,!0),this.parse(t)}var p=v.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(k.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return k},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return S(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<S(t)},p.$g=function(t,e,n){return k.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!k.u(e)||e,l=k.p(t),f=function(t,e){var s=k.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(u)},$=function(t,e){return k.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,p=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case h:return r?f(1,0):f(31,11);case c:return r?f(1,v):f(0,v+1);case o:var y=this.$locale().weekStart||0,b=(m<y?m+7:m)-y;return f(r?p-b:p+(6-b),v);case u:case d:return $(g+"Hours",0);case a:return $(g+"Minutes",1);case i:return $(g+"Seconds",2);case s:return $(g+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,o=k.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[u]=l+"Date",n[d]=l+"Date",n[c]=l+"Month",n[h]=l+"FullYear",n[a]=l+"Hours",n[i]=l+"Minutes",n[s]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===h){var m=this.clone().set(d,1);m.$d[f]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[k.p(t)]()},p.add=function(r,l){var d,f=this;r=Number(r);var $=k.p(l),m=function(t){var e=S(f);return k.w(e.date(e.date()+Math.round(t*r)),f)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===u)return m(1);if($===o)return m(7);var v=(d={},d[i]=e,d[a]=n,d[s]=t,d)[$]||1,p=this.$d.getTime()+r*v;return k.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=k.z(this),i=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=n.meridiem,h=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},d=function(t){return k.s(i%12||12,t,"0")},$=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return k.s(e.$y,4,"0");case"M":return u+1;case"MM":return k.s(u+1,2,"0");case"MMM":return h(n.monthsShort,u,c,3);case"MMMM":return h(c,u);case"D":return e.$D;case"DD":return k.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return k.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(e.$s);case"ss":return k.s(e.$s,2,"0");case"SSS":return k.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,d,f){var $,m=this,v=k.p(d),p=S(r),g=(p.utcOffset()-this.utcOffset())*e,y=this-p,b=function(){return k.m(m,p)};switch(v){case h:$=b()/12;break;case c:$=b();break;case l:$=b()/3;break;case o:$=(y-g)/6048e5;break;case u:$=(y-g)/864e5;break;case a:$=y/n;break;case i:$=y/e;break;case s:$=y/t;break;default:$=y}return f?$:k.a($)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return b[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return k.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},v}(),x=w.prototype;return S.prototype=x,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",u],["$M",c],["$y",h],["$D",d]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,w,S),t.$i=!0),S},S.locale=D,S.isDayjs=M,S.unix=function(t){return S(1e3*t)},S.en=b[y],S.Ls=b,S.p={},S}()}}]);
//# sourceMappingURL=248.d5e55932.chunk.js.map