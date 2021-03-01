/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Easy Doc',
  tagline: 'Нам Всем пизда давно',
  url: 'http://zzzi.site',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zig-i2p', // Обычно ваше имя организации/пользователя GitHub.
  projectName: 'easy-doc', // Обычно ваше имя репо.
  themeConfig: {
    navbar: {
      title: 'EasyDoc',
      logo: {
        alt: 'EasyQuest',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/zig-i2p/easy-doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: '#!',
            },
            {
              label: 'Discord',
              href: '#!',
            },
            {
              label: 'Twitter',
              href: '#!',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/zig-i2p',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Easy Quest, Inc. Создан с Докозавром.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Пожалуйста, измените это на свое репо.
          editUrl:
            'https://github.com/zig-i2p/easy-doc/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Пожалуйста, измените это на свое репо.
          editUrl:
            'https://github.com/zig-i2p/easy-doc/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
