import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-662523a0.js";const t={},p=e(`<h1 id="vue实现路由懒加载" tabindex="-1"><a class="header-anchor" href="#vue实现路由懒加载" aria-hidden="true">#</a> vue实现路由懒加载</h1><h2 id="动态导入语法" tabindex="-1"><a class="header-anchor" href="#动态导入语法" aria-hidden="true">#</a> 动态导入语法</h2><p>把路由组件用 import() 函数包裹，让它们在被访问时才加载</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入Vue和VueRouter</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token comment">// 使用VueRouter插件</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>

<span class="token comment">// 定义路由配置</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 路由路径</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 路由名称</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 路由组件，使用动态导入语法，返回一个Promise对象</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/Home.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/About.vue&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// 创建路由实例</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 路由模式，可以是hash或history</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 路由配置</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 导出路由实例</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> router

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为什么动态导入可以实现路由懒加载，是因为动态导入可以让 webpack 把路由组件分割成不同的代码块，然后当路由被访问的时候才加载对应的代码块，这样就可以减少首页加载的资源，提高页面响应速度</p></div>`,5),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","7.html.vue"]]);export{d as default};
