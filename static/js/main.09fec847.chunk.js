(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=(a(20),a(2)),s=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"ImageWall"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"A simple, fun & creative way to share photos with friends & family."))},o=a(8),u=a.n(o),m=a(14),f=a(5);a(28),a(22);f.initializeApp({apiKey:"AIzaSyB2Ps9m0DkABrRa6_f04zATXUrVQM7isqg",authDomain:"firegram-c2ef1.firebaseapp.com",databaseURL:"https://firegram-c2ef1.firebaseio.com",projectId:"firegram-c2ef1",storageBucket:"firegram-c2ef1.appspot.com",messagingSenderId:"682852559094",appId:"1:682852559094:web:5709361ac762d166bd24d7",measurementId:"G-L4R0D17MMW"});var d=f.storage(),p=f.firestore(),g=f.firestore.FieldValue.serverTimestamp,b=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),o=s[0],f=s[1],b=Object(n.useState)(null),v=Object(i.a)(b,2),E=v[0],j=v[1];return Object(n.useEffect)((function(){var t=d.ref(e.name),a=p.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){f(e)}),Object(m.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=g(),a.add({url:n,createdAt:r}),j(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:E,error:o}},v=a(3),E=function(e){var t=e.file,a=e.setFile,c=b(t),l=c.url,i=c.progress;return console.log(i,l),Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(v.a.div,{className:"progress-bar",intial:{width:0},animate:{width:i+"%"}})},j=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),o=s[0],u=s[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),u("")):(c(null),u("Please select an image file of png or jped"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"oputput"},o&&r.a.createElement("div",{className:"error"},o),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(E,{file:a,setFile:c})))},h=a(9),y=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){p.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id}))})),c(t)}))}),[e]),{docs:r}},O=function(e){var t=e.setSelectedImg,a=y("images").docs;return r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(v.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},s:!0,onClick:function(){return t(e.url)}},r.a.createElement(v.a.img,{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},S=function(e){var t=e.selectedImg,a=e.setSelectedImg;return r.a.createElement(v.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(v.a.img,{src:t,alt:"Preview",initial:{y:"-100vh"},animate:{y:0}}))};var w=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(j,null),r.a.createElement(O,{setSelectedImg:c}),a&&r.a.createElement(S,{selectedImg:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.09fec847.chunk.js.map