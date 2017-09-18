'use strict'

const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require("sinon-chai")
chai.should()
chai.use(sinonChai)

const {expect} = chai //it {...} is a thing to unpack attributes

const nock = require('nock')
const mockedResponse = require('./mockedResponse')

const service = require('./videos.service')
const repository = require('./videos.repository')

describe('Video Service', () => {
    
    beforeEach(() => {
        nock('https://www.googleapis.com')
        .get('/youtube/v3/videos?id=iEPTlhBmwRg&key=mockedKey&'+
        'fields=items(snippet(description,%20title),contentDetails(duration))&part=snippet,contentDetails')
        .reply(200, mockedResponse)
    })
    
    describe('.insert', () => {
        it('should insert a new video retrieving the data from external source', (done) => {
            const callback = sinon.spy()
            const request = {source: 'YOUTUBE', sourceId: 'iEPTlhBmwRg'}
            service.insert(request, callback)
            done()
            callback.should.have.been.calledOnce()
        })
    })

    describe('.list', () => {
        it('should list videos using mocked return', () => {
            // if you wouldn’t add an assertion for some specific call, don’t mock it. 
            // Use a stub instead.
            // sinon.mock(repository).expects('all').returns(mockedVideos)
            sinon.stub(repository, 'all').returns(mockedVideos)
            service.list((videos) => {
                expect(videos.length).is.equals(1)
            })
        })
    })

    const mockedVideos = [{title: 'Some favorite video',
                          source: 'YOUTUBE',
                          sourceId: 'v5UlWrJWIu0',
                          description: 'adding a description to the video',
                          duration: 'PT4M38S',
                          id: '602563ac-ac33-4c0a-8cf8-8bede61cc4a4' }]
})
