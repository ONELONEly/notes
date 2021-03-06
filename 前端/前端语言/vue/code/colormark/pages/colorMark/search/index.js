export default {
    name: 'Search',
    data () {
        return {
            // 搜索内容
            search: '',
            // 副内容板块
            recommends: [
                {
                    src: require('@/static/img/位图_5.png')
                },
                {
                    src: require('@/static/img/位图_6.png')
                },
                {
                    src: require('@/static/img/位图_7.png')
                },
                {
                    src: require('@/static/img/位图_8.png')
                },
                {
                    src: require('@/static/img/位图_9.png')
                }
            ],
            navMenus: [
                '所有领域',
                '平面设计',
                '数字艺术',
                '用户界面',
                '动态图像设计',
                '品牌推广',
                '工业设计',
                '摄影',
                '插画',
                '包装'
            ],
            // nav导航菜单
            activeMenu: '1',
            // nav排序方式
            activeSort: '2',
            products: [
                {
                    id: 1,
                    title: 'PlayStation APP用户界面重设计 | Redesign',
                    time: '3天前',
                    views: 300,
                    like: 108,
                    contImg: require('@/static/img/位图_9.png'),
                    headImg: require('@/assets/img/person.png'),
                    name: '张三'
                },
                {
                    id: 2,
                    title: 'PlayStation APP用户界面重设计 | Redesign',
                    time: '3天前',
                    views: 300,
                    like: 108,
                    contImg: require('@/static/img/位图_5.png'),
                    headImg: require('@/assets/img/person.png'),
                    name: 'lisi'
                },
                {
                    id: 3,
                    title: 'PlayStation APP用户界面重设计 | Redesign',
                    time: '3天前',
                    views: 300,
                    like: 108,
                    contImg: require('@/static/img/位图_6.png'),
                    headImg: require('@/assets/img/person.png'),
                    name: 'wangwu'
                }
            ],
            recommendProducts: [
                {
                    id: 8,
                    title: 'PlayStation APP用户界面重设计 | Redesign',
                    time: '3天前',
                    views: 300,
                    like: 108,
                    contImg: require('@/static/img/位图_5.png'),
                    headImg: require('@/assets/img/person.png'),
                    name: 'zhaoliu'
                },
                {
                    id: 3,
                    title: 'PlayStation APP用户界面重设计 | Redesign',
                    time: '3天前',
                    views: 300,
                    like: 108,
                    contImg: require('@/static/img/位图_6.png'),
                    headImg: require('@/assets/img/person.png'),
                    name: 'wangwu'
                },
                {
                    id: 4,
                    title: 'PlayStation APP用户界面重设计 | Redesign',
                    time: '3天前',
                    views: 300,
                    like: 108,
                    contImg: require('@/static/img/位图_7.png'),
                    headImg: require('@/assets/img/person.png'),
                    name: 'zhaoliu'
                }
            ],
            suggestions: [{ value: '第一个查询建议' }]
        }
    },
    methods: {
        handleSelect () {},
        vnodeIndex (index) {
            return `${index}`
        },
        vnodeKey (name, index) {
            return name + index++
        },
        // 查询建议
        querySuggestion (queryString, cb) {
            const suggestions = this.suggestions
            const queryResult = suggestions.filter(
                (suggestion) => suggestion.value.indexOf(queryString) !== -1
            )
            cb(queryResult)
        }
    }
}
