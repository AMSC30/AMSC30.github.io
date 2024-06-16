import{_ as n,p as e,q as a,Y as s}from"./framework-e1bed10d.js";const t={},o=s(`<p>To create or use your own template:</p><ol><li>Create a folder with the same name as your template (for example, <code>mycooltemplate</code>).</li><li>Within the template folder, create a file named <code>publish.js</code>. This file must be a CommonJS module that exports a method named <code>publish</code>.</li></ol><p>For example:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@module</span> publish */</span>

<span class="token doc-comment comment">/**
 * Generate documentation output.
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TAFFY<span class="token punctuation">}</span></span> <span class="token parameter">data</span> - A TaffyDB collection representing
 *                       all the symbols documented in your code.
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">opts</span> - An object with options information.
 */</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">publish</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do stuff here to generate your output files</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To invoke JSDoc 3 with your own template, use the <code>-t</code> command line option, and specify the path to your template folder:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./jsdoc mycode.js -t /path/to/mycooltemplate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),c=[o];function l(i,p){return e(),a("div",null,c)}const r=n(t,[["render",l],["__file","index.html.vue"]]);export{r as default};
