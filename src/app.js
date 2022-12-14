const {program} = require('commander');
const fs = require('fs');
const readline = require('readline');
const {stdin: input, stdout: output} = require('process');
const {exec} = require("child_process");

program.version("0.0.1");


const addBookmarks = (title, contents) => {
    isExistDir("./bookmarks")
    //중복체크
    const isExist = fs.existsSync(`./bookmarks/${title}.txt`)
    if (isExist) {
        if (!isOverWriting()) {
            return;
        }
    }
    //bookmarks에 저장
    const savePath = `./bookmarks/${title}.txt`;
    fs.writeFile(savePath, contents, err => {
        if (err) {
            throw err;
        }
        console.log("저장되었습니다.");
        // rl.close()
    });
}

//파일 중복체크 후 덮어씌우기 여부 결정(미완성)
let isOverWriting = () => {
    const rl = readline.createInterface({input, output});

    let answer;
    rl.question("이미 같은 이름의 즐겨찾기가 존재합니다. 덮어씌우겠습니까? (Y/[N])", _answer => {
        answer = _answer;
    });
    if (answer === 'Y' || answer === 'y') {
        rl.close();
        return true;
    }
    if (answer === 'N' || answer === 'n' || answer === '') {
        rl.close();
        return false;
    } else {
        console.log("잘못된 입력입니다.")
        rl.close();
        return false;
    }
}
//디렉토리 유무 체크
const isExistDir = (dir) => {
    const isExist = fs.existsSync(dir);
    if (!isExist) {
        fs.mkdirSync(dir)
    }
}


const printBookmarksList = () => {
    isExistDir("./bookmarks")
    fs.readdir('./bookmarks', (err, bookmarkList) => {
        if (err) {
            throw err;
        }
        if (!bookmarkList.length) {
            console.log("추가된 즐겨찾기가 없습니다.")
        }
        for (i = 0; i < bookmarkList.length; i++) {
            console.log(bookmarkList[i])
        }
        // rl.close()
    })
}

const deleteBookmark = title => {
    fs.unlink(`./bookmarks/${title}.txt`, err => {
        if (err) {
            throw err;
        }
        console.log("삭제되었습니다.")
        // rl.close()
    })
}

const renameBookmarks = (oldTitle, newTitle) => {
    fs.rename(`./bookmarks/${oldTitle}.txt`, `./bookmarks/${newTitle}.txt`, err => {
        if (err) {
            throw err;
        }
        console.log("이름이 변경되었습니다.");
        // rl.close()
    });

}
const editBookmarks = (title, newContents) => {
    const savePath = `./bookmarks/${title}.txt`;
    fs.writeFile(savePath, newContents, err => {
        if (err) {
            throw err;
        }
        console.log("수정되었습니다.");
        // rl.close()
    });
}

const moveBookmarkPath = title => {
    let path;
    fs.readFile(`./bookmarks/${title}.txt`, "utf-8", (err, data) => {
        if (err) {
            throw err;
        }
        path = data
        console.log(`${path}로 이동합니다.`);
        exec(`explorer.exe ${path}`);
    });

}

program
    .option('-a, --add <title...> <path...>', 'add a bookmark')
    .option('-l, --list', 'print bookmark list')
    .option('-d, --delete <title...>', 'delete the bookmark')
    .option('-r, --rename <oldTitle...> <newTitle...>', 'rename the bookmark')
    .option('-e, --edit <title...> <newPath...>', 'edit the bookmark')
    .option('-m, --move <title...>', 'move the bookmark path')
    .parse()

const options = program.opts();
if (options.list) {
    printBookmarksList();
}
if (options.add) {
    const title = options['add'][0];
    const path = options['add'][1];
    addBookmarks(title, path);
}
if (options.delete) {
    const title = options['delete'][0];
    deleteBookmark(title);
}
if (options.rename) {
    const oldTitle = options['rename'][0];
    const newTitle = options['rename'][1];
    renameBookmarks(oldTitle, newTitle)
}
if (options.edit) {
    const title = options['edit'][0];
    const newPath = options['edit'][1];
    editBookmarks(title, newPath);
}
if (options.move) {
    const title = options['move'][0];
    moveBookmarkPath(title);
}


