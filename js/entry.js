function divideDate(data) {
    const divided = data.split('-');

    return divided
}

function verifyDateValid(divided) {
    if (divided[2] < 1995) {
        alert('Must be after 1995-06-16, the first day an APOD picture was posted.');
    }
    else {
        if (divided[2] == 1995 && divided[1] < 6) {
            alert('Must be after 1995-06-16, the first day an APOD picture was posted.');
        }
        else {
            if (divided[2] == 1995 && divided[1] == 6 && divided[0] < 16) {
                alert('Must be after 1995-06-16, the first day an APOD picture was posted.');
            }
            else {
                return true
            }
        }
    }
}

function verifyDateFormat(divided) {
    if (divided[0].length === 2 && divided[1].length === 2 && divided[2].length === 4) {
        return true
    }
    else {
        return false
    }
}

function convertDate(divided) {
    const sendStr = `${divided[2]}-${divided[1]}-${divided[0]}`;

    return sendStr
}

export { divideDate, verifyDateValid, verifyDateFormat, convertDate };