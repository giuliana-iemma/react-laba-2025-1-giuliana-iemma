(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  typeof document === 'object' ? document.currentScript : undefined,
  {
    '[project]/src/components/AddAvatarButton.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        const AddAvatarButton = ({ onClick }) => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'button',
            {
              className: 'button-add',
              onClick: onClick,
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'img',
                {
                  className: 'button-add__icon',
                  src: '/icons/add.svg',
                  alt: 'Add',
                },
                void 0,
                false,
                {
                  fileName: '[project]/src/components/AddAvatarButton.tsx',
                  lineNumber: 10,
                  columnNumber: 7,
                },
                this
              ),
            },
            void 0,
            false,
            {
              fileName: '[project]/src/components/AddAvatarButton.tsx',
              lineNumber: 9,
              columnNumber: 5,
            },
            this
          );
        };
        _c = AddAvatarButton;
        const __TURBOPACK__default__export__ = AddAvatarButton;
        var _c;
        __turbopack_context__.k.register(_c, 'AddAvatarButton');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/src/components/AvatarCard.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        const AvatarCard = ({ avatarUrl, onRefresh }) => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'article',
            {
              className: 'card',
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'img',
                  {
                    className: 'card__image',
                    src: avatarUrl,
                    alt: 'Avatar',
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/src/components/AvatarCard.tsx',
                    lineNumber: 9,
                    columnNumber: 7,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'button',
                  {
                    className: 'card__button',
                    onClick: onRefresh,
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'img',
                      {
                        className: 'card__button-icon',
                        src: '/icons/refresh.svg',
                        alt: 'Refresh',
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/src/components/AvatarCard.tsx',
                        lineNumber: 12,
                        columnNumber: 9,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/src/components/AvatarCard.tsx',
                    lineNumber: 11,
                    columnNumber: 7,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: '[project]/src/components/AvatarCard.tsx',
              lineNumber: 8,
              columnNumber: 5,
            },
            this
          );
        };
        _c = AvatarCard;
        const __TURBOPACK__default__export__ = AvatarCard;
        var _c;
        __turbopack_context__.k.register(_c, 'AvatarCard');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/src/components/RefreshAllButton.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        const RefreshAllButton = ({ onClick }) => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'button',
            {
              className: 'button-refresh',
              onClick: onClick,
              children: 'Refresh All',
            },
            void 0,
            false,
            {
              fileName: '[project]/src/components/RefreshAllButton.tsx',
              lineNumber: 9,
              columnNumber: 5,
            },
            this
          );
        };
        _c = RefreshAllButton;
        const __TURBOPACK__default__export__ = RefreshAllButton;
        var _c;
        __turbopack_context__.k.register(_c, 'RefreshAllButton');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/src/components/AvatarGrid.tsx [app-client] (ecmascript)': (
      __turbopack_context__
    ) => {
      'use strict';

      var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddAvatarButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/AddAvatarButton.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AvatarCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/AvatarCard.tsx [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RefreshAllButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            '[project]/src/components/RefreshAllButton.tsx [app-client] (ecmascript)'
          );
        var _s = __turbopack_context__.k.signature();
        ('use client');
        const AvatarGrid = ({ initialTiles = [] }) => {
          _s();
          const [tiles, setTiles] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])(initialTiles);
          async function getRandomAvatarUrl() {
            const res = await fetch('https://tinyfac.es/api/data?limit=50&quality=0');
            console.log(res);
            const data = await res.json();
            const random = Math.floor(Math.random() * data.length);
            return data[random].url;
          }
          //Adding a new object
          async function handleAddTile() {
            const avatar = await getRandomAvatarUrl();
            setTiles((prev) => [
              ...prev,
              {
                id: Date.now(),
                url: avatar,
              },
            ]);
            // console.log(tiles);
          }
          //Refreshing a targetted avatar
          async function handleRefreshCard(id) {
            const avatar = await getRandomAvatarUrl();
            setTiles((prev) =>
              prev.map((tile) =>
                tile.id === id
                  ? {
                      ...tile,
                      url: avatar,
                    }
                  : tile
              )
            );
            // console.log(tiles)
          }
          ///Refresh all
          async function handleRefreshAll() {
            const avatars = await Promise.all(tiles.map(() => getRandomAvatarUrl())); //Wait for all the tiles to load to create the array of random avatar urls
            setTiles((prev) =>
              prev.map((tile, index) => ({
                ...tile,
                url: avatars[index],
              }))
            );
          }
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              'Fragment'
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  'div',
                  {
                    className: 'card__container',
                    children: [
                      tiles &&
                        tiles.map((tile) =>
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                            'jsxDEV'
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AvatarCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'default'
                            ],
                            {
                              avatarUrl: tile.url,
                              onRefresh: () => handleRefreshCard(tile.id),
                            },
                            tile.id,
                            false,
                            {
                              fileName: '[project]/src/components/AvatarGrid.tsx',
                              lineNumber: 66,
                              columnNumber: 13,
                            },
                            this
                          )
                        ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddAvatarButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                          'default'
                        ],
                        {
                          onClick: () => handleAddTile(),
                        },
                        void 0,
                        false,
                        {
                          fileName: '[project]/src/components/AvatarGrid.tsx',
                          lineNumber: 73,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: '[project]/src/components/AvatarGrid.tsx',
                    lineNumber: 63,
                    columnNumber: 7,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                  'jsxDEV'
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RefreshAllButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    'default'
                  ],
                  {
                    onClick: () => handleRefreshAll(),
                  },
                  void 0,
                  false,
                  {
                    fileName: '[project]/src/components/AvatarGrid.tsx',
                    lineNumber: 76,
                    columnNumber: 7,
                  },
                  this
                ),
              ],
            },
            void 0,
            true
          );
        };
        _s(AvatarGrid, 'UMS4JEJQMQn44pg43rIXUmDnL2U=');
        _c = AvatarGrid;
        const __TURBOPACK__default__export__ = AvatarGrid;
        var _c;
        __turbopack_context__.k.register(_c, 'AvatarGrid');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
        }
      }
    },
    '[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
        {
          /**
           * @license React
           * react-jsx-dev-runtime.development.js
           *
           * Copyright (c) Meta Platforms, Inc. and affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)'
            );
          ('use strict');
          'production' !== ('TURBOPACK compile-time value', 'development') &&
            (function () {
              function getComponentNameFromType(type) {
                if (null == type) return null;
                if ('function' === typeof type)
                  return type.$$typeof === REACT_CLIENT_REFERENCE
                    ? null
                    : type.displayName || type.name || null;
                if ('string' === typeof type) return type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                    return 'Fragment';
                  case REACT_PROFILER_TYPE:
                    return 'Profiler';
                  case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                  case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                  case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
                  case REACT_ACTIVITY_TYPE:
                    return 'Activity';
                }
                if ('object' === typeof type)
                  switch (
                    ('number' === typeof type.tag &&
                      console.error(
                        'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                      ),
                    type.$$typeof)
                  ) {
                    case REACT_PORTAL_TYPE:
                      return 'Portal';
                    case REACT_CONTEXT_TYPE:
                      return (type.displayName || 'Context') + '.Provider';
                    case REACT_CONSUMER_TYPE:
                      return (type._context.displayName || 'Context') + '.Consumer';
                    case REACT_FORWARD_REF_TYPE:
                      var innerType = type.render;
                      type = type.displayName;
                      type ||
                        ((type = innerType.displayName || innerType.name || ''),
                        (type = '' !== type ? 'ForwardRef(' + type + ')' : 'ForwardRef'));
                      return type;
                    case REACT_MEMO_TYPE:
                      return (
                        (innerType = type.displayName || null),
                        null !== innerType
                          ? innerType
                          : getComponentNameFromType(type.type) || 'Memo'
                      );
                    case REACT_LAZY_TYPE:
                      innerType = type._payload;
                      type = type._init;
                      try {
                        return getComponentNameFromType(type(innerType));
                      } catch (x) {}
                  }
                return null;
              }
              function testStringCoercion(value) {
                return '' + value;
              }
              function checkKeyStringCoercion(value) {
                try {
                  testStringCoercion(value);
                  var JSCompiler_inline_result = !1;
                } catch (e) {
                  JSCompiler_inline_result = !0;
                }
                if (JSCompiler_inline_result) {
                  JSCompiler_inline_result = console;
                  var JSCompiler_temp_const = JSCompiler_inline_result.error;
                  var JSCompiler_inline_result$jscomp$0 =
                    ('function' === typeof Symbol &&
                      Symbol.toStringTag &&
                      value[Symbol.toStringTag]) ||
                    value.constructor.name ||
                    'Object';
                  JSCompiler_temp_const.call(
                    JSCompiler_inline_result,
                    'The provided key is an unsupported type %s. This value must be coerced to a string before using it here.',
                    JSCompiler_inline_result$jscomp$0
                  );
                  return testStringCoercion(value);
                }
              }
              function getTaskName(type) {
                if (type === REACT_FRAGMENT_TYPE) return '<>';
                if ('object' === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
                  return '<...>';
                try {
                  var name = getComponentNameFromType(type);
                  return name ? '<' + name + '>' : '<...>';
                } catch (x) {
                  return '<...>';
                }
              }
              function getOwner() {
                var dispatcher = ReactSharedInternals.A;
                return null === dispatcher ? null : dispatcher.getOwner();
              }
              function UnknownOwner() {
                return Error('react-stack-top-frame');
              }
              function hasValidKey(config) {
                if (hasOwnProperty.call(config, 'key')) {
                  var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
                  if (getter && getter.isReactWarning) return !1;
                }
                return void 0 !== config.key;
              }
              function defineKeyPropWarningGetter(props, displayName) {
                function warnAboutAccessingKey() {
                  specialPropKeyWarningShown ||
                    ((specialPropKeyWarningShown = !0),
                    console.error(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)',
                      displayName
                    ));
                }
                warnAboutAccessingKey.isReactWarning = !0;
                Object.defineProperty(props, 'key', {
                  get: warnAboutAccessingKey,
                  configurable: !0,
                });
              }
              function elementRefGetterWithDeprecationWarning() {
                var componentName = getComponentNameFromType(this.type);
                didWarnAboutElementRef[componentName] ||
                  ((didWarnAboutElementRef[componentName] = !0),
                  console.error(
                    'Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.'
                  ));
                componentName = this.props.ref;
                return void 0 !== componentName ? componentName : null;
              }
              function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
                self = props.ref;
                type = {
                  $$typeof: REACT_ELEMENT_TYPE,
                  type: type,
                  key: key,
                  props: props,
                  _owner: owner,
                };
                null !== (void 0 !== self ? self : null)
                  ? Object.defineProperty(type, 'ref', {
                      enumerable: !1,
                      get: elementRefGetterWithDeprecationWarning,
                    })
                  : Object.defineProperty(type, 'ref', {
                      enumerable: !1,
                      value: null,
                    });
                type._store = {};
                Object.defineProperty(type._store, 'validated', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: 0,
                });
                Object.defineProperty(type, '_debugInfo', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: null,
                });
                Object.defineProperty(type, '_debugStack', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: debugStack,
                });
                Object.defineProperty(type, '_debugTask', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: debugTask,
                });
                Object.freeze && (Object.freeze(type.props), Object.freeze(type));
                return type;
              }
              function jsxDEVImpl(
                type,
                config,
                maybeKey,
                isStaticChildren,
                source,
                self,
                debugStack,
                debugTask
              ) {
                var children = config.children;
                if (void 0 !== children)
                  if (isStaticChildren)
                    if (isArrayImpl(children)) {
                      for (
                        isStaticChildren = 0;
                        isStaticChildren < children.length;
                        isStaticChildren++
                      )
                        validateChildKeys(children[isStaticChildren]);
                      Object.freeze && Object.freeze(children);
                    } else
                      console.error(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                      );
                  else validateChildKeys(children);
                if (hasOwnProperty.call(config, 'key')) {
                  children = getComponentNameFromType(type);
                  var keys = Object.keys(config).filter(function (k) {
                    return 'key' !== k;
                  });
                  isStaticChildren =
                    0 < keys.length
                      ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}'
                      : '{key: someKey}';
                  didWarnAboutKeySpread[children + isStaticChildren] ||
                    ((keys = 0 < keys.length ? '{' + keys.join(': ..., ') + ': ...}' : '{}'),
                    console.error(
                      'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
                      isStaticChildren,
                      children,
                      keys,
                      children
                    ),
                    (didWarnAboutKeySpread[children + isStaticChildren] = !0));
                }
                children = null;
                void 0 !== maybeKey &&
                  (checkKeyStringCoercion(maybeKey), (children = '' + maybeKey));
                hasValidKey(config) &&
                  (checkKeyStringCoercion(config.key), (children = '' + config.key));
                if ('key' in config) {
                  maybeKey = {};
                  for (var propName in config)
                    'key' !== propName && (maybeKey[propName] = config[propName]);
                } else maybeKey = config;
                children &&
                  defineKeyPropWarningGetter(
                    maybeKey,
                    'function' === typeof type ? type.displayName || type.name || 'Unknown' : type
                  );
                return ReactElement(
                  type,
                  children,
                  self,
                  source,
                  getOwner(),
                  maybeKey,
                  debugStack,
                  debugTask
                );
              }
              function validateChildKeys(node) {
                'object' === typeof node &&
                  null !== node &&
                  node.$$typeof === REACT_ELEMENT_TYPE &&
                  node._store &&
                  (node._store.validated = 1);
              }
              var React = __turbopack_context__.r(
                  '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
                ),
                REACT_ELEMENT_TYPE = Symbol.for('react.transitional.element'),
                REACT_PORTAL_TYPE = Symbol.for('react.portal'),
                REACT_FRAGMENT_TYPE = Symbol.for('react.fragment'),
                REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode'),
                REACT_PROFILER_TYPE = Symbol.for('react.profiler');
              Symbol.for('react.provider');
              var REACT_CONSUMER_TYPE = Symbol.for('react.consumer'),
                REACT_CONTEXT_TYPE = Symbol.for('react.context'),
                REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref'),
                REACT_SUSPENSE_TYPE = Symbol.for('react.suspense'),
                REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list'),
                REACT_MEMO_TYPE = Symbol.for('react.memo'),
                REACT_LAZY_TYPE = Symbol.for('react.lazy'),
                REACT_ACTIVITY_TYPE = Symbol.for('react.activity'),
                REACT_CLIENT_REFERENCE = Symbol.for('react.client.reference'),
                ReactSharedInternals =
                  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                hasOwnProperty = Object.prototype.hasOwnProperty,
                isArrayImpl = Array.isArray,
                createTask = console.createTask
                  ? console.createTask
                  : function () {
                      return null;
                    };
              React = {
                'react-stack-bottom-frame': function (callStackForError) {
                  return callStackForError();
                },
              };
              var specialPropKeyWarningShown;
              var didWarnAboutElementRef = {};
              var unknownOwnerDebugStack = React['react-stack-bottom-frame'].bind(
                React,
                UnknownOwner
              )();
              var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
              var didWarnAboutKeySpread = {};
              exports.Fragment = REACT_FRAGMENT_TYPE;
              exports.jsxDEV = function (type, config, maybeKey, isStaticChildren, source, self) {
                var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
                return jsxDEVImpl(
                  type,
                  config,
                  maybeKey,
                  isStaticChildren,
                  source,
                  self,
                  trackActualOwner ? Error('react-stack-top-frame') : unknownOwnerDebugStack,
                  trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
                );
              };
            })();
        }
      },
    '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)':
      function (__turbopack_context__) {
        var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
        {
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              '[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)'
            );
          ('use strict');
          if (('TURBOPACK compile-time falsy', 0)) {
            ('TURBOPACK unreachable');
          } else {
            module.exports = __turbopack_context__.r(
              '[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)'
            );
          }
        }
      },
  },
]);

//# sourceMappingURL=_ca093b7b._.js.map
