import{_ as t,p as e,q as p,R as n,Y as a,s}from"./framework-e1bed10d.js";const i={},c=a(`<h1 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h1><p>path模块提供了对路径操作的方法</p><p>path结构：</p><p>|──────────|───────| <br> │-----------dir---------│----base----│ <br> │--root--│                      │-name-│-ext-│ <br>      /        home/user/dir/    file     .txt <br> |──────────|───────|</p><h2 id="windows-与-posix-的对比" tabindex="-1"><a class="header-anchor" href="#windows-与-posix-的对比" aria-hidden="true">#</a> Windows 与 POSIX 的对比</h2><p>node:path 模块的默认操作因运行 Node.js 应用程序的操作系统而异</p><p>在 POSIX 上：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span><span class="token string">&#39;C:\\\\temp\\\\myfile.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;C:\\\\temp\\\\myfile.html&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Windows 上：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span><span class="token string">&#39;C:\\\\temp\\\\myfile.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;myfile.html&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用 Windows 文件路径时，若要在任何操作系统上获得一致的结果，则使用 path.win32 在 POSIX 和 Windows 上：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span>win32<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span><span class="token string">&#39;C:\\\\temp\\\\myfile.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;myfile.html&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用 POSIX 文件路径时，若要在任何操作系统上获得一致的结果，则使用 path.posix 在 POSIX 和 Windows 上：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span>posix<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span><span class="token string">&#39;/tmp/myfile.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;myfile.html&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路径拆解" tabindex="-1"><a class="header-anchor" href="#路径拆解" aria-hidden="true">#</a> 路径拆解</h2><ol><li>path.basename(path[, ext])</li></ol><p>path.basename() 方法返回 path 的最后一部分</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar/baz/asdf/quux.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;quux.html&#39;</span>

path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar/baz/asdf/quux.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;quux&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tips：如果path不是字符串，将会报错</p><br>`,20),l=s("p",null,"提供特定于平台的路径定界符：windows->; posix->：",-1),o=s("br",null,null,-1),u=a(`<p>dirname方法用于解析path所指定文件所在目录名，末尾的路径分隔符会被忽略</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar/baz/asdf/quux&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;/foo/bar/baz/asdf&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>path.extname(path)</li></ol><p>extname方法用于解析path所指文件的扩展名，即 path 的最后一部分（最后一个路径分隔符后面）中从最后一次出现的 .（句点）字符到字符串的结尾。 如果 path 的最后一部分中没有 .，或者除了 path 的基本名称（参见 path.basename()）的第一个字符之外没有 . 个字符，则返回空字符串</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;.html&#39;</span>

path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;index.coffee.md&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;.md&#39;</span>

path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;index.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;.&#39;</span>

path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;&#39;</span>

path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;.index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;&#39;</span>

path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span><span class="token string">&#39;.index.md&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;.md&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="形式转换" tabindex="-1"><a class="header-anchor" href="#形式转换" aria-hidden="true">#</a> 形式转换</h2><ol start="6"><li>path.format(pathObject)</li></ol><p>path.format() 方法从对象返回路径字符串</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;/home/user/dir&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;file.txt&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当向 pathObject 提供属性时，存在一个属性优先于另一个属性的组合：</p><ul><li>如果提供 pathObject.dir，则忽略 pathObject.root</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token string">&#39;/ignored&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;/home/user/dir&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;file.txt&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果 pathObject.base 存在，则忽略 pathObject.ext 和 pathObject.name</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;file.txt&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ext</span><span class="token operator">:</span> <span class="token string">&#39;ignored&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,15),r=s("p",null,"该方法用于判断path是否为绝对路径",-1),d=s("br",null,null,-1),m=a(`<p>path.parse() 方法返回一个对象，其属性表示 path 的重要元素</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;/home/user/dir/file.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回:</span>
<span class="token comment">// { root: &#39;/&#39;,</span>
<span class="token comment">//   dir: &#39;/home/user/dir&#39;,</span>
<span class="token comment">//   base: &#39;file.txt&#39;,</span>
<span class="token comment">//   ext: &#39;.txt&#39;,</span>
<span class="token comment">//   name: &#39;file&#39; }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路径解析" tabindex="-1"><a class="header-anchor" href="#路径解析" aria-hidden="true">#</a> 路径解析</h2><ol><li>path.relative(from,to)</li></ol><p>path.relative() 方法根据当前工作目录返回从 from 到 to 的相对路径</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span><span class="token string">&#39;/data/orandea/test/aaa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/data/orandea/impl/bbb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;../../impl/bbb&#39;</span>

path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span><span class="token string">&#39;C:\\\\orandea\\\\test\\\\aaa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C:\\\\orandea\\\\impl\\\\bbb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;..\\\\..\\\\impl\\\\bbb&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,7),v=a(`<p>path.resolve() 方法将路径或路径片段的序列解析为绝对路径， 给定的路径序列从右到左处理，每个后续的 path 会被追加到前面，直到构建绝对路径</p><p>如果在处理完所有给定的 path 片段之后，还没有生成绝对路径，则使用当前工作目录</p><ol start="3"><li>path.join([...paths])</li></ol><p>path.join() 方法使用特定于平台的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径，只做拼接，不做解析</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;baz/asdf&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;quux&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h2><ol><li>path.normalize(path)</li></ol><p>path.normalize() 方法规范化给定的 path，解析 &#39;..&#39; 和 &#39;.&#39; 片段。 当找到多个连续的路径片段分隔符（例如 POSIX 上的 / 和 Windows 上的 \\ 或 /）时，则它们将被平台特定路径片段分隔符（POSIX 上的 / 和 Windows 上的 \\）的单个实例替换。 保留尾随的分隔符</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar//baz/asdf/quux/..&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回: &#39;/foo/bar/baz/asdf&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function k(h,b){return e(),p("div",null,[c,n(" 2. path.delimiter "),l,o,n(" 3. path.dirname(path) "),u,n(" 2. path.isAbsolute(path) "),r,d,n(" 3. path.parse(path) "),m,n(" 2. path.resolve([...paths]) "),v])}const f=t(i,[["render",k],["__file","path.html.vue"]]);export{f as default};