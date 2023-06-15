import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-662523a0.js";const p={},o=t(`<h1 id="vue里面将axios异步请求同步化处理" tabindex="-1"><a class="header-anchor" href="#vue里面将axios异步请求同步化处理" aria-hidden="true">#</a> vue里面将axios异步请求同步化处理</h1><p>同步函数是指在主线程上一次执行一个函数，直到该函数返回结果后再执行下一个函数，这样会阻塞主线程的执行。 异步函数是指在主线程上注册一个回调函数，然后把异步任务交给另一个线程去执行，当异步任务完成后，再把回调函数放到主线程的任务队列中等待执行，这样不会阻塞主线程的执行</p><h2 id="async-await语法" tabindex="-1"><a class="header-anchor" href="#async-await语法" aria-hidden="true">#</a> async/await语法</h2><p>使用 async/await 语法，把异步函数用 await 关键字修饰，让它等待返回结果后再执行下一步</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//使用async关键字定义一个异步函数</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">//使用await关键字等待axios的get请求返回结果</span>
      <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/goods.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//打印数据</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//使用await关键字等待axios的post请求返回结果</span>
      <span class="token keyword">let</span> res2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/classify.json&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//打印数据</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//使用try/catch语句处理错误</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是因为它可以让我们用一种更简洁的方式写出基于 Promise 的异步行为，而无需刻意地链式调用 promise 。async/await的行为就好像搭配使用了生成器和 promise 。</p><p>当我们在 async 函数中使用 await 关键字时，它会暂停整个 async 函数的执行进程并出让其控制权，只有当其等待的基于 promise 的异步操作被兑现或被拒绝之后才会恢复进程。promise 的解决值会被当作该 await 表达式的返回值。</p><p>这样，我们就可以在 async 函数中使用普通的 try/catch 代码块来处理错误，而不需要使用 then/catch 链式调用。我们也可以在 async 函数中使用循环、条件判断等语法，而不需要嵌套回调函数。这些都让我们的异步代码更加清晰、易读、易维护 。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>async/await语法可以让异步函数看起来和同步一样</p></div><h2 id="使用-promise-对象" tabindex="-1"><a class="header-anchor" href="#使用-promise-对象" aria-hidden="true">#</a> 使用 Promise 对象</h2><p>使用 Promise 对象，把异步函数放在 then 方法的回调函数里，让它在前一个异步函数完成后再执行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//使用axios的get请求获取数据</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/goods.json&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//打印数据</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//返回另一个axios的post请求</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/classify.json&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//打印数据</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-axios-all-和-axios-spread-方法" tabindex="-1"><a class="header-anchor" href="#使用-axios-all-和-axios-spread-方法" aria-hidden="true">#</a> 使用 axios.all 和 axios.spread 方法</h2><p>把多个异步函数放在一个数组里，让它们同时执行，并统一处理返回值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//使用axios.all方法同时执行多个异步函数</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/goods.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/classify.json&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$axios<span class="token punctuation">.</span><span class="token function">spread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">goodsRes<span class="token punctuation">,</span> classifyRes</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">//使用axios.spread方法统一处理返回值</span>
        <span class="token comment">//打印数据</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>goodsRes<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>classifyRes<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>axios.all 和 axios.spread 方法并不是把异步函数变成了同步函数，而是让多个异步函数并行执行，而不是串行执行。这样可以提高效率，但是如果其中一个异步函数出错了，就会影响整个结果。而 async/await 和 Promise 的方法是让异步函数按照一定的顺序执行，保证每个异步函数都能得到正确的结果。所以，不同的方法有不同的优缺点，要根据具体的需求和场景来选择合适的方法</p></div>`,16),e=[o];function c(i,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","6.html.vue"]]);export{k as default};
