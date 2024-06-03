---
title: Linux面试题，1道Linux八股文（1万字1张手绘图），面渣逆袭必看👍
shortTitle: 面渣逆袭-Linux
description: 下载次数超 1 万次，1 万字 1 张手绘图，详解 1 道 Linux 面试高频题（让天下没有难背的八股），面渣背会这些 Linux 八股文，这次吊打面试官，我觉得稳了（手动 dog）。
author: 沉默王二
category:
  - 面渣逆袭
tag:
  - 面渣逆袭
head:
  - - meta
    - name: keywords
      content: Linux面试题,Linux,linux,面试题,八股文
---

## 1. Linux 常用命令

推荐阅读：[常用高频 Linux 速查备忘手册](https://javabetter.cn/pdf/linux.html)

我自己常用的 Linux 命令有 top 查看系统资源、ps 查看进程、netstat 查看网络连接、ping 测试网络连通性、find 查找文件、chmod 修改文件权限、kill 终止进程、df 查看磁盘空间、free 查看内存使用、service 启动服务、mkdir 创建目录、rm 删除文件、rmdir 删除目录、cp 复制文件、mv 移动文件、zip 压缩文件、unzip 解压文件等等这些。

> 下面这些列表供大家作为参考，可以根据自己的实际情况进行选择。

### 文件操作的命令有哪些？

- `ls`：列出目录内容。`ls -l`显示详细信息，`ls -a`显示隐藏文件。
- `cd`：更改当前目录。`cd ..`回到上级目录，`cd ~`回到用户的主目录。
- `pwd`：显示当前工作目录的完整路径。
- `cp`：复制文件或目录。`cp source_file target_file`复制文件，`cp -r source_directory target_directory`复制目录。
- `mv`：移动或重命名文件或目录。
- `rm`：删除文件或目录。`rm -r`递归删除目录及其内容。
- `mkdir`：创建新目录。
- `cat`：查看文件内容。`cat file1 file2`合并文件内容显示。

### 系统管理的命令有哪些？

- `ps`：显示当前运行的进程。`ps aux`显示所有进程。
- `top`：实时显示进程动态。
- `kill`：终止进程。`kill -9 PID`强制终止。
- `df`：显示磁盘空间使用情况。`df -h`以易读格式显示。
- `du`：显示目录或文件的磁盘使用情况。
- `free`：显示内存和交换空间的使用情况。
- `chmod`：更改文件或目录的权限。
- `chown`：更改文件或目录的所有者和所属组。

#### chmod 的参数讲一下？

chmod 命令在 Linux 中用来改变文件或目录的访问权限。这个命令的使用可以基于符号表示法（也称为文本方法）或者八进制数表示法。

像 `chmod 777 file` 赋予文件所有权限，就属于八进制数表示法。`7=4+2+1`，分别代表读、写、执行权限。

Linux 中的权限可以应用于三种类别的用户：

- 文件所有者（u）
- 与文件所有者同组的用户（g）
- 其他用户（o）

![图片来源于网络](https://cdn.tobebetterjavaer.com/stutymore/linux-vip-20240214205642.png)

①、符号模式

符号模式使用字母来表示权限，如下：

- 读（r）
- 写（w）
- 执行（x）
- 所有（a）

例如：

- `chmod u+w file`：给文件所有者添加写权限。
- `chmod g-r file`：移除组用户的读权限。
- `chmod o+x file`：给其他用户添加执行权限。
- `chmod u=rwx,g=rx,o=r file`：设置文件所有者具有读写执行权限，组用户具有读执行权限，其他用户具有读权限。

②、数字模式

数字模式使用三位八进制数来表示权限，每位数字代表不同的用户类别（所有者、组、其他用户），数字是其各自权限值的总和：

- 读（r）= 4
- 写（w）= 2
- 执行（x）= 1

![图片来源于网络](https://cdn.tobebetterjavaer.com/stutymore/linux-vip-20240214205700.png)

因此，权限模式可以是从 0（无权限）到 7（读写执行权限）的任何值。

- chmod 755 file：使得文件所有者有读写执行（7）权限，组用户和其他用户有读和执行（5）权限。
- chmod 644 file：使得文件所有者有读写（6）权限，而组用户和其他用户只有读（4）权限。

### 网络管理的命令有哪些？

- `ping`：检查与远程服务器的连接。
- `wget`：从网络上下载文件。

### 压缩和解压的命令有哪些？

- `tar`：打包或解包`.tar`文件。`tar cvf archive.tar files`打包，`tar xvf archive.tar`解包。
- `gzip` / `gunzip`：压缩或解压`.gz`文件。
- `zip` / `unzip`：压缩或解压`.zip`文件。

### 查找文件的命令有哪些？

- `find`：在目录树中查找文件。`find /directory/ -name filename`。

#### Liunx 下查找一个文件怎么做？

在 Linux 环境下查找文件，有多种命令和方法可以使用。find 命令是最常用的文件查找工具之一，它可以在指定目录下递归查找符合条件的文件和目录。

例如：在当前目录及其子目录中查找名为 "example.txt" 的文件

```shell
find . -name "example.txt"
```

例如：查找 `/home` 目录中所有 `.txt` 结尾的文件：

```shell
find /home -name "*.txt"
```

例如：查找 `/var/log` 目录中修改时间在 7 天以前的 `.log` 文件

```shell
find /var/log -name "*.log" -mtime +7
```

> 1. [Java 面试指南（付费）](https://javabetter.cn/zhishixingqiu/mianshi.html)收录的用友金融一面原题：Linux 的常用命令
> 2. [Java 面试指南（付费）](https://javabetter.cn/zhishixingqiu/mianshi.html)收录的华为 OD 面经同学 1 一面面试原题：Linux 使用过哪些命令
> 3. [Java 面试指南（付费）](https://javabetter.cn/zhishixingqiu/mianshi.html)收录的小公司面经同学 5 Java 后端面试原题：Liunx 下查找一个文件怎么做
> 4. [Java 面试指南（付费）](https://javabetter.cn/zhishixingqiu/mianshi.html)收录的华为 OD 面经同学 1 一面面试原题：chmod 的参数讲一下?

---

图文详解 1 道 Linux 面试高频题，这次吊打面试官，我觉得稳了（手动 dog）。整理：沉默王二。

_没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟_。

**系列内容**：

- [面渣逆袭 Java SE 篇 👍](https://javabetter.cn/sidebar/sanfene/javase.html)
- [面渣逆袭 Java 集合框架篇 👍](https://javabetter.cn/sidebar/sanfene/javathread.html)
- [面渣逆袭 Java 并发编程篇 👍](https://javabetter.cn/sidebar/sanfene/collection.html)
- [面渣逆袭 JVM 篇 👍](https://javabetter.cn/sidebar/sanfene/jvm.html)
- [面渣逆袭 Spring 篇 👍](https://javabetter.cn/sidebar/sanfene/spring.html)
- [面渣逆袭 Redis 篇 👍](https://javabetter.cn/sidebar/sanfene/redis.html)
- [面渣逆袭 MyBatis 篇 👍](https://javabetter.cn/sidebar/sanfene/mybatis.html)
- [面渣逆袭 MySQL 篇 👍](https://javabetter.cn/sidebar/sanfene/mysql.html)
- [面渣逆袭操作系统篇 👍](https://javabetter.cn/sidebar/sanfene/os.html)
- [面渣逆袭计算机网络篇 👍](https://javabetter.cn/sidebar/sanfene/network.html)
- [面渣逆袭 RocketMQ 篇 👍](https://javabetter.cn/sidebar/sanfene/rocketmq.html)
- [面渣逆袭分布式篇 👍](https://javabetter.cn/sidebar/sanfene/fenbushi.html)
- [面渣逆袭微服务篇 👍](https://javabetter.cn/sidebar/sanfene/weifuwu.html)
- [面渣逆袭设计模式篇 👍](https://javabetter.cn/sidebar/sanfene/shejimoshi.html)
- [面渣逆袭 Linux 篇 👍](https://javabetter.cn/sidebar/sanfene/linux.html)

---

GitHub 上标星 10000+ 的开源知识库《[二哥的 Java 进阶之路](https://github.com/itwanger/toBeBetterJavaer)》第一版 PDF 终于来了！包括 Java 基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM 等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳：[太赞了，GitHub 上标星 10000+ 的 Java 教程](https://javabetter.cn/overview/)

微信搜 **沉默王二** 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 **222** 即可免费领取。

![](https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png)
