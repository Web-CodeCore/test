# 캡스톤 
2025년도 2학기 한림대학교 캡스톤디자인 개발 저장소입니다. <br> 
우리의 목표: 캡스톤디자인 전체 1등 하기🥇 <br> 
나도 저게 목표인데.... <br>
## 👋🏻 Introduction
### 🧑🏻‍💻 Developers 

| [<img src="https://avatars.githubusercontent.com/chanyoung1256" width="100px;" alt="chanyoung1256"/>](https://github.com/chanyoung1256) |
|:----------------------------------------------------------------------------------------------------------------:|
| **김찬영**                                                                                                       |



## 👥 Cooperation
###  💭 Message Format
 | Message Type      | Description          | Example               |
|:----------------:|:--------------------:|:---------------------:|
| Issue          | 이슈 작성시,이슈 메시지에 <수정사항> 작성후, 수정사항에 대해 간단히 작성 | `<수정사항> README.md 수정` |
| Commit        | 이슈번호 + [키워드] + 수정사항| `#1 [Docs] README.md 수정`   |
| PullRequest  | 이슈번호 + [키워드] + 수정사항   | `#1 [Docs] README.md 수정`|

### 🔑 Keyword Type
|태그 이름|태그 설명|
|:---:|:---:|
|✨ Feat|새로운 기능 추가|
|🐛 Fix|버그 수정|
|🚑 HOTFIX|치명적 버그 수정|
|📁 Build|빌드 관련 파일 수정|
|🎨 Design|CSS를 포함 UI 디자인 변경|
|📄 Docs|문서(문서 추가, 수정, 삭제)|
|📝 Test|테스트(테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없는 경우)|
|♻️ Rename|파일, 폴더명 이름 수정|
|🔥 Remove|파일, 폴더 삭제|

### 🎋 Branch Convention
#### Branch Structure 
- **main**: 배포용 브랜치 (항상 안정적인 상태 유지)
- **develop**: 통합 개발 브랜치 (다음 배포를 준비)
- **feature/**: 기능 개발 및 이슈 해결 브랜치 (작업 단위)
#### Branch Flow
 ```
Main Branch
  ▲
  └── Develop Branch ── 테스트 완료 후 병합 
                              ▲
                              └── Feature Branch ── 작업 완료 후 병합 
                                          └── 새로운 기능 추가

 ```
#### RuleSet
1. Reviewer가(2명 이상) PR을 승인할 시에, PR Merge 가능
2. PR에 새로운 commit 추가 시, 이전의 PR 승인을 무효화하고 재검토

## ✨ Development
 
