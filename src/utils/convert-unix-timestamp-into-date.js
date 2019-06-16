const convertUnixTimestampIntoDate = (unixTimestamp) => new Date(unixTimestamp * 1000);


module.exports = { convertUnixTimestampIntoDate };
