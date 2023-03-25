export default {
    /**
     * Get period of fetching jobs
     * @return {Number}
     */
    getInterval() {
        return localStorage.getItem('fetchInterval') || 1; // one minute by default in production (6 seconds in development)
    },
    /**
     * Setting period of fetching jobs
     * @param interval
     */
    setInterval(interval) {
        localStorage.setItem('fetchInterval', interval);
    },
    /**
     * Getter for playNotificationSound flag
     * @returns {boolean}
     */
    getPlayNotificationSound() {
        return JSON.parse(localStorage.getItem('playNotificationSound'));
    },
    /**
     * Setter for playNotificationSound flag
     * @param value
     */
    setPlayNotificationSound(value) {
        localStorage.setItem('playNotificationSound', JSON.parse(+value));
    },
    /**
     * Getter for isFetchingEnabed param
     * @returns {boolean|null}
     */
    getIsFetchingEnabled() {
        return JSON.parse(localStorage.getItem('isFetchingEnabled'));
    },
    /**
     * Setter for isFetchingEnabed param
     * @returns {void}
     */
    setIsFetchingEnabled(value) {
        localStorage.setItem('isFetchingEnabled', JSON.parse(value));
    },
    /**
     * Getter for playNotificationSound flag
     * @returns {boolean}
     */
    getShowNotificationPopup() {
        return JSON.parse(localStorage.getItem('showNotificationPopup'));
    },
    /**
     * Setter for showNotificationPopup flag
     * @returns {void}
     */
    setShowNotificationPopup(value) {
        localStorage.setItem('showNotificationPopup', JSON.parse(+value));
    },
}
