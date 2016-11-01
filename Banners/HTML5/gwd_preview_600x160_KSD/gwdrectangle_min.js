-function(){"use strict";var q=[0,0,0,0],r=/[-+]?[0-9]*\.?[0-9]+%/g,t=/[-+]?[0-9]*\.?[0-9]+px/g,w=function(f,b,g,a,d){var c,h;if(b.gradientMode){d=[[d,d,0],[d,a-d,0],[g-d,a-d,0],[g-d,d,0]];if("radial"==b.gradientMode){(c=b.l)||(c="center");h=f="center";var e=c.match(r);c=c.match(t);e&&1<e.length?(f=e[0],h=e[1]):c&&1<c.length&&(f=c[0],h=c[1]);f=u(f,d[0][0],d[3][0]);h=u(h,d[0][1],d[1][1]);e=b.shape;c=[.5*(d[0][0]+d[2][0]),.5*(d[0][0]+d[2][0])];var k=f<c[0]?d[2][0]:d[0][0];c=h<c[1]?d[1][1]:d[0][1];k=Math.abs(f-k);c=Math.abs(h-
c);var l=d[3][0]-d[0][0];d=d[1][1]-d[0][1];.001<Math.abs(l)&&(d/=l,k=Math.sqrt(k*k+c*c/(d*d)),c=d*k);d=k;e&&"farthest-corner"!=e&&(e=e.match(t))&&1<e.length&&(d=parseFloat(e[0]),c=parseFloat(e[1]));l=Math.max(d,c);e=document.createElement("canvas");e.width=g;e.height=a;k=e.getContext("2d");l=k.createRadialGradient(f,h,0,f,h,l);v(l,b.color);k.rect(0,0,g,a);c<d?(b=1,g=c/d):(g=1,b=d/c);k.save();k.transform(b,0,0,g,b*-f+f,g*-h+h);k.fillStyle=l;k.fill();k.restore();b=k.createPattern(e,"no-repeat")}else{g=
0;b.orientation&&(g=parseFloat(b.orientation)*Math.PI/180);isFinite(g)&&!isNaN(g)||(g=0);c=-1*g;g=[];h=[];a=[.5*(d[0][0]+d[2][0]),.5*(d[0][1]+d[2][1])];e=Math.tan(c);if(.001>Math.abs(Math.tan(.5*Math.PI-.001)-e))h=0<=Math.sin(c)?1:-1,d=.5*(d[2][1]-d[0][1]),g=[a[0],a[1]-h*d],h=[a[0],a[1]+h*d];else{c=0<=Math.cos(c)?1:-1;c=[c,c*e];for(var k=Infinity,l=-Infinity,p=0;4>p;p++){var m,n=[d[p][0]-a[0],d[p][1]-a[1]],n=e*n[1]+n[0],n=n/(1+e*e);m=[n,n*e];n=(0<c[0]*m[0]+c[1]*m[1]?1:-1)*Math.sqrt(m[0]*m[0]+m[1]*
m[1]);m=[m[0]+a[0],m[1]+a[1]];n<k&&(g=m,k=n);n>l&&(h=m,l=n)}}d=f.createLinearGradient(g[0],g[1],h[0],h[1]);v(d,b.color);b=d}return b}return"rgba("+Math.floor(255*b[0])+","+Math.floor(255*b[1])+","+Math.floor(255*b[2])+","+b[3]+")"},v=function(f,b){if(f)for(var g=b.length,a=0;a<g;a++){var d=b[a].position/100,c=b[a].value;if(void 0===c.a||null===c.a)c.a=1;f.addColorStop(d,"rgba("+c.r+","+c.g+","+c.b+","+c.a+")")}},u=function(f,b,g){return f?0<=f.indexOf("%")?b+parseInt(f,10)/100*(g-b):0<=f.indexOf("px")?
b+parseInt(f,10):b+.5*(g-b):0};var x=function(){};goog.inherits(x,HTMLCanvasElement);
x.prototype.attachedCallback=function(){var f=this.getContext("2d"),b=this.width,g=this.height,a={};a.h=parseFloat(this.getAttribute("stroke-width"))||0;a.strokeColor=JSON.parse(this.getAttribute("stroke-color"))||q;a.fillColor=JSON.parse(this.getAttribute("fill-color"))||q;a.i=parseFloat(this.getAttribute("tl-radius"))||0;a.j=parseFloat(this.getAttribute("tr-radius"))||0;a.c=parseFloat(this.getAttribute("bl-radius"))||0;a.f=parseFloat(this.getAttribute("br-radius"))||0;var d=a.h;f.beginPath();var c=
Math.ceil(d)-.5;a.fillColor&&(f.fillStyle=w(f,a.fillColor,b,g,d),f.lineWidth=d,y(a,c,f,b,g),f.fill(),f.closePath());f.beginPath();c=Math.ceil(.5*d)-.5;a.strokeColor&&(f.strokeStyle=w(f,a.strokeColor,b,g,0),f.lineWidth=d,y(a,c,f,b,g),f.stroke(),f.closePath())};x.prototype.attributeChangedCallback=null;
var y=function(f,b,g,a,d){var c=.5*a,h=.5*d,e=[b,b],k=f.i,l=f.j,p=f.c;f=f.f;c=c<h?c:h;k>c&&(k=c);p>c&&(p=c);f>c&&(f=c);l>c&&(l=c);c=a-b;h=d-b;0>=k&&0>=p&&0>=f&&0>=l?g.rect(e[0],e[1],a-2*b,d-2*b):(a=k-b,0>a&&(a=0),e[1]+=a,.001>Math.abs(a)&&(e[1]=b),g.moveTo(e[0],e[1]),e=[b,h],a=p-b,0>a&&(a=0),e[1]-=a,g.lineTo(e[0],e[1]),.001<a&&g.arcTo(b,h,b+a,h,p-b),e=[c,h],a=f-b,0>a&&(a=0),e[0]-=a,g.lineTo(e[0],e[1]),.001<a&&g.arcTo(c,h,c,h-a,f-b),e=[c,b],a=l-b,0>a&&(a=0),e[1]+=a,g.lineTo(e[0],e[1]),.001<a&&g.arcTo(c,
b,c-a,b,l-b),e=[b,b],a=k-b,0>a&&(a=0),e[0]+=a,g.lineTo(e[0],e[1]),.001<a?g.arcTo(b,b,b,b+a,k-b):g.lineTo(b,2*b))};document.registerElement("gwd-rectangle",{prototype:x.prototype,"extends":"canvas"});}()