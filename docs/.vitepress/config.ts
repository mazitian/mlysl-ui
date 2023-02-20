import { demoBlockPlugin } from 'vitepress-theme-demoblock'

export default {
  head: [['link', { rel: 'icon', href: '/headlogo.png' }]],
  themeConfig: {
    // base: '/mlysl/',
    siteTitle: false,
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/components/button/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mazitian/mlysl-ui.git' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            {
              text: '指南',
              link: '/guide/install'
            },
            {
              text: '组件',
              link: '/components/button/'
            }
          ]
        }
      ],
      '/components/': [
        {
          text: '通用型组件',
          items: [
            { text: 'Button 按钮', link: '/components/button/' },
            { text: 'Icon 图标', link: '/components/icon/' },
            { text: 'Input 输入框', link: '/components/input/' },
            { text: 'Link 文字链接', link: '/components/link/' }
          ]
        },
        {
          text: '布局型组件',
          items: [{ text: 'Container 容器', link: '/components/container/' }]
        },
        {
          text: '导航型组件',
          items: [
            { text: 'Dropdown 下拉菜单', link: '/components/dropdown/' },
            { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb/' },
            { text: 'Tabs 标签页', link: '/components/tabs/' }
          ]
        },
        {
          text: '数据录入型组件',
          items: [
            { text: 'Form 表单', link: '/components/form/' },
            { text: 'Upload 上传', link: '/components/upload/' },
            { text: 'Selector 选择器', link: '/components/selector/' },
            { text: 'Tree 树', link: '/components/tree/' }
          ]
        },
        {
          text: '数据展示型组件',
          items: [
            { text: 'Pagination 分页', link: '/components/pagination/' },
            { text: 'Card 卡片', link: '/components/card/' },
            { text: 'Carousel 走马灯', link: '/components/carousel/' }
          ]
        },
        {
          text: '反馈型组件',
          items: [
            { text: 'Popover 弹出信息', link: '/components/popover/' },
            { text: 'Modal 对话框', link: './components/modal/' }
          ]
        }
      ]
    }
  },
  markdown: {
    config: md => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin)
    }
  }
}
