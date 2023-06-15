const t=JSON.parse('{"key":"v-f7cc3bf8","path":"/posts/VUE/3.html","title":"重置data里面的值","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","cover":"/assets/images/VUE.png","date":"2022-10-03T00:00:00.000Z","category":["VUE"],"tag":["vue项目技巧"],"star":true,"comment":false,"description":"重置data里面的值 例如表单里提交成功以后，可以把组件数据恢复到操作之前 Object.assign（）方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。对象中只有一级属性，没有二级属性的时候，此方法为深拷贝；但是对象中有二级属性的时候，此方法，在二级属性以后就是浅拷贝 this.$data获取当前状态下的data this.$options.data()获取该组件初始状态下的data。 //重置整个data Object.assign(this.$data, this.$options.data.call(this))","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/VUE/3.html"}],["meta",{"property":"og:site_name","content":"3621"}],["meta",{"property":"og:title","content":"重置data里面的值"}],["meta",{"property":"og:description","content":"重置data里面的值 例如表单里提交成功以后，可以把组件数据恢复到操作之前 Object.assign（）方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。对象中只有一级属性，没有二级属性的时候，此方法为深拷贝；但是对象中有二级属性的时候，此方法，在二级属性以后就是浅拷贝 this.$data获取当前状态下的data this.$options.data()获取该组件初始状态下的data。 //重置整个data Object.assign(this.$data, this.$options.data.call(this))"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/assets/images/VUE.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-11T16:13:18.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"重置data里面的值"}],["meta",{"property":"article:author","content":"no-3621"}],["meta",{"property":"article:tag","content":"vue项目技巧"}],["meta",{"property":"article:published_time","content":"2022-10-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-11T16:13:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"重置data里面的值\\",\\"image\\":[\\"https://mister-hope.github.io/assets/images/VUE.png\\"],\\"datePublished\\":\\"2022-10-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-11T16:13:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"no-3621\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[],"git":{"createdTime":1686208860000,"updatedTime":1686499998000,"contributors":[{"name":"as3621","email":"1204846742@qq.com","commits":3}]},"readingTime":{"minutes":0.89,"words":266},"filePathRelative":"posts/VUE/3.md","localizedDate":"2022年10月3日","excerpt":"<h1> 重置data里面的值</h1>\\n<p>例如表单里提交成功以后，可以把组件数据恢复到操作之前</p>\\n<p>Object.assign（）方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。对象中只有一级属性，没有二级属性的时候，此方法为深拷贝；但是对象中有二级属性的时候，此方法，在二级属性以后就是浅拷贝</p>\\n<p>this.$data获取当前状态下的data</p>\\n<p>this.$options.data()获取该组件初始状态下的data。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">//重置整个data</span>\\nObject<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">assign</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>$data<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>$options<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">data</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">call</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};