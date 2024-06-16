import{_ as n,p as s,q as a,Y as p}from"./framework-e1bed10d.js";const t={},e=p(`<h1 id="面试官-vue3-0-所采用的-composition-api-与-vue2-x-使用的-options-api-有什么不同" tabindex="-1"><a class="header-anchor" href="#面试官-vue3-0-所采用的-composition-api-与-vue2-x-使用的-options-api-有什么不同" aria-hidden="true">#</a> 面试官：Vue3.0 所采用的 Composition Api 与 Vue2.x 使用的 Options Api 有什么不同？</h1><p><img src="https://static.vue-js.com/8d6dd7b0-6048-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="开始之前" tabindex="-1"><a class="header-anchor" href="#开始之前" aria-hidden="true">#</a> 开始之前</h2><p><code>Composition API</code> 可以说是<code>Vue3</code>的最大特点，那么为什么要推出<code>Composition Api</code>，解决了什么问题？</p><p>通常使用<code>Vue2</code>开发的项目，普遍会存在以下问题：</p><ul><li>代码的可读性随着组件变大而变差</li><li>每一种代码复用的方式，都存在缺点</li><li>TypeScript支持有限</li></ul><p>以上通过使用<code>Composition Api</code>都能迎刃而解</p><h2 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h2><h3 id="一、options-api" tabindex="-1"><a class="header-anchor" href="#一、options-api" aria-hidden="true">#</a> 一、Options Api</h3><p><code>Options API</code>，即大家常说的选项API，即以<code>vue</code>为后缀的文件，通过定义<code>methods</code>，<code>computed</code>，<code>watch</code>，<code>data</code>等属性与方法，共同处理页面逻辑</p><p>如下图：</p><p><img src="https://static.vue-js.com/9bf6d9d0-6048-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>可以看到<code>Options</code>代码编写方式，如果是组件状态，则写在<code>data</code>属性上，如果是方法，则写在<code>methods</code>属性上...</p><p>用组件的选项 (<code>data</code>、<code>computed</code>、<code>methods</code>、<code>watch</code>) 组织逻辑在大多数情况下都有效</p><p>然而，当组件变得复杂，导致对应属性的列表也会增长，这可能会导致组件难以阅读和理解</p><h3 id="二、composition-api" tabindex="-1"><a class="header-anchor" href="#二、composition-api" aria-hidden="true">#</a> 二、Composition Api</h3><p>在 Vue3 Composition API 中，组件根据逻辑功能来组织的，一个功能所定义的所有 API 会放在一起（更加的高内聚，低耦合）</p><p>即使项目很大，功能很多，我们都能快速的定位到这个功能所用到的所有 API</p><p><img src="https://static.vue-js.com/acee9200-6048-11eb-ab90-d9ae814b240d.png" alt=""></p><h3 id="三、对比" tabindex="-1"><a class="header-anchor" href="#三、对比" aria-hidden="true">#</a> 三、对比</h3><p>下面对<code>Composition Api </code>与<code>Options Api</code>进行两大方面的比较</p><ul><li>逻辑组织</li><li>逻辑复用</li></ul><h4 id="逻辑组织" tabindex="-1"><a class="header-anchor" href="#逻辑组织" aria-hidden="true">#</a> 逻辑组织</h4><h5 id="options-api" tabindex="-1"><a class="header-anchor" href="#options-api" aria-hidden="true">#</a> Options API</h5><p>假设一个组件是一个大型组件，其内部有很多处理逻辑关注点（对应下图不用颜色）</p><p><img src="https://static.vue-js.com/dc83d070-6048-11eb-ab90-d9ae814b240d.png" alt=""></p><p>可以看到，这种碎片化使得理解和维护复杂组件变得困难</p><p>选项的分离掩盖了潜在的逻辑问题。此外，在处理单个逻辑关注点时，我们必须不断地“跳转”相关代码的选项块</p><h5 id="compostion-api" tabindex="-1"><a class="header-anchor" href="#compostion-api" aria-hidden="true">#</a> Compostion API</h5><p>而<code>Compositon API</code>正是解决上述问题，将某个逻辑关注点相关的代码全都放在一个函数里，这样当需要修改一个功能时，就不再需要在文件中跳来跳去</p><p>下面举个简单例子，将处理<code>count</code>属性相关的代码放在同一个函数了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">useCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> double <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleConut</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        count<span class="token punctuation">.</span>value <span class="token operator">=</span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        count<span class="token punctuation">,</span>
        double<span class="token punctuation">,</span>
        handleConut<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件上中使用<code>count</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> double<span class="token punctuation">,</span> handleConut <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            count<span class="token punctuation">,</span>
            double<span class="token punctuation">,</span>
            handleConut
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来一张图进行对比，可以很直观地感受到 <code>Composition API </code>在逻辑组织方面的优势，以后修改一个属性功能的时候，只需要跳到控制该属性的方法中即可</p><p><img src="https://static.vue-js.com/e5804bc0-5c58-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h4 id="逻辑复用" tabindex="-1"><a class="header-anchor" href="#逻辑复用" aria-hidden="true">#</a> 逻辑复用</h4><p>在<code>Vue2</code>中，我们是用过<code>mixin</code>去复用相同的逻辑</p><p>下面举个例子，我们会另起一个<code>mixin.js</code>文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> MoveMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleKeyup</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 上下左右 x y</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;ArrowUp&quot;</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token operator">--</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;ArrowDown&quot;</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;ArrowLeft&quot;</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">--</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;ArrowRight&quot;</span><span class="token operator">:</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;keyup&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleKeyup<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">unmounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;keyup&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleKeyup<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在组件中使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    Mouse position<span class="token operator">:</span> x <span class="token punctuation">{</span><span class="token punctuation">{</span> x <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span> y <span class="token punctuation">{</span><span class="token punctuation">{</span> y <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> mousePositionMixin <span class="token keyword">from</span> <span class="token string">&#39;./mouse&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mousePositionMixin<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用单个<code>mixin</code>似乎问题不大，但是当我们一个组件混入大量不同的 <code>mixins</code> 的时候</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mousePositionMixin<span class="token punctuation">,</span> fooMixin<span class="token punctuation">,</span> barMixin<span class="token punctuation">,</span> otherMixin<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会存在两个非常明显的问题：</p><ul><li>命名冲突</li><li>数据来源不清晰</li></ul><p>现在通过<code>Compositon API</code>这种方式改写上面的代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleKeyup</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 上下左右 x y</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&quot;ArrowUp&quot;</span><span class="token operator">:</span>
        <span class="token comment">// y.value--;</span>
        position<span class="token punctuation">.</span>y<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&quot;ArrowDown&quot;</span><span class="token operator">:</span>
        <span class="token comment">// y.value++;</span>
        position<span class="token punctuation">.</span>y<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&quot;ArrowLeft&quot;</span><span class="token operator">:</span>
        <span class="token comment">// x.value--;</span>
        position<span class="token punctuation">.</span>x<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&quot;ArrowRight&quot;</span><span class="token operator">:</span>
        <span class="token comment">// x.value++;</span>
        position<span class="token punctuation">.</span>x<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;keyup&quot;</span><span class="token punctuation">,</span> handleKeyup<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;keyup&quot;</span><span class="token punctuation">,</span> handleKeyup<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> position <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件中使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    Mouse position<span class="token operator">:</span> x <span class="token punctuation">{</span><span class="token punctuation">{</span> x <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span> y <span class="token punctuation">{</span><span class="token punctuation">{</span> y <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useMove <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./useMove&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> position <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      x<span class="token punctuation">,</span>
      y<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，整个数据来源清晰了，即使去编写更多的 hook 函数，也不会出现命名冲突的问题</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><ul><li>在逻辑组织和逻辑复用方面，<code>Composition API</code>是优于<code>Options API</code></li><li>因为<code>Composition API</code>几乎是函数，会有更好的类型推断。</li><li><code>Composition API </code>对 <code>tree-shaking</code> 友好，代码也更容易压缩</li><li><code>Composition API</code>中见不到<code>this</code>的使用，减少了<code>this</code>指向不明的情况</li><li>如果是小型组件，可以继续使用<code>Options API</code>，也是十分友好的</li></ul>`,53),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","composition.html.vue"]]);export{d as default};
