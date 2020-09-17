/**
 * @file 通用辅助函数
 */
// 解析 JSON 字符串
export const parseJSON = (content) => {
    try {
        return JSON.parse(content);
    } catch {
        console.error('JSON解析失败');
        return null;
    }
};

// 四舍五入， digit 为保留几位小数
export const mathRound = (num, digit = 0) => {
    if (!/^\d*$/.test(String(digit)) || digit < 0) {
        throw new Error('mathRound 的第二个参数 digit 须为正整数');
    }
    const digitalNum = Math.pow(10, digit);
    return Math.round(num * digitalNum) / digitalNum;
};
