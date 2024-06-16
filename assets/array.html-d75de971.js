import{_ as e,p as o,q as c,s as n,R as s,t as p,Y as t,n as l}from"./framework-e1bed10d.js";const r={},i=n("h1",{id:"数组算法案例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数组算法案例","aria-hidden":"true"},"#"),s(" 数组算法案例")],-1),u=n("p",null,"数组是存放在连续内存空间上的相同类型数据的集合，可以方便的通过下标索引的方式获取到下标下对应的数据，因为数组的在内存空间的地址是连续的，所以我们在删除或者增添元素的时候，就难免要移动其他元素的地址",-1),k=n("h2",{id:"移除元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#移除元素","aria-hidden":"true"},"#"),s(" 移除元素")],-1),d={href:"https://leetcode.cn/problems/remove-element",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>描述：</p><p>给你一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，并返回移除后数组的新长度。 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素</p><p>解题思路：</p><p>通过一个快指针和慢指针在一个for循环下完成两个for循环的工作。</p><p>快指针：寻找新数组的元素 ，新数组就是不含有目标元素的数组</p><p>慢指针：指向更新 新数组下标的位置</p><p>代码实现：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">removeElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">let</span> slowIndex <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> fastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> fastIndex <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> fastIndex<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">[</span>slowIndex<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span>
            slowIndex<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> slowIndex <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="有序数组的平方" tabindex="-1"><a class="header-anchor" href="#有序数组的平方" aria-hidden="true">#</a> 有序数组的平方</h2>`,9),m={href:"https://leetcode.cn/problems/squares-of-a-sorted-array/",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>描述：</p><p>给你一个按<code>非递减顺序</code>排序的整数数组nums，返回<code>每个数字的平方</code>组成的新数组，要求也按<code>非递减顺序</code>排序</p><p>解题思路：</p><p>由于有序数组的平方以后，可能不是有序的，如负数平方以后应该在数组中靠后的位置，我们可以创建一个新的结果数组，从结果数组的末尾开始，将较小的值放在数组前面，可以考虑首尾双指针，因为是有序的，那么首尾指针平方后，一定有一个最大值，将较大的值放在结果数组的最前方</p><p>代码实现：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">sortedSquares</span> <span class="token operator">=</span> <span class="token parameter">arr</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> resultIndex <span class="token operator">=</span> <span class="token punctuation">(</span>fastIndex <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> slowIndex <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>slowIndex <span class="token operator">&lt;=</span> fastIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> slowData <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>slowIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> fastData <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>slowData <span class="token operator">&gt;</span> fastData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>resultIndex<span class="token punctuation">]</span> <span class="token operator">=</span> slowData
            slowIndex<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">[</span>resultIndex<span class="token punctuation">]</span> <span class="token operator">=</span> fastData
            fastIndex<span class="token operator">--</span>
        <span class="token punctuation">}</span>
        resultIndex<span class="token operator">--</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="长度最小的子数组" tabindex="-1"><a class="header-anchor" href="#长度最小的子数组" aria-hidden="true">#</a> 长度最小的子数组</h2>`,7),f={href:"https://leetcode.cn/problems/minimum-size-subarray-sum/",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>描述：</p><p>给定一个含有n个正整数的数组和一个正整数s ，找出该数组中满足其和≥s的长度最小的连续子数组，并返回其长度。如果不存在符合条件的子数组，返回 0</p><p>解题思路：</p><p>由于是一个连续的子数组，可以使用滑动窗口，使用双指针，当子数组和大于等于s时，慢指针向右移动，当小于s时，快指针向右移动</p><p>代码实现：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">minSubArrayLen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> slowIndex <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> minLen <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> fastIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> fastIndex <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> fastIndex<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> arr<span class="token punctuation">[</span>fastIndex<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
        sum <span class="token operator">+=</span> data
        <span class="token keyword">while</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;=</span> target <span class="token operator">&amp;&amp;</span> fastIndex <span class="token operator">&gt;</span> slowIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            minLen <span class="token operator">=</span>
                minLen <span class="token operator">===</span> <span class="token number">0</span>
                    <span class="token operator">?</span> fastIndex <span class="token operator">-</span> slowIndex <span class="token operator">+</span> <span class="token number">1</span>
                    <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minLen<span class="token punctuation">,</span> fastIndex <span class="token operator">-</span> slowIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

            sum <span class="token operator">-=</span> arr<span class="token punctuation">[</span>slowIndex<span class="token operator">++</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> minLen
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="螺旋矩阵" tabindex="-1"><a class="header-anchor" href="#螺旋矩阵" aria-hidden="true">#</a> 螺旋矩阵</h2>`,7),h={href:"https://leetcode.cn/problems/spiral-matrix-ii/",target:"_blank",rel:"noopener noreferrer"},y=t(`<p>给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵</p><p>代码示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">generateMatrix</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> startX <span class="token operator">=</span> <span class="token punctuation">(</span>startY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 起始位置</span>
    <span class="token keyword">let</span> loop <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 旋转圈数</span>
    <span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 中间位置</span>
    <span class="token keyword">let</span> offset <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 控制每一层填充元素个数</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 更新填充数字</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>loop<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> row <span class="token operator">=</span> startX<span class="token punctuation">,</span>
            col <span class="token operator">=</span> startY
        <span class="token comment">// 上行从左到右（左闭右开）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> startY <span class="token operator">+</span> n <span class="token operator">-</span> offset<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 右列从上到下（左闭右开）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> startX <span class="token operator">+</span> n <span class="token operator">-</span> offset<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 下行从右到左（左闭右开）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> col <span class="token operator">&gt;</span> startY<span class="token punctuation">;</span> col<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 左列做下到上（左闭右开）</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> row <span class="token operator">&gt;</span> startX<span class="token punctuation">;</span> row<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span> <span class="token operator">=</span> count<span class="token operator">++</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 更新起始位置</span>
        startX<span class="token operator">++</span>
        startY<span class="token operator">++</span>

        <span class="token comment">// 更新offset</span>
        offset <span class="token operator">+=</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果n为奇数的话，需要单独给矩阵最中间的位置赋值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">=</span> count
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function x(g,_){const a=l("ExternalLinkIcon");return o(),c("div",null,[i,u,k,n("p",null,[s("链接："),n("a",d,[s("https://leetcode.cn/problems/remove-element"),p(a)])]),v,n("p",null,[s("链接："),n("a",m,[s("https://leetcode.cn/problems/squares-of-a-sorted-array/"),p(a)])]),b,n("p",null,[s("链接："),n("a",f,[s("https://leetcode.cn/problems/minimum-size-subarray-sum/"),p(a)])]),w,n("p",null,[s("链接："),n("a",h,[s("https://leetcode.cn/problems/spiral-matrix-ii/"),p(a)])]),y])}const j=e(r,[["render",x],["__file","array.html.vue"]]);export{j as default};
