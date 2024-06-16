import{_ as e,p as o,q as c,s as n,R as s,t,Y as a,n as l}from"./framework-e1bed10d.js";const i={},u=a('<h1 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h1><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>如果某一问题有很多重叠子问题，使用动态规划是最有效的。动态规划中每一个状态一定是由上一个状态推导出来的，这一点就区分于贪心，贪心没有状态推导，而是从局部直接选最优的，</p><p>动规是由前一个状态推导出来的，而贪心是局部直接选最优的</p><h2 id="解题步骤" tabindex="-1"><a class="header-anchor" href="#解题步骤" aria-hidden="true">#</a> 解题步骤</h2><ol><li>确定dp数组（dp table）以及下标的含义</li><li>确定递推公式</li><li>dp数组如何初始化</li><li>确定遍历顺序</li><li>举例推导dp数组</li></ol><h2 id="算法案例" tabindex="-1"><a class="header-anchor" href="#算法案例" aria-hidden="true">#</a> 算法案例</h2><h3 id="爬楼梯" tabindex="-1"><a class="header-anchor" href="#爬楼梯" aria-hidden="true">#</a> 爬楼梯</h3>',8),r={href:"https://leetcode.cn/problems/climbing-stairs/description/",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>代码示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// dp[i] 为第 i 阶楼梯有多少种方法爬到楼顶</span>
    <span class="token comment">// dp[i] = dp[i - 1] + dp[i - 2]</span>
    <span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用最小花费爬楼梯" tabindex="-1"><a class="header-anchor" href="#使用最小花费爬楼梯" aria-hidden="true">#</a> 使用最小花费爬楼梯</h3>`,3),d={href:"https://leetcode.cn/problems/min-cost-climbing-stairs/",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>代码示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">minCostClimbingStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">cost</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>cost<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>

      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> cost<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> cost<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> cost<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> result<span class="token punctuation">[</span>cost<span class="token punctuation">.</span>length<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不同路径" tabindex="-1"><a class="header-anchor" href="#不同路径" aria-hidden="true">#</a> 不同路径</h3>`,3),v={href:"https://leetcode.cn/problems/unique-paths/description/",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>代码示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">uniquePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// dp数组</span>
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token function">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整数拆分" tabindex="-1"><a class="header-anchor" href="#整数拆分" aria-hidden="true">#</a> 整数拆分</h3>`,3),h={href:"https://leetcode.cn/problems/integer-break/description/",target:"_blank",rel:"noopener noreferrer"},f=a(`<p>代码示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">integerBreak</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    dp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j<span class="token punctuation">]</span> <span class="token operator">*</span> j<span class="token punctuation">,</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> j<span class="token punctuation">)</span> <span class="token operator">*</span> j<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分割等和子集" tabindex="-1"><a class="header-anchor" href="#分割等和子集" aria-hidden="true">#</a> 分割等和子集</h3>`,3),y={href:"https://leetcode.cn/problems/partition-equal-subset-sum/description/",target:"_blank",rel:"noopener noreferrer"},w=a(`<p>代码示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">canPartition</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 算出数组元素的总和</span>
    <span class="token keyword">const</span> sum <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> p <span class="token operator">+</span> v<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 如果是奇数，那么不可能是两个相同数的和</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化dp</span>
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 遍历数字</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> sum <span class="token operator">/</span> <span class="token number">2</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> target<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>sum <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">===</span> sum <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最后一块石头的重量-ii" tabindex="-1"><a class="header-anchor" href="#最后一块石头的重量-ii" aria-hidden="true">#</a> 最后一块石头的重量 II</h3>`,3),g={href:"https://leetcode.cn/problems/last-stone-weight-ii/description/",target:"_blank",rel:"noopener noreferrer"},j=a(`<p>代码示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">lastStoneWeightII</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">stones</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取石头总重量</span>
    <span class="token keyword">const</span> sum <span class="token operator">=</span> stones<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span>cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> pre <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token comment">// 容量</span>
    <span class="token keyword">const</span> total <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token comment">// 初始化dp</span>
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>total <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token comment">// 遍历</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> stones<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> total<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> stones<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>dp<span class="token punctuation">[</span>j <span class="token operator">-</span> stones<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">+</span>stones<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> sum <span class="token operator">-</span> dp<span class="token punctuation">[</span>total<span class="token punctuation">]</span> <span class="token operator">-</span> dp<span class="token punctuation">[</span>total<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一和零" tabindex="-1"><a class="header-anchor" href="#一和零" aria-hidden="true">#</a> 一和零</h3>`,3),_={href:"https://leetcode.cn/problems/ones-and-zeroes/description/",target:"_blank",rel:"noopener noreferrer"},x=a(`<p>代码示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">findMaxForm</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">strs<span class="token punctuation">,</span> m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">const</span> dp <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token function">Array</span><span class="token punctuation">(</span>m<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Array</span><span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> strs<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> zeroNum <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">let</span> oneNum <span class="token operator">=</span> <span class="token number">0</span>
        
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>char<span class="token operator">===</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> zeroNum<span class="token operator">++</span>
            <span class="token keyword">else</span> oneNum<span class="token operator">++</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> m<span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> zeroNum<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> n<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> oneNum<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> zeroNum<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> oneNum<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="零钱兑换-ii" tabindex="-1"><a class="header-anchor" href="#零钱兑换-ii" aria-hidden="true">#</a> 零钱兑换 II</h3>`,3),N={href:"https://leetcode.cn/problems/coin-change-ii/description/",target:"_blank",rel:"noopener noreferrer"},A=a(`<p>代码示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">amount<span class="token punctuation">,</span> coins</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>amount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> coin <span class="token keyword">of</span> coins<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> coin<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> amount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> coin<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>amount<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function I(M,q){const p=l("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[s("链接："),n("a",r,[s("https://leetcode.cn/problems/climbing-stairs/description/"),t(p)])]),k,n("p",null,[s("链接："),n("a",d,[s("https://leetcode.cn/problems/min-cost-climbing-stairs/"),t(p)])]),m,n("p",null,[s("链接："),n("a",v,[s("https://leetcode.cn/problems/unique-paths/description/"),t(p)])]),b,n("p",null,[s("链接："),n("a",h,[s("https://leetcode.cn/problems/integer-break/description/"),t(p)])]),f,n("p",null,[s("链接："),n("a",y,[s("https://leetcode.cn/problems/partition-equal-subset-sum/description/"),t(p)])]),w,n("p",null,[s("链接："),n("a",g,[s("https://leetcode.cn/problems/last-stone-weight-ii/description/"),t(p)])]),j,n("p",null,[s("链接："),n("a",_,[s("https://leetcode.cn/problems/ones-and-zeroes/description/"),t(p)])]),x,n("p",null,[s("链接："),n("a",N,[s("https://leetcode.cn/problems/coin-change-ii/description/"),t(p)])]),A])}const B=e(i,[["render",I],["__file","dynamic-programming.html.vue"]]);export{B as default};
