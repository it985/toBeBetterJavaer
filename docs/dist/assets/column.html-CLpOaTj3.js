import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as e,e as s}from"./app-D46EJwFF.js";const t={},n=s('<p>在<a href="https://javabetter.cn/mysql/table.html" target="_blank" rel="noopener noreferrer">创建表</a>的时候，我们需要定义表的字段，每个字段都有一些属性，比如说是否有默认值、是否允许为空、是不是主键等等。</p><p>这些约束字段的属性，可以让字段的值更符合我们的预期，也会为以后的数据查询和更新提供便利。</p><p>比如说，我们在定义字段的时候添加了默认值，那在插入数据的时候，如果我们没有主动指定这个字段的值（比如 Java 程序中），数据库就会使用默认值帮我们自动填充。</p><p>像<a href="https://javabetter.cn/zhishixingqiu/paicoding.html" target="_blank" rel="noopener noreferrer">技术派实战项目</a>中的文章详情表，我们为 id 字段设置了 NOT NULL、AUTO_INCREMENT、COMMENT 等属性。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/column-20240206170954.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那接下来，就来一起看看 MySQL 字段的常用属性都有哪些吧。</p><h2 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值"><span>默认值</span></a></h2><p>默认值（DEFAULT）是指在插入数据的时候，如果没有指定这个字段的值，那就会使用默认值。</p><p>我们创建这样一张表，包含了 varchar、int、datetime 等字段类型，每个字段都设置了默认值。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> `</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">` (</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  `id`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT,</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  `name`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> varchar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DEFAULT</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;沉默王二&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  `age`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DEFAULT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  `create_time`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> datetime</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP,</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  PRIMARY KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`id`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) ENGINE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">InnoDB </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DEFAULT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> CHARSET</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">utf8mb4;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在插入数据的时候，如果没有指定 name、age、create_time 字段的值，那就会使用默认值。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `user`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`id`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以看到，插入数据的时候，我们只指定了 id 字段的值，其他字段都省略了，但 MySQL 自动帮我们填充了默认值。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/column-20240208063305.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><code>DEFAULT &#39;沉默王二&#39;</code>：指定了 name 字段的默认值为“沉默王二”。</li><li><code>DEFAULT 18</code>：指定了 age 字段的默认值为 18。</li><li><code>DEFAULT CURRENT_TIMESTAMP</code>：指定了 create_time 字段的默认值为当前时间。</li></ul><p>那假如我们没有指定默认值，又没有主动插入数据，那这个字段的值会是什么呢？</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> `</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">` (</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  `id`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT,</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  `name`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> varchar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  `age`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>\n<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  `create_time`</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> datetime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  PRIMARY KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`id`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) ENGINE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">InnoDB </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DEFAULT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> CHARSET</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">utf8mb4;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在插入数据的时候，我们没有指定 name、age、create_time 字段的值，也没有设置默认值。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `user`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`id`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以看到，此时，MySQL 帮我们填充的值是 NULL。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/column-20240208063712.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这也是为什么<a href="https://javabetter.cn/pdf/ali-java-shouce.html" target="_blank" rel="noopener noreferrer">阿里巴巴的开发规约</a>上会要求我们，在 POJO 中，要使用包装类型，而不是基本数据类型，因为数据库的查询结构可能是 null，如果使用基本数据类型的画，因为要<a href="https://javabetter.cn/basic-extra-meal/box.html" target="_blank" rel="noopener noreferrer">自动拆箱</a>，就会抛出 NPE 异常。</p><p>当然了，DEFAULT 也不能乱用，要根据业务需求来设置默认值，比如说，我们在创建用户表的时候，就不应该为 name 字段设置默认值，因为这样的话，如果用户没有填写名字，MySQL 就会默认填充“沉默王二”，这显然是不合理的。</p><p>我们要尽早提示用户填写名字，而不是用默认值填充。</p><p>但对于 create_time 字段，我们就可以设置默认值为 CURRENT_TIMESTAMP，这样的话，MySQL 就会自动帮我们填充当前时间，Java 程序就不需要在插入数据的时候，手动填充时间了。</p><h2 id="是否允许为空" tabindex="-1"><a class="header-anchor" href="#是否允许为空"><span>是否允许为空</span></a></h2><p>有时候，我们会希望某个字段的值不能为空，比如说，用户名、手机号、邮箱等，这些字段的值都是必填的。</p><p>。。。。。</p><h2 id="付费内容" tabindex="-1"><a class="header-anchor" href="#付费内容"><span>付费内容</span></a></h2><p>以下内容为<a href="https://javabetter.cn/zhishixingqiu/" target="_blank" rel="noopener noreferrer">二哥编程星球</a>的付费内容（点击<a href="%5D(https://javabetter.cn/jvm/)">链接</a>可以查看详细介绍和加入方式）。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/readme-20240116130809.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>加入二哥的编程星球后，你不仅可以阅读完整版的《二哥的 MySQL 进阶之路》内容，还可以阅读更多付费专栏，比如说《<a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">技术派付费专栏</a>》、《<a href="https://paicoding.com/column/7/1" target="_blank" rel="noopener noreferrer">二哥的 LeetCode 刷题笔记</a>》、《编程喵实战项目笔记》、《<a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南</a>》等等。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/class-load-vip-20240116135627.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>除此之外，还可以为你提供：</p><ul><li><strong>专属的一对一提问交流</strong>，如何准备面试，如何制定学习计划，如何选择 offer，以及职场规划，都能得到我 1v1 的指导和建议；</li><li><strong>强大的嘉宾阵容</strong>，有微信的、字节的、小米的、百度的、国企的、外企的、阿里的等等各方大佬。如果你的问题二哥解决不了，总有一个大佬能够帮你解决。</li><li><strong>为你精挑细选了一些可以写到简历上，可以提高编程功底的优质实战项目</strong>，比如说动态线程池 hippo4j、手写数据库 MYDB、Spring Boot 的前后端分离项目技术派等等，无论你是缺少项目经验的学生党，还是有一定经验的工作党，这些项目都能帮助你完成技术上的蜕变和提升。</li><li><strong>星球会定期整理和分享优质的学习资料</strong>，包括 PDF&amp;视频教程&amp;学习资料等等。</li><li><strong>为你提供容易被忽视但又十分重要的简历指导服务</strong>，二哥会事无巨细地帮你指出简历上的问题，打造一份投了就有声音的优质简历。</li><li><strong>为你创造一个沉浸式的学习环境</strong>，二哥的编程星球自上线以来，氛围非常好，有一种高中初中上晚自习，大学进图书馆的感觉，每天都会有很多球友积极打卡，分享自己一天的学习成果。</li></ul><p>学习的路上最缺的就是清晰的学习路线、优质的学习资料和良好的学习氛围，二哥的编程星球恰好就能给你提供这样的服务。来星球的球友几乎都斩获不错的成绩，有美团、华为等大厂，也有 16k 的双非本、甚至 23k 的大专社招，我随便发几个球友报喜的截图给大家展示下。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/readme-20231221211916.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/readme-20231221213449.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>《<a href="https://javabetter.cn/zhishixingqiu/mianshi.html" target="_blank" rel="noopener noreferrer">Java 面试指南</a>》是<a href="https://javabetter.cn/zhishixingqiu/" target="_blank" rel="noopener noreferrer">二哥编程星球的</a>的一个付费专栏，和《Java 进阶之路》上的内容可以形成很好的互补，截止到目前，已经更新 48 万字，可以说是满满的干货和诚意。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/readme-20230904113349.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一共分为 6 大板块，对面试、职场、技术、学习都会帮助特别大。</p><ul><li>面试准备篇（25+篇），手把手教你如何准备面试。</li><li>职场修炼篇（11+篇），手摸手教你如何在职场中如鱼得水。</li><li>学习路线篇（13+篇），手勾手教你如何快速学习一门技术栈。</li><li>技术提升篇（33+篇），手拉手教你如何成为团队不可或缺的技术攻坚小能手。</li><li>面经分享篇（23+篇），手牵手教你如何在面试中知彼知己，百战不殆。</li><li>场景设计篇（22+篇），手握手教你如何在面试中脱颖而出。</li></ul><h3 id="_01、面试准备篇" tabindex="-1"><a class="header-anchor" href="#_01、面试准备篇"><span>01、面试准备篇</span></a></h3><p>所谓临阵磨枪，不快也光。更何况提前做好充足的准备呢？这 25+篇内容会系统地引导你该如何做好面试准备。涉及到的主题有：简历、源码、LeetCode、项目经验、开源项目、高并发、证书、和 HR 对线、国企名单、公司投递名单、银行、谈薪等等面试常见问题。</p><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/8f43c95b9c03f786f42e314d84842564.png" alt="如何准备面试" tabindex="0" loading="lazy"><figcaption>如何准备面试</figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/d2770ebcf6433388f802d5bdd2db83f3.png" alt="如何写好简历" tabindex="0" loading="lazy"><figcaption>如何写好简历</figcaption></figure><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/c3e2e95606aa42f520bcffbb89807fbf.png" alt="秋招投递名单" tabindex="0" loading="lazy"><figcaption>秋招投递名单</figcaption></figure><h3 id="_02、职场修炼篇" tabindex="-1"><a class="header-anchor" href="#_02、职场修炼篇"><span>02、职场修炼篇</span></a></h3><p>如何平滑度过试用期？如何平滑度过 35 岁程序员危机？如何在繁重的工作中持续成长？如何做副业？如何赚零花钱？如何达到 30 万+年薪等等，都是大家迫切关心的问题，这 11+篇内容会一一为你揭晓答案。</p><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/398dad8b63a4d1fe0998187bf02ec8f5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_03、技术提升篇" tabindex="-1"><a class="header-anchor" href="#_03、技术提升篇"><span>03、技术提升篇</span></a></h3><p>编程能力、技术功底，是我们程序员安身立命之本，是我们求职/工作的最核心的武器。</p><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/0b2b08709ff2bfc7fefaa7d079760381.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_04、面经分享篇" tabindex="-1"><a class="header-anchor" href="#_04、面经分享篇"><span>04、面经分享篇</span></a></h3><p>知彼知己，方能百战不殆，我们必须得站在前辈的肩膀上，才能走得更远更快。他们在面试中遇到过哪些经典的问题，我们能不能提前演练一下，对临场发挥有着至关重要的作用。</p><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/200dac9430e454dafc42551d531c4bb1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_05、场景设计题篇" tabindex="-1"><a class="header-anchor" href="#_05、场景设计题篇"><span>05、场景设计题篇</span></a></h3><p>有些面试官不喜欢问八股文，反而更喜欢结合项目问一些非常经典的场景题，这种场景题没有标准的答案，但却很能考察一名求职者的逻辑思维能力。</p><figure><img src="https://cdn.tobebetterjavaer.com/paicoding/3a11266fb00df1b1e2c7e9283a82f0bb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="星球限时优惠" tabindex="-1"><a class="header-anchor" href="#星球限时优惠"><span>星球限时优惠</span></a></h2><p>一年前，星球的定价还是 99 元一年，第一批优惠券的额度是 30 元，等于说 69 元的低价就可以加入，再扣除掉星球手续费，几乎就是纯粹做公益。</p><p>随着时间的推移，星球积累的干货/资源越来越多，我花在星球上的时间也越来越多，<a href="https://javabetter.cn/zhishixingqiu/map.html" target="_blank" rel="noopener noreferrer">星球的知识图谱</a>里沉淀的问题，你可以戳这个<a href="https://javabetter.cn/zhishixingqiu/map.html" target="_blank" rel="noopener noreferrer">链接</a>去感受一下。有学习计划啊、有学生党秋招&amp;春招&amp;offer选择&amp;考研&amp;实习&amp;专升本&amp;培训班的问题啊、有工作党方向选择&amp;转行&amp;求职&amp;职业规划的问题啊，还有大大小小的技术细节，我都竭尽全力去帮助球友，并且得到了球友的认可和尊重。</p><p>目前星球已经 5000+ 人了，所以星球也涨价到了 149 元，后续会讲星球的价格调整为 159 元/年，所以想加入的小伙伴一定要趁早。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/readme-20240521200742.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>你可以微信扫码或者长按自动识别领取 30 元优惠券，<strong>119/年</strong> 加入，新项目 pmhub 上线后会涨价至 159 元，所以想要加入的话请趁早。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/readme-20240116131318.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对了，<strong>加入星球后记得花 10 分钟时间看一下星球的两个置顶贴，你会发现物超所值</strong>！</p><p>成功没有一蹴而就，没有一飞冲天，但只要你能够一步一个脚印，就能取得你心满意足的好结果，请给自己一个机会！</p><p>最后，把二哥的座右铭送给你：<strong>没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟</strong>。</p><p>共勉 ⛽️。</p>',70),r=[n];function l(p,h){return e(),a("div",null,r)}const g=i(t,[["render",l],["__file","column.html.vue"]]),k=JSON.parse('{"path":"/mysql/column.html","title":"（付费）一文彻底搞懂 MySQL 字段定义时的属性设置","lang":"zh-CN","frontmatter":{"title":"（付费）一文彻底搞懂 MySQL 字段定义时的属性设置","shortTitle":"字段都有哪些属性（付费）","description":"在创建表的时候，我们需要定义表的字段，每个字段都有一些属性，比如说是否有默认值、是否允许为空、是不是主键等等。 这些约束字段的属性，可以让字段的值更符合我们的预期，也会为以后的数据查询和更新提供便利。 比如说，我们在定义字段的时候添加了默认值，那在插入数据的时候，如果我们没有主动指定这个字段的值（比如 Java 程序中），数据库就会使用默认值帮我们自动...","head":[["meta",{"property":"og:url","content":"https://javabetter.cn/mysql/column.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"（付费）一文彻底搞懂 MySQL 字段定义时的属性设置"}],["meta",{"property":"og:description","content":"在创建表的时候，我们需要定义表的字段，每个字段都有一些属性，比如说是否有默认值、是否允许为空、是不是主键等等。 这些约束字段的属性，可以让字段的值更符合我们的预期，也会为以后的数据查询和更新提供便利。 比如说，我们在定义字段的时候添加了默认值，那在插入数据的时候，如果我们没有主动指定这个字段的值（比如 Java 程序中），数据库就会使用默认值帮我们自动..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/stutymore/column-20240206170954.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T02:28:58.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:modified_time","content":"2024-11-06T02:28:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"（付费）一文彻底搞懂 MySQL 字段定义时的属性设置\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/stutymore/column-20240206170954.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/column-20240208063305.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/column-20240208063712.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/readme-20240116130809.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/class-load-vip-20240116135627.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/readme-20231221211916.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/readme-20231221213449.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/readme-20230904113349.png\\",\\"https://cdn.tobebetterjavaer.com/paicoding/8f43c95b9c03f786f42e314d84842564.png\\",\\"https://cdn.tobebetterjavaer.com/paicoding/d2770ebcf6433388f802d5bdd2db83f3.png\\",\\"https://cdn.tobebetterjavaer.com/paicoding/c3e2e95606aa42f520bcffbb89807fbf.png\\",\\"https://cdn.tobebetterjavaer.com/paicoding/398dad8b63a4d1fe0998187bf02ec8f5.png\\",\\"https://cdn.tobebetterjavaer.com/paicoding/0b2b08709ff2bfc7fefaa7d079760381.png\\",\\"https://cdn.tobebetterjavaer.com/paicoding/200dac9430e454dafc42551d531c4bb1.png\\",\\"https://cdn.tobebetterjavaer.com/paicoding/3a11266fb00df1b1e2c7e9283a82f0bb.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/readme-20240521200742.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/readme-20240116131318.png\\"],\\"dateModified\\":\\"2024-11-06T02:28:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"默认值","slug":"默认值","link":"#默认值","children":[]},{"level":2,"title":"是否允许为空","slug":"是否允许为空","link":"#是否允许为空","children":[]},{"level":2,"title":"付费内容","slug":"付费内容","link":"#付费内容","children":[{"level":3,"title":"01、面试准备篇","slug":"_01、面试准备篇","link":"#_01、面试准备篇","children":[]},{"level":3,"title":"02、职场修炼篇","slug":"_02、职场修炼篇","link":"#_02、职场修炼篇","children":[]},{"level":3,"title":"03、技术提升篇","slug":"_03、技术提升篇","link":"#_03、技术提升篇","children":[]},{"level":3,"title":"04、面经分享篇","slug":"_04、面经分享篇","link":"#_04、面经分享篇","children":[]},{"level":3,"title":"05、场景设计题篇","slug":"_05、场景设计题篇","link":"#_05、场景设计题篇","children":[]}]},{"level":2,"title":"星球限时优惠","slug":"星球限时优惠","link":"#星球限时优惠","children":[]}],"git":{"createdTime":1707304003000,"updatedTime":1730860138000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":8.73,"words":2620},"filePathRelative":"mysql/column.md","localizedDate":"2024年2月7日","excerpt":"<p>在<a href=\\"https://javabetter.cn/mysql/table.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">创建表</a>的时候，我们需要定义表的字段，每个字段都有一些属性，比如说是否有默认值、是否允许为空、是不是主键等等。</p>\\n<p>这些约束字段的属性，可以让字段的值更符合我们的预期，也会为以后的数据查询和更新提供便利。</p>\\n<p>比如说，我们在定义字段的时候添加了默认值，那在插入数据的时候，如果我们没有主动指定这个字段的值（比如 Java 程序中），数据库就会使用默认值帮我们自动填充。</p>\\n<p>像<a href=\\"https://javabetter.cn/zhishixingqiu/paicoding.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">技术派实战项目</a>中的文章详情表，我们为 id 字段设置了 NOT NULL、AUTO_INCREMENT、COMMENT 等属性。</p>","autoDesc":true}');export{g as comp,k as data};
