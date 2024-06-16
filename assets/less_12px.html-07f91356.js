import{_ as e,p,q as o,s as n,R as a,t,Y as c,n as l}from"./framework-e1bed10d.js";const i={},u=c(`<h1 id="让chrome支持小于12px-的文字方式有哪些" tabindex="-1"><a class="header-anchor" href="#让chrome支持小于12px-的文字方式有哪些" aria-hidden="true">#</a> 让Chrome支持小于12px 的文字方式有哪些</h1><h2 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景" aria-hidden="true">#</a> 一、背景</h2><p>Chrome 中文版浏览器会默认设定页面的最小字号是12px，英文版没有限制</p><p>原由 Chrome 团队认为汉字小于12px就会增加识别难度</p><ul><li>中文版浏览器</li></ul><p>与网页语言无关，取决于用户在Chrome的设置里（chrome://settings/languages）把哪种语言设置为默认显示语言</p><ul><li>系统级最小字号</li></ul><p>浏览器默认设定页面的最小字号，用户可以前往 chrome://settings/fonts 根据需求更改</p><p>而我们在实际项目中，不能奢求用户更改浏览器设置</p><p>对于文本需要以更小的字号来显示，就需要用到一些小技巧</p><h2 id="二、解决方案" tabindex="-1"><a class="header-anchor" href="#二、解决方案" aria-hidden="true">#</a> 二、解决方案</h2><p>常见的解决方案有：</p><ul><li>zoom</li><li>-webkit-transform:scale()</li><li>-webkit-text-size-adjust:none</li></ul><h3 id="zoom" tabindex="-1"><a class="header-anchor" href="#zoom" aria-hidden="true">#</a> Zoom</h3><p><code>zoom</code> 的字面意思是“变焦”，可以改变页面上元素的尺寸，属于真实尺寸</p><p>其支持的值类型有：</p><ul><li>zoom:50%，表示缩小到原来的一半</li><li>zoom:0.5，表示缩小到原来的一半</li></ul><p>使用 <code>zoom</code> 来”支持“ 12px 以下的字体</p><p>代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.span1</span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">zoom</span><span class="token punctuation">:</span> 0.8<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.span2</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>测试10px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>测试12px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="https://static.vue-js.com/d5243980-a334-11eb-ab90-d9ae814b240d.png" alt=""></p><blockquote><p>需要注意的是，<code>Zoom</code> 并不是标准属性，需要考虑其兼容性</p></blockquote><p><img src="https://static.vue-js.com/3defe3c0-a343-11eb-85f6-6fac77c0c9b3.png" alt="image.png"></p><h3 id="webkit-transform-scale" tabindex="-1"><a class="header-anchor" href="#webkit-transform-scale" aria-hidden="true">#</a> -webkit-transform:scale()</h3><p>针对<code>chrome</code>浏览器,加<code>webkit</code>前缀，用<code>transform:scale()</code>这个属性进行放缩</p><p>注意的是，使用<code>scale</code>属性只对可以定义宽高的元素生效，所以，下面代码中将<code>span</code>元素转为行内块元素</p><p>实现代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.span1</span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">-webkit-transform</span><span class="token punctuation">:</span><span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.span2</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>测试10px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>span2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>测试12px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="https://static.vue-js.com/d5243980-a334-11eb-ab90-d9ae814b240d.png" alt=""></p><h3 id="webkit-text-size-adjust-none" tabindex="-1"><a class="header-anchor" href="#webkit-text-size-adjust-none" aria-hidden="true">#</a> -webkit-text-size-adjust:none</h3><p>该属性用来设定文字大小是否根据设备(浏览器)来自动调整显示大小</p><p>属性值：</p><ul><li>percentage：字体显示的大小；</li><li>auto：默认，字体大小会根据设备/浏览器来自动调整；</li><li>none:字体大小不会自动调整</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span> <span class="token property">-webkit-text-size-adjust</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样设置之后会有一个问题，就是当你放大网页时，一般情况下字体也会随着变大，而设置了以上代码后，字体只会显示你当前设置的字体大小，不会随着网页放大而变大了</p><p>所以，我们不建议全局应用该属性，而是单独对某一属性使用</p><blockquote><p>需要注意的是，自从<code>chrome 27</code>之后，就取消了对这个属性的支持。同时，该属性只对英文、数字生效，对中文不生效</p></blockquote><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><p><code>Zoom</code> 非标属性，有兼容问题，缩放会改变了元素占据的空间大小，触发重排</p><p><code>-webkit-transform:scale()</code> 大部分现代浏览器支持，并且对英文、数字、中文也能够生效，缩放不会改变了元素占据的空间大小，页面布局不会发生变化</p><p><code>-webkit-text-size-adjust</code>对谷歌浏览器有版本要求，在27之后，就取消了该属性的支持，并且只对英文、数字生效</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,44),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-size-adjust",target:"_blank",rel:"noopener noreferrer"},d={href:"https://vue3js.cn/interview",target:"_blank",rel:"noopener noreferrer"};function k(m,v){const s=l("ExternalLinkIcon");return p(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-size-adjust"),t(s)])]),n("li",null,[n("a",d,[a("https://vue3js.cn/interview"),t(s)])])])])}const b=e(i,[["render",k],["__file","less_12px.html.vue"]]);export{b as default};
