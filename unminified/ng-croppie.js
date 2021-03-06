/*************************
 * Croppie
 * Copyright 2015
 * Foliotek
 * Version: 2.0.2
 *************************/
!function(e,t){"function"==typeof define&&define.amd?define(["exports"],t):t("object"==typeof exports&&"string"!=typeof exports.nodeName?exports:e.commonJsStrict={})}(this,function(exports){function e(e){if(e in W)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=P.length;n--;)if(e=P[n]+t,e in W)return e}function t(e,t){e=e||{};for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},arguments.callee(e[n],t[n])):e[n]=t[n];return e}function n(e,t,n){var i;return function(){var o=this,r=arguments,a=function(){i=null,n||e.apply(o,r)},s=n&&!i;clearTimeout(i),i=setTimeout(a,t),s&&e.apply(o,r)}}function i(e){if("createEvent"in document){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}else e.fireEvent("onchange")}function o(e,t,n){if("string"==typeof t){var i=t;t={},t[i]=n}for(var o in t)e.style[o]=t[o]}function r(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function a(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(t,"")}function s(e,t){var n,i=t||new Image;return n=new Promise(function(t){"http"===e.substring(0,4).toLowerCase()&&i.setAttribute("crossOrigin","anonymous"),i.onload=function(){setTimeout(function(){t(i)},1)}}),i.style.opacity=0,i.src=e,n}function l(e,t){window.EXIF||t(0),EXIF.getData(e,function(){var e=EXIF.getTag(this,"Orientation");t(e)})}function u(e,t,n,i){var o=n.width,r=n.height;switch(e.width=n.width,e.height=n.height,t.save(),i){case 2:t.translate(o,0),t.scale(-1,1);break;case 3:t.translate(o,r),t.rotate(180*Math.PI/180);break;case 4:t.translate(0,r),t.scale(1,-1);break;case 5:e.width=r,e.height=o,t.rotate(90*Math.PI/180),t.scale(1,-1);break;case 6:e.width=r,e.height=o,t.rotate(90*Math.PI/180),t.translate(0,-r);break;case 7:e.width=r,e.height=o,t.rotate(-90*Math.PI/180),t.translate(-o,r),t.scale(1,-1);break;case 8:e.width=r,e.height=o,t.translate(0,o),t.rotate(-90*Math.PI/180)}t.drawImage(n,0,0,o,r),t.restore()}function c(){var e,t,n,i,a=this,s="croppie-container",l=a.options.viewport.type?"cr-vp-"+a.options.viewport.type:null;a.options.useCanvas=a.options.exif&&window.EXIF,a.data={},a.elements={},e=a.elements.boundary=document.createElement("div"),n=a.elements.viewport=document.createElement("div"),t=a.elements.img=document.createElement("img"),i=a.elements.overlay=document.createElement("div"),a.options.useCanvas?(a.elements.canvas=document.createElement("canvas"),a.elements.preview=a.elements.canvas):a.elements.preview=a.elements.img,r(e,"cr-boundary"),o(e,{width:a.options.boundary.width+"px",height:a.options.boundary.height+"px"}),r(n,"cr-viewport"),l&&r(n,l),o(n,{width:a.options.viewport.width+"px",height:a.options.viewport.height+"px"}),r(a.elements.preview,"cr-image"),r(i,"cr-overlay"),a.element.appendChild(e),e.appendChild(a.elements.preview),e.appendChild(n),e.appendChild(i),r(a.element,s),a.options.customClass&&r(a.element,a.options.customClass),v.call(this),a.options.enableZoom&&p.call(a)}function h(e){this.options.enableZoom&&(this.elements.zoomer.value=B(e,4))}function p(){function e(){m.call(n,{value:parseFloat(o.value),origin:new H(n.elements.preview),viewportRect:n.elements.viewport.getBoundingClientRect(),transform:A.parse(n.elements.preview)})}function t(t){var i,o;i=t.wheelDelta?t.wheelDelta/1200:t.deltaY?t.deltaY/1060:t.detail?t.detail/60:0,o=n._currentZoom+i,t.preventDefault(),h.call(n,o),e()}var n=this,i=n.elements.zoomerWrap=document.createElement("div"),o=n.elements.zoomer=document.createElement("input");r(i,"cr-slider-wrap"),r(o,"cr-slider"),o.type="range",o.step="0.01",o.value=1,o.style.display=n.options.showZoomer?"":"none",n.element.appendChild(i),i.appendChild(o),n._currentZoom=1,n.elements.zoomer.addEventListener("input",e),n.elements.zoomer.addEventListener("change",e),n.options.mouseWheelZoom&&(n.elements.boundary.addEventListener("mousewheel",t),n.elements.boundary.addEventListener("DOMMouseScroll",t))}function m(e){var t=this,n=e.transform,i=e.viewportRect,r=e.origin;if(t._currentZoom=e.value,n.scale=t._currentZoom,t.options.enforceBoundary){var a=d.call(t,i),s=a.translate,l=a.origin;n.x>=s.maxX&&(r.x=l.minX,n.x=s.maxX),n.x<=s.minX&&(r.x=l.maxX,n.x=s.minX),n.y>=s.maxY&&(r.y=l.minY,n.y=s.maxY),n.y<=s.minY&&(r.y=l.maxY,n.y=s.minY)}var u={};u[M]=n.toString(),u[F]=r.toString(),o(t.elements.preview,u),N.call(t),w.call(t)}function d(e){var t=this,n=t._currentZoom,i=e.width,o=e.height,r=t.options.boundary.width/2,a=t.options.boundary.height/2,s=t._originalImageWidth,l=t._originalImageHeight,u=s*n,c=l*n,h=i/2,p=o/2,m=-1*(h/n-r),d=m-(u*(1/n)-i*(1/n)),f=-1*(p/n-a),v=f-(c*(1/n)-o*(1/n)),g=1/n*h,w=u*(1/n)-g,y=1/n*p,x=c*(1/n)-y;return{translate:{maxX:m,minX:d,maxY:f,minY:v},origin:{maxX:w,minX:g,maxY:x,minY:y}}}function f(){var e=this,t=e._currentZoom,n=e.elements.preview.getBoundingClientRect(),i=e.elements.viewport.getBoundingClientRect(),r=A.parse(e.elements.preview.style[M]),a=new H(e.elements.preview),s=i.top-n.top+i.height/2,l=i.left-n.left+i.width/2,u={},c={};u.y=s/t,u.x=l/t,c.y=(u.y-a.y)*(1-t),c.x=(u.x-a.x)*(1-t),r.x-=c.x,r.y-=c.y;var h={};h[F]=u.x+"px "+u.y+"px",h[M]=r.toString(),o(e.elements.preview,h)}function v(){function e(e){if(e.preventDefault(),!c){if(c=!0,r=e.pageX,a=e.pageY,e.touches){var i=e.touches[0];r=i.pageX,a=i.pageY}transform=A.parse(u.elements.preview),window.addEventListener("mousemove",t),window.addEventListener("touchmove",t),window.addEventListener("mouseup",n),window.addEventListener("touchend",n),document.body.style[S]="none",l=u.elements.viewport.getBoundingClientRect()}}function t(e){e.preventDefault();var t=e.pageX,n=e.pageY;if(e.touches){var c=e.touches[0];t=c.pageX,n=c.pageY}var p=t-r,m=n-a,d=u.elements.preview.getBoundingClientRect(),f=transform.y+m,v=transform.x+p,w={};if("touchmove"==e.type&&e.touches.length>1){var y=e.touches[0],x=e.touches[1],b=Math.sqrt((y.pageX-x.pageX)*(y.pageX-x.pageX)+(y.pageY-x.pageY)*(y.pageY-x.pageY));s||(s=b/u._currentZoom);var C=b/s;return h.call(u,C),void i(u.elements.zoomer)}u.options.enforceBoundary?(l.top>d.top+m&&l.bottom<d.bottom+m&&(transform.y=f),l.left>d.left+p&&l.right<d.right+p&&(transform.x=v)):(transform.y=f,transform.x=v),w[M]=transform.toString(),o(u.elements.preview,w),g.call(u),a=n,r=t}function n(){c=!1,window.removeEventListener("mousemove",t),window.removeEventListener("touchmove",t),window.removeEventListener("mouseup",n),window.removeEventListener("touchend",n),document.body.style[S]="",f.call(u),w.call(u),s=0}var r,a,s,l,u=this,c=!1;u.elements.overlay.addEventListener("mousedown",e),u.elements.overlay.addEventListener("touchstart",e)}function g(){var e=this,t=e.elements.boundary.getBoundingClientRect(),n=e.elements.preview.getBoundingClientRect();o(e.elements.overlay,{width:n.width+"px",height:n.height+"px",top:n.top-t.top+"px",left:n.left-t.left+"px"})}function w(){var e=this;y.call(e)&&e.options.update.call(e,e.get())}function y(){return this.elements.preview.offsetHeight>0&&this.elements.preview.offsetWidth>0}function x(){var e,t,n,r,a,s=this,l=0,u=1.5,c=1,p={},m=s.elements.preview,d=s.elements.zoomer,f=new A(0,0,c),v=new H,w=y.call(s);w&&!s.data.bound&&(s.data.bound=!0,p[M]=f.toString(),p[F]=v.toString(),p.opacity=1,o(m,p),e=m.getBoundingClientRect(),t=s.elements.viewport.getBoundingClientRect(),n=s.elements.boundary.getBoundingClientRect(),s._originalImageWidth=e.width,s._originalImageHeight=e.height,s.options.enableZoom&&(s.options.enforceBoundary&&(r=t.width/e.width,a=t.height/e.height,l=Math.max(r,a)),l>=u&&(u=l+1),d.min=B(l,4),d.max=B(u,4),c=Math.max(n.width/e.width,n.height/e.height),h.call(s,c),i(d)),s._currentZoom=f.scale=c,p[M]=f.toString(),o(m,p),s.data.points.length?b.call(s,s.data.points):C.call(s),g.call(s))}function b(e){if(4!=e.length)throw"Croppie - Invalid number of points supplied: "+e;var t=this,n=e[2]-e[0],i=t.elements.viewport.getBoundingClientRect(),r=t.elements.boundary.getBoundingClientRect(),a={left:i.left-r.left,top:i.top-r.top},s=i.width/n,l=e[1],u=e[0],c=-1*e[1]+a.top,p=-1*e[0]+a.left,m={};m[F]=u+"px "+l+"px",m[M]=new A(p,c,s).toString(),o(t.elements.preview,m),h.call(t,s),t._currentZoom=s}function C(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=e.elements.boundary.getBoundingClientRect(),r=n.left-i.left,a=n.top-i.top,s=r-(t.width-n.width)/2,l=a-(t.height-n.height)/2,u=new A(s,l,e._currentZoom);o(e.elements.preview,M,u.toString())}function E(){var e=this,t=e.elements.canvas,n=e.elements.img,i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),t.width=n.width,t.height=n.height,l(n,function(e){u(t,i,n,parseInt(e))})}function _(e){var t=e.points,n=document.createElement("div"),i=document.createElement("img"),a=t[2]-t[0],s=t[3]-t[1];return r(n,"croppie-result"),n.appendChild(i),o(i,{left:-1*t[0]+"px",top:-1*t[1]+"px"}),i.src=e.url,o(n,{width:a+"px",height:s+"px"}),n}function I(e,t){var n=t.points,i=n[0],o=n[1],r=n[2]-n[0],a=n[3]-n[1],s=t.circle,l=document.createElement("canvas"),u=l.getContext("2d"),c=r,h=a;return t.outputWidth&&t.outputHeight&&(c=t.outputWidth,h=t.outputHeight),l.width=c,l.height=h,u.drawImage(e,i,o,r,a,0,0,c,h),s&&(u.fillStyle="#fff",u.globalCompositeOperation="destination-in",u.beginPath(),u.arc(c/2,h/2,c/2,0,2*Math.PI,!0),u.closePath(),u.fill()),l.toDataURL(t.format,t.quality)}function R(e,t){var n,i=this,o=[];if("string"==typeof e)n=e,e={};else if(Array.isArray(e))o=e.slice();else{if("undefined"==typeof e&&i.data.url)return x.call(i),w.call(i),null;n=e.url,o=e.points||[]}i.data.bound=!1,i.data.url=n||i.data.url,i.data.points=(o||i.data.points).map(function(e){return parseFloat(e)});var r=s(n,i.elements.img);return r.then(function(){i.options.useCanvas&&(i.elements.img.exifdata=null,E.call(i)),x.call(i),f.call(i),w.call(i),t&&t()}),r}function B(e,t){return parseFloat(e).toFixed(t||0)}function X(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=n.left-t.left,o=n.top-t.top,r=i+n.width,a=o+n.height,s=e._currentZoom;(s===1/0||isNaN(s))&&(s=1);var l=e.options.enforceBoundary?0:Number.NEGATIVE_INFINITY;return i=Math.max(l,i/s),o=Math.max(l,o/s),r=Math.max(l,r/s),a=Math.max(l,a/s),{points:[B(i),B(o),B(r),B(a)],zoom:s}}function L(e){var n,i=this,o=X.call(i),r=t(O,t({},e)),a="string"==typeof e?e:r.type,s=r.size,l=r.format,u=r.quality,c=i.elements.viewport.getBoundingClientRect(),h=c.width/c.height;return"viewport"===s?(o.outputWidth=c.width,o.outputHeight=c.height):"object"==typeof s&&(s.width&&s.height?(o.outputWidth=s.width,o.outputHeight=s.height):s.width?(o.outputWidth=s.width,o.outputHeight=s.width/h):s.height&&(o.outputWidth=s.height*h,o.outputHeight=s.height)),D.indexOf(l)>-1&&(o.format="image/"+l,o.quality=u),o.circle="circle"===i.options.viewport.type,o.url=i.data.url,n=new Promise(function(e){e("canvas"===a?I.call(i,i.elements.preview,o):_.call(i,o))})}function Y(){x.call(this)}function Z(){var e=this;e.element.removeChild(e.elements.boundary),a(e.element,"croppie-container"),e.options.enableZoom&&e.element.removeChild(e.elements.zoomerWrap),delete e.elements}function j(e,n){if(this.element=e,this.options=t(t({},j.defaults),n),c.call(this),this.options.url){var i={url:this.options.url,points:this.options.points};delete this.options.url,delete this.options.points,R.call(this,i)}}"function"!=typeof Promise&&!function(e){function t(e,t){return function(){e.apply(t,arguments)}}function n(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(e,t(o,this),t(r,this))}function i(e){var t=this;return null===this._state?void this._deferreds.push(e):void c(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void(t._state?e.resolve:e.reject)(t._value);var i;try{i=n(t._value)}catch(o){return void e.reject(o)}e.resolve(i)})}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void l(t(n,e),t(o,this),t(r,this))}this._state=!0,this._value=e,a.call(this)}catch(i){r.call(this,i)}}function r(e){this._state=!1,this._value=e,a.call(this)}function a(){for(var e=0,t=this._deferreds.length;t>e;e++)i.call(this,this._deferreds[e]);this._deferreds=null}function s(e,t,n,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=i}function l(e,t,n){var i=!1;try{e(function(e){i||(i=!0,t(e))},function(e){i||(i=!0,n(e))})}catch(o){if(i)return;i=!0,n(o)}}var u=setTimeout,c="function"==typeof setImmediate&&setImmediate||function(e){u(e,1)},h=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};n.prototype["catch"]=function(e){return this.then(null,e)},n.prototype.then=function(e,t){var o=this;return new n(function(n,r){i.call(o,new s(e,t,n,r))})},n.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&h(arguments[0])?arguments[0]:arguments);return new n(function(t,n){function i(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){i(r,e)},n)}e[r]=a,0===--o&&t(e)}catch(l){n(l)}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)i(r,e[r])})},n.resolve=function(e){return e&&"object"==typeof e&&e.constructor===n?e:new n(function(t){t(e)})},n.reject=function(e){return new n(function(t,n){n(e)})},n.race=function(e){return new n(function(t,n){for(var i=0,o=e.length;o>i;i++)e[i].then(t,n)})},n._setImmediateFn=function(e){c=e},"undefined"!=typeof module&&module.exports?module.exports=n:e.Promise||(e.Promise=n)}(this);var F,M,S,P=["Webkit","Moz","ms"],W=document.createElement("div").style;M=e("transform"),F=e("transformOrigin"),S=e("userSelect");var z="translate3d",T=", 0px",A=function(e,t,n){this.x=parseFloat(e),this.y=parseFloat(t),this.scale=parseFloat(n)};A.parse=function(e){return e.style?A.parse(e.style[M]):e.indexOf("matrix")>-1||e.indexOf("none")>-1?A.fromMatrix(e):A.fromString(e)},A.fromMatrix=function(e){var t=e.substring(7).split(",");return t.length&&"none"!==e||(t=[1,0,0,1,0,0]),new A(parseInt(t[4],10),parseInt(t[5],10),parseFloat(t[0]))},A.fromString=function(e){var t=e.split(") "),n=t[0].substring(z.length+1).split(","),i=t.length>1?t[1].substring(6):1,o=n.length>1?n[0]:0,r=n.length>1?n[1]:0;return new A(o,r,i)},A.prototype.toString=function(){return z+"("+this.x+"px, "+this.y+"px"+T+") scale("+this.scale+")"};var H=function(e){if(!e||!e.style[F])return this.x=0,void(this.y=0);var t=e.style[F].split(" ");this.x=parseFloat(t[0]),this.y=parseFloat(t[1])};H.prototype.toString=function(){return this.x+"px "+this.y+"px"};var N=n(g,500),O={type:"canvas",size:"viewport",format:"png",quality:1},D=["jpeg","webp","png"];if(this.jQuery){var $=this.jQuery;$.fn.croppie=function(e){var t=typeof e;if("string"===t){var n=Array.prototype.slice.call(arguments,1),i=$(this).data("croppie");return"get"===e?i.get():"result"===e?i.result.apply(i,n):this.each(function(){var t=$(this).data("croppie");if(t){var i=t[e];if(!$.isFunction(i))throw"Croppie "+e+" method not found";i.apply(t,n),"destroy"===e&&$(this).removeData("croppie")}})}return this.each(function(){var t=new j(this,e);$(this).data("croppie",t)})}}j.defaults={viewport:{width:100,height:100,type:"square"},boundary:{width:300,height:300},customClass:"",showZoomer:!0,enableZoom:!0,mouseWheelZoom:!0,exif:!1,enforceBoundary:!0,update:function(){}},t(j.prototype,{bind:function(e,t){return R.call(this,e,t)},get:function(){return X.call(this)},result:function(e){return L.call(this,e)},refresh:function(){return Y.call(this)},setZoom:function(e){h.call(this,e),i(this.elements.zoomer)},destroy:function(){return Z.call(this)}}),exports.Croppie=window.Croppie=j,"object"==typeof module&&module.exports&&(module.exports=j)});
/*************************
 * acrCroppie
 * Allen Royston
 * Version: 1.0.0
 *************************/
angular.module('ngCroppie', []).directive('ngCroppie', ['$compile','$timeout',
  function ($compile,$timeout) {
    return {
        restrict: 'AE',
        scope:{
          src: '=',
          viewport: '=',
          boundry: '=',
          type: '@',
          zoom: '@',
          mousezoom: '@',
          update: '=',
          ngModel: '='
        },
        link: function(scope, elem, attr) {

                // defaults
                if(scope.viewport == undefined){
                  scope.viewport = {w: null, h: null}
                }

                if(scope.boundry == undefined){
                  scope.boundry = {w: null, h: null}
                }

                // catches
                scope.viewport.w = (scope.viewport.w != undefined) ? scope.viewport.w : 300;
                scope.viewport.h = (scope.viewport.h != undefined) ? scope.viewport.h : 300;
                scope.boundry.w = (scope.boundry.w != undefined) ? scope.boundry.w : 400;
                scope.boundry.h = (scope.boundry.h != undefined) ? scope.boundry.h : 400;

                // viewport cannot be larger than the boundaries
                if(scope.viewport.w > scope.boundry.w){ scope.viewport.w = scope.boundry.w }
                if(scope.viewport.h > scope.boundry.h){ scope.viewport.h = scope.boundry.h }

                // convert string to Boolean
                var zoom = (scope.zoom === "true"),
                    mouseZoom = (scope.mousezoom === "true");

                // define options
                var options =  {
                    viewport: {
                      width: scope.viewport.w,
                      height: scope.viewport.h,
                      type: scope.type || 'square'
                    },
                    boundary: {
                      width: scope.boundry.w,
                      height: scope.boundry.h
                    },
                    showZoom: scope.zoom,
                    mouseWheelZoom: scope.mousezoom
                }

                if (scope.update != undefined){
                  options.update = scope.update
                }

                // create new croppie and settime for updates
                var c = new Croppie(elem[0], options);
                var intervalID = window.setInterval(function(){
                  c.bind();
                  c.result('canvas').then(function(img){
                    scope.$apply(function(){
                      scope.ngModel = img
                    })
                  })
                },0);

                scope.$on("$destroy",
                    function( event ) {
                        clearInterval(intervalID);
                    }
                );

                // respond to changes in src
                scope.$watch('src', function(newValue, oldValue) {
                    if(scope.src != undefined){
                        c.bind(scope.src);
                        c.result('canvas').then(function(img){
                          scope.$apply(function(){
                            scope.ngModel = img
                          })
                        })
                    }
              })


        }

    };
  }
]);
