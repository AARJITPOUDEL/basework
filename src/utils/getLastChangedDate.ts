const getLastChangedDate = (date: string) => {
    const time: any = new Date(date);
    const time2: any = new Date();
    const totalsec = (time2 - time) / 1000;

    const days = Math.floor(totalsec / 3600 / 24);
    const hours = Math.floor(totalsec / 3600) % 24;
    const minutes = Math.floor(totalsec / 60) % 60;
    const second = Math.floor(totalsec % 60);

    if (days <= 0 && hours <= 0 && minutes <= 0) {
        return `${second < 0 ? 0 : second} sec ago`;
    } else if (days === 0 && hours === 0) {
        return `${minutes} min ago`;
    } else if (days === 0) {
        return `${hours} hr ago`;
    } else {
        return `${days} day ago`;
    }
};
export default getLastChangedDate;
