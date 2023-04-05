/*! For license information please see fit-ContainAndPosition-stories.78b69fc9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_pixi_layout=self.webpackChunk_pixi_layout||[]).push([[237],{"./src/stories/fit/ContainAndPosition.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContainAndPosition:()=>ContainAndPosition,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Layout.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/utils/argTypes.ts"),_pixi_display__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_utils_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/utils/helpers.ts"),_pixi_sprite__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var assets={bg:"bg.png",a1:"avatar-01.png",a2:"avatar-02.png",a3:"avatar-03.png",a4:"avatar-04.png",a5:"avatar-05.png"},args={width:80,height:80},LayoutStory=function(){function LayoutStory(props){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,LayoutStory),function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(this,"view",new _pixi_display__WEBPACK_IMPORTED_MODULE_0__.W2),(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.z)(Object.values(assets)).then((function(){return _this.createLayout(props)}))}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(LayoutStory,[{key:"createLayout",value:function createLayout(_ref){var width=_ref.width,height=_ref.height;this.layout=new _Layout__WEBPACK_IMPORTED_MODULE_3__.A({id:"root",styles:{width:"".concat(width,"%"),height:"".concat(height,"%"),background:"red",position:"center",overflow:"hidden"}}),this.layout.addContent({back:{content:{bg:{content:_pixi_sprite__WEBPACK_IMPORTED_MODULE_1__.j.from(assets.bg),styles:{position:"center",maxWidth:"100%",minHeight:"100%"}},gameContent:{content:{topLeft:{content:_pixi_sprite__WEBPACK_IMPORTED_MODULE_1__.j.from(assets.a1),styles:{position:"topLeft",maxWidth:80}},topRight:{content:_pixi_sprite__WEBPACK_IMPORTED_MODULE_1__.j.from(assets.a2),styles:{position:"topRight",maxWidth:80}},bottomLeft:{content:_pixi_sprite__WEBPACK_IMPORTED_MODULE_1__.j.from(assets.a3),styles:{position:"bottomLeft",maxWidth:80}},bottomRight:{content:_pixi_sprite__WEBPACK_IMPORTED_MODULE_1__.j.from(assets.a4),styles:{position:"bottomRight",maxWidth:80}},center:{content:_pixi_sprite__WEBPACK_IMPORTED_MODULE_1__.j.from(assets.a5),styles:{position:"center",maxWidth:80}},centerTop:{content:_pixi_sprite__WEBPACK_IMPORTED_MODULE_1__.j.from(assets.a5),styles:{position:"centerTop",maxWidth:80}},centerRight:{content:_pixi_sprite__WEBPACK_IMPORTED_MODULE_1__.j.from(assets.a1),styles:{position:"centerRight",maxWidth:80}},centerLeft:{content:_pixi_sprite__WEBPACK_IMPORTED_MODULE_1__.j.from(assets.a2),styles:{position:"centerLeft",maxWidth:80}},centerBottom:{content:_pixi_sprite__WEBPACK_IMPORTED_MODULE_1__.j.from(assets.a1),styles:{position:"centerBottom",maxWidth:80}}},styles:{position:"center",width:300,height:"100%",maxWidth:"100%",minWidth:240,minHeight:240,aspectRatio:"flex"}}},styles:{position:"center",height:"100%",width:"100%"}}}),this.resize(this.w,this.h),this.view.addChild(this.layout)}},{key:"resize",value:function resize(w,h){var _this$layout,_this$toolTip;this.w=w,this.h=h,null===(_this$layout=this.layout)||void 0===_this$layout||_this$layout.resize(w,h),null===(_this$toolTip=this.toolTip)||void 0===_this$toolTip||_this$toolTip.resize(w,h)}}]),LayoutStory}(),ContainAndPosition=function ContainAndPosition(params){return new LayoutStory(params)};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Layout } from '../../Layout';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { Container } from '@pixi/display';\nimport { preloadAssets } from '../utils/helpers';\nimport { Sprite } from '@pixi/sprite';\n\nconst assets = {\n    bg: 'bg.png',\n    a1: 'avatar-01.png',\n    a2: 'avatar-02.png',\n    a3: 'avatar-03.png',\n    a4: 'avatar-04.png',\n    a5: 'avatar-05.png'\n};\n\nconst args = {\n    width: 80,\n    height: 80\n};\n\nclass LayoutStory\n{\n    private layout: Layout;\n    private toolTip: Layout;\n    view = new Container();\n    w: number;\n    h: number;\n\n    constructor(props)\n    {\n        preloadAssets(Object.values(assets)).then(() => this.createLayout(props));\n    }\n\n    createLayout({ width, height }: any)\n    {\n        this.layout = new Layout({\n            id: 'root',\n            styles: {\n                width: `${width}%`,\n                height: `${height}%`,\n                background: 'red',\n                position: 'center',\n                overflow: 'hidden'\n            }\n        });\n\n        this.layout.addContent({\n            back: {\n                content: {\n                    bg: {\n                        content: Sprite.from(assets.bg),\n                        styles: {\n                            // no width and height set, so it will be controlled by the content\n                            position: 'center',\n                            maxWidth: '100%',\n                            minHeight: '100%'\n                        }\n                    },\n                    gameContent: {\n                        content: {\n                            topLeft: {\n                                content: Sprite.from(assets.a1),\n                                styles: {\n                                    position: 'topLeft',\n                                    maxWidth: 80,\n                                }\n                            },\n                            topRight: {\n                                content: Sprite.from(assets.a2),\n                                styles: {\n                                    position: 'topRight',\n                                    maxWidth: 80,\n                                }\n                            },\n                            bottomLeft: {\n                                content: Sprite.from(assets.a3),\n                                styles: {\n                                    position: 'bottomLeft',\n                                    maxWidth: 80,\n                                }\n                            },\n                            bottomRight: {\n                                content: Sprite.from(assets.a4),\n                                styles: {\n                                    position: 'bottomRight',\n                                    maxWidth: 80,\n                                }\n                            },\n                            center: {\n                                content: Sprite.from(assets.a5),\n                                styles: {\n                                    position: 'center',\n                                    maxWidth: 80,\n                                }\n                            },\n                            centerTop: {\n                                content: Sprite.from(assets.a5),\n                                styles: {\n                                    position: 'centerTop',\n                                    maxWidth: 80,\n                                }\n                            },\n                            centerRight: {\n                                content: Sprite.from(assets.a1),\n                                styles: {\n                                    position: 'centerRight',\n                                    maxWidth: 80,\n                                }\n                            },\n                            centerLeft: {\n                                content: Sprite.from(assets.a2),\n                                styles: {\n                                    position: 'centerLeft',\n                                    maxWidth: 80,\n                                }\n                            },\n                            centerBottom: {\n                                content: Sprite.from(assets.a1),\n                                styles: {\n                                    position: 'centerBottom',\n                                    maxWidth: 80,\n                                }\n                            }\n                        },\n                        styles: {\n                            position: 'center',\n                            width: 300,\n                            height: '100%',\n\n                            maxWidth: '100%',\n\n                            minWidth: 240,\n                            minHeight: 240,\n\n                            aspectRatio: 'flex',\n                        }\n                    }\n                },\n                styles: {\n                    // no width and height set, so it will be controlled by the content\n                    position: 'center',\n                    height: '100%',\n                    width: '100%'\n                }\n            }\n        });\n        this.resize(this.w, this.h);\n\n        this.view.addChild(this.layout);\n    }\n\n    resize(w: number, h: number)\n    {\n        this.w = w;\n        this.h = h;\n\n        this.layout?.resize(w, h);\n        this.toolTip?.resize(w, h);\n    }\n}\n\nexport const ContainAndPosition = (params: any) => new LayoutStory(params);\n\nexport default {\n    title: 'Fit',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args)\n};\n",locationsMap:{"contain-and-position":{startLoc:{col:34,line:162},endLoc:{col:74,line:162},startBody:{col:34,line:162},endBody:{col:74,line:162}}}}},title:"Fit",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_4__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_4__.V)(args)};var __namedExportsOrder=["ContainAndPosition"]},"./src/stories/utils/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{P:()=>argTypes,V:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},count:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0;key.includes("font")&&(min=1),args[key]>=0?args[key]>=100?exportArgTypes[key]={control:{type:"range",min,max:1e3,step:10}}:args[key]>10?exportArgTypes[key]={control:{type:"range",min,max:100,step:1}}:args[key]<=1?exportArgTypes[key]={control:{type:"range",min,max:1,step:.1}}:exportArgTypes[key]={control:{type:"range",min,max:10,step:1}}:args[key]<=-100?exportArgTypes[key]={control:{type:"range",min:-1e3,max:1e3,step:10}}:args[key]<-10?exportArgTypes[key]={control:{type:"range",min:-100,max:100,step:10}}:args[key]>=-1?exportArgTypes[key]={control:{type:"range",min:-1,max:0,step:.1}}:exportArgTypes[key]={control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]={},exportArgTypes[key]=_objectSpread({},controls.select),Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}},"./src/stories/utils/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>preloadAssets});var _pixi_assets__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/assets/lib/index.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function preloadAssets(_x){return _preloadAssets.apply(this,arguments)}function _preloadAssets(){return _preloadAssets=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(assets){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_pixi_assets__WEBPACK_IMPORTED_MODULE_0__.de.load(assets);case 2:case"end":return _context.stop()}}),_callee)}))),_preloadAssets.apply(this,arguments)}}}]);