(this.webpackJsonpyes_or_no=this.webpackJsonpyes_or_no||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),c=n.n(r),i=(n(14),n(4)),o=n(5),s=n(7),m=n(6),u=n(1),d=n(8);n(15);var v=function(){return l.a.createElement("div",{className:"barContainer"},l.a.createElement("p",{className:"calculatingText"},"Calculating..."),l.a.createElement("div",{className:"myBar"},"10%"))};n(16);var f=function(){return l.a.createElement("div",{id:"TitleContainer"},l.a.createElement("h1",{id:"Title"},"SHOULD YOU GO OUT TONIGHT?"))};n(17);var y=function(){return l.a.createElement("div",{className:"textContainer"},l.a.createElement("h1",{className:"YesNoText "},Math.floor(Math.random()*Math.floor(2))?"Yes":"No"))},E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).move=n.move.bind(Object(u.a)(n)),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"move",value:function(){var e=["Calculating population density of nearby bars...","Comparing alcohol prices with bank balance...","Determining travel cost...","Determining travel distance...","Checking social battery...","Done"],t=document.getElementsByClassName("myBar").item(0),n=document.getElementsByClassName("calculatingText").item(0),a=-1,l=setInterval((function(){(a%20===0&&(console.log(a/20-1),n.innerText=e[a/20]),a>=100)?(clearInterval(l),document.getElementsByClassName("YesNoText").item(0).style.display="inline-block"):(a++,t.style.width=a+"%",t.innerHTML=a+"%")}),80)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(v,null),l.a.createElement(y,null))}},{key:"componentDidMount",value:function(){window.addEventListener("load",this.move)}}]),t}(l.a.Component);c.a.render(l.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.e93cca41.chunk.js.map