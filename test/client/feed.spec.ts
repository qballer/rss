import {getFeed} from '../../src/client/feed'
import {expect} from 'chai'

const address = 'https://echojs.com/rss'

describe('feed', function (){
    this.timeout(5 * 1000)
    
    it('should get feed', function() {
        return getFeed(address)
        .then(function (feed:any){
            debugger
            expect(typeof feed).to.equal('object')
        })
    })
})