import { CreateClient, Feed, DBClient } from '../../src/client/feedStream'
import { getFeed} from './sample'

import { expect } from 'chai'
import sinon from 'sinon'

describe('data access', function () {
    this.timeout(10 * 1000)
    let client:DBClient | null = null
    
    afterEach(function () {
        if (!!client) {
            client.closeConnections()
            client = null
        }
    })

    it('stream content', function () {
        client = CreateClient()
        return new Promise(function (resolve, _) {
            client!.createConnections(function (_fd: Feed, items: any) {
                expect((items.description.length > 0)).true
                expect((items.id.length >= 0)).true
                expect((items.title.length > 0)).true
                expect((items.link.length > 0)).true
                expect((items.description.length > 0)).true
                expect((items.items.length > 0)).true
                resolve(true)
            }, getFeed)
        })
    })
    
    it('should close connections', function () {
        client = CreateClient()
        let cb = sinon.spy()
        client.createConnections(cb)
        client.closeConnections()
        expect(client.intervals.length).to.equal(0)
    })

    it('should stream', function(){ 
        client = CreateClient()
        const spy = sinon.spy()
        client.createConnections(spy, getFeed, 30).then(function(){
            return new Promise(function(resolve, reject) {
                setTimeout(function(){
                    if (spy.calledThrice) {
                        resolve(true)
                        return
                    }
                    reject('bad shit')
                }, 100)
            })
        })
        
    })
})

