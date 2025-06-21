module.exports = {
  '[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)':
    function (__turbopack_context__) {
      var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x(
          'next/dist/compiled/next-server/app-page-turbo.runtime.dev.js',
          () => require('next/dist/compiled/next-server/app-page-turbo.runtime.dev.js')
        );

        module.exports = mod;
      }
    },
  '[project]/src/components/AddAvatarButton.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
        );
      const AddAvatarButton = ({ onClick }) => {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'button',
          {
            className: 'button-add',
            onClick: onClick,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
      const __TURBOPACK__default__export__ = AddAvatarButton;
    }
  },
  '[project]/src/components/AvatarCard.tsx [app-ssr] (ecmascript)': (__turbopack_context__) => {
    'use strict';

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
        );
      const AvatarCard = ({ avatarUrl, onRefresh }) => {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'article',
          {
            className: 'card',
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'button',
                {
                  className: 'card__button',
                  onClick: onRefresh,
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
      const __TURBOPACK__default__export__ = AvatarCard;
    }
  },
  '[project]/src/components/RefreshAllButton.tsx [app-ssr] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
        );
      const RefreshAllButton = ({ onClick }) => {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
      const __TURBOPACK__default__export__ = RefreshAllButton;
    }
  },
  '[project]/src/components/AvatarGrid.tsx [app-ssr] (ecmascript)': (__turbopack_context__) => {
    'use strict';

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddAvatarButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/components/AddAvatarButton.tsx [app-ssr] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AvatarCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i('[project]/src/components/AvatarCard.tsx [app-ssr] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RefreshAllButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          '[project]/src/components/RefreshAllButton.tsx [app-ssr] (ecmascript)'
        );
      ('use client');
      const AvatarGrid = ({ initialTiles = [] }) => {
        const [tiles, setTiles] = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            'Fragment'
          ],
          {
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className: 'card__container',
                  children: [
                    tiles &&
                      tiles.map((tile) =>
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AvatarCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddAvatarButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RefreshAllButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
      const __TURBOPACK__default__export__ = AvatarGrid;
    }
  },
  '[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)':
    function (__turbopack_context__) {
      var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
      {
        ('use strict');
        if (('TURBOPACK compile-time falsy', 0)) {
          ('TURBOPACK unreachable');
        } else {
          if (('TURBOPACK compile-time falsy', 0)) {
            ('TURBOPACK unreachable');
          } else {
            if (('TURBOPACK compile-time truthy', 1)) {
              if (('TURBOPACK compile-time truthy', 1)) {
                module.exports = __turbopack_context__.r(
                  '[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)'
                );
              } else {
                ('TURBOPACK unreachable');
              }
            } else {
              ('TURBOPACK unreachable');
            }
          }
        } //# sourceMappingURL=module.compiled.js.map
      }
    },
  '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)':
    function (__turbopack_context__) {
      var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
      {
        ('use strict');
        module.exports = __turbopack_context__.r(
          '[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)'
        ).vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
      }
    },
  '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)':
    function (__turbopack_context__) {
      var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
      {
        ('use strict');
        module.exports = __turbopack_context__.r(
          '[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)'
        ).vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
      }
    },
};

//# sourceMappingURL=%5Broot-of-the-server%5D__9f80e5f3._.js.map
