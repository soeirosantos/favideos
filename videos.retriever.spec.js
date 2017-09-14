'use strict'

const VideoDetailRetreiver = require('./videos.retriever')
const expect = require('chai').expect
const nock = require('nock')
const mockedResponse = require('./mockedResponse')

describe('Video Retriever', () => {
    beforeEach(() => {
        nock('https://www.googleapis.com')
        .get('/youtube/v3/videos?id=iEPTlhBmwRg&key=mockedKey&'+
        'fields=items(snippet(description,%20title),contentDetails(duration))&part=snippet,contentDetails')
        .reply(200, mockedResponse)
    })

    it('Youtube retriever', function(done) {
        VideoDetailRetreiver.YOUTUBE.retrieve("iEPTlhBmwRg", (video) => {
            expect(video.title).to.equal('Maroon 5 - Moves Like Jagger ft. Christina Aguilera')
            expect(video.description).to.equal('UK release: Sept 5th')
            done()
        })
    })
})
