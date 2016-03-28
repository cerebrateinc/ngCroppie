/*************************
 * Croppie
 * Copyright 2015
 * Foliotek
 * Version: 2.0.1
 *************************/
!function(e,t){"function"==typeof define&&define.amd?define(["exports"],t):t("object"==typeof exports&&"string"!=typeof exports.nodeName?exports:e.commonJsStrict={})}(this,function(exports){function e(e){if(e in P)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=z.length;n--;)if(e=z[n]+t,e in P)return e}function t(e,t){e=e||{};for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},arguments.callee(e[n],t[n])):e[n]=t[n];return e}function n(e,t,n){var i;return function(){var o=this,r=arguments,a=function(){i=null,n||e.apply(o,r)},s=n&&!i;clearTimeout(i),i=setTimeout(a,t),s&&e.apply(o,r)}}function i(e){if("createEvent"in document){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}else e.fireEvent("onchange")}function o(e,t,n){if("string"==typeof t){var i=t;t={},t[i]=n}for(var o in t)e.style[o]=t[o]}function r(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function a(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(t,"")}function s(e,t){var n,i=t||new Image;return n=new Promise(function(t){"http"===e.substring(0,4).toLowerCase()&&i.setAttribute("crossOrigin","anonymous"),i.onload=function(){setTimeout(function(){t(i)},1)}}),i.style.opacity=0,i.src=e,n}function l(e,t){window.EXIF||t(0),EXIF.getData(e,function(){var e=EXIF.getTag(this,"Orientation");t(e)})}function c(e,t,n,i){var o=n.width,r=n.height;switch(e.width=n.width,e.height=n.height,t.save(),i){case 2:t.translate(o,0),t.scale(-1,1);break;case 3:t.translate(o,r),t.rotate(180*Math.PI/180);break;case 4:t.translate(0,r),t.scale(1,-1);break;case 5:e.width=r,e.height=o,t.rotate(90*Math.PI/180),t.scale(1,-1);break;case 6:e.width=r,e.height=o,t.rotate(90*Math.PI/180),t.translate(0,-r);break;case 7:e.width=r,e.height=o,t.rotate(-90*Math.PI/180),t.translate(-o,r),t.scale(1,-1);break;case 8:e.width=r,e.height=o,t.translate(0,o),t.rotate(-90*Math.PI/180)}t.drawImage(n,0,0,o,r),t.restore()}function u(){var e,t,n,i,a=this,s="croppie-container",l=a.options.viewport.type?"cr-vp-"+a.options.viewport.type:null;a.options.useCanvas=a.options.exif&&window.EXIF,a.data={},a.elements={},e=a.elements.boundary=document.createElement("div"),n=a.elements.viewport=document.createElement("div"),t=a.elements.img=document.createElement("img"),i=a.elements.overlay=document.createElement("div"),a.options.useCanvas?(a.elements.canvas=document.createElement("canvas"),a.elements.preview=a.elements.canvas):a.elements.preview=a.elements.img,r(e,"cr-boundary"),o(e,{width:a.options.boundary.width+"px",height:a.options.boundary.height+"px"}),r(n,"cr-viewport"),l&&r(n,l),o(n,{width:a.options.viewport.width+"px",height:a.options.viewport.height+"px"}),r(a.elements.preview,"cr-image"),r(i,"cr-overlay"),a.element.appendChild(e),e.appendChild(a.elements.preview),e.appendChild(n),e.appendChild(i),r(a.element,s),a.options.customClass&&r(a.element,a.options.customClass),v.call(this),a.options.enableZoom&&h.call(a)}function p(e){this.options.enableZoom&&(this.elements.zoomer.value=L(e,4))}function h(){function e(){f.call(s),i=new D(s.elements.preview),o=s.elements.viewport.getBoundingClientRect(),a=A.parse(s.elements.preview)}function t(){m.call(s,{value:parseFloat(c.value),origin:i||new D(s.elements.preview),viewportRect:o||s.elements.viewport.getBoundingClientRect(),transform:a||A.parse(s.elements.preview)})}function n(n){var i,o;i=n.wheelDelta?n.wheelDelta/1200:n.deltaY?n.deltaY/1060:n.detail?n.detail/60:0,o=s._currentZoom+i,n.preventDefault(),e(),p.call(s,o),t()}var i,o,a,s=this,l=s.elements.zoomerWrap=document.createElement("div"),c=s.elements.zoomer=document.createElement("input");r(l,"cr-slider-wrap"),r(c,"cr-slider"),c.type="range",c.step="0.3",c.value=1,c.style.display=s.options.showZoomer?"":"none",s.element.appendChild(l),l.appendChild(c),s._currentZoom=1,s.elements.zoomer.addEventListener("mousedown",e),s.elements.zoomer.addEventListener("touchstart",e),s.elements.zoomer.addEventListener("input",t),s.elements.zoomer.addEventListener("change",t),s.options.mouseWheelZoom&&(s.elements.boundary.addEventListener("mousewheel",n),s.elements.boundary.addEventListener("DOMMouseScroll",n))}function m(e){var t=this,n=e.transform,i=e.viewportRect,r=e.origin;t._currentZoom=e.value,n.scale=t._currentZoom;var a=d.call(t,i),s=a.translate,l=a.origin;n.x>=s.maxX&&(r.x=l.minX,n.x=s.maxX),n.x<=s.minX&&(r.x=l.maxX,n.x=s.minX),n.y>=s.maxY&&(r.y=l.minY,n.y=s.maxY),n.y<=s.minY&&(r.y=l.maxY,n.y=s.minY);var c={};c[F]=n.toString(),c[j]=r.toString(),o(t.elements.preview,c),T.call(t),w.call(t)}function d(e){var t=this,n=t._currentZoom,i=e.width,o=e.height,r=t.options.boundary.width/2,a=t.options.boundary.height/2,s=t._originalImageWidth,l=t._originalImageHeight,c=s*n,u=l*n,p=i/2,h=o/2,m=-1*(p/n-r),d=m-(c*(1/n)-i*(1/n)),f=-1*(h/n-a),v=f-(u*(1/n)-o*(1/n)),g=1/n*p,w=c*(1/n)-g,y=1/n*h,x=u*(1/n)-y;return{translate:{maxX:m,minX:d,maxY:f,minY:v},origin:{maxX:w,minX:g,maxY:x,minY:y}}}function f(){var e=this,t=e._currentZoom,n=e.elements.preview.getBoundingClientRect(),i=e.elements.viewport.getBoundingClientRect(),r=A.parse(e.elements.preview.style[F]),a=new D(e.elements.preview),s=i.top-n.top+i.height/2,l=i.left-n.left+i.width/2,c={},u={};c.y=s/t,c.x=l/t,u.y=(c.y-a.y)*(1-t),u.x=(c.x-a.x)*(1-t),r.x-=u.x,r.y-=u.y;var p={};p[j]=c.x+"px "+c.y+"px",p[F]=r.toString(),o(e.elements.preview,p)}function v(){function e(e){if(e.preventDefault(),!u){if(u=!0,r=e.pageX,a=e.pageY,e.touches){var i=e.touches[0];r=i.pageX,a=i.pageY}transform=A.parse(c.elements.preview),window.addEventListener("mousemove",t),window.addEventListener("touchmove",t),window.addEventListener("mouseup",n),window.addEventListener("touchend",n),document.body.style[S]="none",l=c.elements.viewport.getBoundingClientRect()}}function t(e){e.preventDefault();var t=e.pageX,n=e.pageY;if(e.touches){var u=e.touches[0];t=u.pageX,n=u.pageY}var h=t-r,m=n-a,d=c.elements.preview.getBoundingClientRect(),f=transform.y+m,v=transform.x+h,w={};if("touchmove"==e.type&&e.touches.length>1){var y=e.touches[0],x=e.touches[1],b=Math.sqrt((y.pageX-x.pageX)*(y.pageX-x.pageX)+(y.pageY-x.pageY)*(y.pageY-x.pageY));s||(s=b/c._currentZoom);var C=b/s;return p.call(c,C),void i(c.elements.zoomer)}l.top>d.top+m&&l.bottom<d.bottom+m&&(transform.y=f),l.left>d.left+h&&l.right<d.right+h&&(transform.x=v),w[F]=transform.toString(),o(c.elements.preview,w),g.call(c),a=n,r=t}function n(){u=!1,window.removeEventListener("mousemove",t),window.removeEventListener("touchmove",t),window.removeEventListener("mouseup",n),window.removeEventListener("touchend",n),document.body.style[S]="",f.call(c),w.call(c),s=0}var r,a,s,l,c=this,u=!1;c.elements.overlay.addEventListener("mousedown",e),c.elements.overlay.addEventListener("touchstart",e)}function g(){var e=this,t=e.elements.boundary.getBoundingClientRect(),n=e.elements.preview.getBoundingClientRect();o(e.elements.overlay,{width:n.width+"px",height:n.height+"px",top:n.top-t.top+"px",left:n.left-t.left+"px"})}function w(){var e=this;y.call(e)&&e.options.update.call(e,e.get())}function y(){return this.elements.preview.offsetHeight>0&&this.elements.preview.offsetWidth>0}function x(){var e,t,n,r,a,s=this,l=0,c=1.5,u=1,h={},m=s.elements.preview,d=s.elements.zoomer,f=new A(0,0,u),v=new D,w=y.call(s);w&&!s.data.bound&&(s.data.bound=!0,h[F]=f.toString(),h[j]=v.toString(),h.opacity=1,o(m,h),e=m.getBoundingClientRect(),t=s.elements.viewport.getBoundingClientRect(),n=s.elements.boundary.getBoundingClientRect(),s._originalImageWidth=e.width,s._originalImageHeight=e.height,s.options.enableZoom&&(r=t.width/e.width,a=t.height/e.height,l=Math.max(r,a),l>=c&&(c=l+1),d.min=L(l,4),d.max=L(c,4),u=Math.max(n.width/e.width,n.height/e.height),p.call(s,u),i(d)),s._currentZoom=f.scale=u,h[F]=f.toString(),o(m,h),s.data.points.length?b.call(s,s.data.points):C.call(s),g.call(s))}function b(e){if(4!=e.length)throw"Croppie - Invalid number of points supplied: "+e;var t=this,n=e[2]-e[0],i=t.elements.viewport.getBoundingClientRect(),r=t.elements.boundary.getBoundingClientRect(),a={left:i.left-r.left,top:i.top-r.top},s=i.width/n,l=e[1],c=e[0],u=-1*e[1]+a.top,h=-1*e[0]+a.left,m={};m[j]=c+"px "+l+"px",m[F]=new A(h,u,s).toString(),o(t.elements.preview,m),p.call(t,s),t._currentZoom=s}function C(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=e.elements.boundary.getBoundingClientRect(),r=n.left-i.left,a=n.top-i.top,s=r-(t.width-n.width)/2,l=a-(t.height-n.height)/2,c=new A(s,l,e._currentZoom);o(e.elements.preview,F,c.toString())}function E(){var e=this,t=e.elements.canvas,n=e.elements.img,i=t.getContext("2d");i.clearRect(0,0,t.width,t.height),t.width=n.width,t.height=n.height,l(n,function(e){c(t,i,n,parseInt(e))})}function _(e){var t=e.points,n=document.createElement("div"),i=document.createElement("img"),a=t[2]-t[0],s=t[3]-t[1];return r(n,"croppie-result"),n.appendChild(i),o(i,{left:-1*t[0]+"px",top:-1*t[1]+"px"}),i.src=e.url,o(n,{width:a+"px",height:s+"px"}),n}function R(e,t){var n=t.points,i=n[0],o=n[1],r=n[2]-n[0],a=n[3]-n[1],s=t.circle,l=document.createElement("canvas"),c=l.getContext("2d"),u=r,p=a;return t.outputWidth&&t.outputHeight&&(u=t.outputWidth,p=t.outputHeight),l.width=u,l.height=p,c.drawImage(e,i,o,r,a,0,0,u,p),s&&(c.fillStyle="#fff",c.globalCompositeOperation="destination-in",c.beginPath(),c.arc(u/2,p/2,u/2,0,2*Math.PI,!0),c.closePath(),c.fill()),l.toDataURL(t.format,t.quality)}function I(e,t){var n,i=this,o=[];if("string"==typeof e)n=e,e={};else if(Array.isArray(e))o=e.slice();else{if("undefined"==typeof e&&i.data.url)return x.call(i),w.call(i),null;n=e.url,o=e.points||[]}i.data.bound=!1,i.data.url=n||i.data.url,i.data.points=(o||i.data.points).map(function(e){return parseFloat(e)});var r=s(n,i.elements.img);return r.then(function(){i.options.useCanvas&&(i.elements.img.exifdata=null,E.call(i)),x.call(i),w.call(i),t&&t()}),r}function L(e,t){return parseFloat(e).toFixed(t||0)}function X(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=n.left-t.left,o=n.top-t.top,r=i+n.width,a=o+n.height,s=e._currentZoom;return(s===1/0||isNaN(s))&&(s=1),i=Math.max(0,i/s),o=Math.max(0,o/s),r=Math.max(0,r/s),a=Math.max(0,a/s),{points:[L(i),L(o),L(r),L(a)],zoom:s}}function Z(e){var n,i,o=this,r=X.call(o),a=t(k,t({},e)),s="string"==typeof e?e:a.type,l=a.size,c=a.format,u=a.quality;return"viewport"===l&&(n=o.elements.viewport.getBoundingClientRect(),r.outputWidth=n.width,r.outputHeight=n.height),H.indexOf(c)>-1&&(r.format="image/"+c,r.quality=u),r.circle="circle"===o.options.viewport.type,r.url=o.data.url,i=new Promise(function(e){e("canvas"===s?R.call(o,o.elements.preview,r):_.call(o,r))})}function Y(){x.call(this)}function B(){var e=this;e.element.removeChild(e.elements.boundary),a(e.element,"croppie-container"),e.options.enableZoom&&e.element.removeChild(e.elements.zoomerWrap),delete e.elements}function M(e,n){this.element=e,this.options=t(t({},M.defaults),n),u.call(this)}"function"!=typeof Promise&&!function(e){function t(e,t){return function(){e.apply(t,arguments)}}function n(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(e,t(o,this),t(r,this))}function i(e){var t=this;return null===this._state?void this._deferreds.push(e):void u(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void(t._state?e.resolve:e.reject)(t._value);var i;try{i=n(t._value)}catch(o){return void e.reject(o)}e.resolve(i)})}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void l(t(n,e),t(o,this),t(r,this))}this._state=!0,this._value=e,a.call(this)}catch(i){r.call(this,i)}}function r(e){this._state=!1,this._value=e,a.call(this)}function a(){for(var e=0,t=this._deferreds.length;t>e;e++)i.call(this,this._deferreds[e]);this._deferreds=null}function s(e,t,n,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=i}function l(e,t,n){var i=!1;try{e(function(e){i||(i=!0,t(e))},function(e){i||(i=!0,n(e))})}catch(o){if(i)return;i=!0,n(o)}}var c=setTimeout,u="function"==typeof setImmediate&&setImmediate||function(e){c(e,1)},p=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};n.prototype["catch"]=function(e){return this.then(null,e)},n.prototype.then=function(e,t){var o=this;return new n(function(n,r){i.call(o,new s(e,t,n,r))})},n.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&p(arguments[0])?arguments[0]:arguments);return new n(function(t,n){function i(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){i(r,e)},n)}e[r]=a,0===--o&&t(e)}catch(l){n(l)}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)i(r,e[r])})},n.resolve=function(e){return e&&"object"==typeof e&&e.constructor===n?e:new n(function(t){t(e)})},n.reject=function(e){return new n(function(t,n){n(e)})},n.race=function(e){return new n(function(t,n){for(var i=0,o=e.length;o>i;i++)e[i].then(t,n)})},n._setImmediateFn=function(e){u=e},"undefined"!=typeof module&&module.exports?module.exports=n:e.Promise||(e.Promise=n)}(this);var j,F,S,z=["Webkit","Moz","ms"],P=document.createElement("div").style;F=e("transform"),j=e("transformOrigin"),S=e("userSelect");var W="translate3d",O=", 0px",A=function(e,t,n){this.x=parseFloat(e),this.y=parseFloat(t),this.scale=parseFloat(n)};A.parse=function(e){return e.style?A.parse(e.style[F]):e.indexOf("matrix")>-1||e.indexOf("none")>-1?A.fromMatrix(e):A.fromString(e)},A.fromMatrix=function(e){var t=e.substring(7).split(",");return t.length&&"none"!==e||(t=[1,0,0,1,0,0]),new A(parseInt(t[4],10),parseInt(t[5],10),parseFloat(t[0]))},A.fromString=function(e){var t=e.split(") "),n=t[0].substring(W.length+1).split(","),i=t.length>1?t[1].substring(6):1,o=n.length>1?n[0]:0,r=n.length>1?n[1]:0;return new A(o,r,i)},A.prototype.toString=function(){return W+"("+this.x+"px, "+this.y+"px"+O+") scale("+this.scale+")"};var D=function(e){if(!e||!e.style[j])return this.x=0,void(this.y=0);var t=e.style[j].split(" ");this.x=parseFloat(t[0]),this.y=parseFloat(t[1])};D.prototype.toString=function(){return this.x+"px "+this.y+"px"};var T=n(g,500),k={type:"canvas",size:"viewport",format:"png",quality:1},H=["jpeg","webp","png"];if(this.jQuery){var $=this.jQuery;$.fn.croppie=function(e){var t=typeof e;if("string"===t){var n=Array.prototype.slice.call(arguments,1),i=$(this).data("croppie");return"get"===e?i.get():"result"===e?i.result.apply(i,n):this.each(function(){var t=$(this).data("croppie");if(t){var i=t[e];if(!$.isFunction(i))throw"Croppie "+e+" method not found";i.apply(t,n),"destroy"===e&&$(this).removeData("croppie")}})}return this.each(function(){var t=new M(this,e);$(this).data("croppie",t)})}}M.defaults={viewport:{width:100,height:100,type:"square"},boundary:{width:300,height:300},customClass:"",showZoomer:!0,enableZoom:!0,mouseWheelZoom:!0,exif:!1,update:function(){}},t(M.prototype,{bind:function(e,t){return I.call(this,e,t)},get:function(){return X.call(this)},result:function(e){return Z.call(this,e)},refresh:function(){return Y.call(this)},setZoom:function(e){p.call(this,e),i(this.elements.zoomer)},destroy:function(){return B.call(this)}}),exports.Croppie=window.Croppie=M,"object"==typeof module&&module.exports&&(module.exports=M)});
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
