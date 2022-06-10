
# devops-01-P2-TeamB
<div align="center">
<p>DevOps 부트캠프 2번째 프로젝트 Team B</p>
<img src="https://img.shields.io/badge/AmazonAWS-232F3E?style=flat-square&logo=AmazonAWS&logoColor=white"/>
<img src="https://img.shields.io/badge/fastify-000000?style=flat-square&logo=Fastify&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHubActions-2088FF?style=flat-square&logo=GitHubActions&logoColor=white"/>
</div>

## Summary

사장님용 음식 배달 웹 서비스 백엔드 제작 프로젝트

**기능 명세 API** : [주문관리](https://app.swaggerhub.com/apis-docs/gotoweb/restaurant-order/1.0), [매장, 메뉴관리](https://app.swaggerhub.com/apis-docs/gotoweb/restaurant/1.0)

## 백엔드 & 프론트엔드 CI/CD 구조

#### 1. 프론트엔드
프론트엔드는 node.js + React로 개발되었으며, 제공받은 프론트엔드 소스를 사용하였습니다.
AWS의 CodePipeline을 통해 Git Repository에 소스가 올라오면 CodeBuild를 통해 자동으로 빌드가 되고, Build Artifact들이 S3 bucket에 담기게 됩니다.

![image](https://user-images.githubusercontent.com/38274684/161700638-d96fecfe-247d-47c4-b215-d95cfaa3e07e.png)


#### 2. 백엔드 
백엔드 WAS는 node.js를 이용하였고, fastify 프레임워크를 사용하였습니다.
Github Actions를 통해 이미지를 Docker 이미지로 Build하여 ECR로 도커라이징 해줍니다.
AWS의 CodePipeline을 통해 Push된 ECR 이미지를 CodeBuild로 ECS 배포에 적합한 이미지로 변경해줍니다.

![image](https://user-images.githubusercontent.com/38274684/161700717-f3e879ba-f229-4f07-92ad-1f2881a5eb09.png)

## Preview

#### 주문 관리

![1](https://user-images.githubusercontent.com/38274684/161729999-ce1b247d-70d8-4b3a-ad74-d5a120fcbfa8.gif)

#### 매장 이름, 주소 변경

![2](https://user-images.githubusercontent.com/38274684/161730022-ac2dbbd5-5818-42b3-ba03-f16b782a37f9.gif)

#### 메뉴 추가

![3](https://user-images.githubusercontent.com/38274684/161730045-622787dd-afa2-49f8-827e-59bbfd075d42.gif)

#### 메뉴 변경

![4](https://user-images.githubusercontent.com/38274684/161730059-6aea107b-222b-4f40-aee4-f61c4c9e8212.gif)

#### 메뉴 삭제

![5](https://user-images.githubusercontent.com/38274684/161730106-2d528187-3016-4f64-b11e-b13207cbd12d.gif)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

## Commit Rules
type | 설명
---- | ----
[feat] | 새로운 기능에 대한 커밋
[fix] | 버그 수정에 대한 커밋
[build] | 빌드 관련 파일 수정에 대한 커밋
[chore] | 그 외 자잘한 수정에 대한 커밋
[ci] | CI관련 설정 수정에 대한 커밋
[docs] | 문서 수정에 대한 커밋
[style] | 코드 스타일 혹은 포맷 등에 관한 커밋
[refactor] |  코드 리팩토링에 대한 커밋
[test] | 테스트 코드 수정에 대한 커밋
[project] | 프로젝트 변경 사항에 대한 커밋

## Team
| 이름   | GitHub                                         |
| ------ | ---------------------------------------------- |
| 박성아 | [@seongahpark](https://github.com/seongahpark) |
| 김필재 | [@Olatte3](https://github.com/Olatte3)       |
| 최찬회 | [@cks8483](https://github.com/cks8483)       |
