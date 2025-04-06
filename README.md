# ✨ 프로젝트명: We Band

## 초기 세팅 및 명령어 정리

1. **의존성 설치**

- **_yarn install_** - 패키지 의존성 설치
- **_yarn add 패키지명_** - 새로운 패키지 추가
- **_yarn remove 패키지명_** - 패키지 제거
- **_yarn dev_** - 개발환경 실행 (자동 재시작 Nodemon)
- **_yarn start:dev_** - 개발환경 실행
- **_yarn start:prod_** - 배포환경 실행

---

## Branch Naming Rule

**Branch 이름**은 **작업 목적과 연관된 이슈 번호를 포함하는 방식**

```php
<타입>/<이슈 번호>-<간단한 설명>

- feat/1234-add-user-login
- fix/5678-fix-login-error
- release/1.2.0
```

### Branch Type

- **feat/ - 새로운 기능 개발 시**
- **fix/ -** **버그 수정** 시
- **hotfix/ -** **긴급한 버그 수정** 시 (보통 프로덕션 환경에서 발생)
- **release/ -** **릴리즈 준비 시**
- **chore/ -** 빌드 및 기타 작업 자동화, 문서 작업 등 **코드와 관련 없는 작업**

---

## 📌 Git Commit 규칙

- **feat** - 새로운 기능 추가
- **fix** - 버그 수정
- **refactor** - 코드 리팩토링 (기능 변경 없이 구조 개선)
- **style** - 코드 포맷팅, 세미콜론 누락 등 (비즈니스 로직에 영향이 없는 변경)
- **test** - 테스트 추가 또는 수정
- **docs** - 문서 추가 및 수정
- **chore** - 빌드 작업, 패키지 관리 등

---

## 📌 기술 스택 (Tech Stack)

- **언어**: JavaScript
- **프레임워크**: React
- **빌드 툴**: Vite

---

## 📂 프로젝트 구조 (간략화)

```
│── src/
│   ├── assets/        # 이미지, 폰트, CSS 등의 정적 파일
│   ├── api/           # API 호출 함수 (fetch, axios 등)
│   ├── components/    # 재사용 가능한 UI 컴포넌트
│   ├── constants/     # 재사용 가능한 상수
│   ├── pages/         # 개별 페이지 컴포넌트
│   ├── services/      # 비즈니스 로직 및 상태 관리 (예: context, recoil, zustand)
│   ├── hooks/         # 커스텀 훅
│   ├── utils/         # 유틸리티 함수
│   ├── layout/        # 전역으로 사용할 디자인 양식 정의
│   ├── styles/        # 전역으로 사용할 폰트, 색상 정의
│   ├── store/         # zustand를 이용한 상태 관리
│   ├── icons/         # svg파일 재활용
│   ├── types/         # 타입 정의
│   ├── App.js         # 루트 컴포넌트
│   ├── main.js        # ReactDOM.render() 또는 createRoot() 설정
│── .env               # 환경 변수 파일
│── .gitignore         # Git에서 제외할 파일
│── vite.config.js     # Vite 설정 파일
│── index.html         # HTML 템플릿
│── package.json       # 프로젝트 의존성 및 설정
│── public/            # 정적 파일 (파비콘 등)
│── .yarn/             # Yarn Berry 관련 파일
```

---
