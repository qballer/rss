import {parseFeed} from '../../src/client/feed'
export function getFeed (): Promise<{}> {
    return parseFeed(sample)
}


export let sample:string = `
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>
Echo JS
</title>
 <link>
https://www.echojs.com
</link>
 <description>Description pending</description> <item><title>
Build Awesome Forms In React Using Redux-Form
</title>
 <guid>https://blog.bitsrc.io/build-awesome-forms-in-react-using-redux-form-d1e4c96f5850</guid> <link>
https://blog.bitsrc.io/build-awesome-forms-in-react-using-redux-form-d1e4c96f5850
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26749">Comments</a>]]></description> <comments>https://www.echojs.com/news/26749</comments></item>
<item><title>
Saber.js —  A blazing fast, minimalistic framework for building websites using Vue.js.
</title>
 <guid>https://github.com/egoist/saber.js</guid> <link>
https://github.com/egoist/saber.js
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26748">Comments</a>]]></description> <comments>https://www.echojs.com/news/26748</comments></item>
<item><title>
angular flex layout
</title>
 <guid>http://www.dzurico.com/angular-flex-layout/</guid> <link>
http://www.dzurico.com/angular-flex-layout/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26747">Comments</a>]]></description> <comments>https://www.echojs.com/news/26747</comments></item>
<item><title>
When arguments are mutable
</title>
 <guid>https://nec.is/writing/when-arguments-are-mutable/</guid> <link>
https://nec.is/writing/when-arguments-are-mutable/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26746">Comments</a>]]></description> <comments>https://www.echojs.com/news/26746</comments></item>
<item><title>
No.1 Custom &amp; Bespoke Suit Tailor in Hong Kong
</title>
 <guid>http://bobbysfashions.com/blog/no-1-bespoke-suit-tailor-in-hong-kong/</guid> <link>
http://bobbysfashions.com/blog/no-1-bespoke-suit-tailor-in-hong-kong/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26745">Comments</a>]]></description> <comments>https://www.echojs.com/news/26745</comments></item>
<item><title>
nanogallery2 v2.2.0 released - enhanced API for dynamic photo/video galleries
</title>
 <guid>https://github.com/nanostudio-org/nanogallery2/releases/tag/v2.2.0</guid> <link>
https://github.com/nanostudio-org/nanogallery2/releases/tag/v2.2.0
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26744">Comments</a>]]></description> <comments>https://www.echojs.com/news/26744</comments></item>
<item><title>
React and separation of concerns
</title>
 <guid>http://krasimirtsonev.com/blog/article/react-separation-of-concerns</guid> <link>
http://krasimirtsonev.com/blog/article/react-separation-of-concerns
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26742">Comments</a>]]></description> <comments>https://www.echojs.com/news/26742</comments></item>
<item><title>
Diving into functions. Passing by reference is a lie!
</title>
 <guid>https://wanago.io/2018/05/28/diving-into-functions-passing-by-reference-is-a-lie/</guid> <link>
https://wanago.io/2018/05/28/diving-into-functions-passing-by-reference-is-a-lie/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26741">Comments</a>]]></description> <comments>https://www.echojs.com/news/26741</comments></item>
<item><title>
Write Tests, Not Too Many, Mostly Integration
</title>
 <guid>https://www.youtube.com/watch?v=Fha2bVoC8SE&amp;amp;index=11&amp;amp;list=PLZ66c9_z3umNSrKSb5cmpxdXZcIPNvKGw</guid> <link>
https://www.youtube.com/watch?v=Fha2bVoC8SE&amp;amp;index=11&amp;amp;list=PLZ66c9_z3umNSrKSb5cmpxdXZcIPNvKGw
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26739">Comments</a>]]></description> <comments>https://www.echojs.com/news/26739</comments></item>
<item><title>
My Experience with getting into the Culture of Unit Testing
</title>
 <guid>https://happy-css.com/articles/my-experience-with-getting-into-the-culture-of-unit-testing/</guid> <link>
https://happy-css.com/articles/my-experience-with-getting-into-the-culture-of-unit-testing/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26736">Comments</a>]]></description> <comments>https://www.echojs.com/news/26736</comments></item>
<item><title>
TypeScript support for Node.js
</title>
 <guid>https://github.com/AviVahl/node-typescript-support</guid> <link>
https://github.com/AviVahl/node-typescript-support
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26735">Comments</a>]]></description> <comments>https://www.echojs.com/news/26735</comments></item>
<item><title>
Match Any Character with These RegExps (Old &amp; New)
</title>
 <guid>http://cwestblog.com/2018/05/26/javascript-regexp-match-any-character/</guid> <link>
http://cwestblog.com/2018/05/26/javascript-regexp-match-any-character/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26734">Comments</a>]]></description> <comments>https://www.echojs.com/news/26734</comments></item>
<item><title>
Generating a fastify plugin from a swagger spec
</title>
 <guid>https://github.com/seriousme/fastify-swaggergen</guid> <link>
https://github.com/seriousme/fastify-swaggergen
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26732">Comments</a>]]></description> <comments>https://www.echojs.com/news/26732</comments></item>
<item><title>
Announcing new Gatsby Company
</title>
 <guid>https://www.gatsbyjs.org/blog/2018-05-24-launching-new-gatsby-company/</guid> <link>
https://www.gatsbyjs.org/blog/2018-05-24-launching-new-gatsby-company/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26730">Comments</a>]]></description> <comments>https://www.echojs.com/news/26730</comments></item>
<item><title>
How JavaScript works: Parsing, Abstract Syntax Trees (ASTs) + 5 tips on how to minimize parse time
</title>
 <guid>https://blog.sessionstack.com/how-javascript-works-parsing-abstract-syntax-trees-asts-5-tips-on-how-to-minimize-parse-time-abfcf7e8a0c8</guid> <link>
https://blog.sessionstack.com/how-javascript-works-parsing-abstract-syntax-trees-asts-5-tips-on-how-to-minimize-parse-time-abfcf7e8a0c8
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26728">Comments</a>]]></description> <comments>https://www.echojs.com/news/26728</comments></item>
<item><title>
A Sneak peek to JavaScript AOP
</title>
 <guid>https://kyu.io/sneak-peek-to-javascript-aop/</guid> <link>
https://kyu.io/sneak-peek-to-javascript-aop/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26726">Comments</a>]]></description> <comments>https://www.echojs.com/news/26726</comments></item>
<item><title>
Should You Choose VueJS Over React?
</title>
 <guid>https://sloboda-studio.com/blog/should-you-choose-vuejs-over-react/</guid> <link>
https://sloboda-studio.com/blog/should-you-choose-vuejs-over-react/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26719">Comments</a>]]></description> <comments>https://www.echojs.com/news/26719</comments></item>
<item><title>
React Higher-Order Components in TypeScript
</title>
 <guid>https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb</guid> <link>
https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26714">Comments</a>]]></description> <comments>https://www.echojs.com/news/26714</comments></item>
<item><title>
Safeguarding async chains in React
</title>
 <guid>https://gist.github.com/loopmode/f42c816994edaa5404b8ca5763667f26</guid> <link>
https://gist.github.com/loopmode/f42c816994edaa5404b8ca5763667f26
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26713">Comments</a>]]></description> <comments>https://www.echojs.com/news/26713</comments></item>
<item><title>
Layered APIs: A new standards effort for collaborating on high-level features
</title>
 <guid>https://github.com/drufball/layered-apis</guid> <link>
https://github.com/drufball/layered-apis
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26712">Comments</a>]]></description> <comments>https://www.echojs.com/news/26712</comments></item>
<item><title>
How you can do continuous delivery with Vue, Docker, and Azure
</title>
 <guid>https://medium.freecodecamp.org/how-you-can-do-continuous-delivery-with-vue-docker-and-azure-2f1e31fff832</guid> <link>
https://medium.freecodecamp.org/how-you-can-do-continuous-delivery-with-vue-docker-and-azure-2f1e31fff832
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26711">Comments</a>]]></description> <comments>https://www.echojs.com/news/26711</comments></item>
<item><title>
Scalable Node.js with Kubernetes and Google Kubernetes Engine
</title>
 <guid>https://nodesource.com/blog/scalable-nodejs-with-kubernetes-and-google-kubernetes-engine/</guid> <link>
https://nodesource.com/blog/scalable-nodejs-with-kubernetes-and-google-kubernetes-engine/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26710">Comments</a>]]></description> <comments>https://www.echojs.com/news/26710</comments></item>
<item><title>
Build a command-line chat app with Node.js and Chatkit
</title>
 <guid>https://medium.freecodecamp.org/build-a-node-js-command-line-chat-application-with-chatkit-8d0c4546085e</guid> <link>
https://medium.freecodecamp.org/build-a-node-js-command-line-chat-application-with-chatkit-8d0c4546085e
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26709">Comments</a>]]></description> <comments>https://www.echojs.com/news/26709</comments></item>
<item><title>
Incremental Rebuilds and Hot Reloading: 60 Lines of Literate Code for Static Blogging
</title>
 <guid>https://roadtolarissa.com/literate-blogging/</guid> <link>
https://roadtolarissa.com/literate-blogging/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26708">Comments</a>]]></description> <comments>https://www.echojs.com/news/26708</comments></item>
<item><title>
Build Your Own Blog Using Gatsby and React
</title>
 <guid>https://blog.bitsrc.io/build-your-own-blog-using-gatsby-and-react-a1255a5ab086</guid> <link>
https://blog.bitsrc.io/build-your-own-blog-using-gatsby-and-react-a1255a5ab086
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26707">Comments</a>]]></description> <comments>https://www.echojs.com/news/26707</comments></item>
<item><title>
mixomatic - Mixins which work with instanceof and inheritance
</title>
 <guid>https://www.npmjs.com/package/mixomatic</guid> <link>
https://www.npmjs.com/package/mixomatic
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26706">Comments</a>]]></description> <comments>https://www.echojs.com/news/26706</comments></item>
<item><title>
generate a library (data-table) with angular-cli
</title>
 <guid>http://www.dzurico.com/generate-a-data-table-library-with-angular-6/</guid> <link>
http://www.dzurico.com/generate-a-data-table-library-with-angular-6/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26704">Comments</a>]]></description> <comments>https://www.echojs.com/news/26704</comments></item>
<item><title>
What can React Context API do for you? Multi-language text, Modals and Themes
</title>
 <guid>http://www.js-craft.io/blog/15-What-can-React-Context-API-do-for-you-Multi-language-Modals-Themes/</guid> <link>
http://www.js-craft.io/blog/15-What-can-React-Context-API-do-for-you-Multi-language-Modals-Themes/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26703">Comments</a>]]></description> <comments>https://www.echojs.com/news/26703</comments></item>
<item><title>
Domain Module Postmortem
</title>
 <guid>https://nodejs.org/en/docs/guides/domain-postmortem/</guid> <link>
https://nodejs.org/en/docs/guides/domain-postmortem/
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26700">Comments</a>]]></description> <comments>https://www.echojs.com/news/26700</comments></item>
<item><title>
Segment Consent Manager - Drop-in consent management plugin for analytics.js
</title>
 <guid>https://github.com/segmentio/consent-manager</guid> <link>
https://github.com/segmentio/consent-manager
</link>
 <description><![CDATA[<a href="https://www.echojs.com/news/26699">Comments</a>]]></description> <comments>https://www.echojs.com/news/26699</comments></item>
</channel></rss>
`

