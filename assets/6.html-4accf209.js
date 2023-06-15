const s=JSON.parse(`{"key":"v-ed8f283e","path":"/posts/VUE/6.html","title":"vue里面将axios异步请求同步化处理","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","cover":"/assets/images/VUE.png","date":"2022-11-05T00:00:00.000Z","category":["VUE"],"tag":["vue项目技巧"],"description":"vue里面将axios异步请求同步化处理 同步函数是指在主线程上一次执行一个函数，直到该函数返回结果后再执行下一个函数，这样会阻塞主线程的执行。 异步函数是指在主线程上注册一个回调函数，然后把异步任务交给另一个线程去执行，当异步任务完成后，再把回调函数放到主线程的任务队列中等待执行，这样不会阻塞主线程的执行 async/await语法 使用 async/await 语法，把异步函数用 await 关键字修饰，让它等待返回结果后再执行下一步 &lt;script&gt; export default { async mounted() { //使用async关键字定义一个异步函数 try { //使用await关键字等待axios的get请求返回结果 let res = await this.$axios.get('/goods.json'); //打印数据 console.log(res.data); //使用await关键字等待axios的post请求返回结果 let res2 = await this.$axios.post('/classify.json', {id: 1}); //打印数据 console.log(res2.data); } catch (err) { //使用try/catch语句处理错误 console.error(err); } } } &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/VUE/6.html"}],["meta",{"property":"og:site_name","content":"3621"}],["meta",{"property":"og:title","content":"vue里面将axios异步请求同步化处理"}],["meta",{"property":"og:description","content":"vue里面将axios异步请求同步化处理 同步函数是指在主线程上一次执行一个函数，直到该函数返回结果后再执行下一个函数，这样会阻塞主线程的执行。 异步函数是指在主线程上注册一个回调函数，然后把异步任务交给另一个线程去执行，当异步任务完成后，再把回调函数放到主线程的任务队列中等待执行，这样不会阻塞主线程的执行 async/await语法 使用 async/await 语法，把异步函数用 await 关键字修饰，让它等待返回结果后再执行下一步 &lt;script&gt; export default { async mounted() { //使用async关键字定义一个异步函数 try { //使用await关键字等待axios的get请求返回结果 let res = await this.$axios.get('/goods.json'); //打印数据 console.log(res.data); //使用await关键字等待axios的post请求返回结果 let res2 = await this.$axios.post('/classify.json', {id: 1}); //打印数据 console.log(res2.data); } catch (err) { //使用try/catch语句处理错误 console.error(err); } } } &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/assets/images/VUE.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-08T14:23:26.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"vue里面将axios异步请求同步化处理"}],["meta",{"property":"article:author","content":"no-3621"}],["meta",{"property":"article:tag","content":"vue项目技巧"}],["meta",{"property":"article:published_time","content":"2022-11-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-08T14:23:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue里面将axios异步请求同步化处理\\",\\"image\\":[\\"https://mister-hope.github.io/assets/images/VUE.png\\"],\\"datePublished\\":\\"2022-11-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-08T14:23:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"no-3621\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"async/await语法","slug":"async-await语法","link":"#async-await语法","children":[]},{"level":2,"title":"使用 Promise 对象","slug":"使用-promise-对象","link":"#使用-promise-对象","children":[]},{"level":2,"title":"使用 axios.all 和 axios.spread 方法","slug":"使用-axios-all-和-axios-spread-方法","link":"#使用-axios-all-和-axios-spread-方法","children":[]}],"git":{"createdTime":1686234206000,"updatedTime":1686234206000,"contributors":[{"name":"as3621","email":"1204846742@qq.com","commits":1}]},"readingTime":{"minutes":2.92,"words":875},"filePathRelative":"posts/VUE/6.md","localizedDate":"2022年11月5日","excerpt":"<h1> vue里面将axios异步请求同步化处理</h1>\\n<p>同步函数是指在主线程上一次执行一个函数，直到该函数返回结果后再执行下一个函数，这样会阻塞主线程的执行。\\n异步函数是指在主线程上注册一个回调函数，然后把异步任务交给另一个线程去执行，当异步任务完成后，再把回调函数放到主线程的任务队列中等待执行，这样不会阻塞主线程的执行</p>\\n<h2> async/await语法</h2>\\n<p>使用 async/await 语法，把异步函数用 await 关键字修饰，让它等待返回结果后再执行下一步</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token operator\\">&lt;</span>script<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">async</span> <span class=\\"token function\\">mounted</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">//使用async关键字定义一个异步函数</span>\\n    <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">//使用await关键字等待axios的get请求返回结果</span>\\n      <span class=\\"token keyword\\">let</span> res <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>$axios<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'/goods.json'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token comment\\">//打印数据</span>\\n      console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>res<span class=\\"token punctuation\\">.</span>data<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token comment\\">//使用await关键字等待axios的post请求返回结果</span>\\n      <span class=\\"token keyword\\">let</span> res2 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>$axios<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">post</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'/classify.json'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token comment\\">//打印数据</span>\\n      console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>res2<span class=\\"token punctuation\\">.</span>data<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span>err<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">//使用try/catch语句处理错误</span>\\n      console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span>err<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>script<span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{s as data};