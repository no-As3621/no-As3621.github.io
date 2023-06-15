import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-662523a0.js";const t={},o=e(`<h1 id="给vue定义全局方法" tabindex="-1"><a class="header-anchor" href="#给vue定义全局方法" aria-hidden="true">#</a> 给vue定义全局方法</h1><h2 id="挂载到vue的prototype" tabindex="-1"><a class="header-anchor" href="#挂载到vue的prototype" aria-hidden="true">#</a> 挂载到Vue的prototype</h2><p>第一种：挂载到Vue的prototype上。把全局方法写到一个文件里面，然后for循环挂载到Vue的prototype上，缺点是调用这个方法的时候没有提示</p><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code> Object.keys(tools).forEach(key =&gt; {
      Vue.prototype[key] = tools[key]
 })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局混入mixin" tabindex="-1"><a class="header-anchor" href="#全局混入mixin" aria-hidden="true">#</a> 全局混入mixin</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span>mixin<span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    store<span class="token punctuation">,</span>
    router<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> tools <span class="token keyword">from</span> <span class="token string">&quot;./tools&quot;</span>
<span class="token keyword">import</span> filters <span class="token keyword">from</span> <span class="token string">&quot;./filters&quot;</span>
<span class="token keyword">import</span> Config <span class="token keyword">from</span> <span class="token string">&#39;../config&#39;</span>
<span class="token keyword">import</span> <span class="token constant">CONSTANT</span> <span class="token keyword">from</span> <span class="token string">&#39;./const_var&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token constant">CONFIG</span><span class="token operator">:</span> Config<span class="token punctuation">,</span>
            <span class="token constant">CONSTANT</span><span class="token operator">:</span> <span class="token constant">CONSTANT</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// //将tools里面的方法挂载到vue上,以方便调用，直接this.$xxx方法名就可以了</span>
        <span class="token comment">// Object.keys(tools).forEach(key =&gt; {</span>
        <span class="token comment">//     Vue.prototype[key] = tools[key]</span>
        <span class="token comment">// })</span>
        <span class="token comment">//将tools里面的方法用对象展开符混入到mixin上,以方便调用，直接this.$xxx方法名就可以了</span>
        <span class="token operator">...</span>tools
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// //将filter里面的方法添加了vue的筛选器上</span>
        <span class="token comment">// Object.keys(filters).forEach(key =&gt; {</span>
        <span class="token comment">//     Vue.filter(key, filters[key])</span>
        <span class="token comment">// })</span>
        <span class="token operator">...</span>filters
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[o];function i(c,l){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","4.html.vue"]]);export{d as default};
