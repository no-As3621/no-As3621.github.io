const t=JSON.parse('{"key":"v-fb35ed36","path":"/posts/VUE/2.html","title":"Computer和watch的区别","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","cover":"/assets/images/VUE.png","date":"2022-09-15T00:00:00.000Z","category":["VUE"],"tag":["vue原理"],"description":"Computer和watch的区别 一、computer 当页面中有某些数据依赖其他数据进行变动的时候，可以使用计算属性。 需要注意的是，就算在data中没有直接声明出要计算的变量，也可以直接在computed中写入。 计算属性默认只有getter，可以在需要的时候自己设定setter： 是一个计算属性,类似于过滤器,对绑定到view的数据进行处理 二、watch watch是一个观察的动作 watch和computed很相似，watch用于观察和监听页面上的vue实例，当然在大部分情况下我们都会使用computed，但如果要在数据变化的同时进行异步操作或者是比较大的开销，那么watch为最佳选择。 watch为一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。直接引用文档例子","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/VUE/2.html"}],["meta",{"property":"og:site_name","content":"3621"}],["meta",{"property":"og:title","content":"Computer和watch的区别"}],["meta",{"property":"og:description","content":"Computer和watch的区别 一、computer 当页面中有某些数据依赖其他数据进行变动的时候，可以使用计算属性。 需要注意的是，就算在data中没有直接声明出要计算的变量，也可以直接在computed中写入。 计算属性默认只有getter，可以在需要的时候自己设定setter： 是一个计算属性,类似于过滤器,对绑定到view的数据进行处理 二、watch watch是一个观察的动作 watch和computed很相似，watch用于观察和监听页面上的vue实例，当然在大部分情况下我们都会使用computed，但如果要在数据变化的同时进行异步操作或者是比较大的开销，那么watch为最佳选择。 watch为一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。直接引用文档例子"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/assets/images/VUE.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-08T07:21:00.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Computer和watch的区别"}],["meta",{"property":"article:author","content":"no-3621"}],["meta",{"property":"article:tag","content":"vue原理"}],["meta",{"property":"article:published_time","content":"2022-09-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-08T07:21:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Computer和watch的区别\\",\\"image\\":[\\"https://mister-hope.github.io/assets/images/VUE.png\\"],\\"datePublished\\":\\"2022-09-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-08T07:21:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"no-3621\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"计算属性computed","slug":"计算属性computed","link":"#计算属性computed","children":[]},{"level":2,"title":"侦听属性watch","slug":"侦听属性watch","link":"#侦听属性watch","children":[]}],"git":{"createdTime":1686208860000,"updatedTime":1686208860000,"contributors":[{"name":"as3621","email":"1204846742@qq.com","commits":1}]},"readingTime":{"minutes":2.42,"words":727},"filePathRelative":"posts/VUE/2.md","localizedDate":"2022年9月15日","excerpt":"<h1> Computer和watch的区别</h1>\\n<p>一、computer\\n当页面中有某些数据依赖其他数据进行变动的时候，可以使用计算属性。</p>\\n<p>需要注意的是，就算在data中没有直接声明出要计算的变量，也可以直接在computed中写入。</p>\\n<p>计算属性默认只有getter，可以在需要的时候自己设定setter：</p>\\n<p>是一个计算属性,类似于过滤器,对绑定到view的数据进行处理</p>\\n<p>二、watch\\nwatch是一个观察的动作</p>\\n<p>watch和computed很相似，watch用于观察和监听页面上的vue实例，当然在大部分情况下我们都会使用computed，但如果要在数据变化的同时进行异步操作或者是比较大的开销，那么watch为最佳选择。</p>\\n<p>watch为一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。直接引用文档例子</p>\\n","autoDesc":true}');export{t as data};
