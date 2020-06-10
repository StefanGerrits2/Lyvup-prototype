function checkDate(data) {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const receivedDate = data.split(' ');
    receivedDate.pop();
    const expiryDate = new Date(data);
    const currentDate = new Date(date);
    const timeBetweenDates = expiryDate - currentDate;
    const timeToExpiry = Math.floor(timeBetweenDates / (3600000 * 24));
    const daysAfterExpiry = timeToExpiry.toString().substring(1);

    if (currentDate > expiryDate) {
        const result = `dit doel is ${daysAfterExpiry} dagen geleden verlopen`;
        return result;
    } else if (expiryDate > currentDate) {
        const result = `je hebt nog ${timeToExpiry} dagen om je doel te behalen`;
        return result;
    }
}

module.exports = checkDate;