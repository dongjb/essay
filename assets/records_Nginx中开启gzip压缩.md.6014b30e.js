import{_ as s,o as n,c as a,O as p}from"./chunks/framework.81eb544a.js";const d=JSON.parse('{"title":"Nginx中开启gzip压缩","description":"","frontmatter":{"title":"Nginx中开启gzip压缩","date":"2021-07-15T16:03:38.000Z","tags":["nginx"],"categories":["nginx"]},"headers":[],"relativePath":"records/Nginx中开启gzip压缩.md","filePath":"records/Nginx中开启gzip压缩.md","lastUpdated":1686983617000}'),l={name:"records/Nginx中开启gzip压缩.md"},e=p(`<h1 id="nginx中开启gzip压缩" tabindex="-1">Nginx中开启gzip压缩 <a class="header-anchor" href="#nginx中开启gzip压缩" aria-label="Permalink to &quot;Nginx中开启gzip压缩&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 开启和关闭gzip模式</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># gizp压缩起点，文件大于1k才进行压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_min_length 1k;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_comp_level 6;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 进行压缩的文件类型。</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/xml text/javascript application/json;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># nginx对于静态文件的处理模块，开启后会寻找以.gz结尾的文件，直接返回，不会占用cpu进行压缩</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_static on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否在http header中添加Vary: Accept-Encoding，建议开启</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_vary on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置压缩所需要的缓冲区大小，以4k为单位，如果文件为7k则申请2*4k的缓冲区</span></span>
<span class="line"><span style="color:#A6ACCD;">gzip_buffers 4 16k;</span></span></code></pre></div>`,2),i=[e];function t(o,c,r,C,A,g){return n(),a("div",null,i)}const y=s(l,[["render",t]]);export{d as __pageData,y as default};
