import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitepress';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const records = fs.readdirSync(path.resolve(__dirname, '../records'));

const base = '/essay/';

export default defineConfig({
  base,
  title: '流书随笔',
  description: '期望在这个繁杂的世界找到一丝心灵的慰藉',
  lastUpdated: true,
  lang: 'zh-CN',
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/essay/logo.svg'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '随笔', link: '/records/index' }
    ],

    sidebar: [
      {
        text: '随笔',
        items: records
          .filter(item => !item.includes('index.md'))
          .map((item, index) => {
            const text = item.replace('.md', '');
            return {
              text: `[${index + 1}] ${text}`,
              link: `/records/${text}`
            };
          })
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/dongjb/essay' }],
    lastUpdatedText: '最近更新',
    docFooter: {
      next: '下一篇',
      prev: '上一篇'
    }
  }
});
