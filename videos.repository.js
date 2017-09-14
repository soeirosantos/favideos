'use strict'

const _videos = []
const _ = require('lodash')

//TODO: extract to an util module
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
}

const videos = {
    save: (video) => { 
        video.id = uuidv4()
        _videos.push(video) 
        return video
    },
    all: () => {return _videos.slice()},
    get: (id) => {return _videos.find((v) => {return v.id == id}) || null},
    update: (video) => {
        const idx = _videos.findIndex((v) => {return v.id === video.id})
        _videos[idx] = video
    },
    remove: (id) => { 
        const idx = _videos.findIndex((v) => {return v.id === id})
        _videos.splice(idx, 1)
    }
}

module.exports = videos