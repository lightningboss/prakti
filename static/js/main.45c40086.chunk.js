(window.webpackJsonpprakti=window.webpackJsonpprakti||[]).push([[0],{49:function(e,t,n){e.exports=n(61)},61:function(e,t,n){"use strict";n.r(t);var a,r,o,i,c=n(0),l=n.n(c),E=n(8),s=n.n(E),u=(n(54),n(12)),m=n(19),S=n(110),d=n(96),f=n(98),T=n(102),h=n(97),O=n(100),b=n(99),w=n(101),p=n(42),A=n.n(p),_=n(112),g=n(109),N=n(41),v=n(43),R=n(39),j=n.n(R),D=n(40),C=n.n(D),I=Object(v.a)({palette:{primary:j.a,secondary:C.a}}),k=Object(N.a)({title:{flexGrow:1}}),U=function(e){var t=e.children,n=e.exportData,a=e.setSubject,r=e.resetData,o=k(),i=Object(c.useState)(null),E=Object(m.a)(i,2),s=E[0],u=E[1],p=Boolean(s),N=function(){u(null)};return l.a.createElement(d.a,{theme:I},l.a.createElement(h.a,null),l.a.createElement(f.a,{position:"fixed"},l.a.createElement(b.a,null,l.a.createElement(O.a,{variant:"h6",className:o.title},"Prakti"),l.a.createElement(w.a,{onClick:function(e){u(e.currentTarget)},color:"inherit"},l.a.createElement(A.a,null)),l.a.createElement(g.a,{id:"menu-appbar",anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:N},l.a.createElement(_.a,{onClick:function(){N(),a()}},"Fach wechseln"),l.a.createElement(_.a,{onClick:function(){N(),n()}},"Exportieren"),l.a.createElement(_.a,{onClick:function(){N(),r()}},"Reset")))),l.a.createElement(S.a,{mt:9},l.a.createElement(T.a,{maxWidth:"sm"},t)))},x=n(64),y=n(103),F=function(e){var t=e.children,n=e.onClick;return l.a.createElement(S.a,{m:1,width:1},l.a.createElement(y.a,{variant:"contained",size:"large",color:"primary",fullWidth:!0,onClick:n},t))},H=n(4),W=n(111),Q=(a={},Object(H.a)(a,"NEW_QUESTION_ASKED","Neue Frage gestellt"),Object(H.a)(a,"TEACHER_STARTED_REACTING","Lehrer reagiert"),Object(H.a)(a,"FIRST_STUDENT_RAISED_HAND","1. Sch\xfcler meldet sich"),Object(H.a)(a,"FIRST_STUDENT_ANSWERED_QUESTION","1. Sch\xfcler antwortet"),Object(H.a)(a,"SOME_STUDENT_ANSWERED_QUESTION","n. Sch\xfcler antwortet, n > 1"),Object(H.a)(a,"TEACHER_MOTIVATED","Motiviert Klasse"),Object(H.a)(a,"TEACHER_POSED_NEW_QUESTION","Stellt neue Frage"),Object(H.a)(a,"TEACHER_SIMPLIFIED_QUESTION","Vereinfacht Frage"),Object(H.a)(a,"TEACHER_CANCELED_QUESTION","Bricht ab"),Object(H.a)(a,"TEACHER_ANSWERED_QUESTION","Beantwortet selbst"),Object(H.a)(a,"TEACHER_REACTED_UNEXPECTEDLY","Unerwartete Reaktion"),a),L=Object(W.a)({id:"prakti",initial:"questionFinished",states:{questionFinished:{on:Object(H.a)({},"NEW_QUESTION_ASKED","newQuestionAsked"),meta:{name:"Start"}},newQuestionAsked:{on:(r={},Object(H.a)(r,"TEACHER_STARTED_REACTING","teacherStartedReacting"),Object(H.a)(r,"FIRST_STUDENT_RAISED_HAND","firstStudentRaisedHand"),r),meta:{name:"Neue Frage gestellt"}},teacherStartedReacting:{on:(o={},Object(H.a)(o,"TEACHER_MOTIVATED","newQuestionAsked"),Object(H.a)(o,"TEACHER_POSED_NEW_QUESTION","newQuestionAsked"),Object(H.a)(o,"TEACHER_SIMPLIFIED_QUESTION","newQuestionAsked"),Object(H.a)(o,"TEACHER_CANCELED_QUESTION","questionFinished"),Object(H.a)(o,"TEACHER_ANSWERED_QUESTION","questionFinished"),Object(H.a)(o,"TEACHER_REACTED_UNEXPECTEDLY","questionFinished"),o),meta:{name:"Lehrer reagiert..."}},firstStudentRaisedHand:{on:(i={},Object(H.a)(i,"TEACHER_STARTED_REACTING","teacherStartedReacting"),Object(H.a)(i,"FIRST_STUDENT_ANSWERED_QUESTION","questionFinished"),Object(H.a)(i,"SOME_STUDENT_ANSWERED_QUESTION","questionFinished"),i),meta:{name:"Sch\xfcler meldete sich"}}}});window.prakti=L;var M=Object(N.a)(function(e){return{root:{padding:e.spacing(3,2),flexGrow:1}}}),P=function(e){var t,n=e.currentState,a=e.onAction,r=M();return l.a.createElement(x.a,{className:r.root},l.a.createElement(S.a,{mb:1},l.a.createElement(O.a,{variant:"h5",component:"h3"},(t=n,L.states[t].meta.name))),l.a.createElement(S.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},function(e){return Object.keys(L.states[e].on).map(function(e){return{actionId:e,actionText:Q[e]}})}(n).map(function(e){var t=e.actionId,n=e.actionText;return l.a.createElement(F,{key:t,onClick:function(){return a(t)}},n)})))},q=n(104),B=n(108),G=n(107),J=n(105),z=n(106),K=n(65),V=Object(K.a)({overflowScroll:{overflowX:"scroll"}}),X=function(e){var t=e.log,n=V();return l.a.createElement(S.a,{my:2},l.a.createElement(x.a,null,l.a.createElement(S.a,{height:150,className:n.overflowScroll},l.a.createElement(q.a,{stickyHeader:!0,size:"small"},l.a.createElement(J.a,null,l.a.createElement(z.a,null,l.a.createElement(G.a,null,"State"),l.a.createElement(G.a,null,"Action"))),l.a.createElement(B.a,null,t.map(function(e){return l.a.createElement(z.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.id},l.a.createElement(G.a,null,e.currentState),l.a.createElement(G.a,null,e.action))}))))))},Y="LOG_STATE";var $=[{id:0,time:Date.now(),currentState:L.initial,nextState:L.initial,action:"NONE"}],Z=null;function ee(){if(Z)return Z;var e=JSON.parse(localStorage.getItem(Y))||$;return Z=e,e}var te=function(){var e=Object(c.useState)(function(){return Math.max.apply(Math,[0].concat(Object(u.a)(ee().map(function(e){return e.id}))))+1}),t=Object(m.a)(e,2),n=t[0],a=t[1],r=function(){var e=n;return a(n+1),e},o=Object(c.useState)(function(){return ee()||$}),i=Object(m.a)(o,2),E=i[0],s=i[1],d=function(e){var t,n=e.action,a=e.currentState,o=e.nextState,i=e.meta,c=void 0===i?null:i,l=[{id:r(),time:Date.now(),action:n,currentState:a,nextState:o,meta:c}].concat(Object(u.a)(E));s(l),t=l,window.requestAnimationFrame(function(){localStorage.setItem(Y,JSON.stringify(t))})},f=Object(m.a)(E,1)[0].nextState;return l.a.createElement(U,{resetData:function(){window.confirm("Are you sure?")&&(localStorage.removeItem(Y),s($),a(1))},exportData:function(){window.prompt("Copy to clipboard:",localStorage.getItem(Y)||"[no-data-available]")},setSubject:function(){var e=window.prompt("Neues Fach:");e&&d({action:"NEW_SUBJECT",currentState:f,nextState:f,meta:{newSubject:e}})}},l.a.createElement(S.a,{display:"flex",flexDirection:"column"},l.a.createElement(P,{currentState:f,onAction:function(e){var t=L.transition(f,e).value;d({action:e,currentState:f,nextState:t})}}),l.a.createElement(X,{log:E})))},ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(l.a.createElement(te,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/prakti",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/prakti","/service-worker.js");ne?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ae(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ae(t,e)})}}()}},[[49,1,2]]]);
//# sourceMappingURL=main.45c40086.chunk.js.map