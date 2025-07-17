import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import astroExpressiveCode from 'astro-expressive-code';
// import starlightLinksValidator from 'starlight-links-validator';
import starlightFullViewMode from 'starlight-fullview-mode';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import sitemap from '@astrojs/sitemap';

const commonKeywords = "웹, 접근성, 콘텐츠, 제작기법, KWCAG2.2, accessibility, Korean, A11Y";

export default defineConfig({
    site: 'https://nia-a11y.github.io/',
    base: process.env.NODE_ENV = '/',
	integrations: [
        astroExpressiveCode(),
        mdx(),
		starlight({
            title: 'NIA 디지털 접근성',
            defaultLocale: 'root',
            locales: {
                root: {
                    label: '한국어',
                    lang: 'ko',
                },
            },
            plugins: [
                // starlightLinksValidator(),
                // starlightUtils({
                // 	multiSidebar: true
                // }),
                starlightFullViewMode({ leftSidebarEnabled: true, rightSidebarEnabled: true })
            ],
            social: [{ icon: 'information', label: '원문 사이트', href: 'https://www.kioskui.or.kr/index.do?menu_id=00000976' }],
            components: {
                Head: './src/components/CustomHead.astro',
                PageFrame: './src/components/CustomPageFrame.astro',
            },
            customCss: [
                './src/styles/custom.css'
            ],
			sidebar: [
                {
                    label: '웹 접근성을 고려한 콘텐츠 제작기법 2.2',
                    collapsed: false,
                    items: [
                        {
                            label: '문서 소개',
                            link: 'kwcag22tech/',
                        },
                        {
                            label: '인식의 용이성',
                            collapsed: true,
                            items: [
                                {
                                    label: '개요',
                                    link: 'kwcag22tech/1'
                                },
                                {
                                    label: '1.1 대체 텍스트',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/1/1' },
                                },
                                {
                                    label: '1.2 멀티미디어 대체수단',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/1/2' },
                                },
                                {
                                    label: '1.3 적응성',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/1/3' },
                                },
                                {
                                    label: '1.4 명료성',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/1/4' },
                                },
                            ]
                        },
                        {
                            label: '운용의 용이성',
                            collapsed: true,
                            items: [
                                {
                                    label: '개요',
                                    link: 'kwcag22tech/2'
                                },
                                {
                                    label: '2.1 입력장치 접근성',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/2/1' },
                                },
                                {
                                    label: '2.2 충분한 시간 제공',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/2/2' },
                                },
                                {
                                    label: '2.3 광과민성 발작 예방',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/2/3' },
                                },
                                {
                                    label: '2.4 쉬운 내비게이션',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/2/4' },
                                },
                                {
                                    label: '2.5 입력 방식',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/2/5' },
                                },
                            ]
                        },
                        {
                            label: '이해의 용이성',
                            collapsed: true,
                            items: [
                                {
                                    label: '개요',
                                    link: 'kwcag22tech/3'
                                },
                                {
                                    label: '3.1 가독성',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/3/1' },
                                },
                                {
                                    label: '3.2 예측 가능성',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/3/2' },
                                },
                                {
                                    label: '3.3 입력 도움',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/3/3' },
                                },
                            ]
                        },
                        {
                            label: '견고성',
                            collapsed: true,
                            items: [
                                {
                                    label: '개요',
                                    link: 'kwcag22tech/4'
                                },
                                {
                                    label: '4.1 문법 준수',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/4/1' },
                                },
                                {
                                    label: '4.2 웹 애플리케이션 접근성',
                                    collapsed: true,
                                    autogenerate: { directory: 'kwcag22tech/4/2' },
                                },
                            ]
                        },
                        {
                            label: 'KWCAG 이해와 실무 적용',
                            collapsed: true,
                            autogenerate: { directory: 'kwcag22tech/5' },
                        },
                        {
                            'label': '문서 갱신 이력',
                            link: 'kwcag22tech/update',
                        },
                    ]
                },
			],
		}),
        sitemap(),
	],
});
