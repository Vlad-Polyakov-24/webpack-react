(self.webpackChunkbundler=self.webpackChunkbundler||[]).push([[997],{"./src/features/Nav/ui/Nav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InFooterDark:()=>InFooterDark,InFooterDefault:()=>InFooterDefault,InHeaderDark:()=>InHeaderDark,InHeaderDefault:()=>InHeaderDefault,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Nav__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/features/Nav/ui/Nav.tsx"),shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/providers/ThemeProvider/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"features/Nav",component:_Nav__WEBPACK_IMPORTED_MODULE_0__.A,tags:["autodocs"]};var InHeaderDefault={args:{place:"header"}},InHeaderDark={args:{place:"header"},decorators:[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.A)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Sx.DARK)]},InFooterDefault={args:{place:"footer"}},InFooterDark={args:{place:"footer"},decorators:[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_1__.A)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.Sx.DARK)]};InHeaderDefault.parameters={...InHeaderDefault.parameters,docs:{...InHeaderDefault.parameters?.docs,source:{originalSource:"{\n  args: {\n    place: 'header'\n  }\n}",...InHeaderDefault.parameters?.docs?.source}}},InHeaderDark.parameters={...InHeaderDark.parameters,docs:{...InHeaderDark.parameters?.docs,source:{originalSource:"{\n  args: {\n    place: 'header'\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",...InHeaderDark.parameters?.docs?.source}}},InFooterDefault.parameters={...InFooterDefault.parameters,docs:{...InFooterDefault.parameters?.docs,source:{originalSource:"{\n  args: {\n    place: 'footer'\n  }\n}",...InFooterDefault.parameters?.docs?.source}}},InFooterDark.parameters={...InFooterDark.parameters,docs:{...InFooterDark.parameters?.docs,source:{originalSource:"{\n  args: {\n    place: 'footer'\n  },\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",...InFooterDark.parameters?.docs?.source}}};const __namedExportsOrder=["InHeaderDefault","InHeaderDark","InFooterDefault","InFooterDark"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/Nav/ui/Nav.module.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".uiNav-module__nav--Y0hxh{flex-shrink:0}.uiNav-module__nav--footer--nSkCL .uiNav-module__nav__list--YQB39{gap:20px}.uiNav-module__nav__list--YQB39{display:flex;gap:10px;height:100%}","",{version:3,sources:["webpack://./src/features/Nav/ui/Nav.module.scss"],names:[],mappings:"AAAA,0BACE,aAAA,CAGE,kEACE,QAAA,CAIJ,gCACE,YAAA,CACA,QAAA,CACA,WAAA",sourcesContent:[".nav {\n  flex-shrink: 0;\n\n  &--footer {\n    .nav__list {\n      gap: 20px;\n    }\n  }\n\n  &__list {\n    display: flex;\n    gap: 10px;\n    height: 100%;\n  }\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={nav:"uiNav-module__nav--Y0hxh","nav--footer":"uiNav-module__nav--footer--nSkCL",navFooter:"uiNav-module__nav--footer--nSkCL",nav__list:"uiNav-module__nav__list--YQB39"},module.exports=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppNavLink/AppNavLink.module.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".AppNavLinkAppNavLink-module__navLink--A4aFS{display:flex;align-items:center;height:100%;text-underline-offset:3px}.AppNavLinkAppNavLink-module__navLink--A4aFS.AppNavLinkAppNavLink-module__active--eYi3E{text-decoration:underline;text-decoration-thickness:3px;pointer-events:none}.AppNavLinkAppNavLink-module__navLink--A4aFS.AppNavLinkAppNavLink-module__primary--VPZ4k{color:var(--primary-color)}.AppNavLinkAppNavLink-module__navLink--A4aFS.AppNavLinkAppNavLink-module__secondary--hGNV2{color:var(--inverted-secondary-color)}@media(hover: hover){.AppNavLinkAppNavLink-module__navLink--A4aFS:hover{text-decoration:underline}}","",{version:3,sources:["webpack://./src/shared/ui/AppNavLink/AppNavLink.module.scss"],names:[],mappings:"AAAA,6CACE,YAAA,CACA,kBAAA,CACA,WAAA,CACA,yBAAA,CAEA,wFACE,yBAAA,CACA,6BAAA,CACA,mBAAA,CAGF,yFACE,0BAAA,CAGF,2FACE,qCAAA,CAGF,qBACE,mDACE,yBAAA,CAAA",sourcesContent:[".navLink {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  text-underline-offset: 3px;\n\n  &.active {\n    text-decoration: underline;\n    text-decoration-thickness: 3px;\n    pointer-events: none;\n  }\n\n  &.primary {\n    color: var(--primary-color);\n  }\n\n  &.secondary {\n    color: var(--inverted-secondary-color);\n  }\n\n  @media (hover: hover) {\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n}\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={navLink:"AppNavLinkAppNavLink-module__navLink--A4aFS",active:"AppNavLinkAppNavLink-module__active--eYi3E",primary:"AppNavLinkAppNavLink-module__primary--VPZ4k",secondary:"AppNavLinkAppNavLink-module__secondary--hGNV2"},module.exports=___CSS_LOADER_EXPORT___},"./src/features/Nav/ui/Nav.module.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/Nav/ui/Nav.module.scss");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/shared/ui/AppNavLink/AppNavLink.module.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var API=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),domAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),insertFn=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),setAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),styleTagTransformFn=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppNavLink/AppNavLink.module.scss");content=content.__esModule?content.default:content;var options={};options.styleTagTransform=styleTagTransformFn,options.setAttributes=setAttributes,options.insert=insertFn.bind(null,"head"),options.domAPI=domAPI,options.insertStyleElement=insertStyleElement;API(content,options);module.exports=content&&content.locals||{}},"./src/features/Nav/ui/Nav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/features/Nav/ui/Nav.module.scss"),_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1__),shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),shared_ui_AppNavLink_AppNavLink__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/ui/AppNavLink/AppNavLink.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Nav=function(param){var _obj,className=param.className,place=param.place;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav",{className:(0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.x)(_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default().nav,(_obj={},_define_property(_obj,_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default().navHeader,"header"===place),_define_property(_obj,_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default().navFooter,"footer"===place),_obj),[className]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:_Nav_module_scss__WEBPACK_IMPORTED_MODULE_1___default().nav__list,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_AppNavLink_AppNavLink__WEBPACK_IMPORTED_MODULE_2__.A,{to:"/",theme:shared_ui_AppNavLink_AppNavLink__WEBPACK_IMPORTED_MODULE_2__.G.SECONDARY,children:"Main"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_AppNavLink_AppNavLink__WEBPACK_IMPORTED_MODULE_2__.A,{to:"/about",theme:shared_ui_AppNavLink_AppNavLink__WEBPACK_IMPORTED_MODULE_2__.G.SECONDARY,children:"About"})})]})})};const __WEBPACK_DEFAULT_EXPORT__=Nav;Nav.__docgenInfo={description:"",methods:[],displayName:"Nav",props:{className:{required:!1,tsType:{name:"string"},description:""},place:{required:!1,tsType:{name:"union",raw:"'header' | 'footer'",elements:[{name:"literal",value:"'header'"},{name:"literal",value:"'footer'"}]},description:""}}}},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupported_iterable_to_array(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupported_iterable_to_array(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_array_like_to_array(o,minLen):void 0}}__webpack_require__.d(__webpack_exports__,{x:()=>classNames});var classNames=function(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[cls].concat(_to_consumable_array((arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]).filter(Boolean)),_to_consumable_array(Object.entries(mods).filter((function(param){var _param=_sliced_to_array(param,2),value=(_param[0],_param[1]);return Boolean(value)})).map((function(param){return _sliced_to_array(param,1)[0]})))).join(" ")}},"./src/shared/ui/AppNavLink/AppNavLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,G:()=>AppNavLinkTheme});var AppNavLinkTheme,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_AppNavLink_module_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/ui/AppNavLink/AppNavLink.module.scss"),_AppNavLink_module_scss__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_AppNavLink_module_scss__WEBPACK_IMPORTED_MODULE_1__),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/lib/classNames/classNames.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}!function(AppNavLinkTheme){AppNavLinkTheme.PRIMARY="primary",AppNavLinkTheme.SECONDARY="secondary"}(AppNavLinkTheme||(AppNavLinkTheme={}));var AppNavLink=function(props){var to=props.to,className=props.className,children=props.children,_props_theme=props.theme,theme=void 0===_props_theme?"primary":_props_theme,otherProps=_object_without_properties(props,["to","className","children","theme"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.k2,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({to,className:function(param){var isActive=param.isActive;return(0,shared_lib_classNames_classNames__WEBPACK_IMPORTED_MODULE_3__.x)(_AppNavLink_module_scss__WEBPACK_IMPORTED_MODULE_1___default().navLink,{},[className,isActive?_AppNavLink_module_scss__WEBPACK_IMPORTED_MODULE_1___default().active:"",_AppNavLink_module_scss__WEBPACK_IMPORTED_MODULE_1___default()[theme]])}},otherProps),{children}))};const __WEBPACK_DEFAULT_EXPORT__=AppNavLink;AppNavLink.__docgenInfo={description:"",methods:[],displayName:"AppNavLink",props:{className:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"AppNavLinkTheme"},description:""}}}}}]);