const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    // 定义文件路径
    const filePath = path.join(__dirname, 'submissions.txt');

    try {
        // 读取文件内容
        const fileContent = fs.readFileSync(filePath, 'utf8');

        // 返回文件内容
        return {
            statusCode: 200,
            body: fileContent,
        };
    } catch (error) {
        // 如果文件读取出错，返回错误信息
        return {
            statusCode: 500,
            body: 'Error reading file',
        };
    }
};
