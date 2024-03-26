"use strict";(self.webpackChunk_pixi_layout=self.webpackChunk_pixi_layout||[]).push([[776],{"./src/stories/autoSize/ByText.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ByText:()=>ByText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_Layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Layout.ts"),_utils_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/constants.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/utils/argTypes.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var args={text:"Width and height properties are not set (it is 'auto').\n\nThe 'display' property is set to 'inline' or 'inline-Block'.\n\nThe size of the layout will change based on the internal text size.",padding:20,fontSize:24,textAlign:_utils_constants__WEBPACK_IMPORTED_MODULE_1__.Ec,wordWrap:!0},LayoutStory=function(){return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}((function LayoutStory(_ref){var text=_ref.text,padding=_ref.padding,fontSize=_ref.fontSize,wordWrap=_ref.wordWrap,textAlign=_ref.textAlign;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,LayoutStory),function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(this,"view",new pixi_js__WEBPACK_IMPORTED_MODULE_0__.mcf),this.layout=new _Layout__WEBPACK_IMPORTED_MODULE_2__.P({id:"root",content:text,styles:{background:"black",color:"white",position:"center",borderRadius:20,padding,fontSize,wordWrap,textAlign,maxWidth:"100%",maxHeight:"100%"}}),this.view.addChild(this.layout)}),[{key:"resize",value:function resize(w,h){var _this$toolTip;this.layout.resize(w,h),null===(_this$toolTip=this.toolTip)||void 0===_this$toolTip||_this$toolTip.resize(w,h)}}])}(),ByText=function ByText(params){return new LayoutStory(params)};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Container } from 'pixi.js';\nimport { Layout } from '../../Layout';\nimport { ALIGN } from '../../utils/constants';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\n\nconst args = {\n    text:\n        `Width and height properties are not set (it is 'auto').\\n\\n`\n        + `The 'display' property is set to 'inline' or 'inline-Block'.\\n\\n`\n        + `The size of the layout will change based on the internal text size.`,\n    padding: 20,\n    fontSize: 24,\n    textAlign: ALIGN,\n    wordWrap: true,\n};\n\nclass LayoutStory\n{\n    private layout: Layout;\n    private toolTip: Layout;\n    view = new Container();\n\n    constructor({ text, padding, fontSize, wordWrap, textAlign }: any)\n    {\n        this.layout = new Layout({\n            id: 'root',\n            content: text,\n            styles: {\n                background: 'black',\n                color: 'white',\n                position: 'center',\n                borderRadius: 20,\n                padding,\n                fontSize,\n                wordWrap,\n                textAlign,\n                maxWidth: '100%',\n                maxHeight: '100%',\n            },\n        });\n\n        this.view.addChild(this.layout);\n    }\n\n    resize(w: number, h: number)\n    {\n        this.layout.resize(w, h);\n        this.toolTip?.resize(w, h);\n    }\n}\n\nexport const ByText = (params: any) => new LayoutStory(params);\n\nexport default {\n    title: 'AutoSize',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{"by-text":{startLoc:{col:22,line:52},endLoc:{col:62,line:52},startBody:{col:22,line:52},endBody:{col:62,line:52}}}}},title:"AutoSize",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_3__.U)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_3__.p)(args)},__namedExportsOrder=["ByText"]}}]);