(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{284:function(e,t,a){e.exports=a(517)},289:function(e,t,a){},295:function(e,t,a){},517:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),s=(a(289),a(18)),i=a(22),l=a(24),u=a(23),d=a(25),m=a(32),p=a(73);a(295),a(297);var v={user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOFF":return null;default:return e}},dbvs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LIST":return t.data;case"CLEAR_LIST":return[];default:return e}},trans:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TRANS":return t.data;case"CLEAR_TRANS":return[];default:return e}}},f=Object(p.b)(v),b=a(528),h=a(532),E=a(534),O=a(16),j=a.n(O),y=a(28),g=a(527),k=a(52),w=a(302).initializeApp({apiKey:"AIzaSyCg2l2m9dwEJWP8gfrj4GVeiqqWGPXMPnw",authDomain:"elo-bank.firebaseapp.com",databaseURL:"https://elo-bank.firebaseio.com",projectId:"elo-bank",storageBucket:"elo-bank.appspot.com",messagingSenderId:"1016193516480"}).firestore(),N=function e(){Object(s.a)(this,e)};N.getAll=function(){var e=Object(y.a)(j.a.mark(function e(t,a){var n,r,c=arguments;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:10,e.prev=1,r=w.collection(t),e.abrupt("return",r.orderBy(a,"desc").limit(n).get());case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}},e,this,[[1,6]])}));return function(t,a){return e.apply(this,arguments)}}(),N.updateSaldo=function(){var e=Object(y.a)(j.a.mark(function e(t,a,n){var r,c,o;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=w.collection("desbravadores"),e.next=4,r.doc(t).get().then(function(e){if(!e.exists)throw Error("Desbravador n\xe3o encontrado");c=Object(k.a)({key:e.id},e.data())});case 4:o=0,e.t0=a,e.next="credito"===e.t0?8:"debito"===e.t0?10:12;break;case 8:return o=c.saldo+parseFloat(n),e.abrupt("break",13);case 10:return o=c.saldo-parseFloat(n),e.abrupt("break",13);case 12:return e.abrupt("break",13);case 13:if(!(o<0)){e.next=15;break}throw Error("Saldo insuficiente");case 15:r.doc(t).update({saldo:o}),w.collection("transacoes").add({desbravador:c.nome,tipo:a,valor:parseFloat(n),data:new Date}),e.next=22;break;case 19:throw e.prev=19,e.t1=e.catch(0),e.t1;case 22:case"end":return e.stop()}},e,this,[[0,19]])}));return function(t,a,n){return e.apply(this,arguments)}}(),N.register=function(){var e=Object(y.a)(j.a.mark(function e(t,a){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.collection("desbravadores").add({nome:t,unidade:a,saldo:0});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(t,a){return e.apply(this,arguments)}}(),N.delete=function(){var e=Object(y.a)(j.a.mark(function e(t,a){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,w.collection(t).doc(a).delete(),e.next=7;break;case 4:throw e.prev=4,e.t0=e.catch(0),e.t0;case 7:case"end":return e.stop()}},e,this,[[0,4]])}));return function(t,a){return e.apply(this,arguments)}}();var x=N,S=a(530),L=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={desbravadores:[],options:[]},a.getOptions=function(e){var t=a.props.desbravadores.map(function(e){return{key:e.key,text:e.nome,value:e.key}});a.setState({options:t})},a.submit=function(){var e=Object(y.a)(j.a.mark(function e(t){var n,r,c,o;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=a.state,r=n.id,c=n.tipo,o=n.valor,e.next=5,x.updateSaldo(r,c,o);case 5:a.setState({id:0,tipo:"",valor:""}),a.updateList(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),a.updateList=Object(y.a)(j.a.mark(function e(){var t,n,r,c;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getAll("desbravadores","saldo");case 2:return t=e.sent,e.next=5,x.getAll("transacoes","data");case 5:n=e.sent,r=[],c=[],t.forEach(function(e){return r.push(Object(k.a)({key:e.id},e.data()))}),n.forEach(function(e){return c.push(Object(k.a)({key:e.id},e.data()))}),a.props.setList("desbravadores",r),a.props.setList("transacoes",c);case 12:case"end":return e.stop()}},e,this)})),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.updateList();case 2:this.getOptions();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui centered card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},"Nova transa\xe7\xe3o")),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui form"},r.a.createElement("form",{onSubmit:this.submit},r.a.createElement("div",{className:"ui field"},r.a.createElement("label",null,"Desbravador"),r.a.createElement(S.a,{selection:!0,options:this.state.options,onChange:function(t,a){return e.setState({id:a.value})},value:this.state.id})),r.a.createElement("div",{className:"ui field"},r.a.createElement("label",null,"Tipo"),r.a.createElement(S.a,{selection:!0,options:[{key:"credito",text:"Cr\xe9dito",value:"credito"},{key:"debito",text:"D\xe9bito",value:"debito"}],onChange:function(t,a){return e.setState({tipo:a.value})},value:this.state.tipo})),r.a.createElement("div",{className:"ui field"},r.a.createElement("label",null,"Valor"),r.a.createElement("input",{type:"number",onChange:function(t){e.setState({valor:t.target.value})},value:this.state.valor})),r.a.createElement("button",{className:"ui primary button"},"Enviar")))))}}]),t}(n.Component),C=Object(m.b)(function(e){return{desbravadores:e.dbvs}},function(e){return{setList:function(t,a){return e({type:"desbravadores"===t?"SET_LIST":"SET_TRANS",data:a})},clearList:function(){return e({type:"CLEAR_LIST"})}}})(L),A=function(e){return{desbravadores:e.dbvs,transacoes:e.trans}},T=function(e){return{setList:function(t,a){e({type:"desbravadores"===t?"SET_LIST":"SET_TRANS",data:a})},clearList:function(){return e({type:"CLEAR_LIST"})}}},D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,key:"",nome:"",lista:[],limit:10},a.open=function(e,t){a.setState({key:e,nome:t,open:!0})},a.close=function(){return a.setState({open:!1})},a.remove=Object(y.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.delete(a.props.node,a.state.key);case 2:a.close();case 3:case"end":return e.stop()}},e,this)})),a.loadMore=function(){a.setState({limit:a.state.limit+10},function(){a.updateList()})},a.updateList=Object(y.a)(j.a.mark(function e(){var t,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getAll(a.props.node,a.props.order,a.state.limit);case 2:t=e.sent,n=[],t.forEach(function(e){return n.push(e.data())}),a.props.setList(a.props.node,n);case 6:case"end":return e.stop()}},e,this)})),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.dados!==[]?r.a.createElement("div",null,r.a.createElement("table",{className:"ui compact table"},r.a.createElement(g.a,{content:"Voc\xea tem certeza que deseja remover ".concat(this.state.nome,"?"),open:this.state.open,onCancel:this.close,onConfirm:this.remove,cancelButton:"Cancelar",confirmButton:"Confirmar"}),r.a.createElement("thead",null,this.props.header),r.a.createElement("tbody",null,this.props.dados.map(function(t,a){var n=e.props.Renderer;return r.a.createElement("tr",{key:e.props.node+"-"+a},r.a.createElement(n,Object.assign({},t,{id:t.key,index:a,open:e.open})))}))),this.props.expandable&&r.a.createElement("div",{className:"ui left aligned primary button",onClick:function(t){return e.loadMore()}},"Ver mais")):r.a.createElement(r.a.Fragment,null)}}]),t}(n.Component),I=Object(m.b)(A,T)(D),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={lista:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui stackable grid centered container"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"ui ten wide column"},r.a.createElement(I,{node:"desbravadores",order:"saldo",dados:this.props.desbravadores,header:r.a.createElement("tr",null,r.a.createElement("th",{className:"collapsing"},"Posi\xe7\xe3o"),r.a.createElement("th",null,"Desbravador"),r.a.createElement("th",{className:"collapsing"},"Unidade"),r.a.createElement("th",{className:"collapsing"},"Saldo")),Renderer:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,e.index+1,"\xba"),r.a.createElement("td",null,e.nome),r.a.createElement("td",null,e.unidade),r.a.createElement("td",null,"E$",e.saldo))}})),r.a.createElement("div",{className:"ui four wide column"},r.a.createElement(C,null))))}}]),t}(n.Component),_=Object(m.b)(A,T)(R),F=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container fluid"},r.a.createElement(_,null))}}]),t}(n.Component),P=Object(m.b)(null,null)(F),B=a(529),M=function(e){return{desbravadores:e.dbvs,transacoes:e.trans}},U=function(e){return{setList:function(t,a){e({type:"desbravadores"===t?"SET_LIST":"SET_TRANS",data:a})},clearList:function(){return e({type:"CLEAR_LIST"})}}},V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={nome:"",unidade:"",unidades:[{key:"diretoria",text:"Diretoria",value:"Diretoria"},{key:"mercurio",text:"Merc\xfario",value:"Merc\xfario"},{key:"paladio",text:"Pal\xe1dio",value:"Pal\xe1dio"},{key:"platina",text:"Platina",value:"Platina"},{key:"uranio",text:"Ur\xe2nio",value:"Ur\xe2nio"}],open:!1},a.open=function(e){e.preventDefault(),a.setState({open:!0})},a.close=function(){return a.setState({open:!1})},a.submit=function(){try{x.register(a.state.nome,a.state.unidade),a.updateList(),a.setState({open:!1,nome:"",unidade:""})}catch(e){console.log(e)}},a.updateList=Object(y.a)(j.a.mark(function e(){var t,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getAll("desbravadores","saldo");case 2:t=e.sent,n=[],t.forEach(function(e){return n.push(e.data())}),a.props.setList("desbravadores",n);case 6:case"end":return e.stop()}},e,this)})),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui centered card"},r.a.createElement(g.a,{content:"Voc\xea tem certeza que deseja registrar ".concat(this.state.nome,"?"),open:this.state.open,onCancel:this.close,onConfirm:this.submit,cancelButton:"Cancelar",confirmButton:"Confirmar"}),r.a.createElement("div",{className:"content"},"Registrar Desbravador"),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui form"},r.a.createElement("form",{onSubmit:this.open},r.a.createElement("div",{className:"ui field"},r.a.createElement("label",null,"Nome"),r.a.createElement("input",{value:this.state.nome,onChange:function(t){return e.setState({nome:t.target.value})}})),r.a.createElement("div",{className:"ui field"},r.a.createElement("label",null,"Unidade"),r.a.createElement(S.a,{options:this.state.unidades,value:this.state.unidade,onChange:function(t,a){return e.setState({unidade:a.value})}})),r.a.createElement("button",{className:"ui primary button"},"Registrar")))))}}]),t}(n.Component),q=Object(m.b)(M,U)(V),z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).updateList=Object(y.a)(j.a.mark(function e(){var t,n,r,c;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getAll("desbravadores","saldo",a.state.limit);case 2:return t=e.sent,e.next=5,x.getAll("transacoes","data",a.state.limit);case 5:n=e.sent,r=[],c=[],t.forEach(function(e){return r.push(Object(k.a)({key:e.id},e.data()))}),n.forEach(function(e){return c.push(Object(k.a)({key:e.id},e.data()))}),a.props.setList("desbravadores",r),a.props.setList("transacoes",c);case 11:case"end":return e.stop()}},e,this)})),a.state={},a.panes=[{menuItem:"Desbravadores",render:function(){return r.a.createElement("div",{className:"ui centered stackable grid container"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"ui ten wide column"},r.a.createElement(I,{dados:a.props.desbravadores,node:"desbravadores",order:"saldo",expandable:!0,header:r.a.createElement("tr",null,r.a.createElement("th",{className:"collapsing"},"Posi\xe7\xe3o"),r.a.createElement("th",null,"Desbravador"),r.a.createElement("th",{className:"collapsing"},"Unidade"),r.a.createElement("th",{className:"collapsing"},"Saldo"),r.a.createElement("th",{className:"collapsing"})),Renderer:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,e.index+1,"\xba"),r.a.createElement("td",null,e.nome),r.a.createElement("td",null,e.unidade),r.a.createElement("td",null,"E$",e.saldo),r.a.createElement("td",null,r.a.createElement("div",{onClick:function(t){return e.open(e.id,e.nome)},className:"ui red icon button"},r.a.createElement("i",{className:"icon close"}))))}})),r.a.createElement("div",{className:"ui four wide column"},r.a.createElement(q,null))))}},{menuItem:"Transa\xe7\xf5es",active:!0,render:function(){return r.a.createElement("div",{className:"ui centered stackable grid container"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"ui ten wide column"},r.a.createElement(I,{node:"transacoes",order:"data",expandable:!0,dados:a.props.transacoes,header:r.a.createElement("tr",null,r.a.createElement("th",{className:"collapsing"},"\xcdndice"),r.a.createElement("th",null,"Desbravador"),r.a.createElement("th",{className:"collapsing"},"Data"),r.a.createElement("th",{className:"collapsing"},"Tipo"),r.a.createElement("th",{className:"collapsing"},"Valor")),Renderer:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,e.index+1),r.a.createElement("td",null,e.desbravador),r.a.createElement("td",null,new Date(e.data.toMillis()).toLocaleDateString("pt")),r.a.createElement("td",null,"credito"===e.tipo?"Cr\xe9dito":"D\xe9bito"),r.a.createElement("td",null,"E$",e.valor))}})),r.a.createElement("div",{className:"ui four wide column"},r.a.createElement(C,null))))}}],a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updateList()}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui container fluid"},r.a.createElement(B.a,{panes:this.panes,menu:{secondary:!0,pointing:!0}}))}}]),t}(n.Component),G=Object(m.b)(M,U)(z),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).routes=[{name:"Inicial",path:"/",Component:P,exact:!0},{name:"Controle",path:"/controle",Component:G,exact:!0}],a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"router"},r.a.createElement(b.a,null,r.a.createElement(h.a,null,this.routes.map(function(e){return r.a.createElement(E.a,{key:e.name,path:e.path,exact:e.exact,name:e.name,component:e.Component})}))))}}]),t}(n.Component),$=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui top fixed inverted primary menu"},r.a.createElement("a",{className:"item",href:"#/"},"Inicial"),r.a.createElement("a",{className:"item",href:"#/controle"},"Controle"))}}]),t}(n.Component),J=Object(p.c)(f),K=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement($,null),r.a.createElement(m.a,{store:J},r.a.createElement(W,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[284,2,1]]]);
//# sourceMappingURL=main.5625584d.chunk.js.map