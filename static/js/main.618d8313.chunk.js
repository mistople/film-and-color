(this["webpackJsonpfilm-and-color"]=this["webpackJsonpfilm-and-color"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(36),o=t.n(r),i=(t(46),t(12)),s=t(37),l=(t(54),t(55),(new Date).toDateString()),m=function(e){var a=e.className;return c.a.createElement("div",{className:"".concat(a," title-bar-root")},c.a.createElement("h1",{className:"title"},"Film and Color"),c.a.createElement("span",{className:"date"},l))},u=t(40),d=t(13);t(56),t(57),t(58);d.initializeApp({apiKey:"AIzaSyBkaD_b0JbtRV3AWZRhegneeZ0mRBq2IcQ",authDomain:"film-and-color.firebaseapp.com",databaseURL:"https://film-and-color.firebaseio.com",projectId:"film-and-color",storageBucket:"film-and-color.appspot.com",messagingSenderId:"656048480818",appId:"1:656048480818:web:e98fc541c630bd94a7522b",measurementId:"G-YDNX20FLMX"}),d.analytics();d.storage();var f=d.firestore(),p=(d.analytics(),d.firestore.FieldValue.serverTimestamp,t(20)),b=t.n(p),g=t(38),h=t(39),v=t.n(h),E=(t(97),function(e){var a={backgroundColor:e.color};return e.isLoading?c.a.createElement("div",{className:"loadingSwatch"}):c.a.createElement("div",{style:a,className:"swatchWrapper"})}),w=(t(98),"eeed0b6733a644cea07cf4c60f87ebb7"),N=new v.a.App({apiKey:"6eb390cb8ba2455cbe17926530e2d012"}),y=function(e){var a=e.image,t=e.className,r=Object(n.useState)(!0),o=Object(i.a)(r,2),s=o[0],l=o[1],m=Object(n.useState)([]),u=Object(i.a)(m,2),d=u[0],f=u[1];if(Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(b.a.mark((function e(){var t,n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.models.predict(w,a);case 2:t=e.sent,n=t.outputs[0].data.colors,c=n.map((function(e){return e.raw_hex})),f(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),Object(n.useEffect)((function(){d.length>0&&l(!1)}),[l,d]),s){for(var p=[],h=0;h<4;h++)p.push(c.a.createElement(E,{key:h,isLoading:s}));return c.a.createElement("div",{className:"".concat(t," palette-root")},p)}var v=d.map((function(e){return c.a.createElement(E,{key:e,isLoading:s,color:e})}));return c.a.createElement("div",{className:"".concat(t," palette-root")},v)},j=(t(99),function(e){var a=e.imageUrl,t=e.className;return c.a.createElement("img",{src:a,className:"".concat(t," heroImageRoot"),style:{backgroundSize:"contain",backgroundRepeat:"no-repeat"},alt:"Movie still to be analyzed"})}),k=(t(100),function(e){var a=e.className;return c.a.createElement("div",{className:"".concat(a," footer")},c.a.createElement("p",null,"Inspired by\xa0",c.a.createElement("a",{href:"https://www.instagram.com/filmandcolor/?hl=en",target:"_blank"},"Film and Color")),c.a.createElement("p",null,"Made by\xa0",c.a.createElement("a",{href:"https://twitter.com/david_dossett",target:"_blank"},"me")))});var O=function(){s.analytics().logEvent("app_start");var e=function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var a=f.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var a=[];e.forEach((function(e){a.push(Object(u.a)({},e.data(),{id:e.id}))})),r(a)}));return function(){return a()}}),[e]),{documents:c}}("images").documents,a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){e.length>0&&o(e[0].url)}),[e,o]),c.a.createElement("div",{className:"grid-container"},c.a.createElement("div",{className:"grid"},c.a.createElement(m,{className:"titlebar"}),c.a.createElement(y,{className:"palette",image:r}),c.a.createElement(j,{className:"image",imageUrl:r}),c.a.createElement(k,{className:"footer"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,a,t){e.exports=t(101)},46:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[41,1,2]]]);
//# sourceMappingURL=main.618d8313.chunk.js.map