const e=JSON.parse('{"key":"v-1176bc2e","path":"/nice-article/weixin/shizlllldsjtzhbygndsjysx.html","title":"电商系统中的红包雨如何设计和实现？","lang":"zh-CN","frontmatter":{"title":"电商系统中的红包雨如何设计和实现？","shortTitle":"红包雨如何设计和实现？","description":"红包雨是一个典型的高并发场景，短时间内有海量请求访问服务端。","author":"勇哥","category":["微信公众号"],"head":[["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/weixin/shizlllldsjtzhbygndsjysx.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"电商系统中的红包雨如何设计和实现？"}],["meta",{"property":"og:description","content":"红包雨是一个典型的高并发场景，短时间内有海量请求访问服务端。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-16T01:19:05.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"勇哥"}],["meta",{"property":"article:modified_time","content":"2022-11-16T01:19:05.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1 整体流程","slug":"_1-整体流程","link":"#_1-整体流程","children":[]},{"level":2,"title":"2 红包 Redis 设计","slug":"_2-红包-redis-设计","link":"#_2-红包-redis-设计","children":[]},{"level":2,"title":"3 事务原理","slug":"_3-事务原理","link":"#_3-事务原理","children":[]},{"level":2,"title":"4 事务的ACID","slug":"_4-事务的acid","link":"#_4-事务的acid","children":[{"level":3,"title":"4.1 原子性","slug":"_4-1-原子性","link":"#_4-1-原子性","children":[]},{"level":3,"title":"4.2 隔离性","slug":"_4-2-隔离性","link":"#_4-2-隔离性","children":[]},{"level":3,"title":"4.3 持久性","slug":"_4-3-持久性","link":"#_4-3-持久性","children":[]},{"level":3,"title":"4.4 一致性","slug":"_4-4-一致性","link":"#_4-4-一致性","children":[]},{"level":3,"title":"4.5 总结","slug":"_4-5-总结","link":"#_4-5-总结","children":[]}]},{"level":2,"title":"5 Lua 脚本","slug":"_5-lua-脚本","link":"#_5-lua-脚本","children":[{"level":3,"title":"5.1 简介","slug":"_5-1-简介","link":"#_5-1-简介","children":[]},{"level":3,"title":"5.2 EVAL 命令","slug":"_5-2-eval-命令","link":"#_5-2-eval-命令","children":[]},{"level":3,"title":"5.3 EVALSHA 命令","slug":"_5-3-evalsha-命令","link":"#_5-3-evalsha-命令","children":[]},{"level":3,"title":"5.4 事务 VS Lua 脚本","slug":"_5-4-事务-vs-lua-脚本","link":"#_5-4-事务-vs-lua-脚本","children":[]}]},{"level":2,"title":"6 实战准备","slug":"_6-实战准备","link":"#_6-实战准备","children":[]},{"level":2,"title":"7 抢红包脚本","slug":"_7-抢红包脚本","link":"#_7-抢红包脚本","children":[]},{"level":2,"title":"8 异步任务","slug":"_8-异步任务","link":"#_8-异步任务","children":[]},{"level":2,"title":"9 写到最后","slug":"_9-写到最后","link":"#_9-写到最后","children":[]}],"git":{"createdTime":1668561545000,"updatedTime":1668561545000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":19.26,"words":5777},"filePathRelative":"nice-article/weixin/shizlllldsjtzhbygndsjysx.md","localizedDate":"2022年11月16日"}');export{e as data};
