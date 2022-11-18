import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c,a as e,d as a,b as r,e as o,r as l}from"./app.99eb8281.js";const d={},p=o('<p>想必大家对在线支付都不陌生，今天和大家聊聊如何防止订单重复支付。</p><h2 id="看看订单支付流程" tabindex="-1"><a class="header-anchor" href="#看看订单支付流程" aria-hidden="true">#</a> 看看订单支付流程</h2><p>我们来看看，电商订单支付的简要流程：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-d214715e-611b-40bd-be68-e4646e91cdcc.jpg" alt="订单钱包支付流程" loading="lazy"></p><p>从下单/计算开始：</p><ol><li><strong>下单/结算</strong>：这一步虽然不是直接的支付起点，但是支付相关的金额等等信息都来自结算，此时订单的状态是未支付</li><li><strong>申请支付</strong>：用户选择申请支付，客户端调用支付服务，此时在系统内产生一笔支付流水，这笔流水的状态是未支付</li><li><strong>发起支付</strong>：支付服务调用三方支付，通常这种钱包类的支付，在发起支付这一步，会响应一些支付的链接，客户端会对链接进行对应的处理。</li><li><strong>钱包支付</strong>：用户进行支付，通常是通过对应的钱包进行的，大家可以回忆一下自己在购物中，支付的过程，不同的端，对钱包支付的处理是不太一样的：</li></ol><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-9b6deba3-d86b-45d3-b17f-b3f4aa615505.jpg" alt="京东PC端支付页" loading="lazy"></p><ul><li><code>APP端</code>: 在国内，购物大部分都是在APP端，产品经理会想法设法把用户带到APP，为什么我的示例图都用京东，不用淘宝呢？因为我拿UC打开淘宝，会直接跳转APP。</li></ul><p>APP端的钱包支付，我们应该都非常熟悉，一般是拉起钱包，支付。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-9a63af83-39e5-463b-9a69-8e5238e4a49e.jpg" alt="APP支付" loading="lazy"></p><ul><li><code>WAP端</code>：手机的网页站，WAP端的支付一般是直接拉起对应的钱包，如果拉起钱包失败，就跳转界面</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-ba7c4a9a-27cb-43d3-8624-30f3b451ba26.jpg" alt="京东支付WAP端" loading="lazy"></p><ul><li><code>PC端</code>：PC端，通常是打开收银台，展示一个二维码，通过钱包扫码支付，下面是京东的微信支付扫码页</li></ul><ol start="6"><li><strong>支付回调</strong>：用户完成支付后，三方支付平台，会回调商户，通知支付结果。</li><li><strong>同步订单状态</strong>：支付服务在确认支付完成后，会向订单服务同步支付的结果，订单服务变更订单的状态，由未支付-》待发货，客户端通过轮询、长连接，或者服务端主动推送的方式，在界面上变更订单状态。</li></ol><p>我们再从支付流水的角度看一下支付状态的变化：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-a1c0390b-e070-4b77-a913-d28ce971b0af.jpg" alt="支付状态变化" loading="lazy"></p><ul><li>从未支付，到有支付结果的终态，中间还有一个中间状态<code>支付中</code></li><li>用户通过打开钱包--》完成支付--》支付回调，这段时间的支付流水就处于<code>支付中</code></li></ul><p>为什么要花这么多篇幅来讲支付的业务流程、交互过程呢？因为我认为，防止订单的重复支付，不止是技术上的问题，也是业务和产品上的问题。</p><h2 id="为什么订单会重复支付" tabindex="-1"><a class="header-anchor" href="#为什么订单会重复支付" aria-hidden="true">#</a> 为什么订单会重复支付</h2><h3 id="未防重导致的重复支付" tabindex="-1"><a class="header-anchor" href="#未防重导致的重复支付" aria-hidden="true">#</a> 未防重导致的重复支付</h3><p>我们可以看到PC端支付，是扫描二维码，这些二维码，就是对应相应的支付流水，假如用户重复点击支付，如果不做防重的的话，会生成两笔支付流水，也就是两个不同的二维码，要是用户分别扫了两个不同的支付码，那么毫无疑问，就会产生重复支付。</p><h3 id="掉单导致的重复支付" tabindex="-1"><a class="header-anchor" href="#掉单导致的重复支付" aria-hidden="true">#</a> 掉单导致的重复支付</h3><p>“我明明付款了，为什么我的订单还没支付呢？”</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-85a3662c-ccc6-4bea-8fd6-78374ad64fd5.jpg" alt="黑我钱是吧" loading="lazy"></p><p>这就是所谓的“掉单”：</p><ul><li>外部掉单：三方支付的支付状态没有同步或者没有及时同步到商城，这叫外部掉单</li><li>内部掉单：支付服务的状态没有同步到订单，或者客户端没有及时获取到订单状态，这叫内部掉单。</li></ul><p>用户一看，自己付了款，结果商城里订单还未付款，但是又特别想要，可能就会再下一单，这样就重复支付了。</p><h3 id="多渠道导致的重复支付" tabindex="-1"><a class="header-anchor" href="#多渠道导致的重复支付" aria-hidden="true">#</a> 多渠道导致的重复支付</h3><p>我们国内支付的体验还是非常快捷的，大家可能没有感觉，如果了解过海外支付的可能了解，很多支付的渠道，消耗的时间非常长。</p><p>比如用户保罗选择了一种支付方式<code>Boleto</code>，结果支付的网点离保罗他们村太远了，保罗又选择了<code>Paypal</code>支付，保罗去赶集的时候，又顺手去网点把<code>Boleto</code>的这一笔支付了，结果就重复支付了。</p><p>这种情况大家可能很少遇到，我们可以用<code>美团</code>下一个单，先打开微信支付，不要支付啊，接着回到美团，打开支付宝，用支付宝支付完成后，用微信接着支付，大家猜猜，两笔支付是不是都能成功？答案是可以。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-10584c11-08ca-4fb8-a6fb-a68155aeb21e.jpg" alt="美团多渠道支付" loading="lazy"></p><h2 id="如何防止订单重复支付" tabindex="-1"><a class="header-anchor" href="#如何防止订单重复支付" aria-hidden="true">#</a> 如何防止订单重复支付</h2><h3 id="加锁" tabindex="-1"><a class="header-anchor" href="#加锁" aria-hidden="true">#</a> 加锁</h3><p>不管是<code>3.申请支付</code>、还是<code>5.支付回调</code>,都应该以订单维度加锁，防止并发下的重复操作。</p><p>加锁，毫无疑问，也是分布式锁，通常我们会选择Redis分布式锁。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-31a82d77-598a-4b1e-bf73-0c2b5ac490f1.jpg" alt="" loading="lazy"></p><h3 id="缓存结果" tabindex="-1"><a class="header-anchor" href="#缓存结果" aria-hidden="true">#</a> 缓存结果</h3><p>申请支付成功，支付回调成功，都应该缓存结果。</p><p>再申请支付，收到成功回调的时候，都应该先去检查支付的状态。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-4dbb0659-7401-47be-b009-f266cca2d732.jpg" alt="" loading="lazy"></p><h3 id="支付中流水取消" tabindex="-1"><a class="header-anchor" href="#支付中流水取消" aria-hidden="true">#</a> 支付中流水取消</h3><p>假如说，用户重复支付了，再次申请支付的时候，如果已经申请支付成功了，那么这笔支付肯定是要拒绝的。</p><p>但是，要是已经存在的这笔流水还在<code>支付中</code>呢？——我们不确定它是成功还是失败，肯定是不能拒绝支付的，因为可能用户支付失败了，但是状态还没同步，这样肯定是不行的。</p><p>所以，我们可以取消掉正在支付中的流水，再进行支付。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-ef5a814e-e1fa-4851-b976-325c2ffc6b68.jpg" alt="" loading="lazy"></p><h3 id="已支付流水退款" tabindex="-1"><a class="header-anchor" href="#已支付流水退款" aria-hidden="true">#</a> 已支付流水退款</h3><p>现在又有新的问题了，假如发起支付的时候，有流水正在支付中，如果第三方支付平台不支持取消支付，或者用户新的支付是通过不同的渠道，我们希望尽可能提高用户的支付成功率，怎么办呢？</p><p>我们可以在发起支付的时候，订单还在支付中的情况下，允许用户发起多笔支付，在支付回调的时候，检查用户是否已经有成功流水，对后来的流水进行退款处理。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-41a23c59-9701-4f6e-808f-64b0c856327c.jpg" alt="支付回调" loading="lazy"></p><p>当然，退款是个很危险的操作，毕竟钱退了，可就很难追回来，一定要做好风险的控制。</p><h3 id="主动轮询-重试防止掉单" tabindex="-1"><a class="header-anchor" href="#主动轮询-重试防止掉单" aria-hidden="true">#</a> 主动轮询&amp;重试防止掉单</h3><h4 id="主动轮询防止外部掉单" tabindex="-1"><a class="header-anchor" href="#主动轮询防止外部掉单" aria-hidden="true">#</a> 主动轮询防止外部掉单</h4><p>如果因为故障没有收到回调，或者没有及时收到回调，就可能会发生所谓的外部掉单。</p><p>防止外部掉单的关键，就在于，不能傻傻地只等三方的回调通知，而要主动去查询，用户发起支付的3s之后，就可以发起轮询了，直到拿到支付流水的最终状态，主动轮询，一般可以这么实现：</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-4fe79ee5-b65f-4992-bec0-3f521aa7362d.jpg" alt="轮询" loading="lazy"></p><ul><li><strong>定时任务轮询</strong></li></ul><p>使用定时任务，扫描表中支付中的流水，主动查询支付的状态，定时任务的实现方式有很多，线程池、调度框架、分布式调度框架等等。</p><p>定时任务轮询的缺点有两个：</p><ol><li>对数据库有一些压力，观察监控，会发现定时任务扫表的时候，有时候会造成数据库的一些“峰刺”</li><li>不便调整频率，实际上，用户发起一笔支付之后，一般都会在10s-1min中完成支付，越往后，用户完成支付，所以轮询梯度进行，会更合理一些，轮询的间隔可以设置成类似这种：3s，10s，30s，3min……</li></ol><ul><li><strong>延时消息轮询</strong></li></ul><p>另外一种方式就是使用延时消息，用户发起支付之后，发送一个延时消息，消费到延时消息之后，查询流水支付状态，没有拿到最终状态，就再发一个延时消息。延时消息的好处是对数据库的压力没有那么大，轮询的梯度也可以进行控制，缺点是实现起来复杂一些，而且要维护消息队列。</p><h4 id="同步-异步防止内部掉单" tabindex="-1"><a class="header-anchor" href="#同步-异步防止内部掉单" aria-hidden="true">#</a> 同步+异步防止内部掉单</h4><p>支付服务在收到异步通知回调、或者主动轮询到流水的最终状态后，要通知订单服务支付流水的变化，订单服务同步更新订单的状态，这个过程要尽可能保证通知成功，可以采用同步+异步的方式。</p><ul><li>同步调用：支付服务调用订单服务的通知接口，有可能会因为网络等等的原因失败，也可以重试，但是根据经验，如果网络出现一些波动，重试很可能也会失败。</li><li>异步通知：支付服务还应该发送一个支付成功的消息，订单服务可以利用消息队列的重试机制，来尽可能保证支付状态的同步。</li></ul><p>这里还有一个问题，客户端如何同步这个状态？因为可能服务端更新了订单状态，但是客户端的界面上还是未支付，得用户主动刷新一下，才能拿到最新的状态，这样明显是不太合适的。</p><p>服务端、客户端的状态同步，无非就<code>拉</code>和<code>推</code>:</p><ul><li>拉：很简单，就是客户端在用户跳回订单状态页的时候，轮询一会，如果用户完成支付，通常很短时间就能获取到状态的变更，当然这种方式对客户端的性能会有一些影响，而且很出现状态同步“漏网之鱼”的情况。</li><li>推：推的实现有些麻烦，Web通常是用Websocket，对APP端的推送，一般采用第三方的推送平台。</li></ul><h3 id="客户端支付尽可能不外跳" tabindex="-1"><a class="header-anchor" href="#客户端支付尽可能不外跳" aria-hidden="true">#</a> 客户端支付尽可能不外跳</h3><p>不管从产品的角度，还是技术的角度，客户端发起支付这一步，其实应该尽可能地不要外跳，PC端使用支付服务生成的支付码，而不是跳转；移动端网页、APP在应用内展示支付页，当然这个是由第三方支付平台决定的。</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-ruhfzddcfzf-0a29dff7-75eb-43b9-a2e4-fd04e9b299e6.jpg" alt="在UC内内嵌支付宝" loading="lazy"></p><p>不知道大家留意到了没有，现在的支付宝，已经做到了不用拉起钱包，在应用内就可以完成支付，这个对于商家的意义还是比较大的，对用户体验、支付成功率，都有正面的作用，相信以国内的内卷程度，其它支付供应商，一定会“跟进”的。</p><h2 id="ending" tabindex="-1"><a class="header-anchor" href="#ending" aria-hidden="true">#</a> ending</h2>',73),s={href:"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,[e("img",{src:"https://files.mdnice.com/user/3903/0c9e5f37-f702-4799-9a56-0ad87173e875.png",alt:"",loading:"lazy"})],-1),b=e("p",null,[e("img",{src:"https://files.mdnice.com/user/3903/93ef3f1d-10f1-433a-932e-d5ba45cd61ee.png",alt:"",loading:"lazy"})],-1),f=e("p",null,[e("img",{src:"https://files.mdnice.com/user/3903/16199e4c-5e44-4924-abcb-46a6e1e1bc0f.png",alt:"",loading:"lazy"})],-1),g=e("strong",null,"650 多名",-1),m={href:"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g",target:"_blank",rel:"noopener noreferrer"},u={href:"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[e("img",{src:"https://files.mdnice.com/user/3903/b76fe1f7-cca8-48e8-99dc-061233ed1b5e.png",alt:"",loading:"lazy"})],-1),x=e("p",null,[e("img",{src:"https://files.mdnice.com/user/3903/d6587d16-7953-417c-a0e8-78868bb8f71f.png",alt:"",loading:"lazy"})],-1),z=e("hr",null,null,-1),j=e("p",null,"没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟。",-1),v=e("p",null,[e("strong",null,"推荐阅读"),a("：")],-1),w={href:"https://mp.weixin.qq.com/s/yH42DxmRBSjrr0SW9N3MFg",target:"_blank",rel:"noopener noreferrer"},P={href:"https://mp.weixin.qq.com/s/miOagyv4x3HrqVaU38uh4w",target:"_blank",rel:"noopener noreferrer"},q={href:"https://mp.weixin.qq.com/s/s7KwW0cw2ZPR60SPFc6K0Q",target:"_blank",rel:"noopener noreferrer"},y={href:"https://mp.weixin.qq.com/s/iETW0dCfxxTTiRt1-WmeNw",target:"_blank",rel:"noopener noreferrer"},k={href:"https://mp.weixin.qq.com/s/9Naa2r7Xkf9D4d9tqEdgVQ",target:"_blank",rel:"noopener noreferrer"},A={href:"https://mp.weixin.qq.com/s/2IUe50xBhuEWKDzARVd51A",target:"_blank",rel:"noopener noreferrer"},B={href:"https://mp.weixin.qq.com/s/3lqp4x1B5LI1hNjWAi6v1g",target:"_blank",rel:"noopener noreferrer"},C={href:"https://mp.weixin.qq.com/s/ZeA-mEyMkEeSHRtd8Pob9A",target:"_blank",rel:"noopener noreferrer"},W=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-rumrabbitmqzypjdg-53717e59-63c9-44bd-99d3-dd2c26fe68bb.png",alt:"",loading:"lazy"})],-1);function E(N,V){const t=l("ExternalLinkIcon");return n(),c("div",null,[p,e("p",null,[a("一个人可以走得很快，但一群人才能走得更远。欢迎加入"),e("a",s,[a("二哥的编程星球"),r(t)]),a("，里面的每个球友都非常的友善，除了鼓励你，还会给你提出合理的建议。星球提供的三份专属专栏《Java 面试指南》、《编程喵 🐱（Spring Boot+Vue 前后端分离）实战项目笔记》、《Java 版 LeetCode 刷题笔记》，干货满满，价值连城。")]),h,b,f,e("p",null,[a("已经有 "),g,a(" 小伙伴加入"),e("a",m,[a("二哥的编程星球"),r(t)]),a("了，如果你也需要一个良好的学习氛围，"),e("a",u,[a("戳链接"),r(t)]),a("加入我们的大家庭吧！这是一个 Java 学习指南 + 编程实战 + LeetCode 刷题的私密圈子，你可以向二哥提问、帮你制定学习计划、跟着二哥一起做实战项目，冲冲冲。")]),_,x,z,j,v,e("ul",null,[e("li",null,[e("a",w,[a("专升本上岸的秘诀"),r(t)])]),e("li",null,[e("a",P,[a("愤怒，一个破培训班要价 28 万"),r(t)])]),e("li",null,[e("a",q,[a("公司不卡学历，却担心自己实力不够"),r(t)])]),e("li",null,[e("a",y,[a("今年面试有点小难，还是要冲"),r(t)])]),e("li",null,[e("a",k,[a("人生当中挣到的第一个 1 万元"),r(t)])]),e("li",null,[e("a",A,[a("新一代开源免费的终端工具，太酷了"),r(t)])]),e("li",null,[e("a",B,[a("Java 后端四件套学习资料"),r(t)])]),e("li",null,[e("a",C,[a("银行开发太安逸，奋发图强要跳槽"),r(t)])])]),W])}const R=i(d,[["render",E],["__file","ruhfzddcfzf.html.vue"]]);export{R as default};
