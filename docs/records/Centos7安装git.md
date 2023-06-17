---
title: Centos7安装git
date: 2020-07-07 10:00:00
tags:
  - 环境搭建
  - centos
  - git
categories:
  - 环境搭建
---

# Centos7安装git

## 使用 yum 安装

```bash
yum install -y git

git --version

# 用此命令安装的git版本比较旧
```

## 通过源码安装

```bash
# 安装工具包
yum install -y wget gcc-c++ zlib-devel perl-ExtUtils-MakeMaker

# 下载源码
wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.9.5.tar.gz

# 解压源码包
tar -zxvf git-2.9.5.tar.gz

# 安装、配置
cd git-2.9.5
./configure --prefix=/usr/local
make && make install

# 查看git版本
git --version
```

至此，git 已经可以正常使用了。但是我在通过 git clone https://github.com/dongjb/blog.git时发现拉取失败，`fatal: Unable to find remote helper for 'https'`。

## 解决无法通过 https 方式拉取 git 项目

```bash
yum install -y curl-devel

# 重新执行一遍上面的安装、配置步骤即可
```
