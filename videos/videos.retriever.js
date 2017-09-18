'use strict'

const https = require('https')

const VideoDetail = function(title, description, duration) {
    this.title = title
    this.description = description
    this.duration = duration
}

const VimeoDetailsRetriever = function() {
}

const YoutubeDetailRetriever = function() {
    this.apiKey = process.env.YOUTUBE_API_KEY
}

VimeoDetailsRetriever.prototype.retrieve = function(sourceId, callback) {
    //TODO: implement
    callback(new VideoDetail("mocked video", "mocked vimeo video", "PT4M39S"))
}

YoutubeDetailRetriever.prototype.retrieve = function(sourceId, callback) {
    const key = this.apiKey
    const options = {
        host: 'www.googleapis.com',
        path: `/youtube/v3/videos?id=${sourceId}&key=${key}&fields=`+
        `items(snippet(description,%20title),contentDetails(duration))&part=snippet,contentDetails`
    }
    let body = ''
    const processRequest = function(response) {
        response.on('data', function(chunck) {
            body += chunck
        })
        response.on('end', function(){
            try {
                const youtubeVideo = JSON.parse(body).items[0]
                callback(new VideoDetail(youtubeVideo.snippet.title, 
                                         youtubeVideo.snippet.description,
                                         youtubeVideo.contentDetails.duration))
            } catch (e) {
                //XXX: dummy error handling for the purpose of this PoC                
                callback(new VideoDetail())
            }
        })
    }
    https.get(options, processRequest).end()
}

const VideoDetailRetreiver = {
    YOUTUBE: new YoutubeDetailRetriever(),
    VIMEO: new VimeoDetailsRetriever()
}

module.exports = VideoDetailRetreiver
