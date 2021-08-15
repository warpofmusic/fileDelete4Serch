const fs = require('fs');
const path = require('path');

//削除するファイル
const delFile = '.listing';

// 対象のディレクトリ
// Windowsの場合はパスは以下のように\\で区切る。
const targDir = 'E:\\ソース\\AA\\BB\\新サーバー';

function printAllFiles(dir) {
	const filenames = fs.readdirSync(dir);
	filenames.forEach((filename) => {
		const fullPath = path.join(dir, filename);
		const stats = fs.statSync(fullPath);
		//TODO 正規表現でマッチングをする。
		if (stats.isFile(delFile)) {
			if(fullPath.indexOf(delFile) > -1){
				console.log(fullPath);
				fs.unlinkSync(fullPath);
			}
		} else if (stats.isDirectory()) {
			printAllFiles(fullPath);
		}
	});
}
printAllFiles(targDir);
