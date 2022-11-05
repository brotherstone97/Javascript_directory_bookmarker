# 디렉토리 북마커 기능 목록



# 원리
 - 인수로 즐겨찾기 이름을 받고 이와 같은 이름의 텍스트 파일 생성
 - 텍스트 파일은 즐겨찾기 경로를 내용으로 담는다.
 - 텍스트 파일 제목과 내용을 이용해서 CRUD 및 이동 기능을 구현한다.

# 구현할 기능

 - bookmarks 파일이 존재하는 지 확인 후 없으면 새로 생성 (경로: /src/bookmarks)
 - add 기능
     - 경로와 북마크이름을 인수로 받아 북마크 이름은 파일제목, 경로는 파일 내용으로 각각 저장한다.
 - 리스트 출력
     - bookmarks 디렉토리에 저장된 파일 리스트를 모두 출력
 - delete 기능
     - bookmarks 디렉토리에서 인수로 받은 파일 삭제
 - rename 기능
     - bookmarks 디렉토리의 특정 파일을 rename
 - edit 기능
   - bookmarks 디렉토리의 특정 파일의 경로를 수정
 - 이동 기능
   - 인수로 즐겨찾기 이름을 받고 이와 같은 텍스트파일의 내용 속 경로로 이동한다(터미널 내 cd, windows 파일 탐색기 open)


# 옵션
- **원하는 경로 즐겨찾기 등록(-a, --add)**
    - 사용자가 원하는 단축어로 등록
    -     $node ./app.js -a mydocs C:\Users\ohs97\Documents
  
- **등록된 즐겨찾기 리스트 출력(-l, --list)**
  -     $node ./app.js -l

- **등록된 즐겨찾기 삭제 (-d, --delete)**
  - 즐겨찾기 삭제
    -     $node ./app.js -d mydocs
  
- **등록된 즐겨찾기 이름 변경 (-r, --rename)**
  - mydocs -> yourdocs
  -     $node ./app.js -r mydocs yourdocs
  - 
- **등록된 즐겨찾기의 경로 변경 (-e, --edit)**
  -     $node ./app.js -u mydocs newPath

- **등록된 즐겨찾기의 경로로 이동(-m, --move)**
  -     $node ./app.js mydocs
