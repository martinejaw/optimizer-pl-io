(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(19),l=t.n(c),i=(t(85),t(86),t(46)),s=t(47),o=t(48),m=t(66),u=t(32),p=t(49),d=t(30),h=t(26),f=t(20),E=t(21),b=t(24),v=t(22),g=t(25),y=t(61),C=t(72),N=t.n(C),x=t(64),R=t(65),k=t(35),V=t(63),j=t(68),O=t(59),I=t(60),S=t(54),w=t(56),T=t(55),D=t(58),P=t(36),q=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(b.a)(this,Object(v.a)(a).call(this,e))).handlerInputVar=function(e){var a=e.target,n=a.value,r=a.name,c=t.props.status.variables;c[r].xi=r,c[r].descripcion=n,r>1&&""===n&&c.splice(r,1),t.props.handleVariables(c),t.handleNewsVar(t.props.status.method)},t.handlerInputRes=function(e){var a=e.target,n=a.value,r=a.name,c=t.props.status.restricciones;c[r].ri=r,c[r].descripcion=n,""===n&&c.splice(r,1),t.props.handleRestricciones(c),t.handleNewsRes()},t.handleNewsRes=function(){var e=t.props.status.restricciones;0===e.filter(function(e){return 0===e.descripcion.length}).length&&(e.push({ri:e.length,descripcion:"",coeficientes:[],eq:">=",derecha:""}),t.props.handleRestricciones(e))},t.handleNewsVar=function(e){var a=t.props.status.variables;"simplex"===e?0===a.filter(function(e){return 0===e.descripcion.length}).length&&(a.push({xi:a.length,descripcion:"",coeficiente:""}),t.props.handleVariables(a)):a.length>2&&(a.splice(2),t.props.handleVariables(a))},t.state={faltaDescrip:""},t}return Object(g.a)(a,e),Object(E.a)(a,[{key:"isValidated",value:function(){var e=this.props.status,a=e.variables,t=e.restricciones,n=a.filter(function(e){return""!==e.descripcion}),r=t.filter(function(e){return""!==e.descripcion});return n.length>1&r.length>0?(this.props.lastStep(1),!0):(n<2?this.setState({faltaDescrip:"Dale no seas Guampa poneme como minimo 2 variables"}):this.setState({faltaDescrip:"Poneme Alguna Restri pue "}),!1)}},{key:"render",value:function(){var e=this,a=this.props.status.variables,t=this.props.status.restricciones,n=a.map(function(a,t){return r.a.createElement(x.a,{className:"mt-1",id:"XTT"+t,key:"VTD"+t},r.a.createElement(R.a,{addonType:"prepend"},r.a.createElement(k.a,{name:"xi",id:"variable"},"X"+t)),r.a.createElement(V.a,{name:t,placeholder:"Descripcion de la Variable","aria-label":"Descripcion","aria-describedby":"variable",onChange:e.handlerInputVar,value:a.descripcion}),r.a.createElement(j.a,{trigger:"focus hover click",placement:"auto",target:"XTT"+t},"Aqui debes ingresar el significado de la Variable."))}),c=t.map(function(a,t){return r.a.createElement(x.a,{className:"mt-1",id:"TTR"+t,key:"RTD"+t},r.a.createElement(R.a,{addonType:"prepend"},r.a.createElement(k.a,{name:"ri",id:"restriccion"},"R"+t)),r.a.createElement(V.a,{name:t,placeholder:"Descripcion de la Restriccion","aria-label":"Descripcion","aria-describedby":"restriccion",onChange:e.handlerInputRes,value:a.descripcion}),r.a.createElement(j.a,{trigger:"focus hover click",placement:"auto",target:"TTR"+t},"Aqui, debes ingresar el significado de la restriccion."))}),l=r.a.createElement(p.a,{id:"ButtUtil"},r.a.createElement(u.a,{onClick:function(){e.props.handleMethod("graph"),e.handleNewsVar("graph")},active:"graph"===this.props.status.method,color:"primary"},"GRAFICO"),r.a.createElement(u.a,{onClick:function(){e.props.handleMethod("simplex"),e.handleNewsVar("simplex")},active:"simplex"===this.props.status.method,color:"primary"},"SIMPLEX")),o=r.a.createElement(p.a,null,r.a.createElement(u.a,{onClick:function(){return e.props.handleObjective("max")},active:"max"===this.props.status.objective,color:"primary"},"Maximizacion"),r.a.createElement(u.a,{onClick:function(){return e.props.handleObjective("min")},active:"min"===this.props.status.objective,color:"primary"},"Minimizacion"));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Comenzamos configurando nuestro Modelo:"),r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(O.a,{placement:"top",target:"CardUtil"},r.a.createElement(I.a,null,"Aqui debes seleccionar el metodo de Calculo y Visualizacion de los Resultados")),r.a.createElement(S.a,{outline:!0,color:"secondary",id:"CardUtil",className:"mt-2 mx-auto"},r.a.createElement(w.a,null,"Metodo a Utilizar:"),r.a.createElement(T.a,null,l)),r.a.createElement(O.a,{placement:"top",target:"CardOpt"},r.a.createElement(I.a,null,"Y aqui, el tipo de Optimizacion que deseas realizar, si deseas Maximizar tu funcion o Minimizarla")),r.a.createElement(S.a,{outline:!0,color:"secondary",id:"CardOpt",className:"mt-2 mx-auto"},r.a.createElement(w.a,null,"Tipo de Optimizacion:"),r.a.createElement(T.a,null,o))),r.a.createElement(s.a,null,r.a.createElement(S.a,{outline:!0,color:"secondary",id:"CardVariables",className:"w-100 mt-3 mx-auto"},r.a.createElement(w.a,null,r.a.createElement(D.a,{className:"text-left"},r.a.createElement("h4",null,"Variables:"))),r.a.createElement(T.a,null,n))),r.a.createElement(s.a,null,r.a.createElement(S.a,{outline:!0,color:"secondary",id:"CardRestri",className:"w-100 mt-3 mx-auto"},r.a.createElement(w.a,null,r.a.createElement(D.a,{className:"text-left"},r.a.createElement("h4",null,"Restricciones:"))),r.a.createElement(T.a,null,c))),""!==this.state.faltaDescrip&&r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(P.a,{className:"mx-auto",color:"danger"},this.state.faltaDescrip))))}}]),a}(r.a.Component),z=t(67),F=t(53),M=t(37),A=t(62),B=function(e){var a=e.restriccion.coeficientes;if(a.length!==e.cantVariables){var t=e.cantVariables-a.length;if(t>0)for(var n=0;n<t;n++)a.push("");else a.splice(e.cantVariables)}var c=e.restriccion.eq,l=r.a.createElement(p.a,{className:"mx-1",key:"Eq"+e.restriccion.ri},r.a.createElement(u.a,{key:"B<s"+e.restriccion.ri,name:"eq",onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),c="<="},color:"<="===c?"primary":"secondary",value:"<="},"<="),r.a.createElement(u.a,{key:"B="+e.restriccion.ri,name:"eq",disabled:!0,onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),c="="},color:"="===c?"primary":"secondary",value:"="},"="),r.a.createElement(u.a,{key:"B>"+e.restriccion.ri,name:"eq",onClick:function(a){e.handleCoefRes(a,e.restriccion.ri),c=">="},color:">="===c?"primary":"secondary",value:">="},">=")),i=a.map(function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{key:"Ci"+e.restriccion.ri+"r"+n,type:"number",name:n,placeholder:"Coefiente",className:"InputCoeficiente",onChange:function(a){e.handleCoefRes(a,e.restriccion.ri)},value:t}),r.a.createElement(R.a,{key:"IADD"+e.restriccion.ri+"r"+n,addonType:"append"},r.a.createElement(k.a,{key:"r"+e.restriccion.ri+"r"+n},"X"+n)),n<a.length-1&&r.a.createElement(k.a,{key:"+"+e.restriccion.ri+"r"+n},"+"))});return r.a.createElement(S.a,{key:"CR"+e.restriccion.ri,id:"CR"+e.restriccion.ri},r.a.createElement(j.a,{key:"TTCR"+e.restriccion.ri,placement:"auto",target:"CR"+e.restriccion.ri},"Aqui debes ingresar los coeficiente de "+e.restriccion.descripcion),r.a.createElement(w.a,{className:"p-0 m-0"},r.a.createElement(D.a,null,"R"+e.restriccion.ri+":"+e.restriccion.descripcion)),r.a.createElement(T.a,{className:"p-0 my-1 mx-auto"},r.a.createElement(x.a,{key:"RT"+e.restriccion.ri},i,l,r.a.createElement(V.a,{key:"C"+e.restriccion.ri+"r"+a.length,type:"number",name:"derecha",placeholder:"Coe",className:"InputCoeficiente","aria-label":"Coe","aria-describedby":"restriccion",onChange:function(a){e.handleCoefRes(a,e.restriccion.ri)},value:e.restriccion.derecha}))))},L=function(e){var a=e.variables,t=a.filter(function(e){return""!==e.descripcion}).map(function(t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{key:"TTV"+n,placement:"auto",target:"IF"+n},"Aqui debes ingresar el coeficiente de "+t.descripcion),r.a.createElement(V.a,{key:"IF"+n,id:"IF"+n,type:"number",name:t.xi,placeholder:"Coef",className:"InputCoeficiente","aria-label":"Coeficiente","aria-describedby":"coe",onChange:function(a){return e.handleCoefVar(a)},value:t.coeficiente}),r.a.createElement(R.a,{key:"ADDIF"+n,addonType:"append"},r.a.createElement(k.a,{key:"IFD"+n},"X"+t.xi)),n<a.filter(function(e){return""!==e.descripcion}).length-1&&r.a.createElement(k.a,{key:"+IF"+n},"+"))});return r.a.createElement(x.a,{key:"INPUTFUNCIONAL"},t,r.a.createElement(k.a,{className:"mx-1",key:"IFOPT"}," => "+e.objective.toUpperCase()))},X=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(b.a)(this,Object(v.a)(a).call(this,e))).handleCoefVar=function(e){var a=e.target,n=a.value,r=a.name;if(n){var c=t.props.status.variables;c[r].coeficiente=parseInt(n),t.props.handleVariables(c),console.log(t.props.status.variables)}},t.handleCoefRes=function(e,a){var n=e.target,r=n.name,c=n.value,l=t.props.status.restricciones;switch(console.log("En la Res:"+a+", en el campo:"+r+",con el valor:"+c),r){case"derecha":l[a].derecha=parseInt(c);break;case"eq":l[a].eq=c;break;default:l[a].coeficientes[r]=parseInt(c)}console.log(l),t.props.handleRestricciones(l)},t.listDescriptionsVarItems=function(e){return e.filter(function(e){return""!==e.descripcion}).map(function(e){return r.a.createElement(z.a,{key:"DLGIV"+e.xi,className:"justify-content-between"},r.a.createElement(F.a,null,"X"+e.xi)," "+e.descripcion)})},t.listDescriptionsResItems=function(e){return e.filter(function(e){return""!==e.descripcion}).map(function(e){return r.a.createElement(z.a,{key:"DLGIR"+e.ri,className:"justify-content-between"},r.a.createElement(F.a,null,"R"+e.ri)," "+e.descripcion)})},t.state={faltaCoe:"",references:!1},t}return Object(g.a)(a,e),Object(E.a)(a,[{key:"isValidated",value:function(){return this.props.status.variables.filter(function(e){return""!==e.descripcion}).every(function(e){return""!==e.coeficiente})?(this.props.lastStep(2),this.setState({faltaCoe:""}),!0):(this.setState({faltaCoe:"Rellename pue todos los Coeficientes no seas Guampa"}),!1)}},{key:"render",value:function(){var e=this,a=this.props.status.variables,t=this.props.status.restricciones,n=a.filter(function(e){return""!==e.descripcion}).length,c=t.filter(function(e){return""!==e.descripcion}).map(function(a,t){return r.a.createElement(B,{className:"mt-1",key:"R"+t,handleCoefRes:e.handleCoefRes,cantVariables:n,restriccion:a})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Cargamos los datos de nuestro Modelo:"),r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(S.a,{outline:!0,color:"secondary",className:"w-100 mt-3"},r.a.createElement(w.a,null,r.a.createElement(s.a,null,r.a.createElement(o.a,{className:"text-left"},r.a.createElement(D.a,null,r.a.createElement("h4",null,"Referencias:"))),r.a.createElement(o.a,null,r.a.createElement(u.a,{outline:!0,size:"sm",onClick:function(){return e.setState({references:!e.state.references})},color:this.state.references?"danger":"success"},this.state.references?"Ocultar Referencias":"Ver Referencias")))),r.a.createElement(M.a,{isOpen:this.state.references},r.a.createElement(T.a,null,r.a.createElement("h5",{className:"text-left"},"Variables:"),r.a.createElement(A.a,null,this.listDescriptionsVarItems(a)),r.a.createElement("h5",{className:"text-left"},"Restricciones:"),r.a.createElement(A.a,null,this.listDescriptionsResItems(t)))))),r.a.createElement(s.a,null,r.a.createElement(S.a,{outline:!0,color:"secondary",className:"w-100 mt-3"},r.a.createElement(w.a,null,r.a.createElement(D.a,{className:"text-left"},r.a.createElement("h4",null,"Funcion Objetivo:"))),r.a.createElement(T.a,{className:"mx-auto"},r.a.createElement(L,{variables:a,handleCoefVar:this.handleCoefVar,objective:this.props.status.objective})))),r.a.createElement(s.a,null,r.a.createElement(S.a,{outline:!0,color:"secondary",className:"w-100 mt-3"},r.a.createElement(w.a,null,r.a.createElement(D.a,{className:"text-left"},r.a.createElement("h4",null,"Restricciones:"))),r.a.createElement(T.a,null,c))),""!==this.state.faltaCoe&&r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(P.a,{className:"mx-auto",color:"danger"},this.state.faltaCoe))))}}]),a}(r.a.Component),U=t(57),G=t(77),J=t.n(G),W=function(e){var a=e.restricciones,t=e.variables,n=e.objective,r={optimize:"coeficiente",opType:"",constraints:{},variables:{}};return r.opType=n,t.filter(function(e){return""!==e.descripcion}).forEach(function(e){var t={};t.coeficiente=e.coeficiente,a.forEach(function(a){""!==a.descripcion&&(t["r"+a.ri]=a.coeficientes[e.xi])}),console.log(t),r.variables[e.xi]=t}),a.filter(function(e){return""!==e.descripcion}).forEach(function(e){if(">="===e.eq){var a={};a.min=e.derecha,r.constraints["r"+e.ri]=a}else{var t={};t.max=e.derecha,r.constraints["r"+e.ri]=t}}),r},Y=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(b.a)(this,Object(v.a)(a).call(this,e))).calculatePrimal=function(){var e=W(t.props.status);return J.a.Solve(e)},t.state={result:!1},t}return Object(g.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e="No hay resultados todavsia";this.props.status.result&&(e=this.calculatePrimal(),console.log(e));var a=this.props.status.variables.filter(function(e){return""!==e.descripcion}).map(function(a){return r.a.createElement(S.a,{key:"Card"+a.xi,outline:!0,color:"secondary",className:"w-100 mt-3 mx-auto"},r.a.createElement(w.a,null,r.a.createElement(D.a,null,"Variable: X"+a.xi)),r.a.createElement(T.a,null,r.a.createElement(U.a,null,e[a.xi]?"Se recomienda producir "+e[a.xi]+" unidades":"No se recomienda la produccion"," de "+a.descripcion)))});return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{outline:!0,color:"info",className:"w-100 mt-3 mx-auto"},r.a.createElement(w.a,null,r.a.createElement(D.a,null,r.a.createElement("h3",null,"El resultado optimo es: "+e.result))),r.a.createElement(T.a,null,a)))}}]),a}(r.a.Component),Z=t(78),$=t.n(Z),H=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(b.a)(this,Object(v.a)(a).call(this,e))).handleRestricciones=function(e){t.setState({restricciones:e})},t.handleVariables=function(e){t.setState({variables:e})},t.handleMethod=function(e){t.setState({method:e})},t.handleObjective=function(e){t.setState({objective:e})},t.handleResult=function(e){t.setState({result:e})},t.lastStep=function(e){2===e?t.setState({result:!0,barProg:100}):t.setState({result:!1,barProg:66})},t.finishButtonClick=function(e){console.log("En algun momento va a imprimir resultados")},t.state={variables:[{xi:0,descripcion:"",coeficiente:""},{xi:1,descripcion:"",coeficiente:""}],restricciones:[{ri:0,descripcion:"",coeficientes:[],eq:">=",derecha:""}],method:"graph",objective:"max",result:!1,barProg:33},t}return Object(g.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=[{stepName:"Configuracion del Modelo",component:q,stepProps:{status:this.state,handleMethod:this.handleMethod,handleVariables:this.handleVariables,handleRestricciones:this.handleRestricciones,lastStep:this.lastStep,handleObjective:this.handleObjective}},{stepName:"Detalles del Modelo",component:X,stepProps:{status:this.state,handleVariables:this.handleVariables,lastStep:this.lastStep,handleRestricciones:this.handleRestricciones}},{stepName:"Presentacion de los Resultados",component:Y,stepProps:{status:this.state,handleResult:this.handleResult,lastStep:this.lastStep}}];return r.a.createElement(i.a,{fluid:!0,className:"App"},r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xs:12,md:6,className:"mx-auto"},r.a.createElement("img",{src:$.a,className:"App-logo",alt:"logo",height:"200"}),r.a.createElement(y.a,{animated:!0,color:"blue",value:this.state.barProg}))),r.a.createElement(s.a,null,r.a.createElement(o.a,{xs:12,md:6,className:"my-4 mx-auto"},r.a.createElement(N.a,{steps:e,title:"Programacion Lineal",progressbar:!0,headerTextCenter:!0,validate:!0,color:"blue",previousButtonText:"Volver",nextButtonText:"Siguiente",finishButtonText:"Imprimir Resultados",finishButtonClick:this.finishButtonClick}))))}}]),a}(r.a.Component),K=function(){return r.a.createElement(H,null)},Q=function(){return r.a.createElement(i.a,{fluid:!0,className:"App"},r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xs:12,md:6,className:"mx-auto my-5"},r.a.createElement(m.a,{className:""},r.a.createElement(s.a,null,r.a.createElement("h2",null,"La PL No-Lineal recien estara disponible en el 2020.")),r.a.createElement(s.a,null,r.a.createElement(d.b,{to:"/"},r.a.createElement(u.a,{className:"fluid-left"},"Volver")))))))},_=function(){return r.a.createElement(i.a,{fluid:!0,className:"App"},r.a.createElement(s.a,{className:""},r.a.createElement(o.a,{xs:12,md:6,className:"mx-auto my-5"},r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement("h2",{className:"mx-auto"},"Bienvenido!!!! Seleccione una opcion.")),r.a.createElement(s.a,{className:"mt-2"},r.a.createElement(o.a,null,r.a.createElement(d.b,{to:"/linealProg"},r.a.createElement(u.a,{color:"success"},"Programacion Lineal "))),r.a.createElement(o.a,null,r.a.createElement(d.b,{to:"/noLinealProg"},r.a.createElement(u.a,{disabled:!0,color:"success"},"Programacion No Lineal ")))),r.a.createElement(s.a,{className:"mt-3"},r.a.createElement("h5",null,"Colaboradores:")),r.a.createElement(s.a,null,r.a.createElement(p.a,{className:"mx-auto"},r.a.createElement(u.a,{outline:!0,tag:"a",href:"https://github.com/EdgarCardozo"},"CE"),r.a.createElement(u.a,{outline:!0,tag:"a",href:"https://github.com/juliandiazok"},"DJ"),r.a.createElement(u.a,{outline:!0,tag:"a",href:"https://github.com/santisolis97"},"SS"),r.a.createElement(u.a,{outline:!0,tag:"a",href:"https://github.com/ianv97"},"VI"),r.a.createElement(u.a,{outline:!0,tag:"a",href:"https://github.com/santinozaracho"},"ZS")))))))},ee=function(){return r.a.createElement(d.a,{basename:"/optimizer-pl-io"},r.a.createElement(h.a,{exact:!0,path:"/",component:_}),r.a.createElement(h.a,{path:"/linealProg",component:K}),r.a.createElement(h.a,{path:"/noLinealProg/",component:Q}))};t(114),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},80:function(e,a,t){e.exports=t(115)},85:function(e,a,t){},86:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.d0bd44f0.chunk.js.map