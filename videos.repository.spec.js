'use strict'

const videos = require('./videos.repository')
const assert = require('assert')

describe('videos', () => {

    let someVideo

    beforeEach(() => {
        someVideo = {
            title: 'Some favorite video',
            source: 'YOUTUBE',
            sourceId: 'v5UlWrJWIu0',
            description: 'adding a description to the video',
            duration: 'PT4M38S'
        }
    })

    describe('.save', () => {
        it('should store a new video', () => {
            const videoAdded = videos.save(someVideo)
            assert(videoAdded.id !== null)
        })
    })

    describe('.get', () => {
        it('should get a video using its id', () => {
            const videoAdded = videos.save(someVideo)
            const videoGot = videos.get(videoAdded.id)            
            assert(videoAdded.id === videoGot.id)
        })
    })

    describe('.remove', () => {
        it('should remove a video', () => {
            const videoAdded = videos.save(someVideo)
            assert(videoAdded.id !== null)
            videos.remove(videoAdded.id)
            const videoGot = videos.get(videoAdded.id)            
            assert(videoGot === null)
        })
    })

    describe('.update', () => {
        it('shoud change a value in a stored video', () => {
            const videoAdded = videos.save(someVideo)
            assert(videoAdded.id !== null)
            videoAdded.title = "it's a new title"
            videos.update(videoAdded)
            const videoGot = videos.get(videoAdded.id)            
            assert.equal(videoGot.title, "it's a new title")
        })
    })

    describe('.all', () => {
        it('should list all videos', () => {
            const before = videos.all()
            const videoAdded = videos.save(someVideo)
            const after = videos.all()
            assert(after.length >= before.length + 1)
        })
    })

})