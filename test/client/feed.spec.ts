import {getFeed} from '../../src/client/feed'
import {expect} from 'chai'

const address = 'https://echojs.com/rss'

describe('feed', function (){
    this.timeout(10 * 1000)
    it('should get feed', function() {
        return getFeed(address)
        .then(function (feed:any){
            expect(typeof feed).to.equal(typeof {})
            expect(typeof feed.items).to.equal(typeof {})
        })
    })
})