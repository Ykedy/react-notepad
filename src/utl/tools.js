let id = 0;
export function dataFrom(title, content, date) {
    let result = {
        title,
        content,
        date,
        isStar: 0,
        id,
    }
    id++
    return result
}

export function getDate() {
    let date = new Date()
    let year = date.getFullYear()
    let month = (date.getMonth() + 1) * 1
    let day = date.getDate()
    if (month >= 1 && month <= 9) {
        month = '0' + month
    }
    if (day >= 1 && day <= 9) {
        day = '0' + day
    }
    let nowDate = year + '-' + month + '-' + day
    return nowDate
}