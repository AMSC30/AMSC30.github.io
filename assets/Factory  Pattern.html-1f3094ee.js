import{_ as n,p as s,q as a,Y as p}from"./framework-e1bed10d.js";const e={},t=p(`<h1 id="面试官-说说你对工厂模式的理解-应用场景" tabindex="-1"><a class="header-anchor" href="#面试官-说说你对工厂模式的理解-应用场景" aria-hidden="true">#</a> 面试官：说说你对工厂模式的理解？应用场景？</h1><p><img src="https://static.vue-js.com/27a84d10-3bea-11ec-8e64-91fdec0f05a1.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>工厂模式是用来创建对象的一种最常用的设计模式，不暴露创建对象的具体逻辑，而是将将逻辑封装在一个函数中，那么这个函数就可以被视为一个工厂</p><p>其就像工厂一样重复的产生类似的产品，工厂模式只需要我们传入正确的参数，就能生产类似的产品</p><p>举个例子：</p><ul><li>编程中，在一个 A 类中通过 new 的方式实例化了类 B，那么 A 类和 B 类之间就存在关联（耦合）</li><li>后期因为需要修改了 B 类的代码和使用方式，比如构造函数中传入参数，那么 A 类也要跟着修改，一个类的依赖可能影响不大，但若有多个类依赖了 B 类，那么这个工作量将会相当的大，容易出现修改错误，也会产生很多的重复代码，这无疑是件非常痛苦的事；</li><li>这种情况下，就需要将创建实例的工作从调用方（A类）中分离，与调用方<strong>解耦</strong>，也就是使用工厂方法创建实例的工作封装起来（<strong>减少代码重复</strong>），由工厂管理对象的创建逻辑，调用方不需要知道具体的创建过程，只管使用，<strong>而降低调用者因为创建逻辑导致的错误</strong>；</li></ul><h2 id="二、实现" tabindex="-1"><a class="header-anchor" href="#二、实现" aria-hidden="true">#</a> 二、实现</h2><p>工厂模式根据抽象程度的不同可以分为：</p><ul><li>简单工厂模式（Simple Factory）</li><li>工厂方法模式（Factory Method）</li><li>抽象工厂模式（Abstract Factory）</li></ul><h3 id="简单工厂模式" tabindex="-1"><a class="header-anchor" href="#简单工厂模式" aria-hidden="true">#</a> 简单工厂模式</h3><p>简单工厂模式也叫静态工厂模式，用一个工厂对象创建同一类对象类的实例</p><p>假设我们要开发一个公司岗位及其工作内容的录入信息，不同岗位的工作内容不一致</p><p>代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Factory</span><span class="token punctuation">(</span><span class="token parameter">career</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">career<span class="token punctuation">,</span> work</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>career <span class="token operator">=</span> career 
        <span class="token keyword">this</span><span class="token punctuation">.</span>work <span class="token operator">=</span> work
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> work
    <span class="token keyword">switch</span><span class="token punctuation">(</span>career<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;coder&#39;</span><span class="token operator">:</span>
            work <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token string">&#39;写代码&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;修Bug&#39;</span><span class="token punctuation">]</span> 
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span>career<span class="token punctuation">,</span> work<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;hr&#39;</span><span class="token operator">:</span>
            work <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;招聘&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;员工信息管理&#39;</span><span class="token punctuation">]</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span>career<span class="token punctuation">,</span> work<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;driver&#39;</span><span class="token operator">:</span>
            work <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;开车&#39;</span><span class="token punctuation">]</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span>career<span class="token punctuation">,</span> work<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;boss&#39;</span><span class="token operator">:</span>
            work <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;喝茶&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;开会&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;审批文件&#39;</span><span class="token punctuation">]</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span>career<span class="token punctuation">,</span> work<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> coder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Factory</span><span class="token punctuation">(</span><span class="token string">&#39;coder&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>coder<span class="token punctuation">)</span>
<span class="token keyword">let</span> boss <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Factory</span><span class="token punctuation">(</span><span class="token string">&#39;boss&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>boss<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Factory</code>就是一个简单工厂。当我们调用工厂函数时，只需要传递name、age、career就可以获取到包含用户工作内容的实例对象</p><h3 id="工厂方法模式" tabindex="-1"><a class="header-anchor" href="#工厂方法模式" aria-hidden="true">#</a> 工厂方法模式</h3><p>工厂方法模式跟简单工厂模式差不多，但是把具体的产品放到了工厂函数的<code>prototype</code>中</p><p>这样一来，扩展产品种类就不必修改工厂函数了，和心累就变成抽象类，也可以随时重写某种具体的产品</p><p>也就是相当于工厂总部不生产产品了，交给下辖分工厂进行生产；但是进入工厂之前，需要有个判断来验证你要生产的东西是否是属于我们工厂所生产范围，如果是，就丢给下辖工厂来进行生产</p><p>如下代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 工厂方法</span>
<span class="token keyword">function</span> <span class="token function">Factory</span><span class="token punctuation">(</span><span class="token parameter">career</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Factory</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">this</span><span class="token punctuation">[</span>career<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Factory</span><span class="token punctuation">(</span>career<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 工厂方法函数的原型中设置所有对象的构造函数</span>
<span class="token class-name">Factory</span><span class="token punctuation">.</span>prototype<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token string-property property">&#39;coder&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>careerName <span class="token operator">=</span> <span class="token string">&#39;程序员&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>work <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;写代码&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;修Bug&#39;</span><span class="token punctuation">]</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;hr&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>careerName <span class="token operator">=</span> <span class="token string">&#39;HR&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>work <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;招聘&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;员工信息管理&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;driver&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>careerName <span class="token operator">=</span> <span class="token string">&#39;司机&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>work <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;开车&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;boss&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>careerName <span class="token operator">=</span> <span class="token string">&#39;老板&#39;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>work <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;喝茶&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;开会&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;审批文件&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> coder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Factory</span><span class="token punctuation">(</span><span class="token string">&#39;coder&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>coder<span class="token punctuation">)</span>
<span class="token keyword">let</span> hr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Factory</span><span class="token punctuation">(</span><span class="token string">&#39;hr&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工厂方法关键核心代码是工厂里面的判断this是否属于工厂，也就是做了分支判断，这个工厂只做我能做的产品</p><h3 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h3><p>上述简单工厂模式和工厂方法模式都是直接生成实例，但是抽象工厂模式不同，抽象工厂模式并不直接生成实例， 而是用于对产品类簇的创建</p><p>通俗点来讲就是：简单工厂和工厂方法模式的工作是生产产品，那么抽象工厂模式的工作就是生产工厂的</p><p>由于<code>JavaScript</code>中并没有抽象类的概念，只能模拟，可以分成四部分：</p><ul><li>用于创建抽象类的函数</li><li>抽象类</li><li>具体类</li><li>实例化具体类</li></ul><p>上面的例子中有<code>coder</code>、<code>hr</code>、<code>boss</code>、<code>driver</code>四种岗位，其中<code>coder</code>可能使用不同的开发语言进行开发，比如<code>JavaScript</code>、<code>Java</code>等等。那么这两种语言就是对应的类簇</p><p>示例代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">CareerAbstractFactory</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">subType<span class="token punctuation">,</span> superType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断抽象工厂中是否有该抽象类</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> CareerAbstractFactory<span class="token punctuation">[</span>superType<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 缓存类</span>
    <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 继承父类属性和方法</span>
    <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CareerAbstractFactory</span><span class="token punctuation">[</span>superType<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 将子类的constructor指向父类</span>
    subType<span class="token punctuation">.</span>constructor <span class="token operator">=</span> subType<span class="token punctuation">;</span>
    <span class="token comment">// 子类原型继承父类</span>
    subType<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;抽象类不存在&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中<code>CareerAbstractFactory</code>就是一个抽象工厂方法，该方法在参数中传递子类和父类，在方法体内部实现了子类对父类的继承</p><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景" aria-hidden="true">#</a> 三、应用场景</h2><p>从上面可看到，简单简单工厂的优点就是我们只要传递正确的参数，就能获得所需的对象，而不需要关心其创建的具体细节</p><p>应用场景也容易识别，有构造函数的地方，就应该考虑简单工厂，但是如果函数构建函数太多与复杂，会导致工厂函数变得复杂，所以不适合复杂的情况</p><p>抽象工厂模式一般用于严格要求以面向对象思想进行开发的超大型项目中，我们一般常规的开发的话一般就是简单工厂和工厂方法模式会用的比较多一些</p><p>综上，工厂模式适用场景如下：</p><ul><li>如果你不想让某个子系统与较大的那个对象之间形成强耦合，而是想运行时从许多子系统中进行挑选的话，那么工厂模式是一个理想的选择</li><li>将new操作简单封装，遇到new的时候就应该考虑是否用工厂模式；</li><li>需要依赖具体环境创建不同实例，这些实例都有相同的行为,这时候我们可以使用工厂模式，简化实现的过程，同时也可以减少每种对象所需的代码量，有利于消除对象间的耦合，提供更大的灵活性</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://www.runoob.com/design-pattern/factory-pattern.html</li><li>https://juejin.cn/post/6844903653774458888</li><li>https://zhuanlan.zhihu.com/p/344119981</li></ul>`,40),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","Factory  Pattern.html.vue"]]);export{u as default};
