import{_ as s,o as a,c as n,O as l}from"./chunks/framework.81eb544a.js";const h=JSON.parse('{"title":"使用verdaccio搭建私有npm仓库","description":"","frontmatter":{"title":"使用verdaccio搭建私有npm仓库","date":"2020-07-13T15:00:15.000Z","tags":["环境搭建","verdaccio","npm","nrm","node"],"categories":["环境搭建"]},"headers":[],"relativePath":"records/使用verdaccio搭建私有npm仓库.md","filePath":"records/使用verdaccio搭建私有npm仓库.md","lastUpdated":1686983617000}'),p={name:"records/使用verdaccio搭建私有npm仓库.md"},e=l(`<h1 id="使用verdaccio搭建公司私有npm仓库" tabindex="-1">使用verdaccio搭建公司私有npm仓库 <a class="header-anchor" href="#使用verdaccio搭建公司私有npm仓库" aria-label="Permalink to &quot;使用verdaccio搭建公司私有npm仓库&quot;">​</a></h1><h2 id="使用-nvm-管理-node-版本" tabindex="-1">使用 nvm 管理 node 版本 <a class="header-anchor" href="#使用-nvm-管理-node-版本" aria-label="Permalink to &quot;使用 nvm 管理 node 版本&quot;">​</a></h2><p><a href="./使用nvm管理node版本">使用 nvm 管理 node 版本</a></p><h2 id="使用-nrm-管理-npm-源" tabindex="-1">使用 nrm 管理 npm 源 <a class="header-anchor" href="#使用-nrm-管理-npm-源" aria-label="Permalink to &quot;使用 nrm 管理 npm 源&quot;">​</a></h2><p><a href="./使用nrm管理npm源">使用 nrm 管理 npm 源</a></p><h2 id="全局安装-verdaccio" tabindex="-1">全局安装 verdaccio <a class="header-anchor" href="#全局安装-verdaccio" aria-label="Permalink to &quot;全局安装 verdaccio&quot;">​</a></h2><p><a href="https://verdaccio.org/docs/zh-CN/installation" target="_blank" rel="noreferrer">文档地址</a></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verdaccio</span></span></code></pre></div><h4 id="更改-verdaccio-配置" tabindex="-1">更改 verdaccio 配置 <a class="header-anchor" href="#更改-verdaccio-配置" aria-label="Permalink to &quot;更改 verdaccio 配置&quot;">​</a></h4><ol><li>verdaccio 安装成功配置文件位于 <code>~/.config/verdaccio/config.yaml</code></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#</span></span>
<span class="line"><span style="color:#A6ACCD;"># This is the default config file. It allows all users to do anything,</span></span>
<span class="line"><span style="color:#A6ACCD;"># so don&#39;t use it on production systems.</span></span>
<span class="line"><span style="color:#A6ACCD;">#</span></span>
<span class="line"><span style="color:#A6ACCD;"># Look here for more config file examples:</span></span>
<span class="line"><span style="color:#A6ACCD;"># https://github.com/verdaccio/verdaccio/tree/master/conf</span></span>
<span class="line"><span style="color:#A6ACCD;">#</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># path to a directory with all packages</span></span>
<span class="line"><span style="color:#A6ACCD;">storage: ./storage</span></span>
<span class="line"><span style="color:#A6ACCD;"># path to a directory with plugins to include</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins: ./plugins</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">web:</span></span>
<span class="line"><span style="color:#A6ACCD;">  title: Verdaccio</span></span>
<span class="line"><span style="color:#A6ACCD;">  # comment out to disable gravatar support</span></span>
<span class="line"><span style="color:#A6ACCD;">  # gravatar: false</span></span>
<span class="line"><span style="color:#A6ACCD;">  # by default packages are ordercer ascendant (asc|desc)</span></span>
<span class="line"><span style="color:#A6ACCD;">  # sort_packages: asc</span></span>
<span class="line"><span style="color:#A6ACCD;">  # convert your UI to the dark side</span></span>
<span class="line"><span style="color:#A6ACCD;">  # darkMode: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># translate your registry, api i18n not available yet</span></span>
<span class="line"><span style="color:#A6ACCD;"># i18n:</span></span>
<span class="line"><span style="color:#A6ACCD;"># list of the available translations https://github.com/verdaccio/ui/tree/master/i18n/translations</span></span>
<span class="line"><span style="color:#A6ACCD;">#   web: en-US</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">auth:</span></span>
<span class="line"><span style="color:#A6ACCD;">  htpasswd:</span></span>
<span class="line"><span style="color:#A6ACCD;">    file: ./htpasswd</span></span>
<span class="line"><span style="color:#A6ACCD;">    # Maximum amount of users allowed to register, defaults to &quot;+inf&quot;.</span></span>
<span class="line"><span style="color:#A6ACCD;">    # You can set this to -1 to disable registration.</span></span>
<span class="line"><span style="color:#A6ACCD;">    # max_users: 1000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># a list of other known repositories we can talk to</span></span>
<span class="line"><span style="color:#A6ACCD;">uplinks:</span></span>
<span class="line"><span style="color:#A6ACCD;">  npmjs:</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: https://registry.npmjs.org</span></span>
<span class="line"><span style="color:#A6ACCD;">  taobao:</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: https://registry.npm.taobao.org/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">packages:</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;@seentao/*&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">    # scoped packages</span></span>
<span class="line"><span style="color:#A6ACCD;">    access: $all</span></span>
<span class="line"><span style="color:#A6ACCD;">    publish: $authenticated</span></span>
<span class="line"><span style="color:#A6ACCD;">    unpublish: $authenticated</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;**&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">    # allow all users (including non-authenticated users) to read and</span></span>
<span class="line"><span style="color:#A6ACCD;">    # publish all packages</span></span>
<span class="line"><span style="color:#A6ACCD;">    #</span></span>
<span class="line"><span style="color:#A6ACCD;">    # you can specify usernames/groupnames (depending on your auth plugin)</span></span>
<span class="line"><span style="color:#A6ACCD;">    # and three keywords: &quot;$all&quot;, &quot;$anonymous&quot;, &quot;$authenticated&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    access: $all</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # allow all known users to publish/publish packages</span></span>
<span class="line"><span style="color:#A6ACCD;">    # (anyone can register by default, remember?)</span></span>
<span class="line"><span style="color:#A6ACCD;">    # publish: $authenticated</span></span>
<span class="line"><span style="color:#A6ACCD;">    # unpublish: $authenticated</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # if package is not available locally, proxy requests to &#39;npmjs&#39; registry</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy: taobao</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># You can specify HTTP/1.1 server keep alive timeout in seconds for incoming connections.</span></span>
<span class="line"><span style="color:#A6ACCD;"># A value of 0 makes the http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.</span></span>
<span class="line"><span style="color:#A6ACCD;"># WORKAROUND: Through given configuration you can workaround following issue https://github.com/verdaccio/verdaccio/issues/301. Set to 0 in case 60 is not enough.</span></span>
<span class="line"><span style="color:#A6ACCD;">server:</span></span>
<span class="line"><span style="color:#A6ACCD;">  keepAliveTimeout: 60</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">middlewares:</span></span>
<span class="line"><span style="color:#A6ACCD;">  audit:</span></span>
<span class="line"><span style="color:#A6ACCD;">    enabled: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># log settings</span></span>
<span class="line"><span style="color:#A6ACCD;">logs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - { type: stdout, format: pretty, level: http }</span></span>
<span class="line"><span style="color:#A6ACCD;">  #- {type: file, path: verdaccio.log, level: info}</span></span>
<span class="line"><span style="color:#A6ACCD;">#experiments:</span></span>
<span class="line"><span style="color:#A6ACCD;">#  # support for npm token command</span></span>
<span class="line"><span style="color:#A6ACCD;">#  token: false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># This affect the web and api (not developed yet)</span></span>
<span class="line"><span style="color:#A6ACCD;">#i18n:</span></span>
<span class="line"><span style="color:#A6ACCD;">#web: en-US</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">listen:</span></span>
<span class="line"><span style="color:#A6ACCD;">  0.0.0.0:8000</span></span></code></pre></div><ol start="2"><li>重点参数</li></ol><p><strong>storage</strong></p><p>配置发布到私有仓库包的存放地址，默认存放于<code>~/.config/verdaccio/storage</code>中，后期我们自己开发的私有包或者从公有包下载的依赖都会存放于这个目录下。</p><p><strong>uplinks</strong></p><p>也许，我们的包不止发布到了一个仓库，如果公司按照业务线划分了几个前端部门，部门之间技术独立但能共享，这时如果我们想在使用自己发布的 npm 私有包的同时，还期望可以使用其他团队开发的 npm 包，这时我们就可以通过指定该参数实现。换句话说，npm 公有仓库也能理解为我们的另一个仓库，像这样的仓库还有淘宝的仓库等。配置如下，在这里其实只是做一个定义，真正的使用其实是在包 packages 管理的参数中。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uplinks:</span></span>
<span class="line"><span style="color:#A6ACCD;">  npmjs:</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: https://registry.npmjs.org</span></span>
<span class="line"><span style="color:#A6ACCD;">  taobao:</span></span>
<span class="line"><span style="color:#A6ACCD;">    url: https://registry.npm.taobao.org</span></span></code></pre></div><p><strong>packages</strong></p><p>该参数是整个配置中最为重要的一个，因为通过配置该参数，能达到设定包权限，设定包发布与使用的权限，设置包是否代理到公有 npm 仓库等</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">packages:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&#39;@seentao/*&#39;</span><span style="color:#82AAFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">access:</span><span style="color:#A6ACCD;"> $all</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">publish:</span><span style="color:#A6ACCD;"> $authenticated</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">unpublish:</span><span style="color:#A6ACCD;"> $authenticated</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&#39;**&#39;</span><span style="color:#82AAFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">access:</span><span style="color:#A6ACCD;"> $all</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># publish: $authenticated</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># unpublish: $authenticated</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># if package is not available locally, proxy requests to &#39;npmjs&#39; registry</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">taobao</span></span></code></pre></div><p>上述配置：</p><ul><li>约定名称是以<code>@seentao</code>前缀开头的就是私有包，这里的名称指的是 package.json 中的 name 字段。</li><li>如果不是以<code>@seentao</code>就会走上述<code>**</code>字段配置逻辑，当然我这里配置是不允许发布或取消发布，只允许拉取，proxy 指向了 taobao，表示从 taobao 上拉取公有包，并且会将拉取下来的公有包缓存在前面指定的 storage 文件中，下次我们再下载相同的依赖，就会直接下载，不会再去 taobao 上下载。</li></ul><p><strong>listen</strong></p><p>指定启动端口号</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">listen:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">0.0.0.0:8000</span></span></code></pre></div><h2 id="使用-pm2-管理我们的-node-服务" tabindex="-1">使用 pm2 管理我们的 node 服务 <a class="header-anchor" href="#使用-pm2-管理我们的-node-服务" aria-label="Permalink to &quot;使用 pm2 管理我们的 node 服务&quot;">​</a></h2><ol><li>安装 pm2</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pm2</span></span></code></pre></div><ol start="2"><li>查看 pm2 管理的 node 服务</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span></code></pre></div><ol start="3"><li>启动 node 服务、停止 node 服务</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verdaccio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verdaccio</span></span></code></pre></div><ol start="4"><li>其他命令请自行研究</li></ol><p><a href="https://github.com/Unitech/pm2" target="_blank" rel="noreferrer">github 地址</a></p><h2 id="启动-verdaccio-服务" tabindex="-1">启动 verdaccio 服务 <a class="header-anchor" href="#启动-verdaccio-服务" aria-label="Permalink to &quot;启动 verdaccio 服务&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verdaccio</span></span></code></pre></div><p>此时我们可以去访问<a href="http://106.52.253.99:8000/" target="_blank" rel="noreferrer">http://106.52.253.99:8000/</a></p><h1 id="客户端-自己的电脑" tabindex="-1">客户端（自己的电脑） <a class="header-anchor" href="#客户端-自己的电脑" aria-label="Permalink to &quot;客户端（自己的电脑）&quot;">​</a></h1><p>同样的道理，我们也可以在电脑上安装 nvm、nrm，指定使用的 node 版本，npm 源，在本机上将 npm 源指向我们自己搭建的服务，即添加自定义源，将地址指向搭建的服务</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 添加自定义源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">seentao</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://106.52.253.99:8000/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用自定义源</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">seentao</span></span></code></pre></div><p>这样我们在本机安装依赖包时就会从我们自己搭建的服务上去下载了，如果我们自己搭建的服务上没有这个包，就会去服务器设置的 npm 源上去下载，并且会缓存在我们的服务上。 以后我们再次安装的时候就会直接从我们服务下载，不会去线上源拉取，因为服务里已经有了。</p><p>缓存位置<code>~/.config/verdaccio/storage/</code>目录下</p><h2 id="开发私有-npm-包" tabindex="-1">开发私有 npm 包 <a class="header-anchor" href="#开发私有-npm-包" aria-label="Permalink to &quot;开发私有 npm 包&quot;">​</a></h2><ol><li>创建工程目录</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@seentao/utils</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@seentao/utils</span></span></code></pre></div><ol start="2"><li>创建 package.json 文件</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><ol start="3"><li>创建<code>README.md</code> 项目说明文档</li><li>创建入口文件 <code>index.js</code></li></ol><p>示例：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@seentao-utils</span></span>
<span class="line"><span style="color:#A6ACCD;">├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├── index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">└── package.json</span></span></code></pre></div><h2 id="发布私有包到我们之前搭建的服务上" tabindex="-1">发布私有包到我们之前搭建的服务上 <a class="header-anchor" href="#发布私有包到我们之前搭建的服务上" aria-label="Permalink to &quot;发布私有包到我们之前搭建的服务上&quot;">​</a></h2><ol><li>添加用户</li></ol><ul><li>在这之前一定要确保本机使用的 npm 源已经指向到我们自己的服务，可通过<code>nrm ls</code>查看后使用或者直接指向<code>nrm use seentao</code></li><li>注意项目中 package.json 文件中的 name 字段，这个名称不要与已有的包冲突</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">adduser</span></span></code></pre></div><p>随后会让你输入用户、密码、邮箱</p><p>2、发布</p><p>在项目下使用<code>npm publish</code>发布，发布完成之后去访问之前搭建的服务<code>http://106.52.253.99:8000/</code>中查看</p><p><a href="https://segmentfault.com/a/1190000017463371" target="_blank" rel="noreferrer">npm 发布包教程参考</a></p>`,58),o=[e];function t(c,r,i,C,A,d){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{h as __pageData,u as default};
