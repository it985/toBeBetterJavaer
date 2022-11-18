import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c,a as i,d as e,b as l,e as t,r as o}from"./app.99eb8281.js";const r={},s=t(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>大家好，我是<strong>鱼皮。</strong></p><p>最近有粉丝私信说被oppo的后端面试问麻了,所以今天给大家推荐一篇整理了16道oppo面试真题答案的文章。希望对大家有帮助哈，一起学习，一起进步。</p><ol><li>聊聊你印象最深刻的项目，或者做了什么优化。</li><li>你项目提到分布式锁，你们是怎么使用分布式锁的?</li><li>常见分布式事务解决方案</li><li>你们的接口幂等是如何保证的？</li><li>你们的MySQL架构是怎样的？</li><li>常见的索引结构有？哈希表结构属于哪种场景？</li><li>给你ab,ac,abc字段，你是如何加索引的？</li><li>数据库隔离级别是否了解？你们的数据库默认隔离级别是？为什么选它？</li><li>RR隔离级别实现原理，它是如何解决不可重复读的？</li><li>你们项目使用了RocketMQ对吧？那你知道如何保证消息不丢失吗？</li><li>事务消息是否了解？场景题：比如下单清空购物车，你是如何设计的？</li><li>如何快速判断一个数是奇数还是偶数，除开对2取余呢。</li><li>Spring声明式事务原理？哪些场景事务会失效？</li><li>你们是微服务架构嘛？如果你来设计一个类似淘宝的系统，你怎么划分微服务？</li><li>你们是怎么分库分表的？分布式ID如何生成？</li><li>所有异常的共同祖先是？运行时异常有哪几个？</li></ol><h2 id="_1-聊聊你印象最深刻的项目-或者做了什么优化。" tabindex="-1"><a class="header-anchor" href="#_1-聊聊你印象最深刻的项目-或者做了什么优化。" aria-hidden="true">#</a> 1. 聊聊你印象最深刻的项目，或者做了什么优化。</h2><p>大家平时做的项目，如果很多知识点跟面试八股文相关的话，就可以相对条理清晰地写到简历去。</p><ul><li>比如缓存数据库相关的，查询为空，你设置了一个<code>-1</code>到缓存，代表数据库没记录。下次判断<code>-1</code>，就不查库了，以解决缓存穿透问题。</li><li>又比如你设置缓存过期时间比较分散，解决缓存击穿问题，都可以条理清晰写到简历去，这样面试官很可能会问你相关的问题，这时候就对答如流啦。</li></ul><p>还有平时你做的项目，有一些比较好的设计，都可以说一下哈，比如你是如何保证数据一致性的，怎么优化接口性能的。</p><ul><li>如果是讲<strong>优化接口</strong>这一块的话，其实就是<strong>缓存、分批、并发调用、异步</strong>等那几个关键知识点。</li><li>如果是代码优化细节，你可以挑个简单的来讲，比如<strong>复杂的if逻辑条件，可以调整顺序，让程序更高效</strong>，这样会让面试官眼前一亮哦。</li></ul><h2 id="_2-你项目提到分布式锁-你们是怎么使用分布式锁的" tabindex="-1"><a class="header-anchor" href="#_2-你项目提到分布式锁-你们是怎么使用分布式锁的" aria-hidden="true">#</a> 2. 你项目提到分布式锁，你们是怎么使用分布式锁的?</h2><p>一般你讲述你做的项目时，面试官会根据你项目涉及的一些面试点，然后抽他感兴趣的一两个来问。所以大家对哪些知识点熟悉，讲述项目时，就说你用该知识点，解决了什么问题。</p><h2 id="_3-常见分布式事务解决方案" tabindex="-1"><a class="header-anchor" href="#_3-常见分布式事务解决方案" aria-hidden="true">#</a> 3. 常见分布式事务解决方案</h2><blockquote><p><strong>分布式事务</strong>：就是指事务的参与者、支持事务的服务器、资源服务器以及事务管理器分别位于不同的分布式系统的不同节点之上。简单来说，分布式事务指的就是分布式系统中的事务，它的存在就是为了保证不同数据库节点的数据一致性。</p></blockquote><p>聊到分布式事务，大家记得这两个理论哈：<strong>CAP理论 和 BASE 理论</strong></p><p>分布式事务的几种解决方案：</p><ul><li>2PC(二阶段提交)方案、3PC</li><li>TCC（Try、Confirm、Cancel）</li><li>本地消息表</li><li>最大努力通知</li><li>seata</li></ul><p><strong>2PC(二阶段提交)方案</strong></p><p>2PC，即两阶段提交，它将分布式事务的提交拆分为2个阶段：<code>prepare和commit/rollback</code>，即准备阶段和提交执行阶段。在prepare准备阶段需要等待所有参与子事务的反馈，因此可能造成数据库资源锁定时间过长，不适合并发高以及子事务生命周长较长的业务场景。并且协调者宕机的话，所有的参与者都收不到提交或回滚指令。</p><p><strong>3PC</strong></p><p>两阶段提交分别是：<code>CanCommit，PreCommit 和 doCommit</code>，这里不再详述。3PC 利用超时机制解决了 2PC 的同步阻塞问题，避免资源被永久锁定，进一步加强了整个事务过程的可靠性。但是 3PC 同样无法应对类似的宕机问题，只不过出现多数据源中数据不一致问题的概率更小。</p><p><strong>TCC</strong></p><p>TCC 采用了补偿机制，其核心思想是：针对每个操作，都要注册一个与其对应的确认和补偿（撤销）操作。它分为三个阶段：<code>Try-Confirm-Cancel</code></p><ul><li>try阶段：尝试去执行，完成所有业务的一致性检查，预留必须的业务资源。</li><li>Confirm阶段：该阶段对业务进行确认提交，不做任何检查，因为try阶段已经检查过了，默认Confirm阶段是不会出错的。</li><li>Cancel 阶段：若业务执行失败，则进入该阶段，它会释放try阶段占用的所有业务资源，并回滚Confirm阶段执行的所有操作。</li></ul><p>TCC方案让应用可以自定义数据库操作的粒度，降低了锁冲突，可以提升性能。但是应用侵入性强，try、confirm、cancel三个阶段都需要业务逻辑实现。</p><p><strong>本地消息表</strong></p><p>ebay最初提出本地消息表这个方案，来解决分布式事务问题。业界目前使用这种方案是比较多的，它的核心思想就是将分布式事务拆分成本地事务进行处理。可以看一下基本的实现流程图：</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibT2KKJWXTtgIC96nlbAhQfKvesxs5IPsu6y0Y1vHWiboicWc1J4Wca6XA/640?wx_fmt=png" alt="" loading="lazy"></p><p><strong>最大努力通知</strong></p><p>最大努力通知方案的目标，就是发起通知方通过一定的机制，最大努力将业务处理结果通知到接收方。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibiaf6TKxuMuJ4ECYJD30sJBU9kicsxFn0DRTzDEspCBhNJfWC8zubQQ5A/640?wx_fmt=png" alt="" loading="lazy"></p><p><strong>seata</strong></p><p>Saga 模式是 Seata 提供的长事务解决方案。核心思想是将长事务拆分为多个本地短事务，由Saga事务协调器协调，如果正常结束那就正常完成，如果某个步骤失败，则根据相反顺序一次调用补偿操作。</p><p>Saga的并发度高，但是一致性弱，对于转账，可能发生用户已扣款，最后转账又失败的情况。</p><h2 id="_4-你们的接口幂等是如何保证的" tabindex="-1"><a class="header-anchor" href="#_4-你们的接口幂等是如何保证的" aria-hidden="true">#</a> 4. 你们的接口幂等是如何保证的？</h2><p>如果你调用下游接口超时了，是不是考虑重试？如果重试，下游接口就需要支持幂等啦。</p><p>实现幂等一般有这8种方案：</p><ul><li>select+insert+主键/唯一索引冲突</li><li>直接insert + 主键/唯一索引冲突</li><li>状态机幂等</li><li>抽取防重表</li><li>token令牌</li><li>悲观锁(如select for update，很少用)</li><li>乐观锁</li><li>分布式锁</li></ul><p>大家平时是用哪个方案解决幂等的，最后结合工作实际讲讲哈。</p><h2 id="_5-你们的mysql架构是怎样的" tabindex="-1"><a class="header-anchor" href="#_5-你们的mysql架构是怎样的" aria-hidden="true">#</a> 5. 你们的mySQL架构是怎样的？</h2><p>大家可以结合自己公司的MySQL架构聊聊。</p><p>数据的库高可用方案</p><ul><li>双机主备</li><li>一主一从</li><li>一主多从</li><li>MariaDB同步多主机</li><li>数据库中间件</li></ul><h3 id="_5-1-双机主备" tabindex="-1"><a class="header-anchor" href="#_5-1-双机主备" aria-hidden="true">#</a> 5.1 双机主备</h3><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibMrsSWww1lBtazR0jGJic8wz8U4sp8YIfneMBMibpKBysJUOgUmH02eeA/640?wx_fmt=png" alt="" loading="lazy"></p><ul><li>优点：一个机器故障了可以自动切换，操作比较简单。</li><li>缺点：只有一个库在工作，读写压力大，未能实现读写分离，并发也有一定限制</li></ul><h3 id="_5-2-一主一从" tabindex="-1"><a class="header-anchor" href="#_5-2-一主一从" aria-hidden="true">#</a> 5.2 一主一从</h3><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibtbJHlYnknicibJgZQCsMTKtyTBZLA91jaVawqdjgiaIPVhOOPTXSJ3CDg/640?wx_fmt=png" alt="" loading="lazy"></p><ul><li>优点：从库支持读，分担了主库的压力，提升了并发度。一个机器故障了可以自动切换，操作比较简单。</li><li>缺点：一台从库，并发支持还是不够，并且一共两台机器，还是存在同时故障的机率，不够高可用。</li></ul><h3 id="_5-3-一主多从" tabindex="-1"><a class="header-anchor" href="#_5-3-一主多从" aria-hidden="true">#</a> 5.3 一主多从</h3><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibQ9FgmO7AiaAC4ktliaddy5agyXnicGLNh81LSQV6YT25K8XQ1m5QYpxWw/640?wx_fmt=png" alt="" loading="lazy"></p><ul><li>优点：多个从库支持读，分担了主库的压力，明显提升了读的并发度。</li><li>缺点：只有一台主机写，因此写的并发度不高</li></ul><h3 id="_5-4-mariadb同步多主机集群" tabindex="-1"><a class="header-anchor" href="#_5-4-mariadb同步多主机集群" aria-hidden="true">#</a> 5.4 MariaDB同步多主机集群</h3><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibwzjbh1NOgJlpvVSZYh0iahH3VCU860IiaMODnJzJHNyaVWNkKib3pJLww/640?wx_fmt=png" alt="" loading="lazy"></p><ul><li>有代理层实现负载均衡，多个数据库可以同时进行读写操作；各个数据库之间可以通过Galera Replication方法进行数据同步，每个库理论上数据是完全一致的。</li><li>优点：读写的并发度都明显提升，可以任意节点读写，可以自动剔除故障节点，具有较高的可靠性。</li><li>缺点：数据量不支持特别大。要避免大事务卡死，如果集群节点一个变慢，其他节点也会跟着变慢。</li></ul><h3 id="_5-5-数据库中间件" tabindex="-1"><a class="header-anchor" href="#_5-5-数据库中间件" aria-hidden="true">#</a> 5.5 数据库中间件</h3><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibodj44g4RwPE7SYI4bqEZrIy4uX2MsBZZFCLicSGY0icmDH11WQmBoqdg/640?wx_fmt=png" alt="" loading="lazy"></p><ul><li>mycat分片存储，每个分片配置一主多从的集群。</li><li>优点：解决高并发高数据量的高可用方案</li><li>缺点：维护成本比较大。</li></ul><h2 id="_6-常见的索引结构有-哈希表结构属于哪种场景" tabindex="-1"><a class="header-anchor" href="#_6-常见的索引结构有-哈希表结构属于哪种场景" aria-hidden="true">#</a> 6. 常见的索引结构有？哈希表结构属于哪种场景？</h2><p>哈希表、有序数组和搜索树。</p><ul><li>哈希表这种结构适用于只有等值查询的场景</li><li>有序数组适合范围查询，用二分法快速得到，时间复杂度为 O(log(N))。查询还好，如果是插入，就得挪动后面所有的记录，成本太高。因此它一般只适用静态存储引擎，比如保存2018年某个城市的所有人口信息。</li><li>B+树适合范围查询，我们一般建的索引结构都是B+树。</li></ul><h2 id="_7-给你ab-ac-abc字段-你是如何加索引的" tabindex="-1"><a class="header-anchor" href="#_7-给你ab-ac-abc字段-你是如何加索引的" aria-hidden="true">#</a> 7.给你ab,ac,abc字段，你是如何加索引的？</h2><p>这主要考察联合索引的最左前缀原则知识点。</p><ul><li>这个最左前缀可以是联合索引的最左<code>N</code>个字段。比如组合索引<code>（a,b,c）</code>可以相当于建了<code>（a），（a,b）,(a,b,c)</code>三个索引，大大提高了索引复用能力。</li><li>最左前缀也可以是字符串索引的最左<code>M</code>个字符。</li></ul><p>因此给你<code>ab,ac,abc</code>字段，你可以直接加<code>abc</code>联合索引和<code>ac</code>联合索引即可。</p><h2 id="_8-数据库隔离级别是否了解-你们的数据库默认隔离级别是-为什么选它" tabindex="-1"><a class="header-anchor" href="#_8-数据库隔离级别是否了解-你们的数据库默认隔离级别是-为什么选它" aria-hidden="true">#</a> 8. 数据库隔离级别是否了解？你们的数据库默认隔离级别是？为什么选它？</h2><p>四大数据库隔离级别，分别是<code>读未提交，读已提交，可重复读，串行化（Serializable）</code>。</p><ul><li><strong>读未提交</strong>：事务即使未提交，却可以被别的事务读取到的，这级别的事务隔离有脏读、重复读、幻读的问题。</li><li><strong>读已提交</strong>：当前事务只能读取到其他事务提交的数据，这种事务的隔离级别解决了脏读问题，但还是会存在不可重复读、幻读问题；</li><li><strong>可重复读</strong>：限制了读取数据的时候，不可以进行修改，所以解决了<strong>不可重复读</strong>的问题，但是读取范围数据的时候，是可以插入数据，所以还会存在幻读问题。</li><li><strong>串行化</strong>：事务最高的隔离级别，在该级别下，所有事务都是进行串行化顺序执行的。可以避免脏读、不可重复读与幻读所有并发问题。但是这种事务隔离级别下，事务执行很耗性能。</li></ul><p>MySQL选择<code>Repeatable Read（可重复读）</code>作为默认隔离级别，我们的数据库隔离级别选的是<code>读已提交</code>。</p><h3 id="_8-1-为什么mysql的默认隔离离别是rr" tabindex="-1"><a class="header-anchor" href="#_8-1-为什么mysql的默认隔离离别是rr" aria-hidden="true">#</a> 8.1 为什么MySQL的默认隔离离别是RR?</h3><p>binlog的格式也有三种：statement，row，mixed。设置为<code>statement</code>格式，binlog记录的是SQL的原文。又因为MySQL在主从复制的过程是通过<code>binlog</code>进行数据同步，如果设置为读已提交（RC）隔离级别，当出现事务乱序的时候，就会导致备库在 SQL 回放之后，结果和主库内容不一致。</p><p>比如一个表t，表中有两条记录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  

CREATE TABLE t (    

     a int(11) DEFAULT NULL,    

     b int(11) DEFAULT NULL,    

     PRIMARY KEY a (a),  

     KEY b(b)  

   ) ENGINE=InnoDB DEFAULT CHARSET=latin1;    

   insert into t1 values(10,666),(20,233);   

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个事务并发写操作，如下：</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibMSvVJf2hnOWETT26buWgm1Llib2MGUon1bbqnloLhicclJibT4daY84QQ/640?wx_fmt=png" alt="" loading="lazy"></p><p>在<code>读已提交（RC）</code>隔离级别下，两个事务执行完后，数据库的两条记录就变成了<code>（30,666）、(20,666)</code>。这两个事务执行完后，binlog也就有两条记录，因为事务binlog用的是<code>statement</code>格式，事务2先提交，因此<code>update t set b=666 where b=233</code>优先记录，而<code>update t set a=30 where b=666</code>记录在后面。</p><p>当<code>bin log</code>同步到从库后，执行<code>update t set b=666 where b=233</code>和<code>update t set a=30 where b=666</code>记录，数据库的记录就变成<code>（30,666）、(30,666)</code>，这时候主从数据不一致啦。</p><p>因此MySQL的<strong>默认隔离离别</strong>选择了<code>RR</code>而不是<code>RC</code>。<code>RR</code>隔离级别下，更新数据的时候不仅对更新的行加行级锁，还会加间隙锁<code>（gap lock）</code>。事务2要执行时，因为事务1增加了间隙锁，就会导致事务2执行被卡住，只有等事务1提交或者回滚后才能继续执行。</p><p>并且，MySQL还禁止在使用<code>statement</code>格式的<code>binlog</code>的情况下，使用<code>READ COMMITTED</code>作为事务隔离级别。</p><h3 id="我们的数据库隔离级别最后选的是读已提交-rc-。" tabindex="-1"><a class="header-anchor" href="#我们的数据库隔离级别最后选的是读已提交-rc-。" aria-hidden="true">#</a> 我们的数据库隔离级别最后选的是读已提交（RC）。</h3><p>那为什么MySQL官方默认隔离级别是RR，而有些大厂选择了RC作为默认的隔离级别呢？</p><ul><li>提升并发</li></ul><p>RC 在加锁的过程中，不需要添加<code>Gap Lock</code>和 <code>Next-Key Lock</code> 的，只对要修改的记录添加行级锁就行了。因此RC的支持的并发度比RR高得多，</p><ul><li>减少死锁</li></ul><p>正是因为RR隔离级别增加了<code>Gap Lock</code>和 <code>Next-Key Lock</code> 锁，因此它相对于RC，更容易产生死锁。</p><h2 id="_9-rr隔离级别实现原理-它是如何解决不可重复读的" tabindex="-1"><a class="header-anchor" href="#_9-rr隔离级别实现原理-它是如何解决不可重复读的" aria-hidden="true">#</a> 9. RR隔离级别实现原理，它是如何解决不可重复读的？</h2><h3 id="_9-1-什么是不可重复读" tabindex="-1"><a class="header-anchor" href="#_9-1-什么是不可重复读" aria-hidden="true">#</a> 9.1 什么是不可重复读</h3><p>先回忆下什么是<strong>不可重复读</strong>。假设现在有两个事务A和B：</p><ul><li>事务A先查询Jay的余额，查到结果是100</li><li>这时候事务B 对Jay的账户余额进行扣减，扣去10后，提交事务</li><li>事务A再去查询Jay的账户余额发现变成了90</li></ul><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAiba3OUDd1QonTWQ4CmyOzEaGVWAtzdgicwY8yUPwtFjjePRbn7J7UspsQ/640?wx_fmt=png" alt="" loading="lazy"></p><p>事务A被事务B干扰到了！在事务A范围内，两个相同的查询，<strong>读取同一条记录，却返回了不同的数据，这就是不可重复读</strong>。</p><h3 id="_9-2-undo-log版本链-read-view可见性规则" tabindex="-1"><a class="header-anchor" href="#_9-2-undo-log版本链-read-view可见性规则" aria-hidden="true">#</a> 9.2 undo log版本链 + Read View可见性规则</h3><p>RR隔离级别实现原理，就是MVCC多版本并发控制，而MVCC是是通过<code>Read View+ Undo Log</code>实现的，Undo Log 保存了历史快照，Read View可见性规则帮助判断当前版本的数据是否可见。</p><p><code>Undo Log</code>版本链长这样：</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibeVAZhoVfuV2AAdIFnzda5mBmllMGTtV25nNPUBU0SkBZOYdibjibpvwQ/640?wx_fmt=png" alt="" loading="lazy"></p><p>Read view 的几个重要属性</p><ul><li><code>m_ids</code>:当前系统中那些活跃(未提交)的读写事务ID, 它数据结构为一个List。</li><li><code>min_limit_id</code>:表示在生成Read View时，当前系统中活跃的读写事务中最小的事务id，即m_ids中的最小值。</li><li><code>max_limit_id</code>:表示生成Read View时，系统中应该分配给下一个事务的id值。</li><li><code>creator_trx_id</code>: 创建当前Read View的事务ID</li></ul><p>Read view 可见性规则如下：</p><ol><li>如果数据事务ID<code>trx_id &lt; min_limit_id</code>，表明生成该版本的事务在生成Read View前，已经提交(因为事务ID是递增的)，所以该版本可以被当前事务访问。</li><li>如果<code>trx_id&gt;= max_limit_id</code>，表明生成该版本的事务在生成Read View后才生成，所以该版本不可以被当前事务访问。</li><li>如果<code>min_limit_id =&lt;trx_id&lt; max_limit_id</code>,需要分3种情况讨论</li></ol><blockquote><ul><li>3.1 如果<code>m_ids</code>包含<code>trx_id</code>,则代表Read View生成时刻，这个事务还未提交，但是如果数据的<code>trx_id</code>等于<code>creator_trx_id</code>的话，表明数据是自己生成的，因此是可见的。</li><li>3.2 如果<code>m_ids</code>包含<code>trx_id</code>，并且<code>trx_id</code>不等于<code>creator_trx_id</code>，则Read View生成时，事务未提交，并且不是自己生产的，所以当前事务也是看不见的；</li><li>3.3 如果<code>m_ids</code>不包含<code>trx_id</code>，则说明你这个事务在Read View生成之前就已经提交了，修改的结果，当前事务是能看见的。</li></ul></blockquote><h3 id="_9-3-rr-如何解决不可重复读" tabindex="-1"><a class="header-anchor" href="#_9-3-rr-如何解决不可重复读" aria-hidden="true">#</a> 9.3 RR 如何解决不可重复读</h3><p>查询一条记录，基于MVCC，是怎样的流程</p><ol><li>获取事务自己的版本号，即事务ID</li><li>获取Read View</li><li>查询得到的数据，然后Read View中的事务版本号进行比较。</li><li>如果不符合Read View的可见性规则， 即就需要Undo log中历史快照;</li><li>最后返回符合规则的数据</li></ol><p>假设存在事务A和B，SQL执行流程如下</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibu16icBALg9RgePHoREiaicIMKfhicdTYDpicKgc698tUQrZj9QaFicqgJU9A/640?wx_fmt=png" alt="" loading="lazy"></p><p>在可重复读（RR）隔离级别下，<strong>一个事务里只会获取一次Read View</strong>，都是副本共用的，从而保证每次查询的数据都是一样的。</p><p>假设当前有一张core_user表，插入一条初始化数据,如下：</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAib5BuIpklWZXauSovTx5Da38rpmWiauAQ7zkY12DnAuvgW5JnOIvYVGqw/640?wx_fmt=png" alt="" loading="lazy">基于MVCC，我们来看看执行流程</p><ol><li>A开启事务，首先得到一个事务ID为100</li><li>B开启事务，得到事务ID为101</li><li>事务A生成一个Read View，read view对应的值如下</li></ol><table><thead><tr><th>变量</th><th>值</th></tr></thead><tbody><tr><td>m_ids</td><td>100，101</td></tr><tr><td>max_limit_id</td><td>102</td></tr><tr><td>min_limit_id</td><td>100</td></tr><tr><td>creator_trx_id</td><td>100</td></tr></tbody></table><p>然后回到版本链：开始从版本链中挑选可见的记录：</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAiblmQLBfGiaGHzqQEYCPhgTtYPSfoWXDkFcp9MqYPUuO2sEkuyS9mPNqA/640?wx_fmt=png" alt="" loading="lazy"></p><p>由图可以看出，最新版本的列name的内容是孙权，该版本的trx_id值为100。开始执行<strong>read view可见性规则</strong>校验：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>min_limit_id(100)=&lt;trx_id（100）&lt;102;  

creator_trx_id = trx_id =100;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可得，trx_id=100的这个记录，当前事务是可见的。所以查到是<strong>name为孙权</strong>的记录。</p><ol start="4"><li>事务B进行修改操作，把名字改为曹操。把原数据拷贝到undo log,然后对数据进行修改，标记事务ID和上一个数据版本在undo log的地址。</li></ol><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAiblILtb4QNnneTsITr691ePXzahWjYUxjAgcjiaWXic7v7weZ7cQTibIpEQ/640?wx_fmt=png" alt="" loading="lazy"></p><ol start="5"><li>事务B提交事务</li><li>事务A再次执行查询操作，因为是RR（可重复读）隔离级别，因此<strong>会复用老的Read View副本</strong>，Read View对应的值如下</li></ol><table><thead><tr><th>变量</th><th>值</th></tr></thead><tbody><tr><td>m_ids</td><td>100，101</td></tr><tr><td>max_limit_id</td><td>102</td></tr><tr><td>min_limit_id</td><td>100</td></tr><tr><td>creator_trx_id</td><td>100</td></tr></tbody></table><p>然后再次回到版本链：从版本链中挑选可见的记录：</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAiblILtb4QNnneTsITr691ePXzahWjYUxjAgcjiaWXic7v7weZ7cQTibIpEQ/640?wx_fmt=png" alt="" loading="lazy"></p><p>从图可得，最新版本的列name的内容是曹操，该版本的trx_id值为101。开始执行read view可见性规则校验：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>min_limit_id(100)=&lt;trx_id（101）&lt;max_limit_id（102);  

因为m_ids{100,101}包含trx_id（101），  

并且creator_trx_id (100) 不等于trx_id（101）  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，<code>trx_id=101</code>这个记录，对于当前事务是不可见的。这时候呢，版本链<code>roll_pointer</code>跳到下一个版本，<code>trx_id=100</code>这个记录，再次校验是否可见：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>min_limit_id(100)=&lt;trx_id（100）&lt; max_limit_id（102);  

因为m_ids{100,101}包含trx_id（100），  

并且creator_trx_id (100) 等于trx_id（100）  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，trx_id=100这个记录，对于当前事务是可见的，所以两次查询结果，都是name=孙权的那个记录。即在可重复读（RR）隔离级别下，复用老的Read View副本，解决了不可重复读的问题。</p><h2 id="_10-你们项目使用了rocketmq对吧-那你知道如何保证消息不丢失吗" tabindex="-1"><a class="header-anchor" href="#_10-你们项目使用了rocketmq对吧-那你知道如何保证消息不丢失吗" aria-hidden="true">#</a> 10. 你们项目使用了RocketMQ对吧？那你知道如何保证消息不丢失吗？</h2><p>一个消息从生产者产生，到被消费者消费，主要经过这3个过程：</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibSFUmX9dROjhlhKSkbCL8BMMIRXaXmAv17N4AJLMhsfickoic4icJMFUBw/640?wx_fmt=png" alt="" loading="lazy"></p><ol><li>生产者产生消息</li><li>消息发送到存储端，保存下来</li><li>消息推送到消费者，消费者消费完，ack应答。</li></ol><p>因此如何保证MQ不丢失消息，可以从这三个阶段阐述：</p><ul><li>生产者保证不丢消息</li><li>存储端不丢消息</li><li>消费者不丢消息</li></ul><h3 id="_10-1-生产者保证不丢消息" tabindex="-1"><a class="header-anchor" href="#_10-1-生产者保证不丢消息" aria-hidden="true">#</a> 10.1 生产者保证不丢消息</h3><p>生产端如何保证不丢消息呢？确保生产的消息能顺利到达存储端。</p><p>如果是<code>RocketMQ</code>消息中间件的话，<code>Producer</code>生产者提供了三种发送消息的方式，分别是：</p><ul><li>同步发送</li><li>异步发送</li><li>单向发送</li></ul><p>生产者要想发消息时保证消息不丢失，可以：</p><ul><li>采用同步方式发送，send消息方法返回成功状态，即消息正常到达了存储端<code>Broker</code>。</li><li>如果<code>send</code>消息异常或者返回非成功状态，可以发起重试。</li><li>可以使用事务消息，<code>RocketMQ</code>的事务消息机制就是为了保证零丢失来设计的</li></ul><h3 id="_10-2-存储端不丢消息" tabindex="-1"><a class="header-anchor" href="#_10-2-存储端不丢消息" aria-hidden="true">#</a> 10.2 存储端不丢消息</h3><p>如何保证存储端的消息不丢失呢？确保消息持久化到磁盘，那就是刷盘机制嘛。</p><p>刷盘机制分<strong>同步刷盘和异步刷盘</strong>：</p><ul><li>同步刷盘：生产者消息发过来时，只有持久化到磁盘，<code>RocketMQ</code>的存储端<code>Broker</code>才返回一个成功的ACK响应。它保证消息不丢失，但是影响了性能。</li><li>异步刷盘：只要消息写入<code>PageCache</code>缓存，就返回一个成功的ACK响应。这样提高了MQ的性能，但是如果这时候机器断电了，就会丢失消息。</li></ul><p>除了同步刷盘机制，还有一个维度需要考虑。<code>Broker</code>一般是集群部署的，有主节点和从节点。消息到<code>Broker</code>存储端，只有主节点和从节点都写入成功，才反馈成功的<code>ack</code>给生产者。这就是<strong>同步复制</strong>，它保证了消息不丢失，但是降低了系统的吞吐量。与之对应即是<strong>异步复制</strong>，只要消息写入主节点成功，就返回成功的<code>ack</code>，它速度快，但是会有性能问题。</p><h3 id="_10-3-消费阶段不丢消息" tabindex="-1"><a class="header-anchor" href="#_10-3-消费阶段不丢消息" aria-hidden="true">#</a> 10.3 消费阶段不丢消息</h3><p>消费者<strong>执行完业务逻辑</strong>，再反馈会<code>Broker</code>说消费成功，这样才可以保证消费阶段不丢消息。</p><h2 id="_11-事务消息是否了解-场景题-比如下单清空购物车-你是如何设计的" tabindex="-1"><a class="header-anchor" href="#_11-事务消息是否了解-场景题-比如下单清空购物车-你是如何设计的" aria-hidden="true">#</a> 11. 事务消息是否了解？场景题：比如下单清空购物车，你是如何设计的？</h2><p>事务消息主要用来解决消息生产者和消息消费者的<strong>数据一致性</strong>问题。我们先来回忆一下：一条普通的消息队列消息，从产生到被消费，经历的流程：</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAib2EBLoKW7wmkPG1Kx4roia2FvKkq1qMROmTm0ia0IwahtPhqX95ahvDIw/640?wx_fmt=png" alt="" loading="lazy"></p><ol><li>生产者产生消息，发送到MQ服务器</li><li>MQ收到消息后，将消息持久化到存储系统。</li><li>MQ服务器返回ACk到生产者。</li><li>MQ服务器把消息push给消费者</li><li>消费者消费完消息，响应ACK</li><li>MQ服务器收到ACK，认为消息消费成功，即在存储中删除消息。</li></ol><p><strong>消息队列的事务消息流程是怎样的呢？</strong></p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAib79pCtYibaibSzQyf5y9qBaJA5Ikm6orohQoNBJ7aMa8daeCX42FcIkLQ/640?wx_fmt=png" alt="" loading="lazy"></p><ol><li>生产者产生消息，发送一条半事务消息到MQ服务器</li><li>MQ收到消息后，将消息持久化到存储系统，这条消息的状态是待发送状态。</li><li>MQ服务器返回ACK确认到生产者，此时MQ不会触发消息推送事件</li><li>生产者执行本地事务</li><li>如果本地事务执行成功，即commit执行结果到MQ服务器；如果执行失败，发送rollback。</li><li>如果是正常的commit，MQ服务器更新消息状态为可发送；如果是rollback，即删除消息。</li><li>如果消息状态更新为可发送，则MQ服务器会push消息给消费者。消费者消费完就回ACK。</li><li>如果MQ服务器长时间没有收到生产者的commit或者rollback，它会反查生产者，然后根据查询到的结果执行最终状态。</li></ol><p>我们举个下<strong>订单清空购物车</strong>的例子吧。订单系统创建完订单后，然后发消息给下游系统购物车系统，清空购物车。</p><ol><li>生产者（订单系统）产生消息，发送一条半事务消息到MQ服务器</li><li>MQ收到消息后，将消息持久化到存储系统，这条消息的状态是待发送状态。</li><li>MQ服务器返回ACK确认到生产者，此时MQ不会触发消息推送事件</li><li>生产者执行本地事务（订单创建成功，提交事务消息）</li><li>如果本地事务执行成功，即commit执行结果到MQ服务器；如果执行失败，发送rollback。</li><li>如果是commit正常提交，MQ服务器更新消息状态为<strong>可发送</strong>；如果是rollback，即<strong>删除消息</strong>。</li><li>如果消息状态更新为可发送，则MQ服务器会push消息给消费者（购物车系统）。消费者消费完（即拿到订单消息，清空购物车成功）就应答ACK。</li><li>如果MQ服务器长时间没有收到生产者的commit或者rollback，它会反查生产者，然后根据查询到的结果（回滚操作或者重新发送消息）执行最终状态。</li></ol><p>有些伙伴可能有疑惑，如果消费者消费失败怎么办呢？那数据是不是不一致啦？所以就需要消费者消费成功，执行业务逻辑成功，再反馈ack嘛。如果消费者消费失败，那就自动重试嘛，接口支持幂等即可。</p><h2 id="_12-如何快速判断一个数是奇数还是偶数-除开对2取余呢。" tabindex="-1"><a class="header-anchor" href="#_12-如何快速判断一个数是奇数还是偶数-除开对2取余呢。" aria-hidden="true">#</a> 12. 如何快速判断一个数是奇数还是偶数，除开对2取余呢。</h2><p>判断一个数是奇数还是偶数，我们最容易想到的就是对2取余。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if( x % 2 )  

// 奇数  

else  

// 偶数  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一种方法，就是与1相与（ <code>&amp;1</code>），具体实现如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if( x &amp; 1 )  

// 奇数  

else  

// 偶数  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-spring声明式事务原理-哪些场景事务会失效" tabindex="-1"><a class="header-anchor" href="#_13-spring声明式事务原理-哪些场景事务会失效" aria-hidden="true">#</a> 13. Spring声明式事务原理？哪些场景事务会失效？</h2><h3 id="_13-1-声明式事务原理" tabindex="-1"><a class="header-anchor" href="#_13-1-声明式事务原理" aria-hidden="true">#</a> 13.1 声明式事务原理</h3><p>spring声明式事务，即<code>@Transactional</code>,它可以帮助我们把事务开启、提交或者回滚的操作，通过Aop的方式进行管理。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibPoVt2fkoUtViabEcOricib1UlGsUYMCFd5RtiaHJvtJH9xUhzJNIibOEY3g/640?wx_fmt=png" alt="" loading="lazy"></p><p>在spring的bean的初始化过程中，就需要对实例化的bean进行代理，并且生成代理对象。生成代理对象的代理逻辑中，进行方法调用时，需要先获取切面逻辑，@Transactional注解的切面逻辑类似于@Around，在spring中是实现一种类似代理逻辑。</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibabVia8uVswlbU6jDLmiaVBCnUia7WicSIodG9n25NBZKialicfvN9Wh2mcLQ/640?wx_fmt=png" alt="" loading="lazy"></p><h3 id="_13-2-spring声明式事务哪些场景会失效" tabindex="-1"><a class="header-anchor" href="#_13-2-spring声明式事务哪些场景会失效" aria-hidden="true">#</a> 13.2 spring声明式事务哪些场景会失效</h3><ul><li>方法的访问权限必须是public，其他private等权限，事务失效</li><li>方法被定义成了final的，这样会导致事务失效。</li><li>在同一个类中的方法直接内部调用，会导致事务失效。</li><li>一个方法如果没交给spring管理，就不会生成spring事务。</li><li>多线程调用，两个方法不在同一个线程中，获取到的数据库连接不一样的。</li><li>表的存储引擎不支持事务</li><li>如果自己try...catch误吞了异常，事务失效。</li><li>错误的传播</li></ul><h2 id="_14-你们是微服务架构嘛-如果你来设计一个类似淘宝的系统-你怎么划分微服务" tabindex="-1"><a class="header-anchor" href="#_14-你们是微服务架构嘛-如果你来设计一个类似淘宝的系统-你怎么划分微服务" aria-hidden="true">#</a> 14. 你们是微服务架构嘛？如果你来设计一个类似淘宝的系统，你怎么划分微服务？</h2><p>可以按业务领域、功能、重要程度进行划分。</p><ul><li>可以按业务领域，把用户、社区、商品信息、消息等模块等划分。</li><li>单一功能职责，按功能拆分，比如订单、支付、物流、权限。</li><li>按重要程度划分，区分核心和非核心功能，比如支付、订单就是核心功能。</li></ul><h2 id="_15-你们是怎么分库分表的-分布式id如何生成" tabindex="-1"><a class="header-anchor" href="#_15-你们是怎么分库分表的-分布式id如何生成" aria-hidden="true">#</a> 15. 你们是怎么分库分表的？分布式ID如何生成？</h2><p>如果是我们公司的话，使用了水平分库的方式，就是一个用户注册时，就划分了属于哪个数据库，然后具体的表结构是一样的。</p><p>业界还有垂直分库，就是按照不同的系统中的不同业务进行拆分，比如拆分成用户库、订单库、积分库、商品库，把它们部署在不同的数据库服务器。</p><p>分表的话也有水平分表和垂直分表，垂直分表就是将一些不常用的、数据较大或者长度较长的列拆分到另外一张表，水平分表就是可以按照某种规则（如hash取模、range），把数据切分到多张表去。一张订单表，按时间range拆分如下：</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibibwxSUuBLQicjr2q2DxQGkuwLfzObHFtghxZs7U1zY36UauDguV8tTCg/640?wx_fmt=png" alt="" loading="lazy"></p><p><strong>range划分利于数据迁移，但是存在数据热点问题。hash取模划分，不会存在明显的热点问题，但是不利于扩容。可以range+hash取模结合使用。</strong></p><p><strong>分布式ID可以使用雪花算法生成</strong></p><blockquote><p>雪花算法是一种生成分布式全局唯一ID的算法，生成的ID称为Snowflake IDs。这种算法由Twitter创建，并用于推文的ID。</p></blockquote><p>一个Snowflake ID有64位。</p><ul><li>第1位：Java中long的最高位是符号位代表正负，正数是0，负数是1，一般生成ID都为正数，所以默认为0。</li><li>接下来前41位是时间戳，表示了自选定的时期以来的毫秒数。</li><li>接下来的10位代表计算机ID，防止冲突。</li><li>其余12位代表每台机器上生成ID的序列号，这允许在同一毫秒内创建多个Snowflake ID。</li></ul><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibtbZ2rSkCTXPD8icnFvCnSfvWDrXvLiaibnrdOBXCc6hoViadUyEuic9tfJg/640?wx_fmt=png" alt="" loading="lazy"></p><h2 id="_16-所有异常的共同的祖先是-运行时异常有哪几个" tabindex="-1"><a class="header-anchor" href="#_16-所有异常的共同的祖先是-运行时异常有哪几个" aria-hidden="true">#</a> 16. 所有异常的共同的祖先是？运行时异常有哪几个？</h2><p><img src="https://mmbiz.qpic.cn/mmbiz_png/PoF8jo1Pmpyab6GY4OsOf8bARCwJPIAibpAbukOczHzcpQcicFGMUrNoibCC40seujqTicWM4iaRJHmATp1vhK9kTdA/640?wx_fmt=png" alt="" loading="lazy"></p><p>Java 异常的顶层父类是<code>Throwable</code>，它生了两个儿子，大儿子叫<code>Error</code>,二儿子叫<code>Exception</code>。</p><ul><li><strong>Error</strong>：是程序⽆法处理的错误，一般表示系统错误，例如虚拟机相关的错误<code>OutOfMemoryError</code></li><li><strong>Exception</strong>：程序本身可以处理的异常。它可以分为RuntimeException（运行时异常）和CheckedException（可检查的异常）。</li></ul><p><strong>什么是RuntimeException（运行时异常）</strong>？</p><blockquote><p>运行时异常是不检查异常，程序中可以选择捕获处理，也可以不处理。这些异常一般是由程序逻辑错误引起的，程序应该从逻辑角度尽可能避免这类异常的发生。</p></blockquote><p>常见的<strong>RuntimeException异常</strong>：</p><ul><li>NullPointerException：空指针异常</li><li>ArithmeticException：出现异常的运算条件时，抛出此异常</li><li>IndexOutOfBoundsException：数组索引越界异常</li><li>ClassNotFoundException：找不到类异常</li><li>IllegalArgumentException(非法参数异常)</li></ul><p>什么是<strong>CheckedException（可检查的异常）</strong>？</p><blockquote><p>从程序语法角度讲是必须进行处理的异常，如果不处理，程序就不能编译通过。如IOException、SQLException等。</p></blockquote><p><strong>常见的 Checked Exception 异常：</strong></p><ul><li>IOException：(操作输入流和输出流时可能出现的异常)</li><li>SQLException</li></ul><hr><p>以上就是本期分享了。</p>`,195),p={href:"http://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247508640&idx=1&sn=b02fff3533f18b5d0bfbf714b127c140&chksm=e9c24557deb5cc41b1f2ecefdd23eb1370e261a47c23ad89b1d1428537fd1e8fe39762e707e1&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},m=i("p",null,[i("img",{src:"https://mmbiz.qpic.cn/mmbiz_jpg/mngWTkJEOYJrQEPNiamWq4Z9AouO3XptkSsSJro9icBwc5icEmL6ficibOW2SwMHUOSmur5WsSQVw4oWNYx0EM7bgng/640?wx_fmt=jpeg",alt:"",loading:"lazy"})],-1),b=i("p",null,"往期推荐",-1),h=i("p",null,"[",-1),g=i("p",null,"几个对程序员的误解，害人不浅！",-1),_={href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247509151&idx=1&sn=113246153900f18be1134697457f909c&chksm=e9c24368deb5ca7e662c1bd7d2acf52df662c284ace43f2bc3bbb4a378da0340113d428fe6f4&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},u=i("p",null,"[",-1),f=i("p",null,"编程导航，火了！",-1),x={href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247508640&idx=1&sn=b02fff3533f18b5d0bfbf714b127c140&chksm=e9c24557deb5cc41b1f2ecefdd23eb1370e261a47c23ad89b1d1428537fd1e8fe39762e707e1&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},v=i("p",null,"[",-1),w=i("p",null,"Gitee 很无奈！",-1),A={href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247508861&idx=1&sn=4716ac7fd1199541e15c080f38657dad&chksm=e9c2448adeb5cd9cd4b5f617c413024173ce47f29c0d4b14a092798a53d6be8d58d96883a7a3&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},z=i("p",null,"[",-1),C=i("p",null,"我的 IP 归属地，是咋被挖出来的？",-1),R={href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247508780&idx=1&sn=6481896d7d4310e1bae435ddb3ee72cc&chksm=e9c244dbdeb5cdcd509a68a18eca5e822ca21789b0ccafd26f9f7939a04e5f91648165e19322&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},P={href:"https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247508805&idx=1&sn=baad05d3d270b7db04fef6a8a367ee71&chksm=e9c244b2deb5cda4af2ab94f476a1b5f383f6a9d54bd23d1cb0226003c87f12b8826e079594c&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"};function y(M,k){const d=o("ExternalLinkIcon");return n(),c("div",null,[s,i("p",null,[e("最后,欢迎加入 "),i("a",p,[e("鱼皮的编程知识星球"),l(d)]),e("（点击了解详情），和 8200 多名小伙伴们一起交流学习，向鱼皮和大厂同学 1 对 1 提问、帮你制定学习计划不迷茫、跟着鱼皮直播做项目（往期项目可无限回看）、领取鱼皮原创编程学习/求职资料等。")]),m,b,h,g,i("p",null,[e("]("),i("a",_,[e("https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247509151&idx=1&sn=113246153900f18be1134697457f909c&chksm=e9c24368deb5ca7e662c1bd7d2acf52df662c284ace43f2bc3bbb4a378da0340113d428fe6f4&scene=21#wechat_redirect"),l(d)]),e(")")]),u,f,i("p",null,[e("]("),i("a",x,[e("https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247508640&idx=1&sn=b02fff3533f18b5d0bfbf714b127c140&chksm=e9c24557deb5cc41b1f2ecefdd23eb1370e261a47c23ad89b1d1428537fd1e8fe39762e707e1&scene=21#wechat_redirect"),l(d)]),e(")")]),v,w,i("p",null,[e("]("),i("a",A,[e("https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247508861&idx=1&sn=4716ac7fd1199541e15c080f38657dad&chksm=e9c2448adeb5cd9cd4b5f617c413024173ce47f29c0d4b14a092798a53d6be8d58d96883a7a3&scene=21#wechat_redirect"),l(d)]),e(")")]),z,C,i("p",null,[e("]("),i("a",R,[e("https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247508780&idx=1&sn=6481896d7d4310e1bae435ddb3ee72cc&chksm=e9c244dbdeb5cdcd509a68a18eca5e822ca21789b0ccafd26f9f7939a04e5f91648165e19322&scene=21#wechat_redirect"),l(d)]),e(")")]),i("p",null,[i("a",P,[e("我造了个轮子，完整开源！"),l(d)])])])}const q=a(r,[["render",y],["__file","weixin-quoppomspwml.html.vue"]]);export{q as default};
