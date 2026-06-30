# Publication Assets

Publication 자료는 아래 규칙으로 관리합니다.

```text
assets/publications/<journal>_<year>_<first-author>/
├── images/
│   └── paper-preview.png
└── videos/
```

## 폴더명 규칙

`저널_년도_1저자성` 순서로 작성합니다.

- 영문 소문자를 사용합니다.
- 세 항목 사이는 underscore(`_`)로 구분합니다.
- 저널명 내부의 단어 구분에는 hyphen(`-`)을 사용할 수 있습니다.
- 저자 이름은 제1저자의 성(last name)을 사용합니다.

예시:

```text
electronics_2026_sim
ieee-ral_2026_kim
sensors_2025_lee
ijpem-gt_2021_park
```

## 현재 Publication 폴더

```text
publications/
├── electronics_2026_sim/
├── ieee-ral_2026_kim/
├── ieee-rap_2026_um/
├── sensors_2026_lee/
├── ieee-ral_2025_moon/
├── sensors_2025_lee/
├── ijpem-gt_2021_park/
├── jmst_2019_song/
└── ksme-a_2019_shim/
```

각 폴더에는 `images/`와 `videos/`가 있습니다.

## 논문 이미지 추가

1. 해당 논문 폴더의 `images/`에 이미지를 넣습니다.

```text
assets/publications/electronics_2026_sim/images/paper-preview.png
```

2. `cv-data.js`에서 해당 논문의 `image` 값을 채웁니다.

```js
image: "assets/publications/electronics_2026_sim/images/paper-preview.png",
```

이미지가 준비되지 않은 논문은 다음처럼 빈 문자열로 두면 이미지 영역이 표시되지 않습니다.

```js
image: "",
```

## 논문 링크

논문 링크는 `cv-data.js`에서 관리합니다.

```js
links: [
  {
    label: "Paper",
    url: "https://doi.org/..."
  }
]
```

## 기타 Assets

프로필과 연구 자료는 다음 위치에 있습니다.

```text
assets/
├── profile/images/
├── highlights/<item>/images|videos/
└── research/<project>/images|videos/
```

빈 폴더를 Git에 유지하기 위해 `.gitkeep` 파일이 포함되어 있습니다.
