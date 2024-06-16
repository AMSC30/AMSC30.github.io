import{_ as r,p as a,q as e,Y as t}from"./framework-e1bed10d.js";const o={},p=t('<h1 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h1><p>Array 对象 构造函数 Array是 JavaScript 的原生对象，同时也是一个构造函数，可以用它生成新的数组。 var arr = new Array(2); arr.length // 2 arr // [ empty x 2 ]</p><p>如果没有使用new关键字，运行结果也是一样的。 var arr = Array(2); // 等同于 var arr = new Array(2);</p><p>考虑到语义性，以及与其他构造函数用法保持一致，建议总是加上new。 Array()构造函数有一个很大的缺陷，不同的参数个数会导致不一致的行为。 // 无参数时，返回一个空数组 new Array() // []</p><p>// 单个正整数参数，表示返回的新数组的长度 new Array(1) // [ empty ] new Array(2) // [ empty x 2 ]</p><p>// 非正整数的数值作为参数，会报错 new Array(3.2) // RangeError: Invalid array length new Array(-3) // RangeError: Invalid array length</p><p>// 单个非数值（比如字符串、布尔值、对象等）作为参数， // 则该参数是返回的新数组的成员 new Array(&#39;abc&#39;) // [&#39;abc&#39;] new Array([1]) // [Array[1]]</p><p>// 多参数时，所有参数都是返回的新数组的成员 new Array(1, 2) // [1, 2] new Array(&#39;a&#39;, &#39;b&#39;, &#39;c&#39;) // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</p><p>可以看到，Array()作为构造函数，行为很不一致。因此，不建议使用它生成新数组，直接使用数组字面量是更好的做法。 // bad var arr = new Array(1, 2);</p><p>// good var arr = [1, 2];</p><p>注意，如果参数是一个正整数，返回数组的成员都是空位。虽然读取的时候返回undefined，但实际上该位置没有任何值。虽然这时可以读取到length属性，但是取不到键名。 var a = new Array(3); var b = [undefined, undefined, undefined];</p><p>a.length // 3 b.length // 3</p><p>a[0] // undefined b[0] // undefined</p><p>0 in a // false 0 in b // true</p><p>静态方法 Array.isArray() Array.isArray方法返回一个布尔值，表示参数是否为数组。它可以弥补typeof运算符的不足。 var arr = [1, 2, 3];</p><p>typeof arr // &quot;object&quot; Array.isArray(arr) // true</p><p>实例方法 记忆方法</p><ul><li>队栈：push, pop, shift, unshift</li><li>查：indexOf, lastIndexOf</li><li>转：valueOf, toString, join,reverse, sort</li><li>操：slice, splice</li><li>迭代：every, map, some, forEach, filter,reduce valueOf()，toString() valueOf方法是一个所有对象都拥有的方法，表示对该对象求值。不同对象的valueOf方法不尽一致，数组的valueOf方法返回数组本身。 var arr = [1, 2, 3]; arr.valueOf() // [1, 2, 3]</li></ul><p>toString方法也是对象的通用方法，数组的toString方法返回数组的字符串形式。 var arr = [1, 2, 3]; arr.toString() // &quot;1,2,3&quot;</p><p>var arr = [1, 2, 3, [4, 5, 6]]; arr.toString() // &quot;1,2,3,4,5,6&quot;</p><p>push()，pop() push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。 var arr = [];</p><p>arr.push(1) // 1 arr.push(&#39;a&#39;) // 2 arr.push(true, {}) // 4 arr // [1, &#39;a&#39;, true, {}]</p><p>上面代码使用push方法，往数组中添加了四个成员。 pop方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。 var arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];</p><p>arr.pop() // &#39;c&#39; arr // [&#39;a&#39;, &#39;b&#39;]</p><p>对空数组使用pop方法，不会报错，而是返回undefined。 [].pop() // undefined</p><p>push和pop结合使用，就构成了“后进先出”的栈结构（stack）。 var arr = []; arr.push(1, 2); arr.push(3); arr.pop(); arr // [1, 2]</p><p>上面代码中，3是最后进入数组的，但是最早离开数组。 shift()，unshift() shift()方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。 var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];</p><p>a.shift() // &#39;a&#39; a // [&#39;b&#39;, &#39;c&#39;]</p><p>shift()方法可以遍历并清空一个数组。 var list = [1, 2, 3, 4]; var item;</p><p>while (item = list.shift()) { console.log(item); }</p><p>list // []</p><p>unshift()方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。 var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];</p><p>a.unshift(&#39;x&#39;); // 4 a // [&#39;x&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</p><p>unshift()方法可以接受多个参数，这些参数都会添加到目标数组头部。 var arr = [ &#39;c&#39;, &#39;d&#39; ]; arr.unshift(&#39;a&#39;, &#39;b&#39;) // 4 arr // [ &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39; ]</p><p>join() join()方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。 var a = [1, 2, 3, 4];</p><p>a.join(&#39; &#39;) // &#39;1 2 3 4&#39; a.join(&#39; | &#39;) // &quot;1 | 2 | 3 | 4&quot; a.join() // &quot;1,2,3,4&quot;</p><p>如果数组成员是undefined或null或空位，会被转成空字符串。 [undefined, null].join(&#39;#&#39;) // &#39;#&#39;</p><p>[&#39;a&#39;,, &#39;b&#39;].join(&#39;-&#39;) // &#39;a--b&#39;</p><p>通过call方法，这个方法也可以用于字符串或类似数组的对象。 Array.prototype.join.call(&#39;hello&#39;, &#39;-&#39;) // &quot;h-e-l-l-o&quot;</p><p>var obj = { 0: &#39;a&#39;, 1: &#39;b&#39;, length: 2 }; Array.prototype.join.call(obj, &#39;-&#39;) // &#39;a-b&#39;</p><p>concat() concat方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。 [&#39;hello&#39;].concat([&#39;world&#39;]) // [&quot;hello&quot;, &quot;world&quot;]</p><p>[&#39;hello&#39;].concat([&#39;world&#39;], [&#39;!&#39;]) // [&quot;hello&quot;, &quot;world&quot;, &quot;!&quot;]</p><p>[].concat({a: 1}, {b: 2}) // [{ a: 1 }, { b: 2 }]</p><p>[2].concat({a: 1}) // [2, {a: 1}]</p><p>除了数组作为参数，concat也接受其他类型的值作为参数，添加到目标数组尾部。 [1, 2, 3].concat(4, 5, 6) // [1, 2, 3, 4, 5, 6]</p><p>如果数组成员包括对象，concat方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是新数组拷贝的是对象的引用。 var obj = { a: 1 }; var oldArray = [obj];</p><p>var newArray = oldArray.concat();</p><p>obj.a = 2; newArray[0].a // 2</p><p>reverse() reverse方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组。 var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];</p><p>a.reverse() // [&quot;c&quot;, &quot;b&quot;, &quot;a&quot;] a // [&quot;c&quot;, &quot;b&quot;, &quot;a&quot;]</p><p>slice() slice()方法用于提取目标数组的一部分，返回一个新数组，原数组不变。 arr.slice(start, end);</p><p>它的第一个参数为起始位置（从0开始，会包括在返回的新数组之中），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员。 var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];</p><p>a.slice(0) // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;] a.slice(1) // [&quot;b&quot;, &quot;c&quot;] a.slice(1, 2) // [&quot;b&quot;] a.slice(2, 6) // [&quot;c&quot;] a.slice() // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</p><p>上面代码中，最后一个例子slice()没有参数，实际上等于返回一个原数组的拷贝。 如果slice()方法的参数是负数，则表示倒数计算的位置。 var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]; a.slice(-2) // [&quot;b&quot;, &quot;c&quot;] a.slice(-2, -1) // [&quot;b&quot;]</p><p>上面代码中，-2表示倒数计算的第二个位置，-1表示倒数计算的第一个位置。 如果第一个参数大于等于数组长度，或者第二个参数小于第一个参数，则返回空数组。 var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]; a.slice(4) // [] a.slice(2, 1) // []</p><p>slice()方法的一个重要应用，是将类似数组的对象转为真正的数组。 Array.prototype.slice.call({ 0: &#39;a&#39;, 1: &#39;b&#39;, length: 2 }) // [&#39;a&#39;, &#39;b&#39;]</p><p>Array.prototype.slice.call(document.querySelectorAll(&quot;div&quot;)); Array.prototype.slice.call(arguments);</p><p>上面代码的参数都不是数组，但是通过call方法，在它们上面调用slice()方法，就可以把它们转为真正的数组。 splice() splice()方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。 arr.splice(start, count, addElement1, addElement2, ...);</p><p>splice的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。 var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;]; a.splice(4, 2) // [&quot;e&quot;, &quot;f&quot;] a // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]</p><p>上面代码从原数组4号位置，删除了两个数组成员。 var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;]; a.splice(4, 2, 1, 2) // [&quot;e&quot;, &quot;f&quot;] a // [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, 1, 2]</p><p>上面代码除了删除成员，还插入了两个新成员。 起始位置如果是负数，就表示从倒数位置开始删除。 var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;]; a.splice(-4, 2) // [&quot;c&quot;, &quot;d&quot;]</p><p>上面代码表示，从倒数第四个位置c开始删除两个成员。 如果只是单纯地插入元素，splice方法的第二个参数可以设为0。 var a = [1, 1, 1];</p><p>a.splice(1, 0, 2) // [] a // [1, 2, 1, 1]</p><p>如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。 var a = [1, 2, 3, 4]; a.splice(2) // [3, 4] a // [1, 2]</p><p>sort() sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。 [&#39;d&#39;, &#39;c&#39;, &#39;b&#39;, &#39;a&#39;].sort() // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]</p><p>[4, 3, 2, 1].sort() // [1, 2, 3, 4]</p><p>[11, 101].sort() // [101, 11]</p><p>[10111, 1101, 111].sort() // [10111, 1101, 111]</p><p>上面代码的最后两个例子，需要特殊注意。sort()方法不是按照大小排序，而是按照字典顺序。也就是说，数值会被先转成字符串，再按照字典顺序进行比较，所以101排在11的前面。 如果想让sort方法按照自定义方式排序，可以传入一个函数作为参数。 [10111, 1101, 111].sort(function (a, b) { return a - b; }) // [111, 1101, 10111]</p><p>上面代码中，sort的参数函数本身接受两个参数，表示进行比较的两个数组成员。如果该函数的返回值大于0，表示第一个成员排在第二个成员后面；其他情况下，都是第一个元素排在第二个元素前面。 [ { name: &quot;张三&quot;, age: 30 }, { name: &quot;李四&quot;, age: 24 }, { name: &quot;王五&quot;, age: 28 } ].sort(function (o1, o2) { return o1.age - o2.age; }) // [ // { name: &quot;李四&quot;, age: 24 }, // { name: &quot;王五&quot;, age: 28 }, // { name: &quot;张三&quot;, age: 30 } // ]</p><p>注意，自定义的排序函数应该返回数值，否则不同的浏览器可能有不同的实现，不能保证结果都一致。 // bad [1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) =&gt; a &gt; b)</p><p>// good [1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) =&gt; a - b)</p><p>上面代码中，前一种排序算法返回的是布尔值，这是不推荐使用的。后一种是数值，才是更好的写法。 map() map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。 var numbers = [1, 2, 3];</p><p>numbers.map(function (n) { return n + 1; }); // [2, 3, 4]</p><p>numbers // [1, 2, 3]</p><p>上面代码中，numbers数组的所有成员依次执行参数函数，运行结果组成一个新数组返回，原数组没有变化。 map方法接受一个函数作为参数。该函数调用时，map方法向它传入三个参数：当前成员、当前位置和数组本身。 [1, 2, 3].map(function(elem, index, arr) { return elem * index; }); // [0, 2, 6]</p><p>上面代码中，map方法的回调函数有三个参数，elem为当前成员的值，index为当前成员的位置，arr为原数组（[1, 2, 3]）。 map方法还可以接受第二个参数，用来绑定回调函数内部的this变量（详见《this 变量》一章）。 var arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];</p><p>[1, 2].map(function (e) { return this[e]; }, arr) // [&#39;b&#39;, &#39;c&#39;]</p><p>上面代码通过map方法的第二个参数，将回调函数内部的this对象，指向arr数组。 如果数组有空位，map方法的回调函数在这个位置不会执行，会跳过数组的空位。 var f = function (n) { return &#39;a&#39; };</p><p>[1, undefined, 2].map(f) // [&quot;a&quot;, &quot;a&quot;, &quot;a&quot;] [1, null, 2].map(f) // [&quot;a&quot;, &quot;a&quot;, &quot;a&quot;] [1, , 2].map(f) // [&quot;a&quot;, , &quot;a&quot;]</p><p>上面代码中，map方法不会跳过undefined和null，但是会跳过空位。 forEach() forEach方法与map方法很相似，也是对数组的所有成员依次执行参数函数。但是，forEach方法不返回值，只用来操作数据。这就是说，如果数组遍历的目的是为了得到返回值，那么使用map方法，否则使用forEach方法。 forEach的用法与map方法一致，参数是一个函数，该函数同样接受三个参数：当前值、当前位置、整个数组。 function log(element, index, array) { console.log(&#39;[&#39; + index + &#39;] = &#39; + element); }</p><p>[2, 5, 9].forEach(log); // [0] = 2 // [1] = 5 // [2] = 9</p><p>上面代码中，forEach遍历数组不是为了得到返回值，而是为了在屏幕输出内容，所以不必使用map方法。 forEach方法也可以接受第二个参数，绑定参数函数的this变量。 var out = [];</p><p>[1, 2, 3].forEach(function(elem) { this.push(elem * elem); }, out);</p><p>out // [1, 4, 9]</p><p>上面代码中，空数组out是forEach方法的第二个参数，结果，回调函数内部的this关键字就指向out。 注意，forEach方法无法中断执行，总是会将所有成员遍历完。如果希望符合某种条件时，就中断遍历，要使用for循环。 var arr = [1, 2, 3];</p><p>for (var i = 0; i &lt; arr.length; i++) { if (arr[i] === 2) break; console.log(arr[i]); } // 1</p><p>上面代码中，执行到数组的第二个成员时，就会中断执行。forEach方法做不到这一点。 forEach方法也会跳过数组的空位。 var log = function (n) { console.log(n + 1); };</p><p>[1, undefined, 2].forEach(log) // 2 // NaN // 3</p><p>[1, null, 2].forEach(log) // 2 // 1 // 3</p><p>[1, , 2].forEach(log) // 2 // 3</p><p>上面代码中，forEach方法不会跳过undefined和null，但会跳过空位。 filter() filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回。 它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。 [1, 2, 3, 4, 5].filter(function (elem) { return (elem &gt; 3); }) // [4, 5]</p><p>上面代码将大于3的数组成员，作为一个新数组返回。 var arr = [0, 1, &#39;a&#39;, false];</p><p>arr.filter(Boolean) // [1, &quot;a&quot;]</p><p>上面代码中，filter方法返回数组arr里面所有布尔值为true的成员。 filter方法的参数函数可以接受三个参数：当前成员，当前位置和整个数组。 [1, 2, 3, 4, 5].filter(function (elem, index, arr) { return index % 2 === 0; }); // [1, 3, 5]</p><p>上面代码返回偶数位置的成员组成的新数组。 filter方法还可以接受第二个参数，用来绑定参数函数内部的this变量。 var obj = { MAX: 3 }; var myFilter = function (item) { if (item &gt; this.MAX) return true; };</p><p>var arr = [2, 8, 3, 4, 1, 3, 2, 9]; arr.filter(myFilter, obj) // [8, 4, 9]</p><p>上面代码中，过滤器myFilter内部有this变量，它可以被filter方法的第二个参数obj绑定，返回大于3的成员。 some()，every() 这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。 它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。 some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false。 var arr = [1, 2, 3, 4, 5]; arr.some(function (elem, index, arr) { return elem &gt;= 3; }); // true</p><p>上面代码中，如果数组arr有一个成员大于等于3，some方法就返回true。 every方法是所有成员的返回值都是true，整个every方法才返回true，否则返回false。 var arr = [1, 2, 3, 4, 5]; arr.every(function (elem, index, arr) { return elem &gt;= 3; }); // false</p><p>上面代码中，数组arr并非所有成员大于等于3，所以返回false。 注意，对于空数组，some方法返回false，every方法返回true，回调函数都不会执行。 function isEven(x) { return x % 2 === 0 }</p><p>[].some(isEven) // false [].every(isEven) // true</p><p>some和every方法还可以接受第二个参数，用来绑定参数函数内部的this变量。 reduce()，reduceRight() reduce方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce是从左到右处理（从第一个成员到最后一个成员），reduceRight则是从右到左（从最后一个成员到第一个成员），其他完全一样。 [1, 2, 3, 4, 5].reduce(function (a, b) { console.log(a, b); return a + b; }) // 1 2 // 3 3 // 6 4 // 10 5 //最后结果：15</p><p>上面代码中，reduce方法求出数组所有成员的和。第一次执行，a是数组的第一个成员1，b是数组的第二个成员2。第二次执行，a为上一轮的返回值3，b为第三个成员3。第三次执行，a为上一轮的返回值6，b为第四个成员4。第四次执行，a为上一轮返回值10，b为第五个成员5。至此所有成员遍历完成，整个方法的返回值就是最后一轮的返回值15。 reduce方法和reduceRight方法的第一个参数都是一个函数。该函数接受以下四个参数。</p><ol><li>累积变量，默认为数组的第一个成员</li><li>当前变量，默认为数组的第二个成员</li><li>当前位置（从0开始）</li><li>原数组 这四个参数之中，只有前两个是必须的，后两个则是可选的。 如果要对累积变量指定初值，可以把它放在reduce方法和reduceRight方法的第二个参数。 [1, 2, 3, 4, 5].reduce(function (a, b) { return a + b; }, 10); // 25</li></ol><p>上面代码指定参数a的初值为10，所以数组从10开始累加，最终结果为25。注意，这时b是从数组的第一个成员开始遍历。 上面的第二个参数相当于设定了默认值，处理空数组时尤其有用。 function add(prev, cur) { return prev + cur; }</p><p>[].reduce(add) // TypeError: Reduce of empty array with no initial value [].reduce(add, 1) // 1</p><p>上面代码中，由于空数组取不到初始值，reduce方法会报错。这时，加上第二个参数，就能保证总是会返回一个值。 下面是一个reduceRight方法的例子。 function subtract(prev, cur) { return prev - cur; }</p><p>[3, 2, 1].reduce(subtract) // 0 [3, 2, 1].reduceRight(subtract) // -4</p><p>上面代码中，reduce方法相当于3减去2再减去1，reduceRight方法相当于1减去2再减去3。 由于这两个方法会遍历数组，所以实际上还可以用来做一些遍历相关的操作。比如，找出字符长度最长的数组成员。 function findLongest(entries) { return entries.reduce(function (longest, entry) { return entry.length &gt; longest.length ? entry : longest; }, &#39;&#39;); }</p><p>findLongest([&#39;aaa&#39;, &#39;bb&#39;, &#39;c&#39;]) // &quot;aaa&quot;</p><p>上面代码中，reduce的参数函数会将字符长度较长的那个数组成员，作为累积值。这导致遍历所有成员之后，累积值就是字符长度最长的那个成员。 indexOf()，lastIndexOf() indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。 var a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];</p><p>a.indexOf(&#39;b&#39;) // 1 a.indexOf(&#39;y&#39;) // -1</p><p>indexOf方法还可以接受第二个参数，表示搜索的开始位置。 [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;].indexOf(&#39;a&#39;, 1) // -1</p><p>上面代码从1号位置开始搜索字符a，结果为-1，表示没有搜索到。 lastIndexOf方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1。 var a = [2, 5, 9, 2]; a.lastIndexOf(2) // 3 a.lastIndexOf(7) // -1</p><p>注意，这两个方法不能用来搜索NaN的位置，即它们无法确定数组成员是否包含NaN。 [NaN].indexOf(NaN) // -1 [NaN].lastIndexOf(NaN) // -1</p><p>这是因为这两个方法内部，使用严格相等运算符（===）进行比较，而NaN是唯一一个不等于自身的值。 链式使用 上面这些数组方法之中，有不少返回的还是数组，所以可以链式使用。 var users = [ {name: &#39;tom&#39;, email: &#39;tom@example.com&#39;}, {name: &#39;peter&#39;, email: &#39;peter@example.com&#39;} ];</p><p>users .map(function (user) { return user.email; }) .filter(function (email) { return /^t/.test(email); }) .forEach(function (email) { console.log(email); }); // &quot;tom@example.com&quot;</p><p>上面代码中，先产生一个所有 Email 地址组成的数组，然后再过滤出以t开头的 Email 地址，最后将它打印出来。</p>',118),u=[p];function n(i,l){return a(),e("div",null,u)}const s=r(o,[["render",n],["__file","array.html.vue"]]);export{s as default};