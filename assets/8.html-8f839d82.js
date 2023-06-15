import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-662523a0.js";const p={},e=t(`<h1 id="vue2、3响应式原理手写" tabindex="-1"><a class="header-anchor" href="#vue2、3响应式原理手写" aria-hidden="true">#</a> vue2、3响应式原理手写</h1><h2 id="vue3手写响应式" tabindex="-1"><a class="header-anchor" href="#vue3手写响应式" aria-hidden="true">#</a> vue3手写响应式</h2><p>手写Vue响应式，一种方法是使用 Proxy 对象来监听数据的变化，并通过 effect 函数来收集依赖和触发更新</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义一个响应式函数，接收一个目标对象和一个回调函数</span>
<span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义一个代理对象，使用Proxy构造函数</span>
  <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个get方法，用于拦截目标对象的属性读取操作</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 调用track函数，收集依赖</span>
      <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 返回目标对象的属性值</span>
      <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 定义一个set方法，用于拦截目标对象的属性赋值操作</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 调用trigger函数，触发更新</span>
      <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 调用回调函数，执行自定义逻辑</span>
      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 设置目标对象的属性值</span>
      <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 返回代理对象</span>
  <span class="token keyword">return</span> proxy<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个全局的Map对象，用于存储目标对象和它们的依赖关系</span>
<span class="token keyword">const</span> targetMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 定义一个全局的effect函数，用于执行副作用操作</span>
<span class="token keyword">let</span> effect<span class="token punctuation">;</span>

<span class="token comment">// 定义一个track函数，用于收集依赖</span>
<span class="token keyword">function</span> <span class="token function">track</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果没有定义effect函数，直接返回</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>effect<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token comment">// 获取目标对象对应的Map对象，如果没有就创建一个空的Map对象</span>
  <span class="token keyword">let</span> depsMap <span class="token operator">=</span> targetMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    depsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    targetMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> depsMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 获取属性对应的Set对象，如果没有就创建一个空的Set对象</span>
  <span class="token keyword">let</span> dep <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    depsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> dep<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 把effect函数添加到Set对象中，表示该属性依赖于该effect函数</span>
  dep<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个trigger函数，用于触发更新</span>
<span class="token keyword">function</span> <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取目标对象对应的Map对象，如果没有就返回</span>
  <span class="token keyword">const</span> depsMap <span class="token operator">=</span> targetMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token comment">// 获取属性对应的Set对象，如果没有就返回</span>
  <span class="token keyword">const</span> dep <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dep<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token comment">// 遍历Set对象中的所有effect函数，并执行它们</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> effect <span class="token keyword">of</span> dep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建一个普通对象</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 调用响应式函数，传入普通对象和一个回调函数，在回调函数中打印一条信息</span>
<span class="token keyword">const</span> proxyData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;data changed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 定义一个effect函数，在其中打印代理对象的name属性值</span>
<span class="token function-variable function">effect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyData<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 执行一次effect函数，并收集依赖</span>
<span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 修改代理对象的name属性值，并触发更新</span>
proxyData<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Jerry&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 输出结果：</span>
<span class="token comment">// Tom</span>
<span class="token comment">// data changed</span>
<span class="token comment">// Jerry</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，我定义了一个响应式函数，它接收一个目标对象和一个回调函数。然后它创建了一个代理对象，使用Proxy构造函数，并定义了get和set方法来拦截目标对象的属性操作。</p><p>其次，我定义了一个全局的Map对象，它用于存储目标对象和它们的依赖关系。每个目标对象对应一个Map对象，每个属性对应一个Set对象。Set对象中存储了依赖于该属性的effect函数。</p><p>然后，我定义了一个全局的effect函数，它用于执行副作用操作。当创建一个effect函数时，它会调用track函数，收集依赖。当执行effect函数时，它会触发目标对象的getter方法，并把effect函数添加到Set对象中。</p><p>接着，我定义了一个track函数，它用于收集依赖。它会根据Dep.target属性判断是否有激活的effect函数，如果有就把它添加到对应的Set对象中。</p><p>最后，我定义了一个trigger函数，它用于触发更新。它会根据目标对象和属性名获取对应的Set对象，如果有就遍历其中的所有effect函数，并执行它们。</p><h2 id="vue2手写响应式" tabindex="-1"><a class="header-anchor" href="#vue2手写响应式" aria-hidden="true">#</a> vue2手写响应式</h2><p>vue2的响应式，一种方法是使用 Object.defineProperty 方法来监听数据的变化，并通过 Dep 类和 Watcher 类来收集依赖和触发更新。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义一个响应式函数，接收一个目标对象</span>
<span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 遍历目标对象的所有属性</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果属性值是对象，递归调用响应式函数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">reactive</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 定义一个Dep类的实例，用于存储依赖</span>
    <span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取属性的原始值</span>
    <span class="token keyword">let</span> value <span class="token operator">=</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用Object.defineProperty方法，定义属性的getter和setter</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token comment">// getter用于收集依赖</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果当前有激活的Watcher，就添加到Dep中</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          dep<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 返回属性值</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// setter用于触发更新</span>
      <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果新值和旧值相同，直接返回</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">===</span> value<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token comment">// 更新属性值</span>
        value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
        <span class="token comment">// 如果新值是对象，递归调用响应式函数</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> newValue <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">reactive</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 调用Dep的notify方法，通知所有Watcher更新</span>
        dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 返回目标对象</span>
  <span class="token keyword">return</span> target<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个Dep类，用于管理依赖</span>
<span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个Set对象，用于存储Watcher实例</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 添加一个Watcher实例到Set对象中</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 遍历Set对象中的所有Watcher实例，并调用它们的update方法</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> sub <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sub<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个全局的Dep.target属性，用于存储当前激活的Watcher实例</span>
Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// 定义一个Watcher类，用于执行副作用操作</span>
<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">effect</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个effect函数，用于执行副作用操作</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>effect <span class="token operator">=</span> effect<span class="token punctuation">;</span>
    <span class="token comment">// 调用run方法，执行一次副作用操作，并收集依赖</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 定义一个run方法，用于执行一次副作用操作，并收集依赖</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 把当前Watcher实例赋值给Dep.target</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token comment">// 调用effect函数，执行副作用操作</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 清空Dep.target属性，避免重复收集依赖</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 定义一个update方法，用于重新执行一次副作用操作，并触发更新</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建一个普通对象</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 调用响应式函数，传入普通对象，返回一个响应式对象</span>
<span class="token keyword">const</span> proxyData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建一个Watcher实例，在其中打印代理对象的name属性值和age属性值</span>
<span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyData<span class="token punctuation">.</span>name<span class="token punctuation">,</span> proxyData<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 修改代理对象的name属性值，并触发更新</span>
proxyData<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Jerry&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 输出结果：</span>
<span class="token comment">// Tom 18</span>
<span class="token comment">// Jerry 18</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，我定义了一个响应式函数，它接收一个目标对象，然后遍历它的所有属性，对每个属性进行响应式处理。</p><p>其次，我定义了一个Dep类，它用于管理依赖，也就是Watcher实例。它有一个Set对象来存储Watcher实例，还有一个notify方法来通知所有Watcher更新。</p><p>然后，我定义了一个Watcher类，它用于执行副作用操作，也就是响应数据变化的逻辑。它有一个effect函数来执行副作用操作，还有一个run方法和一个update方法来重新执行副作用操作，并收集依赖。</p><p>接着，我定义了一个全局的Dep.target属性，它用于存储当前激活的Watcher实例。当创建一个Watcher实例时，它会调用run方法，并把自己赋值给Dep.target。当执行effect函数时，它会触发目标对象的getter方法，并把Dep.target添加到Dep中。当修改目标对象的属性时，它会触发目标对象的setter方法，并调用Dep的notify方法，通知所有Watcher更新。</p><p>最后，我创建了一个普通对象，并调用响应式函数，把它转换为一个响应式对象。然后我创建了一个Watcher实例，在其中打印响应式对象的属性值。当我修改响应式对象的属性值时，它会触发更新，并重新打印属性值。</p>`,17),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","8.html.vue"]]);export{r as default};
