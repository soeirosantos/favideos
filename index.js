'use strict'

const service = require('./videos.service')

service.insert({sourceId: 'iEPTlhBmwRg', source: 'YOUTUBE'}, (video) => {
    console.log("Video included: " + video.id)
    service.list((videos) => {
        console.log(videos)
    })
})