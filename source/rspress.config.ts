import * as path from 'path';
import {defineConfig} from 'rspress/config';
import {pluginLastUpdated} from '@rspress/plugin-last-updated';
// import { pluginPreview } from '@rspress/plugin-preview';
// import { pluginShiki } from '@rspress/plugin-shiki';
// import ghPages from 'rspress-plugin-gh-pages';


export default defineConfig({
    root: path.join(__dirname, 'docs'),
    title: 'lazygophers',
    description: 'lazygophers document',
    icon: '/logo.png',
    logo: {
        light: '/logo-light.png',
        dark: '/logo-dark.png',
    },
    logoText: "lazygophers",
    markdown: {
        // 使用 JS 版本的 MDX 编译器
        mdxRs: false,
        showLineNumbers: true,
        defaultWrapCode: true,
    },
    plugins: [
        pluginLastUpdated(),
        // pluginPreview(),
        // pluginShiki(),
        // ghPages({
        //     repo: 'https://github.com/linbudu599/rspress-plugins.git',
        //     branch: 'website',
        // }),
    ],
    themeConfig: {
        hideNavbar: 'auto',
        enableContentAnimation: true,
        enableScrollToTop: true,
        localeRedirect: 'auto',
        socialLinks: [
            {
                icon: 'github',
                mode: 'link',
                content: 'https://github.com/lazygophers'
            },
        ],
    },
});