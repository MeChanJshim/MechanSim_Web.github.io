# Jaeyun Sim — Research CV Website

탭 방식의 연구자 CV 웹사이트입니다. 화면 내용은 HTML에 직접 작성하지 않고
`cv-data.js`에서 관리합니다.

## 파일 구조

```text
index.html       페이지 뼈대와 탭 목록
cv-data.js       CV 내용, 링크, 영상, 공지 데이터
app.js           데이터를 카드로 렌더링하고 탭을 전환하는 코드
stylesheet.css   레이아웃과 반응형 디자인
images/          프로필 및 논문 이미지
```

대부분의 콘텐츠 수정은 **`cv-data.js`만 편집**하면 됩니다.

## 경력·학력·수상 추가

해당 섹션의 `items` 배열 안에서 기존 객체 하나를 복사한 뒤 내용을 바꿉니다.

```js
{
  period: "2026–Present",
  title: "Research Scientist",
  organization: "Organization Name",
  description: "A short description of the work.",
  links: [
    { label: "Website", url: "https://example.com" }
  ]
}
```

필요하지 않은 값은 빈 문자열이나 빈 배열로 둘 수 있습니다.

```js
description: "",
links: []
```

## 연구 프로젝트 추가

`research.items` 배열에 다음 형태의 객체를 추가합니다.

```js
{
  title: "Project Name",
  description: "Short project summary.",
  tags: ["Force Control", "ROS 2", "UR10e"],
  links: [
    { label: "Video", url: "https://youtube.com/..." },
    { label: "Paper", url: "https://doi.org/..." },
    { label: "Code", url: "https://github.com/..." }
  ]
}
```

`links` 배열에는 버튼을 원하는 만큼 추가할 수 있습니다.

## 논문 추가

`publications.items` 배열에 다음 객체를 추가합니다.

```js
{
  period: "IEEE RA-L · 2026",
  title: "Paper Title",
  authors: "Author A, Jaeyun Sim, and Author B",
  image: "assets/publications/journal_2026_firstauthor/images/paper-preview.png",
  links: [
    { label: "Paper", url: "https://doi.org/..." },
    { label: "Video", url: "https://youtube.com/..." }
  ]
}
```

이미지가 없다면 `image: ""`로 설정할 수 있습니다.

## Highlights 영상 연결

`cv-data.js`의 `highlights.featuredVideo`를 수정합니다.

```js
featuredVideo: {
  label: "FEATURED RESEARCH VIDEO",
  title: "Adaptive Robot Force Control",
  description: "RL-based adaptation for physical interaction",
  url: "https://youtube.com/watch?v=...",
  buttonLabel: "Watch video"
}
```

`url`이 비어 있으면 자동으로 **Video coming soon**이 표시됩니다.

## 최신 소식 추가

`highlights.news` 배열의 맨 위에 새 항목을 추가합니다.

```js
{ date: "2026.07", title: "New paper accepted to IEEE RA-L" }
```

상단 공지는 `announcement`에서 수정합니다.

```js
announcement: {
  label: "NEW",
  text: "New paper accepted to IEEE RA-L.",
  tab: "publications"
}
```

`tab`은 공지의 View 버튼을 눌렀을 때 열 탭 이름입니다.

## 페이지 내부 탭으로 이동하는 링크

외부 URL 대신 `tab`을 사용합니다.

```js
links: [
  { label: "Explore research", tab: "research" }
]
```

사용 가능한 기본 탭:

- `highlights`
- `education`
- `experience`
- `research`
- `publications`
- `skills`
- `awards`

## 새 탭 추가

1. `index.html`의 `.tabs`에 버튼을 추가합니다.

```html
<button data-tab="teaching">Teaching</button>
```

2. `.panels`에 같은 이름의 섹션을 추가합니다.

```html
<section id="teaching" hidden>
  <div class="content-list"></div>
</section>
```

3. `cv-data.js`에 데이터를 추가합니다.

```js
teaching: {
  kicker: "TEACHING",
  title: "Teaching",
  items: [
    {
      period: "2026",
      title: "Robot Control",
      organization: "Sungkyunkwan University",
      description: "Teaching assistant",
      links: []
    }
  ]
}
```

4. `app.js`의 렌더링 목록에 `"teaching"`을 추가합니다.

```js
["education", "experience", "research", "publications",
 "skills", "awards", "teaching"].forEach(renderSection);
```

## 로컬에서 확인

별도 빌드 과정은 없습니다. `index.html`을 브라우저로 열거나 VS Code의
Live Server를 사용하면 됩니다.

GitHub Pages를 사용하는 경우 저장소에 push하면 기존 방식대로 배포할 수 있습니다.


## 이미지·영상 폴더 관리

모든 로컬 자료는 `assets/<section>/<item>/images` 또는
`assets/<section>/<item>/videos`에 저장합니다.

자세한 폴더 구조와 파일명 규칙은 [assets/README.md](assets/README.md)를 참고하세요.

예시:

```js
image: "assets/publications/journal_2026_firstauthor/images/paper-preview.png",
links: [
  {
    label: "Video",
    url: "assets/publications/journal_2026_firstauthor/videos/presentation.mp4"
  }
]
```
