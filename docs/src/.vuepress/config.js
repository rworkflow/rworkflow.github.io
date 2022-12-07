const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Rcwl',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Data Recipes',
        link: '/dataRecipes/',
      },
      {
        text: 'Case studies',
        items: [	
          { text: 'scRNA-seq preprocessing', link: '/case_studies/scrnaseq/' }
        ]
      },
      {
        text: 'Tutorials',
        link: 'https://rworkflow.github.io/RcwlBook/'
      },
      {
        text: 'Rcwl',
        link: 'https://rworkflow.github.io/Rcwl/'
      },
      {
        text: 'RcwlPipelines',
        link: 'https://rworkflow.github.io/RcwlPipelines/' 	    
      },
      {
	  text: 'Contact Us',
	  link: '/about/',
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'Rcwl',
          ]
        }
      ],
      '/case_studies/scrnaseq/': [
        {
          title: '',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ["vuepress-plugin-auto-sidebar", {
      // options
	mode: "default"
    }]
  ]
}
