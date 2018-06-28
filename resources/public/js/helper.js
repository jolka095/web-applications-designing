module.exports = {
    getAverageMarkForBook: (marksArray) => {

        let sum = 0;
        let avg = 0;

        if (typeof marksArray !== 'undefined' && marksArray !== null) {
            if (marksArray.length === 0) {
                console.log("Empty marks array")
            } else {
                for (let i = 0; i < marksArray.length; i++) {
                    sum += marksArray[i].mark
                }
                avg = sum / marksArray.length
            }
        }

        return avg.toFixed(2)
    },
    getUserMarkForBook: (marksArray, userId) => {

        let mark = null

        if (typeof userId !== 'undefined' && userId !== null && typeof marksArray !== 'undefined' && marksArray !== null) {
            for (let i = 0; i < marksArray.length; i++) {
                if (marksArray[i].idUser == userId) {
                    mark = marksArray[i].mark
                }
            }
        } else {
            console.log("This user didn't mark this book or this book has no marks")
        }
        return mark
    },
    getBookStatusForUser: (statusesArr, userId) => {

        let status = null
        if (typeof userId !== 'undefined' && userId !== null) {
            if (statusesArr.length === 0) {
                console.log("Empty statuses array")
            } else {
                for (let i = 0; i < statusesArr.length; i++) {
                    if (statusesArr[i].idUser == userId) {
                        status = statusesArr[i].stat
                    }
                }
            }
        } else {
            console.log("This user didn't set status of this book or this book has no statuses")
        }
        return status
    }
}