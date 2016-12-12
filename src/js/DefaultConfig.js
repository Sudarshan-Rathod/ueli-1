import os from 'os';

export default class DefaultConfig {
    constructor() {
        this.config = {
            theme: 'dark',
            maxResultItems: 5,
            folders: [
                os.homedir() + '\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu',
                'C:\\ProgramData\\Microsoft\\Windows\\Start Menu',
                'C:\\Users\\' + process.env.USERNAME + '\\Desktop'
            ],
            webSearches: [
                {
                    "name": "Google",
                    "prefix": "g",
                    "url": "google.com/search?q=",
                    "fontAwesomeIconClass": "fa-google"
                }, {
                    "name": "Wikipedia",
                    "prefix": "w",
                    "url": "wikipedia.org/w/?search=",
                    "fontAwesomeIconClass": "fa-wikipedia-w"
                }, {
                    "name": "YouTube",
                    "prefix": "yt",
                    "url": "youtube.com/results?search_query=",
                    "fontAwesomeIconClass": "fa-youtube"
                }, {
                    "name": "DuckDuckGo",
                    "prefix": "d",
                    "url": "duckduckgo.com/?q="
                }
            ],
            customCommands: []
        }
    }

    GetConfig() {
        return this.config;
    }
}