module.exports = {
    title: '资源库', // 设置网站标题
    base: "/",
    head: [
         // add jquert and fancybox

        //for auto start
        //  ['script', { async:"async",src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}],
        //  ['script', {},"(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: \"ca-pub-4924092018203651\",enable_page_level_ads: true});"],

        //  ['script', { async:"async","custom-element":"amp-auto-ads",src:"https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"}],
        //for auto end

        ['script', { async:"async",src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}],
        //['script', {},"(adsbygoogle = window.adsbygoogle || []).push({});"],



         ['script', { async:"async",src:"//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"}],
        // ['script', {},"var _hmt = _hmt || [];(function() {var hm = document.createElement(\"script\");hm.src = \"https://hm.baidu.com/hm.js?0447a7b7b5fc544c1a27e5675a8e5a6c\";var s = document.getElementsByTagName(\"script\")[0]; s.parentNode.insertBefore(hm, s);})();"],


         ['script', {src:"https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"}],

         //['script', {src:"https://leach-chen.github.io/storedata1/other/js/vconsole.min.js"}],

         //['script', {},"var vConsole = new VConsole();"],
        ],

    plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
    ],
    themeConfig: { //主题配置
        //添加导航栏
        // algolia: {
        //     apiKey: 'eb9a770d84c8a6f01e3a5a45f8e9ae27',
        //     indexName: 'leachchen'
        // },
        search: true,
        nav: [
            { text: '主页', link: '/' },
            // { text: '搜索', link: '/search/' },
            {
                text: 'Github资源',
                items: [
                    { text: 'Android', link: '/github/android/all/' },
                    { text: 'IOS', link: '/github/ios/all/' },
                    { text: 'Flutter', link: '/github/flutter/all/'},
                    { text: 'ReactNative', link: '/github/reactnative/all/'},
                    { text: 'Vue', link: '/github/vue/all/'},
                    { text: 'H5', link: '/github/h5/all/' },
                ]
            },
            { text: '游戏', link: '/game/all/' },
            { text: '工具', link: '/tool/all/' },
            { text: '逆向', link: '/nixiang/article/' },
            { text: '留言', link: '/message/' },
            { text: 'Gitter聊天', link: 'https://gitter.im/leachchen/fullstack?utm_source=share-link&utm_medium=link&utm_campaign=share-link' },
            { text: '博客', link: 'https://leach-chen.github.io/blog' },
            { text: '本站源码', link: 'https://github.com/leach-chen/homeweb' },
            //{ text: '投稿', link: '/contribute/' },
            { text: '加入', link: '/join/' },
        ],

        sidebar: {
            // '/search/': [
            //     {
            //         title: '资源搜索',
            //         collapsable: false,
            //     }
            // ],
            '/github/android/': [
                {
                    title: 'Android',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
                        'animation/',
                        'view/',
                        'media/',
                        'synthesize/',
                        'component/',
                        'architecture/',
                    ]
                },
            ],
            '/github/ios/': [
                {
                    title: 'IOS',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
						'view/',
                        'synthesize/',
                    ]
                },
            ],
            '/github/flutter/': [
                {
                    title: 'Flutter',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
						'view/',
                        'synthesize/',
                    ]
                },
            ],
            '/github/reactnative/': [
                {
                    title: 'ReactNative',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
                        'synthesize/',
                    ]
                },
            ],
            '/github/vue/': [
                {
                    title: 'Vue',
                    collapsable: false,
                    children: [
                        'all/',
                        'project/',
                        'synthesize/',
                    ]
                },
            ],
            '/github/h5/': [
                {
                    title: 'H5',
                    collapsable: false,
                    children: [
                        'all/',
                        'coolh5/',
                        'animationlib/',
                        'h5/',
                        'hexo/',
                        'jekyll/',
                        'php/',
                    ]
                },
            ],

            '/nixiang/': [
                {
                    title: '逆向',
                    collapsable: false,
                    children: [
                        'article/',
                        'tool/',
                    ]
                },
            ],

            '/game/': [
                {
                    title: 'Games',
                    collapsable: false,
                    children: [
                        'all/',
                        'smart/',
                        'chesscard/',
                        'shoot/',
                        'risk/',
                        'synthesize/',
                    ]
                },
            ],

            '/tool/': [
                {
                    title: 'Tools',
                    collapsable: false,
                    children: [
                        'all/',
                        'synthesize/',
                        'imgoperate/',
                    ]
                },
            ],
        }
    }
}



/*
1.config.js里面添加分类
2.Constant.js里面添加分类
3.ResouleItem.vue里面 created: f，getData:里面添加分类
4.创建对应的redmine目录
5.storedata1里面添加分类
6.在data js里面添加对应分类
7.在storedata1/favorite/js/hand.js里面添加对应分类
*/










/* module.exports = {
    title: 'Leach Chen', // 设置网站标题
    themeConfig: { //主题配置
        // 添加导航栏
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'Github例子',
                items: [
                    { text: 'Android', link: '/github/android/all/' },
                    { text: 'IOS', link: '/github/ios/' },
                    { text: 'Vue', link: '/github/vue/'},
                    { text: 'H5', link: '/github/h5/' },
                ]
            },
            { text: '博客', link: '/a' },
            { text: '游戏', link: '/a' },
            { text: '工具', link: '/b' },
            { text: '留言', link: '/b' },
            { text: '投稿', link: '/b' },
        ],

        sidebar: {
            '/github/android/': [
                {
                    title: '全部',
                    collapsable: false,
                    children: [
                        'all/',
                    ]
                },
                {
                    title: '完整项目',
                    collapsable: false,
                    children: [
                        'project/',
                    ]
                },
            ]
        }
    }
} */
