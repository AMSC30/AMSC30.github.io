import{_ as n,p as s,q as a,Y as p}from"./framework-e1bed10d.js";const e={},t=p(`<h1 id="面试官-vue-observable你有了解过吗-说说看" tabindex="-1"><a class="header-anchor" href="#面试官-vue-observable你有了解过吗-说说看" aria-hidden="true">#</a> 面试官：Vue.observable你有了解过吗？说说看</h1><p><img src="https://static.vue-js.com/193782e0-3e7b-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、observable-是什么" tabindex="-1"><a class="header-anchor" href="#一、observable-是什么" aria-hidden="true">#</a> 一、Observable 是什么</h2><p><code>Observable</code> 翻译过来我们可以理解成<strong>可观察的</strong></p><p>我们先来看一下其在<code>Vue</code>中的定义</p><blockquote><p><code>Vue.observable</code>，让一个对象变成响应式数据。<code>Vue</code> 内部会用它来处理 <code>data</code> 函数返回的对象</p></blockquote><p>返回的对象可以直接用于渲染函数和计算属性内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其作用等同于</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>Vue 2.x</code> 中，被传入的对象会直接被 <code>Vue.observable</code> 变更，它和被返回的对象是同一个对象</p><p>在 <code>Vue 3.x</code> 中，则会返回一个可响应的代理，而对源对象直接进行变更仍然是不可响应的</p><h2 id="二、使用场景" tabindex="-1"><a class="header-anchor" href="#二、使用场景" aria-hidden="true">#</a> 二、使用场景</h2><p>在非父子组件通信时，可以使用通常的<code>bus</code>或者使用<code>vuex</code>，但是实现的功能不是太复杂，而使用上面两个又有点繁琐。这时，<code>observable</code>就是一个很好的选择</p><p>创建一个<code>js</code>文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入vue</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> &#39;vue
<span class="token comment">// 创建state对象，使用observable让state对象可响应</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> state <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;age&#39;</span><span class="token operator">:</span> <span class="token number">38</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 创建对应的方法</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>.vue</code>文件中直接使用即可</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    姓名：<span class="token punctuation">{</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">}</span>
    年龄：<span class="token punctuation">{</span><span class="token punctuation">{</span> age <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeName(&#39;李四&#39;)&quot;</span><span class="token operator">&gt;</span>改变姓名<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;setAge(18)&quot;</span><span class="token operator">&gt;</span>改变年龄<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> mutations <span class="token punctuation">}</span> <span class="token keyword">from</span> &#39;@<span class="token operator">/</span>store
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在计算属性中拿到值</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>name
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>age
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 调用mutations里面的方法，更新数据</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">changeName</span><span class="token operator">:</span> mutations<span class="token punctuation">.</span>changeName<span class="token punctuation">,</span>
    <span class="token literal-property property">setAge</span><span class="token operator">:</span> mutations<span class="token punctuation">.</span>setAge
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、原理分析" tabindex="-1"><a class="header-anchor" href="#三、原理分析" aria-hidden="true">#</a> 三、原理分析</h2><p>源码位置：src\\core\\observer\\index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">observe</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">asRootData</span><span class="token operator">:</span> <span class="token operator">?</span>boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> Observer <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> value <span class="token keyword">instanceof</span> <span class="token class-name">VNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> <span class="token literal-property property">ob</span><span class="token operator">:</span> Observer <span class="token operator">|</span> <span class="token keyword">void</span>
  <span class="token comment">// 判断是否存在__ob__响应式属性</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&#39;__ob__&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>__ob__ <span class="token keyword">instanceof</span> <span class="token class-name">Observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ob <span class="token operator">=</span> value<span class="token punctuation">.</span>__ob__
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
    shouldObserve <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token function">isServerRendering</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPlainObject</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    Object<span class="token punctuation">.</span><span class="token function">isExtensible</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span>value<span class="token punctuation">.</span>_isVue
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 实例化Observer响应式对象</span>
    ob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>asRootData <span class="token operator">&amp;&amp;</span> ob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ob<span class="token punctuation">.</span>vmCount<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ob
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Observer</code>类</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
    <span class="token literal-property property">dep</span><span class="token operator">:</span> Dep<span class="token punctuation">;</span>
    <span class="token literal-property property">vmCount</span><span class="token operator">:</span> number<span class="token punctuation">;</span> <span class="token comment">// number of vms that have this object as root $data</span>

    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
        <span class="token keyword">this</span><span class="token punctuation">.</span>dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>vmCount <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token function">def</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">&#39;__ob__&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>hasProto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">protoAugment</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> arrayMethods<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">copyAugment</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> arrayMethods<span class="token punctuation">,</span> arrayKeys<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 实例化对象是一个对象，进入walk方法</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>walk</code>函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">walk</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token comment">// 遍历key，通过defineReactive创建响应式对象</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>defineReactive</code>方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">defineReactive</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
  <span class="token literal-property property">val</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  customSetter<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">?</span>Function<span class="token punctuation">,</span>
  shallow<span class="token operator">?</span><span class="token operator">:</span> boolean</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> property <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>configurable <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// cater for pre-defined getter/setters</span>
  <span class="token keyword">const</span> getter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>get
  <span class="token keyword">const</span> setter <span class="token operator">=</span> property <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>set
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span>getter <span class="token operator">||</span> setter<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> arguments<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  <span class="token comment">// 接下来调用Object.defineProperty()给对象定义响应式属性</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>childOb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          childOb<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">dependArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val
      <span class="token comment">/* eslint-disable no-self-compare */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> value <span class="token operator">||</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> newVal <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/* eslint-enable no-self-compare */</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> customSetter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">customSetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// #7981: for accessor properties without setter</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>getter <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>setter<span class="token punctuation">)</span> <span class="token keyword">return</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> newVal
      <span class="token punctuation">}</span>
      childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
      <span class="token comment">// 对观察者watchers进行通知,state就成了全局响应式对象</span>
      dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://blog.csdn.net/qq_32682301/article/details/105419673</li><li>https://wbbyouzi.com/archives/343</li></ul>`,29),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","observable.html.vue"]]);export{r as default};