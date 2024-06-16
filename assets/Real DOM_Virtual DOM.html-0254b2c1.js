import{_ as o,p as t,q as p,s as e,R as a,t as s,Y as c,n as d}from"./framework-e1bed10d.js";const l={},i=c(`<h1 id="面试官-说说-real-dom-和-virtual-dom-的区别-优缺点" tabindex="-1"><a class="header-anchor" href="#面试官-说说-real-dom-和-virtual-dom-的区别-优缺点" aria-hidden="true">#</a> 面试官：说说 Real DOM 和 Virtual DOM 的区别？优缺点？</h1><p><img src="https://static.vue-js.com/f1d36350-d302-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>Real DOM，真实 <code>DOM</code>，意思为文档对象模型，是一个结构化文本的抽象，在页面渲染出的每一个结点都是一个真实 <code>DOM</code> 结构，如下：</p><p><img src="https://static.vue-js.com/fc7ba8d0-d302-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p><code>Virtual Dom</code>，本质上是以 <code>JavaScript</code> 对象形式存在的对 <code>DOM</code> 的描述</p><p>创建虚拟 <code>DOM</code> 目的就是为了更好将虚拟的节点渲染到页面视图中，虚拟 <code>DOM</code> 对象的节点与真实 <code>DOM</code> 的属性一一照应</p><p>在 <code>React</code> 中，<code>JSX</code> 是其一大特性，可以让你在 <code>JS</code> 中通过使用 <code>XML</code> 的方式去直接声明界面的 <code>DOM</code> 结构</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 创建 h1 标签，右边千万不能加引号</span>
<span class="token keyword">const</span> vDom <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span> 
<span class="token comment">// 找到 &lt;div id=&quot;root&quot;&gt;&lt;/div&gt; 节点</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 把创建的 h1 标签渲染到 root 节点上</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>vDom<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述中，<code>ReactDOM.render()</code> 用于将你创建好的虚拟 <code>DOM</code> 节点插入到某个真实节点上，并渲染到页面上</p><p><code>JSX</code> 实际是一种语法糖，在使用过程中会被 <code>babel</code> 进行编译转化成 <code>JS</code> 代码，上述 <code>VDOM</code> 转化为如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> vDom <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
  <span class="token string">&#39;h1&#39;</span>，
  <span class="token punctuation">{</span> <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">&#39;hClass&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;hId&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&#39;hello world&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，<code>JSX</code> 就是为了简化直接调用 <code>React.createElement()</code> 方法：</p><ul><li><p>第一个参数是标签名，例如 h1、span、table...</p></li><li><p>第二个参数是个对象，里面存着标签的一些属性，例如 id、class 等</p></li><li><p>第三个参数是节点中的文本</p></li></ul><p>通过 <code>console.log(VDOM)</code>，则能够得到虚拟 <code>VDOM</code> 消息</p><p><img src="https://static.vue-js.com/1716b9a0-d303-11eb-ab90-d9ae814b240d.png" alt=""></p><p>所以可以得到，<code>JSX</code> 通过 <code>babel</code> 的方式转化成 <code>React.createElement</code> 执行，返回值是一个对象，也就是虚拟 <code>DOM</code></p><h2 id="二、区别" tabindex="-1"><a class="header-anchor" href="#二、区别" aria-hidden="true">#</a> 二、区别</h2><p>两者的区别如下：</p><ul><li>虚拟 DOM 不会进行排版与重绘操作，而真实 DOM 会频繁重排与重绘</li><li>虚拟 DOM 的总损耗是“虚拟 DOM 增删改+真实 DOM 差异增删改+排版与重绘”，真实 DOM 的总损耗是“真实 DOM 完全增删改+排版与重绘”</li></ul>`,20),r={href:"https://mp.weixin.qq.com/s?__biz=MzU1OTgxNDQ1Nw==&mid=2247484516&idx=1&sn=965a4ce32bf93adb9ed112922c5cb8f5&chksm=fc10c632cb674f2484fdf914d76fba55afcefca3b5adcbe6cf4b0c7fd36e29d0292e8cefceb5&scene=178&cur_album_id=1711105826272116736#rd",target:"_blank",rel:"noopener noreferrer"},u=c('<p>传统的原生 <code>api</code> 或 <code>jQuery</code> 去操作 <code>DOM</code> 时，浏览器会从构建 <code>DOM</code> 树开始从头到尾执行一遍流程</p><p>当你在一次操作时，需要更新 10 个 <code>DOM</code> 节点，浏览器没这么智能，收到第一个更新 <code>DOM</code> 请求后，并不知道后续还有 9 次更新操作，因此会马上执行流程，最终执行 10 次流程</p><p>而通过 <code>VNode</code>，同样更新 10 个 <code>DOM</code> 节点，虚拟 <code>DOM</code> 不会立即操作 <code>DOM</code>，而是将这 10 次更新的 <code>diff</code> 内容保存到本地的一个 <code>js</code> 对象中，最终将这个 <code>js</code> 对象一次性 <code>attach</code> 到 <code>DOM</code> 树上，避免大量的无谓计算</p><h2 id="三、优缺点" tabindex="-1"><a class="header-anchor" href="#三、优缺点" aria-hidden="true">#</a> 三、优缺点</h2><p>真实 <code>DOM</code> 的优势：</p><ul><li>易用</li></ul><p>缺点：</p><ul><li>效率低，解析速度慢，内存占用量过高</li><li>性能差：频繁操作真实 DOM，易于导致重绘与回流</li></ul><p>使用虚拟 <code>DOM</code> 的优势如下：</p><ul><li><p>简单方便：如果使用手动操作真实 <code>DOM</code> 来完成页面，繁琐又容易出错，在大规模应用下维护起来也很困难</p></li><li><p>性能方面：使用 Virtual DOM，能够有效避免真实 DOM 数频繁更新，减少多次引起重绘与回流，提高性能</p></li><li><p>跨平台：React 借助虚拟 DOM，带来了跨平台的能力，一套代码多端运行</p></li></ul><p>缺点：</p><ul><li>在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化</li><li>首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，速度比正常稍慢</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>',13),h={href:"https://juejin.cn/post/6844904052971536391",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.html.cn/qa/other/22832.html",target:"_blank",rel:"noopener noreferrer"};function k(D,b){const n=d("ExternalLinkIcon");return t(),p("div",null,[i,e("p",null,[a("拿"),e("a",r,[a("以前文章"),s(n)]),a("举过的例子：")]),u,e("ul",null,[e("li",null,[e("a",h,[a("https://juejin.cn/post/6844904052971536391"),s(n)])]),e("li",null,[e("a",m,[a("https://www.html.cn/qa/other/22832.html"),s(n)])])])])}const O=o(l,[["render",k],["__file","Real DOM_Virtual DOM.html.vue"]]);export{O as default};
