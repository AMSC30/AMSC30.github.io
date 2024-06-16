import{_ as e,p as t,q as p,s as a,R as n,t as o,Y as r,n as c}from"./framework-e1bed10d.js";const l={},i=a("h1",{id:"vue-router4",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vue-router4","aria-hidden":"true"},"#"),n(" vue-router4")],-1),u={href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},d=r(`<h2 id="动态路由" tabindex="-1"><a class="header-anchor" href="#动态路由" aria-hidden="true">#</a> 动态路由</h2><p>动态路由的动态段用<code>:</code>表示，当一个路由被匹配时，它的 params 的值将在每个组件中以 this.$route.params 的形式暴露出来</p><table><thead><tr><th>匹配模式</th><th>匹配路径</th><th>$route.params</th></tr></thead><tbody><tr><td>/users/:username</td><td>/users/eduardo</td><td>{ username: &#39;eduardo&#39; }</td></tr><tr><td>/users/:username/posts/:postId</td><td>/users/eduardo/posts/123</td><td>{ username: &#39;eduardo&#39;, postId: &#39;123&#39; }</td></tr></tbody></table><p>动态路由支持正则表达式</p><p>常规参数只匹配 url 片段之间的字符，用 / 分隔。如果我们想匹配任意路径，我们可以使用自定义的 路径参数 正则表达式，在 路径参数 后面的括号中加入 正则表达式 :</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// 将匹配所有内容并将其放在 \`$route.params.pathMatch\` 下</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/:pathMatch(.*)*&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NotFound&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> NotFound <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 将匹配以 \`/user-\` 开头的所有内容，并将其放在 \`$route.params.afterUser\` 下</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user-:afterUser(.*)&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserGeneric <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个特定的场景中，我们在括号之间使用了自定义正则表达式，并将pathMatch参数标记为可选可重复</p><h2 id="命名视图" tabindex="-1"><a class="header-anchor" href="#命名视图" aria-hidden="true">#</a> 命名视图</h2><p>针对某个路径下，想在布局中针对此路径显示多个视图，可以对<code>router-view</code>使用命名的方式，在路由配置中指定每个视图需要渲染的组件</p><p>如果没有命名，<code>router-view</code>组件有个默认的<code>default</code>名称</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view left-sidebar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LeftSidebar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view main-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view right-sidebar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RightSidebar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">default</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
        <span class="token comment">// LeftSidebar: LeftSidebar 的缩写</span>
        LeftSidebar<span class="token punctuation">,</span>
        <span class="token comment">// 它们与 \`&lt;router-view&gt;\` 上的 \`name\` 属性匹配</span>
        RightSidebar<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导航守卫" tabindex="-1"><a class="header-anchor" href="#导航守卫" aria-hidden="true">#</a> 导航守卫</h2><p>导航守卫主要用来通过跳转或取消的方式守卫导航</p><p><strong>参数：</strong></p><ul><li>to: 即将要进入的目标 用一种标准化的方式</li><li>from: 当前导航正要离开的路由 用一种标准化的方式</li><li>可选的next：在版本4以前用来调用下一个导航</li></ul><p><strong>返回值：</strong></p><ul><li>false: 取消当前的导航。如果浏览器的 URL 改变了(可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。</li><li>路由地址: 通过一个路由地址跳转到一个不同的地址，就像你调用 router.push() 一样，你可以设置诸如 replace: true 或 name: &#39;home&#39; 之类的配置。当前的导航被中断，然后进行一个新的导航，就和 from 一样</li><li>抛出Error：取消导航并且调用 router.onError() 注册过的回调</li><li>undefined、true，则导航是有效的，并调用下一个导航守卫</li></ul><h3 id="全局守卫" tabindex="-1"><a class="header-anchor" href="#全局守卫" aria-hidden="true">#</a> 全局守卫</h3><p>当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于等待中</p><p><strong>1. beforeEach</strong></p><p>一个全局前置守卫，当一个导航触发时调用</p><p><strong>2. beforeResolve</strong></p><p>全局解析守卫，在导航被确认之前、所有组件内守卫和异步路由组件被解析之后调用</p><p><strong>3. afterEach</strong></p><p>全局后置钩子，对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用，不会接受nex函数，同时也不会改变导航</p><h3 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h3><p><strong>1. beforeEnter</strong></p><p>只在进入路由时触发，不会在 params、query 或 hash 改变时触发</p><h3 id="组件守卫" tabindex="-1"><a class="header-anchor" href="#组件守卫" aria-hidden="true">#</a> 组件守卫</h3><p><strong>1. beforeRouteEnter</strong></p><p>在渲染该组件的对应路由被验证前调用，不能获取组件实例 <code>this</code> ！，因为当守卫执行时，组件实例还没被创建！</p><p><strong>2. beforeRouteUpdate</strong></p><p>在路由改变时，重用的组件将会执行这个钩子</p><p><strong>3. beforeRotueLeave</strong></p><p>路由改变时，需要销毁的组件将会执行这个钩子</p><blockquote><p>除了beforeRouteEnter，另外两个钩子都可以访问组件实例</p></blockquote><h3 id="完整流程" tabindex="-1"><a class="header-anchor" href="#完整流程" aria-hidden="true">#</a> 完整流程</h3><ul><li>导航被触发。</li><li>在失活的组件里调用 beforeRouteLeave 守卫。</li><li>调用全局的 beforeEach 守卫。</li><li>在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。</li><li>在路由配置里调用 beforeEnter。</li><li>解析异步路由组件。</li><li>在被激活的组件里调用 beforeRouteEnter。</li><li>调用全局的 beforeResolve 守卫(2.5+)。</li><li>导航被确认。</li><li>调用全局的 afterEach 钩子。</li><li>触发 DOM 更新。</li><li>调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。</li></ul><h2 id="组合式api" tabindex="-1"><a class="header-anchor" href="#组合式api" aria-hidden="true">#</a> 组合式API</h2><h3 id="访问router和route" tabindex="-1"><a class="header-anchor" href="#访问router和route" aria-hidden="true">#</a> 访问router和route</h3><p>由于在setup函数中无法访问组件实例，就不能通过<code>this.$router</code>或<code>this.$route</code>访问，需要使用<code>useRouter</code>和<code>useRoute</code>函数 在模板中我们仍然可以访问 $router 和 $route</p><h3 id="导航守卫-1" tabindex="-1"><a class="header-anchor" href="#导航守卫-1" aria-hidden="true">#</a> 导航守卫</h3><p>在任何由<code>&lt;router-view&gt;</code>渲染的组件中，可以使用<code>onBeforeRouteLeave</code>和<code>onBeforeRouteUpdate</code>在组件中注册组件守卫</p>`,44);function k(h,v){const s=c("ExternalLinkIcon");return t(),p("div",null,[i,a("p",null,[a("a",u,[n("官方文档"),o(s)])]),d])}const b=e(l,[["render",k],["__file","grammar.html.vue"]]);export{b as default};