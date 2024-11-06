import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,e as r}from"./app-D46EJwFF.js";const n={},o=r('<p>经过前面几章的学习，我们对线程的基本概念和使用方式已经有了比较充分的了解，那么接下来我们就来分析一下，线程是如何从进程进化而来的，它们之间又有哪些区别，搞清楚两者之间的差别对接下来的学习也是至关重要的，甚至有些公司的面试官也喜欢问这个。</p><h2 id="进程" tabindex="-1"><a class="header-anchor" href="#进程"><span>进程</span></a></h2><p>最初的计算机只能接受一些特定的指令，用户每输入一个指令，计算机就做出一个操作。当用户在思考或者输入时，计算机就在等待。这样效率非常低下，在很多时候，计算机都处在等待状态。</p><h3 id="批处理操作系统" tabindex="-1"><a class="header-anchor" href="#批处理操作系统"><span>批处理操作系统</span></a></h3><p>后来有了<strong>批处理操作系统</strong>，把一系列需要操作的指令写下来，形成一个清单，一次性交给计算机。用户将多个需要执行的程序写在磁带上，然后交由计算机去读取并逐个执行这些程序，并将输出结果写在另一个磁带上。</p><p>批处理操作系统在一定程度上提高了计算机的效率，但是由于<strong>批处理操作系统的指令运行方式仍然是串行的，内存中始终只有一个程序在运行</strong>，后面的程序需要等待前面的程序执行完成后才能开始执行，而前面的程序有时会由于 I/O 操作、网络等原因阻塞，所以<strong>批处理操作效率也不高</strong>。</p><h3 id="进程的提出" tabindex="-1"><a class="header-anchor" href="#进程的提出"><span>进程的提出</span></a></h3><p>人们对于计算机的性能要求越来越高，现有的批处理操作系统并不能满足人们的需求，而批处理操作系统的瓶颈在于内存中只存在一个程序，那么内存中能不能存在多个程序呢？这是人们亟待解决的问题。</p><p>于是，科学家们提出了进程的概念。</p><p>进程就是<strong>应用程序在内存中分配的空间，也就是正在运行的程序</strong>，各个进程之间互不干扰。同时进程保存着程序每一个时刻运行的状态。</p><blockquote><p>程序：用某种编程语言(Java、Python 等)编写，能够完成一定任务或者功能的代码集合，是指令和数据的有序集合，是<strong>一段静态代码</strong>。</p></blockquote><p>此时，CPU 采用时间片轮转的方式运行进程：CPU 为每个进程分配一个时间段，称作它的时间片。如果在时间片结束时进程还在运行，则暂停这个进程的运行，并且 CPU 分配给另一个进程（这个过程叫做上下文切换）。如果进程在时间片结束前阻塞或结束，则 CPU 立即进行切换，不用等待时间片用完。</p><blockquote><p>当进程暂停时，它会保存当前进程的状态（进程标识，进程使用的资源等），在下一次切换回来时根据之前保存的状态进行恢复，接着继续执行。</p></blockquote><p>使用进程+CPU 时间片轮转方式的操作系统，在宏观上看起来同一时间段执行多个任务，换句话说，<strong>进程让操作系统的并发成为了可能</strong>。虽然并发从宏观上看有多个任务在执行，但在事实上，对于<strong>单核 CPU</strong>来说，任意具体时刻都只有一个任务在占用 CPU 资源。</p><h3 id="对操作系统的要求进一步提高" tabindex="-1"><a class="header-anchor" href="#对操作系统的要求进一步提高"><span>对操作系统的要求进一步提高</span></a></h3><p>虽然进程的出现，使得操作系统的性能大大提升，但是随着时间的推移，人们并不满足一个进程在一段时间只能做一件事情，如果一个进程有多个子任务时，只能逐个得执行这些子任务，很影响效率。</p><blockquote><p>比如杀毒软件在检测用户电脑时，如果在某一项检测中卡住了，那么后面的检测项也会受到影响。或者说当你使用杀毒软件中的扫描病毒功能时，在扫描病毒结束之前，无法使用杀毒软件中清理垃圾的功能，这显然无法满足人们的要求。</p></blockquote><h2 id="线程" tabindex="-1"><a class="header-anchor" href="#线程"><span>线程</span></a></h2><p>那么能不能让这些子任务同时执行呢？于是人们又提出了线程的概念，<strong>让一个线程执行一个子任务，这样一个进程就包含了多个线程，每个线程负责一个单独的子任务。</strong></p><blockquote><ul><li>使用线程之后，事情就变得简单多了。当用户使用扫描病毒功能时，就让扫描病毒这个线程去执行。同时，如果用户又使用清理垃圾功能，那么可以先暂停扫描病毒线程，先响应用户的清理垃圾的操作，让清理垃圾这个线程去执行。响应完后再切换回来，接着执行扫描病毒线程。</li><li>注意：操作系统是如何分配时间片给每一个线程的，涉及到线程的调度策略，有兴趣的同学可以看一下《操作系统》相关的内容，这里就不再展开了，涉及的内容比较多。</li></ul></blockquote><p>总之，进程和线程的提出极大的提高了操作系统的性能。<strong>进程让操作系统的并发性成为了可能，而线程让进程的内部并发成为了可能。</strong></p><p><strong>既然多进程的方式可以实现并发，为什么还要使用多线程呢？</strong></p><p>多进程方式确实可以实现并发，但使用多线程，有以下几个好处：</p><ul><li>进程间的通信比较复杂，而线程间的通信比较简单，通常情况下，我们需要使用共享资源，这些资源在线程间的通信很容易。</li><li>进程是重量级的，而线程是轻量级的，多线程方式的系统开销更小。</li></ul><h2 id="进程和线程的区别" tabindex="-1"><a class="header-anchor" href="#进程和线程的区别"><span>进程和线程的区别</span></a></h2><p>进程是一个独立的运行环境，而线程是在进程中执行的一个任务。他们两个本质的区别是<strong>是否单独占有内存地址空间及其它系统资源（比如 I/O）</strong>：</p><ul><li>进程单独占有一定的内存地址空间，所以进程间存在内存隔离，数据是分开的，数据共享复杂但是同步简单，各个进程之间互不干扰；而线程共享所属进程占有的内存地址空间和资源，数据共享简单，但是同步复杂。</li><li>进程单独占有一定的内存地址空间，一个进程出现问题不会影响其他进程，不影响主程序的稳定性，可靠性高；一个线程崩溃可能影响整个程序的稳定性，可靠性较低。</li><li>进程单独占有一定的内存地址空间，进程的创建和销毁不仅需要保存寄存器和栈信息，还需要资源的分配回收以及页调度，开销较大；线程只需要保存寄存器和栈信息，开销较小。</li></ul><p>另外一个重要区别是，<strong>进程是操作系统进行资源分配的基本单位，而线程是操作系统进行调度的基本单位</strong>，即 CPU 分配时间的单位 。</p><p>再用一些图来表达一下，感官会更清晰一些。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110050.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>计算机的核心是 CPU，它承担了所有的计算任务。它就像一座工厂，时刻在运行。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110104.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>假定工厂的电力有限，一次只能供给一个车间使用。也就是说，一个车间开工的时候，其他车间都必须停工。背后的含义就是，单个 CPU 一次只能运行一个任务。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110112.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进程就好比工厂的车间，它代表 CPU 所能处理的单个任务。任一时刻，CPU 总是运行一个进程，其他进程处于非运行状态。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110120.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一个车间里，可以有很多工人。他们协同完成一个任务。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110127.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>线程就好比车间里的工人。一个进程可以包括多个线程。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110138.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>车间的空间是工人们共享的，比如许多房间是每个工人都可以进出的。这象征一个进程的内存空间是共享的，每个线程都可以使用这些共享内存。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110146.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可是，每间房间的大小不同，有些房间最多只能容纳一个人，比如厕所。里面有人的时候，其他人就不能进去了。这代表一个线程使用某些共享内存时，其他线程必须等它结束，才能使用这一块内存。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110155.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一个防止他人进入的简单方法，就是门口加一把锁。先到的人锁上门，后到的人看到上锁，就在门口排队，等锁打开再进去。这就叫&quot;互斥锁&quot;（Mutual exclusion，缩写 Mutex），防止多个线程同时读写某一块内存区域。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110204.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>还有些房间，可以同时容纳 n 个人，比如厨房。也就是说，如果人数大于 n，多出来的人只能在外面等着。这好比某些内存区域，只能供给固定数目的线程使用。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110214.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这时的解决方法，就是在门口挂 n 把钥匙。进去的人就取一把钥匙，出来时再把钥匙挂回原处。后到的人发现钥匙架空了，就知道必须在门口排队等着了。这种做法叫做&quot;信号量&quot;（Semaphore），用来保证多个线程不会互相冲突。</p><p>不难看出，mutex 是 semaphore 的一种特殊情况（n=1 时）。也就是说，完全可以用后者替代前者。但是，因为 mutex 较为简单，且效率高，所以在必须保证资源独占的情况下，还是采用这种设计。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110222.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>操作系统的设计，因此可以归结为三点：</p><ul><li>以多进程形式，允许多个任务同时运行；</li><li>以多线程形式，允许单个任务分成不同的部分运行；</li><li>提供协调机制，一方面防止进程之间和线程之间产生冲突，另一方面允许进程之间和线程之间共享资源。</li></ul><h2 id="线程带来的好处" tabindex="-1"><a class="header-anchor" href="#线程带来的好处"><span>线程带来的好处</span></a></h2><p>一直以来，硬件的发展极其迅速，其中有一个很著名的&quot;摩尔定律&quot;。</p><p>摩尔定律并不是一种自然法则或者是物理定律，它只是基于一些观测数据后，对未来的一种预测。按照所预测的速度，我们的计算能力会按照指数级别的速度增长，不久以后会拥有超强的计算能力。2004 年，Intel 宣布 4GHz 芯片的计划推迟到 2005 年，然后在 2004 年秋季，Intel 宣布彻底取消 4GHz 的计划，也就是说摩尔定律的有效性超过半个世纪后戛然而止。但是，聪明的硬件工程师并没有停止研发的脚步，他们为了进一步提升计算速度，不再追求单独的计算单元，而是将多个计算单元整合到了一起，于是就出现了多核 CPU。</p><p>短短十几年的时间，家用型 CPU，比如 Intel i7 就可以达到 4 核心甚至 8 核心。而专业服务器通常可以达到几个独立的 CPU，每一个 CPU 甚至拥有多达 8 个以上的内核。因此，摩尔定律似乎在 CPU 核心扩展上继续得以验证。因此，多核 CPU 的背景下，并发编程变得越来越受重视，因为通过<strong>并发编程的形式可以将多核 CPU 的计算能力发挥到极致</strong>。</p><p>顶级计算机科学家 Donald Ervin Knuth 如此评价这种情况：在我看来，这种现象（并发）或多或少是由于硬件设计者无计可施导致的，他们将摩尔定律的责任推给了开发者。</p><p>另外，有些特殊的业务场景下，先天就适合于并发编程。比如在图像处理领域，一张 1024X768 像素的图片，包含达到 78 万 6 千多个像素。要在短时间内将所有的像素遍历一边需要很长的时间，面对如此复杂的计算量就需要充分利用多核计算的能力。</p><p>又比如当我们在网上购物时，为了提升响应速度，需要拆分，减库存，生成订单等等这些操作，就可以利用多线程的技术来完成。<strong>面对复杂业务模型，并行程序会比串行程序更适用于业务需求</strong> 。正是因为这些优点，使得多线程技术得到了进一步的重视，Java 开发者也应该掌握并发编程，以便：</p><ul><li>充分利用多核 CPU 的计算能力；</li><li>方便进行业务拆分，提升应用性能</li></ul><p>怎么样，进程和线程的概念就彻底搞懂了吧？再遇到面试官问这个问题，就直接吊打他吧。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>总结来说，进程和线程都是操作系统用于并发执行的方式，但是它们在资源管理、独立性、开销以及影响范围等方面有所不同。</p><ul><li>进程是操作系统分配资源的基本单位，线程是操作系统调度的基本单位。</li><li>进程拥有独立的内存空间，线程共享所属进程的内存空间。</li><li>进程的创建和销毁需要资源的分配和回收，开销较大；线程的创建和销毁只需要保存寄存器和栈信息，开销较小。</li><li>进程间的通信比较复杂，而线程间的通信比较简单。</li><li>进程间是相互独立的，一个进程崩溃不会影响其他进程；线程间是相互依赖的，一个线程崩溃可能影响整个程序的稳定性。</li></ul><blockquote><p>编辑：沉默王二，部分内容来源于朋友小七萤火虫开源的这个仓库：<a href="http://concurrent.redspider.group/" target="_blank" rel="noopener noreferrer">深入浅出 Java 多线程</a>，强烈推荐。还有一部分图片来源于阮一峰的博客，地址戳<a href="https://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html" target="_blank" rel="noopener noreferrer">这里</a>。</p></blockquote><hr><p>GitHub 上标星 10000+ 的开源知识库《<a href="https://github.com/itwanger/toBeBetterJavaer" target="_blank" rel="noopener noreferrer">二哥的 Java 进阶之路</a>》第二份 PDF 《<a href="https://javabetter.cn/thread/" target="_blank" rel="noopener noreferrer">并发编程小册</a>》终于来了！包括线程的基本概念和使用方法、Java的内存模型、sychronized、volatile、CAS、AQS、ReentrantLock、线程池、并发容器、ThreadLocal、生产者消费者模型等面试和开发必须掌握的内容，共计 15 万余字，200+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：<a href="https://javabetter.cn/thread/" target="_blank" rel="noopener noreferrer">太赞了，二哥的并发编程进阶之路.pdf</a></p><p><a href="https://javabetter.cn/thread/" target="_blank" rel="noopener noreferrer">加入二哥的编程星球</a>，在星球的第二个置顶帖「<a href="https://javabetter.cn/thread/" target="_blank" rel="noopener noreferrer">知识图谱</a>」里就可以获取 PDF 版本。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/mianshi-20240723112714.png" alt="二哥的并发编程进阶之路获取方式" tabindex="0" loading="lazy"><figcaption>二哥的并发编程进阶之路获取方式</figcaption></figure>',70),p=[o];function i(l,h){return a(),t("div",null,p)}const s=e(n,[["render",i],["__file","why-need-thread.html.vue"]]),g=JSON.parse('{"path":"/thread/why-need-thread.html","title":"小米面试官：进程与线程的区别是什么？","lang":"zh-CN","frontmatter":{"title":"小米面试官：进程与线程的区别是什么？","shortTitle":"进程与线程的区别","description":"总结来说，进程和线程都是操作系统用于并发执行的方式，但是它们在资源管理、独立性、开销以及影响范围等方面有所不同。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,进程,线程"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/why-need-thread.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"小米面试官：进程与线程的区别是什么？"}],["meta",{"property":"og:description","content":"总结来说，进程和线程都是操作系统用于并发执行的方式，但是它们在资源管理、独立性、开销以及影响范围等方面有所不同。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110050.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T02:28:58.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2024-11-06T02:28:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"小米面试官：进程与线程的区别是什么？\\",\\"image\\":[\\"https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110050.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110104.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110112.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110120.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110127.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110138.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110146.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110155.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110204.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110214.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/why-need-thread-20230725110222.png\\",\\"https://cdn.tobebetterjavaer.com/stutymore/mianshi-20240723112714.png\\"],\\"dateModified\\":\\"2024-11-06T02:28:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"进程","slug":"进程","link":"#进程","children":[{"level":3,"title":"批处理操作系统","slug":"批处理操作系统","link":"#批处理操作系统","children":[]},{"level":3,"title":"进程的提出","slug":"进程的提出","link":"#进程的提出","children":[]},{"level":3,"title":"对操作系统的要求进一步提高","slug":"对操作系统的要求进一步提高","link":"#对操作系统的要求进一步提高","children":[]}]},{"level":2,"title":"线程","slug":"线程","link":"#线程","children":[]},{"level":2,"title":"进程和线程的区别","slug":"进程和线程的区别","link":"#进程和线程的区别","children":[]},{"level":2,"title":"线程带来的好处","slug":"线程带来的好处","link":"#线程带来的好处","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1730860138000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":13.14,"words":3943},"filePathRelative":"thread/why-need-thread.md","localizedDate":"2022年3月23日","excerpt":"<p>经过前面几章的学习，我们对线程的基本概念和使用方式已经有了比较充分的了解，那么接下来我们就来分析一下，线程是如何从进程进化而来的，它们之间又有哪些区别，搞清楚两者之间的差别对接下来的学习也是至关重要的，甚至有些公司的面试官也喜欢问这个。</p>\\n<h2>进程</h2>\\n<p>最初的计算机只能接受一些特定的指令，用户每输入一个指令，计算机就做出一个操作。当用户在思考或者输入时，计算机就在等待。这样效率非常低下，在很多时候，计算机都处在等待状态。</p>\\n<h3>批处理操作系统</h3>\\n<p>后来有了<strong>批处理操作系统</strong>，把一系列需要操作的指令写下来，形成一个清单，一次性交给计算机。用户将多个需要执行的程序写在磁带上，然后交由计算机去读取并逐个执行这些程序，并将输出结果写在另一个磁带上。</p>"}');export{s as comp,g as data};
