'use strict'

const videoRetriever = require('./videos.retriever')
const videoRepository = require('./videos.repository')

const insert = function(request, callback) {
    if (!('sourceId' in request && 'source' in request)) {
        throw 'Please, provide the sourceId and the source.'
    }

    if (request.source in videoRetriever) {
        videoRetriever[request.source].retrieve(request.sourceId, (videoDetails) => {
            const video = {
                title: videoDetails.title,
                description: videoDetails.description,
                duration: videoDetails.duration,
                sourceId: request.sourceId,
                source: request.source
            }
            callback(videoRepository.save(video))
        })
    } else {
        throw 'Source not supported.'
    }
}

const list = function(callback) {
    callback(videoRepository.all())
}

module.exports = {insert:insert, list:list}