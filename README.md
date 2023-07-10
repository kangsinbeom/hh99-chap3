# UI Component Preview Page

## 프로젝트 개요

재사용 가능한 UI Component를 한 눈에 확인 가능한 프리뷰 페이지입니다.

<br />

### 실행화면

<p align="center">
<img src="https://github.com/Haegnim/hh99-test2/assets/84562770/5590aaf2-67df-47a6-b324-3b977e837351">
</p>

## 배포

[📎Link](https://hh99-chap3.vercel.app/)

<br />
<br />
<br />

## UI Component

### Button

- Primary button과 Secondary button, Icon button까지 3가지 스타일을 제공합니다.
- 아이콘을 선택적으로 삽입할 수 있습니다.
- width을 선택적으로 지정할 수 있습니다.

### Input

- 일반형식의 input과 숫자를 넣었을 때 3자리 수마다 `콤마,`가 찍히는 input 2가지를 제공합니다.
- price input에는 숫자만 입력할 수 있습니다.
- send 버튼을 클릭하면 입력한 값을 alert에 표시합니다.
- 값이 없을 경우 alert 메세지가 표시됩니다.

### Modal

- 2가지 형식의 Modal을 제공합니다.
  - 취소, 확인이 있고, overlay를 클릭했을 때 modal이 닫히지 않는 형태
  - 닫기 버튼만 있고, overlay를 클릭했을 때 닫히는 형태

### Select

- 부모 요소에 overflow:hidden을 적용해도 Select는 가려지지 않습니다.

<br />
<br />
<br />

## 폴더 구조

```
node_modules/
public/
    index.html
src/
    assets/
        icons/                      : icon 소스 파일
        styles/                     : style 정의 폴더
    components/
        common/                     : 공통 UI 요소 스타일 컴포넌트 폴더
        Button.jsx                  : UI 컴포넌트 파일들
        Input.jsx
        Modal.jsx
        ModalTwo.jsx
        Selecter.jsx
    layout/                         : 페이지 layout 컴포넌트 폴더
        Header.jsx
        Footer.jsx
        Left.jsx
        Right.jsx
    App.js
    index.js
```

<br />
<br />
<br />

## 팀원

### 강신범 [@kangsinbeom](https://github.com/kangsinbeom)

### 김혜경 [@Haegnim](https://github.com/Haegnim)

<br />
<br />
<br />

## 프로젝트 라이센스 정보 명시

[font - poppins](https://fonts.google.com/specimen/Poppins) <br />
[font - 프리텐다드](https://noonnu.cc/font_page/694) <br />
[fontawesome](https://fontawesome.com/) <br />
[Design Reference](https://www.behance.net/gallery/136821989/MEDICO-Doctor-Patient-Management-System-UIUX-Design)
