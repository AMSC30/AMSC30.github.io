import{_ as n,p as s,q as a,Y as p}from"./framework-e1bed10d.js";const e={},t=p(`<h1 id="线性结构-栈、队列、链表" tabindex="-1"><a class="header-anchor" href="#线性结构-栈、队列、链表" aria-hidden="true">#</a> 线性结构--栈、队列、链表</h1><h2 id="一、栈" tabindex="-1"><a class="header-anchor" href="#一、栈" aria-hidden="true">#</a> 一、栈</h2><p>栈（stack）又名堆栈，它是一种运算受限的线性表，限定仅在表尾进行插入和删除操作的线性表</p><p>表尾这一端被称为栈顶，相反地另一端被称为栈底，向栈顶插入元素被称为进栈、入栈、压栈，从栈顶删除元素又称作出栈</p><p>所以其按照先进后出的原则存储数据，先进入的数据被压入栈底，最后的数据在栈顶，需要读数据的时候从栈顶开始弹出数据，具有记忆作用</p><p>关于栈的简单实现，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 添加一个（或几个）新元素到栈顶
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">element</span> 新元素
   */</span>
  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 移除栈顶的元素，同时返回被移除的元素
   */</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）
   */</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 如果栈里没有任何元素就返回true,否则返回false
   */</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 移除栈里的所有元素
   */</span>
  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 返回栈里的元素个数。这个方法和数组的length属性很类似
   */</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于栈的操作主要的方法如下：</p><ul><li>push：入栈操作</li><li>pop：出栈操作</li></ul><h2 id="二、队列" tabindex="-1"><a class="header-anchor" href="#二、队列" aria-hidden="true">#</a> 二、队列</h2><p>跟栈十分相似，队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作</p><p>进行插入操作的端称为队尾，进行删除操作的端称为队头，当队列中没有元素时，称为空队列</p><p>在队列中插入一个队列元素称为入队，从队列中删除一个队列元素称为出队。因为队列只允许在一端插入，在另一端删除，所以只有最早进入队列的元素才能最先从队列中删除，故队列又称为先进先出</p><p>简单实现一个队列的方式，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>frontIndex <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tailIndex <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>tailIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> item
    <span class="token punctuation">}</span>
    <span class="token function">unqueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> item  <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>frontIndex<span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>frontIndex<span class="token operator">++</span>        
        <span class="token keyword">return</span> item
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述这种入队和出队操作中，头尾指针只增加不减小，致使被删元素的空间永远无法重新利用</p><p>当队列中实际的元素个数远远小于向量空间的规模时，也可能由于尾指针已超越向量空间的上界而不能做入队操作，出该现象称为&quot;假溢&quot;</p><p>在实际使用队列时，为了使队列空间能重复使用，往往对队列的使用方法稍加改进：</p><p>无论插入或删除，一旦<code>rear</code>指针增1或<code>front</code>指针增1 时超出了所分配的队列空间，就让它指向这片连续空间的起始位置，这种队列也就是循环队列</p><p>下面实现一个循环队列，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span> <span class="token comment">// 长度需要限制, 来达到空间的利用, 代表空间的长度</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 指向首元素</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 指向准备插入元素的位置</span>
    <span class="token punctuation">}</span>
    <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>k<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_data<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>font<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>font <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>k<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>font <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>k <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>font<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述通过求余的形式代表首尾指针增1 时超出了所分配的队列空间</p><h2 id="三、链表" tabindex="-1"><a class="header-anchor" href="#三、链表" aria-hidden="true">#</a> 三、链表</h2><p>链表（Linked List）是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的，由一系列结点（链表中每一个元素称为结点）组成</p><p>每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域</p><p><img src="https://static.vue-js.com/e4e93490-1c76-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>节点用代码表示，则如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>data 表示节点存放的数据</li><li>next 表示下一个节点指向的内存空间</li></ul><p>相比于线性表顺序结构，操作复杂。由于不必须按顺序存储，链表在插入的时候可以达到<code>O(1)</code>的复杂度，比另一种线性表顺序表快得多，但是查找一个节点或者访问特定编号的节点则需要O(n)的时间，而线性表和顺序表相应的时间复杂度分别是<code>O(logn)</code>和<code>O(1)</code></p><p>链表的结构也十分多，常见的有四种形式：</p><ul><li>单链表：除了头节点和尾节点，其他节点只包含一个后继指针</li><li>循环链表：跟单链表唯一的区别就在于它的尾结点又指回了链表的头结点，首尾相连，形成了一个环</li><li>双向链表：每个结点具有两个方向指针，后继指针(next)指向后面的结点，前驱指针(prev)指向前面的结点，其中节点的前驱指针和尾结点的后继指针均指向空地址NULL</li><li>双向循环链表：跟双向链表基本一致，不过头节点前驱指针指向尾迹诶单和尾节点的后继指针指向头节点</li></ul><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h3><p>关于链表的操作可以主要分成如下：</p><ul><li>遍历</li><li>插入</li><li>删除</li></ul><p><strong>1. 遍历</strong></p><p>遍历很好理解，就是根据<code>next</code>指针遍历下去，直到为<code>null</code>，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> current <span class="token operator">=</span> head
<span class="token keyword">while</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
  current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 插入</strong></p><p>向链表中间插入一个元素，可以如下图所示：</p><p><img src="https://static.vue-js.com/f5fe5fd0-1c76-11ec-8e64-91fdec0f05a1.png" alt=""></p><p>可以看到，插入节点可以分成如下步骤：</p><ul><li>存储插入位置的前一个节点</li><li>存储插入位置的后一个节点</li><li>将插入位置的前一个节点的 next 指向插入节点</li><li>将插入节点的 next 指向前面存储的 next 节点</li></ul><p>相关代码如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> current <span class="token operator">=</span> head
<span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">&lt;</span> position<span class="token punctuation">)</span><span class="token punctuation">{</span>
  pervious <span class="token operator">=</span> current<span class="token punctuation">;</span>
  current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
pervious<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
node<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在头节点进行插入操作的时候，会实现<code>previousNode</code>节点为<code>undefined</code>，不适合上述方式</p><p>解放方式可以是在头节点前面添加一个虚拟头节点，保证插入行为一致</p><p><strong>3. 删除</strong></p><p>向链表任意位置删除节点，如下图操作：</p><p><img src="https://static.vue-js.com/0160cd90-1c77-11ec-a752-75723a64e8f5.png" alt=""></p><p>从上图可以看到删除节点的步骤为如下：</p><ul><li>获取删除节点的前一个节点</li><li>获取删除节点的后一个节点</li><li>将前一个节点的 next 指向后一个节点</li><li>向删除节点的 next 指向为null</li></ul><p>如果想要删除制定的节点，示意代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>current <span class="token operator">!=</span> node<span class="token punctuation">)</span><span class="token punctuation">{</span>
  pervious <span class="token operator">=</span> current<span class="token punctuation">;</span>
  current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  nextNode <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
pervious<span class="token punctuation">.</span>next <span class="token operator">=</span> nextNode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样如何希望删除节点处理行为一致，可以在头节点前面添加一个虚拟头节点</p><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景" aria-hidden="true">#</a> 三、应用场景</h2><h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h3><p>借助栈的先进后出的特性，可以简单实现一个逆序数处的功能，首先把所有元素依次入栈，然后把所有元素出栈并输出</p><p>包括编译器的在对输入的语法进行分析的时候，例如<code>&quot;()&quot;</code>、<code>&quot;{}&quot;</code>、<code>&quot;[]&quot;</code>这些成对出现的符号，借助栈的特性，凡是遇到括号的前半部分，即把这个元素入栈，凡是遇到括号的后半部分就比对栈顶元素是否该元素相匹配，如果匹配，则前半部分出栈，否则就是匹配出错</p><p>包括函数调用和递归的时候，每调用一个函数，底层都会进行入栈操作，出栈则返回函数的返回值</p><p>生活中的例子，可以把乒乓球盒比喻成一个堆栈，球一个一个放进去（入栈），最先放进去的要等其后面的全部拿出来后才能出来（出栈），这种就是典型的先进后出模型</p><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3><p>当我们需要按照一定的顺序来处理数据，而该数据的数据量在不断地变化的时候，则需要队列来帮助解题</p><p>队列的使用广泛应用在广度优先搜索种，例如层次遍历一个二叉树的节点值（后续将到）</p><p>生活中的例子，排队买票，排在队头的永远先处理，后面的必须等到前面的全部处理完毕再进行处理，这也是典型的先进先出模型</p><h3 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h3><p>缓存是一种提高数据读取性能的技术，在硬件设计、软件开发中都有着非常广泛的应用，比如常见的<code>CPU</code>缓存、数据库缓存、浏览器缓存等等</p><p>当缓存空间被用满时，我们可能会使用<code>LRU</code>最近最好使用策略去清楚，而实现<code>LRU</code>算法的数据结构是链表，思路如下：</p><p>维护一个有序单链表，越靠近链表尾部的结点是越早之前访问的。当有一个新的数据被访问时，我们从链表头部开始顺序遍历链表</p><ul><li>如果此数据之前已经被缓存在链表中了，我们遍历得到这个数据的对应结点，并将其从原来的位置删除，并插入到链表头部</li><li>如果此数据没在缓存链表中 <ul><li>如果此时缓存未满，可直接在链表头部插入新节点存储此数据</li><li>如果此时缓存已满，则删除链表尾部节点，再在链表头部插入新节点</li></ul></li></ul><p>由于链表插入删除效率极高，达到O(1)。对于不需要搜索但变动频繁且无法预知数量上限的数据的情况的时候，都可以使用链表</p>`,71),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","stack_queue.html.vue"]]);export{r as default};