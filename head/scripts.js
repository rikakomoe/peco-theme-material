import url_for from '../utils/url_for';
import js_js from '!raw-loader!./js.js';

export default ($siteData, $themeConfig) => {
  const $cdn = $themeConfig.vendors.materialcdn || 'https://cdn.jsdelivr.net/gh/viosey/hexo-theme-material/source';
  const scripts = [
    {
      innerHTML: 'console.log("Hi Peco!")',
    },
    /*{
      innerHTML: '(function(){window.lsloader={jsRunSequence:[],jsnamemap:{},cssnamemap:{}};lsloader.removeLS=function(a){try{localStorage.removeItem(a)}catch(b){}};lsloader.setLS=function(a,c){try{localStorage.setItem(a,c)}catch(b){}};lsloader.getLS=function(a){var c="";try{c=localStorage.getItem(a)}catch(b){c=""}return c};versionString="/!*"+(window.materialVersion||"unknownVersion")+"*!/";lsloader.clean=function(){try{var b=[];for(var a=0;a<localStorage.length;a++){b.push(localStorage.key(a))}b.forEach(function(e){var f=lsloader.getLS(e);if(window.oldVersion){var d=window.oldVersion.reduce(function(g,h){return g||f.indexOf("/!*"+h+"*!/")!==-1},false);if(d){lsloader.removeLS(e)}}})}catch(c){}};lsloader.clean();lsloader.load=function(f,a,b,d){if(typeof b==="boolean"){d=b;b=undefined}d=d||false;b=b||function(){};var e;e=this.getLS(f);if(e&&e.indexOf(versionString)===-1){this.removeLS(f);this.requestResource(f,a,b,d);return}if(e){var c=e.split(versionString)[0];if(c!=a){console.log("reload:"+a);this.removeLS(f);this.requestResource(f,a,b,d);return}e=e.split(versionString)[1];if(d){this.jsRunSequence.push({name:f,code:e});this.runjs(a,f,e)}else{document.getElementById(f).appendChild(document.createTextNode(e));b()}}else{this.requestResource(f,a,b,d)}};lsloader.requestResource=function(b,e,a,c){var d=this;if(c){this.iojs(e,b,function(h,f,g){d.setLS(f,h+versionString+g);d.runjs(h,f,g)})}else{this.iocss(e,b,function(f){document.getElementById(b).appendChild(document.createTextNode(f));d.setLS(b,e+versionString+f)},a)}};lsloader.iojs=function(d,b,g){var a=this;a.jsRunSequence.push({name:b,code:""});try{var f=new XMLHttpRequest();f.open("get",d,true);f.onreadystatechange=function(){if(f.readyState==4){if((f.status>=200&&f.status<300)||f.status==304){if(f.response!=""){g(d,b,f.response);return}}a.jsfallback(d,b)}};f.send(null)}catch(c){a.jsfallback(d,b)}};lsloader.iocss=function(f,c,h,a){var b=this;try{var g=new XMLHttpRequest();g.open("get",f,true);g.onreadystatechange=function(){if(g.readyState==4){if((g.status>=200&&g.status<300)||g.status==304){if(g.response!=""){h(g.response);a();return}}b.cssfallback(f,c,a)}};g.send(null)}catch(d){b.cssfallback(f,c,a)}};lsloader.iofonts=function(f,c,h,a){var b=this;try{var g=new XMLHttpRequest();g.open("get",f,true);g.onreadystatechange=function(){if(g.readyState==4){if((g.status>=200&&g.status<300)||g.status==304){if(g.response!=""){h(g.response);a();return}}b.cssfallback(f,c,a)}};g.send(null)}catch(d){b.cssfallback(f,c,a)}};lsloader.runjs=function(f,c,e){if(!!c&&!!e){for(var b in this.jsRunSequence){if(this.jsRunSequence[b].name==c){this.jsRunSequence[b].code=e}}}if(!!this.jsRunSequence[0]&&!!this.jsRunSequence[0].code&&this.jsRunSequence[0].status!="failed"){var a=document.createElement("script");a.appendChild(document.createTextNode(this.jsRunSequence[0].code));a.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(a);this.jsRunSequence.shift();if(this.jsRunSequence.length>0){this.runjs()}}else{if(!!this.jsRunSequence[0]&&this.jsRunSequence[0].status=="failed"){var d=this;var a=document.createElement("script");a.src=this.jsRunSequence[0].path;a.type="text/javascript";this.jsRunSequence[0].status="loading";a.onload=function(){d.jsRunSequence.shift();if(d.jsRunSequence.length>0){d.runjs()}};document.body.appendChild(a)}}};lsloader.tagLoad=function(b,a){this.jsRunSequence.push({name:a,code:"",path:b,status:"failed"});this.runjs()};lsloader.jsfallback=function(c,b){if(!!this.jsnamemap[b]){return}else{this.jsnamemap[b]=b}for(var a in this.jsRunSequence){if(this.jsRunSequence[a].name==b){this.jsRunSequence[a].code="";this.jsRunSequence[a].status="failed";this.jsRunSequence[a].path=c}}this.runjs()};lsloader.cssfallback=function(e,c,b){if(!!this.cssnamemap[c]){return}else{this.cssnamemap[c]=1}var d=document.createElement("link");d.type="text/css";d.href=e;d.rel="stylesheet";d.onload=d.onerror=b;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(d,a)};lsloader.runInlineScript=function(c,b){var a=document.getElementById(b).innerText;this.jsRunSequence.push({name:c,code:a});this.runjs()}})();'
    },*/
    {
      innerHTML: 'function Queue(){this.dataStore=[];this.offer=b;this.poll=d;this.execNext=a;this.debug=false;this.startDebug=c;function b(e){if(this.debug){console.log("Offered a Queued Function.")}if(typeof e==="function"){this.dataStore.push(e)}else{console.log("You must offer a function.")}}function d(){if(this.debug){console.log("Polled a Queued Function.")}return this.dataStore.shift()}function a(){var e=this.poll();if(e!==undefined){if(this.debug){console.log("Run a Queued Function.")}e()}}function c(){this.debug=true}}var queue=new Queue();',
    },
   {
      key: 'jq_js',
      src: `${$cdn}/js/jquery.min.js`,
    },
    {
      key: 'lazyload_js',
      src: `${$cdn}/js/lazyload.min.js`,
      body: true,
    },
    {
      key: new Date().toString(),
      innerHTML: js_js,
      body: true,
    },
    {
      key: 'sm_js',
      src: `${$cdn}/js/smoothscroll.js`,
      body: true,
    }
  ];

  return scripts;
}