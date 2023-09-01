# 원티드 프리온보딩 2주차 과제

- 해당 repository는 원티드 프리온보딩 프론트엔트 인턴쉽 12차 2주차 과제을 다뤘습니다.
- 프리온보딩 선발과제인 todo를 팀원들과 상의해 각 기능의 Best Practice를 도출하고 합친 결과물입니다.

## 배포 링크
https://n-github-issue-list.netlify.app/



## 프로젝트 실행 방법

1. 프로젝트 클론

```
git clone https://github.com/pre-onboarding-12th-4/pre-onboarding-12th-2-4.git
```

2. 해당 폴더로 이동

```
cd pre-onboarding-12th-2-4
```

3. 프로젝트 패키지 설치

```
npm install
```

4. 프로젝트 실행

```
npm start
```


## 폴더 구조
```
📦src
 ┣ 📂api
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜issue.tsx
 ┣ 📂components
 ┃ ┣ 📜Advertisement.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜IssueItem.tsx
 ┃ ┣ 📜IssueListInfo.tsx
 ┃ ┗ 📜LoadSpin.tsx
 ┣ 📂constant
 ┃ ┗ 📜pathParam.ts
 ┣ 📂hooks
 ┃ ┣ 📜useError.ts
 ┃ ┣ 📜useIssue.tsx
 ┃ ┗ 📜useTypedSelector.ts
 ┣ 📂pages
 ┃ ┣ 📜IssueDetail.tsx
 ┃ ┣ 📜IssueList.tsx
 ┃ ┗ 📜NotFound.tsx
 ┣ 📂redux
 ┃ ┣ 📜issueSlice.ts
 ┃ ┗ 📜store.ts
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.tsx
 ┣ 📂types
 ┃ ┗ 📜issueApi.ts
 ┣ 📜App.css
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```

## 기능 상세


### Assignment 1-1: 이슈 목록 화면 API 활용

#### 이슈 목록 가져오기 API 활용

- axios instance를 정의해서 필요한 데이터만 추출
- 환경변수로 REACT_APP_GITHUB_TOKEN 관리하고 interceptors를 활용해 headers 설정
- redux-toolkit의 asyncThunk와 createSlice를 이용해 issueList 호출
- getIssue url과 getIssueDetail url을 나눠서 호출


### Assignment 1-2: 이슈 목록 화면 
>- open 상태의 이슈 중 코멘트가 많은 순으로 정렬
>- 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
>- 다섯번째 셀마다 광고 이미지 출력
>- 데이터 로딩여부 표시

- IssueList페이지에서 map()을 사용하여 IssueListInfo 컴포넌트를 호출하고 issue 아이템을 props로 전달
   
#### open 상태의 이슈 중 코멘트가 많은 순으로 정렬

- api 호출 시 url의 params에 sort:'comments'를 추가해 정렬

#### 다섯번째 셀마다 광고 이미지 출력

- (index + 1) % 5 !== 0 조건을 통해 <Ad /> 컴포넌트 렌더링

#### 데이터 로딩여부 표시

- redux의 status === 'loading' 상태를 이용해 로딩표시

### Assignment 1-3: 이슈 목록 화면 무한 스크롤
>- 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

- <LoadSpin /> 컴포넌트를 만들어서 스크롤 위치에 따라 추가로 이슈 목록 호출

### Assignment 2: 이슈 상세 화면
>- 이슈 상세 화면으로 이동
>- 이슈의 상세 내용 표시
>- ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

- redux를 활용, IssueDetail 페이지에서 <IssueItem /> 컴포넌트를 통해 상세 내용 호출
- react-markdown을 이용해 본문 내용 렌더링

### Assignment 3: 공동 헤더
>- 두 페이지는 공통 헤더를 공유.
>- 헤더에는 Organization Name / Repository Name이 표시

- 추후에 organization/ repository가 바뀔 때를 대비해 pathParam 파일을 따로 만들어 해당 내용 저장
- 위의 정보를 <Header /> 컴포넌트에서 pathParam.owner, pathParam.repo와 같은 형식으로 사용
