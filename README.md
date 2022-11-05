# 디렉토리 북마커 기능 목록

- **원하는 경로 즐겨찾기 등록(-a, --add)**
    - 사용자가 원하는 단축어로 등록
    -     $node ./app.js -a C:\Users\ohs97\Documents mydocs
  
- **등록된 즐겨찾기 리스트 출력(-l, --list)**
  -     $node ./app.js --list

- **등록된 즐겨찾기 삭제 (-d, --delete)**
  - 한개의 즐겨찾기 삭제
    -     $node ./app.js -d mydocs
  - 여러개의 즐겨찾기 삭제

    -     $node ./app.js -d mydocs mydocs2
  
- **등록된 즐겨찾기 이름 변경 (-u, --update)**
  - mydocs -> yourdocs
  -     $node ./app.js -u mydocs yourdocs

- **등록된 즐겨찾기의 경로로 이동**
  -     $node ./app.js mydocs