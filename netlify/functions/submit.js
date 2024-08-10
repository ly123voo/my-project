const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    const { name, message } = JSON.parse(event.body);
    
    // 定义文件路径
    const filePath = path.join(__dirname, 'submissions.txt');
    
    // 格式化字符串
    const dataToWrite = `${name}----${message}\n`;

    // 将数据追加到文件中
    fs.appendFileSync(filePath, dataToWrite, 'utf8');
    
    return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: '提交成功！' }),
    };
};
