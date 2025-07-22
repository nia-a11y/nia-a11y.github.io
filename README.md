# 웹 접근성을 고려한 콘텐츠 제작기법2.2

* [웹 접근성을 고려한 콘텐츠 제작기법2.2](https://www.kioskui.or.kr/index.do?menu_id=00000976)의 최신 개정판이 온라인으로 게시됩니다.
* 논의를 위해 각 문서에는 게시판 링크가 추가됩니다.

## 파일 구조
```
.
├── public/				# 웹 리소스
│   ├── images/				# 이미지 파일
│   └── favicon.*			# 파비콘
├── src/
│   ├── assets/				# 서버 사이드 이미지
│   ├── components/			# 컴포넌트
│   ├── content/			# 콘텐츠
│   │   ├── docs/			# 문서
│   │   │   ├── kwcag22tech/		# 제작기법 2.2
│   │   │   │   ├── 1~5			# 1~5장
│   │   │   │   ├── index.mdx		# 문서 소개
│   │   │   │   └── update.mdx		# 문서 갱신 이력
│   │   │   └── index.mdx		# 홈페이지
│   │   └── i18n/			# 번역 파일
│   ├── layouts/			# 개별 적용 레이아웃(홈)
│   ├── styles/				# 커스텀 CSS
│   └── content.config.ts		# 콘텐츠 설정 파일
├── astro.config.mjs			# starlight 설정 파일
└── README.md				# 설명 파일
```

## 파일 수정
* 대부분 mdx로 작성되었으나 기본 문법은 [markdown](https://www.markdownguide.org/)과 같음.
* [Aside](https://starlight.astro.build/ko/components/asides/), [Badge](https://starlight.astro.build/ko/components/badges/), [Card](https://starlight.astro.build/ko/components/cards/) 등 일부 starlight에서 제공하는 [컴포넌트](https://starlight.astro.build/ko/components/using-components/)는 import 후 사용 필요.
* HTML로도 작성 가능

## 메뉴 수정
* astro.config.mjs의 [sidebar 수정](https://starlight.astro.build/ko/guides/sidebar/#%EA%B8%B0%EB%B3%B8-%EC%82%AC%EC%9D%B4%EB%93%9C%EB%B0%94) 필요
* 이름이 순차적일 경우 디렉토리 단이로도 읽어들이나, 경우에 따라 수동으로 순서를 지정해야 함.

## 배포
* github repository에 푸시하면 배포 워크플로 자동 실행