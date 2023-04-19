---
theme: channing-cyan
highlight: atelier-estuary-light
---
## **实现Mini-Vue**

-   实现一个简洁版的Mini-Vue框架，该Vue包括三个模块：

    -   渲染系统模块；
    -   可响应式系统模块；
    -   应用程序入口模块；

### 渲染系统实现

-   渲染系统，模块主要包含三个功能；

    -   功能一： h函数，用于返回一个`VNode`对象；
    -   功能二：mount函数，用于将`VNode`挂载到DOM上
    -   功能三：patch函数，用于对两个`VNode`进行对比，决定如何处理新的`VNode`

#### 介绍h函数

我们一般在编写`vue`代码时，会首先编写模板代码，也就是`template`标签中的代码。如果我们想要比模板更加接近编译器，此时我们可以使用渲染函数。 我们编写的代码转化为真正的`dom`时，首先会先转换为`VNode`,然后多个`Vnode`进行结合起来转化为`VDOM`，最后`VDOM`才渲染成真实的`DOM`，此时我们思考一个问题，如果我们直接编写生成`vnode`的代码，效率会更高，这里我们就是h()函数。h函数我们也可以称为`createVnode`函数。**h函数接收三个参数**。

-   第一个参数:，可以为一个**html标签**，一个**组件**，一个**异步组件**，或者是**一个函数式组件**。
-   第二个参数：`{ Object } Props`，与**`attributes`和`props`**,以及**事件对应的对象**，我们可以在模板中使用，如果没有需要传入的属性，可以设置为`null`。
-   第三个参数：`{String | Object |Array}`可以是**字符串Text文本**或者是**h函数构建的对象**再者可以是有**插槽的对象**。

#### 实现h函数

1、先创建一个index.html和render.js

`index.html`文件

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./render.js"></script>
    <script>
      // 1、通过h函数来创建一个vnode
      const vnode = h("div", { class: "why" }, [
        h("h2", null, "当前计数：100"),
        h("button", null, "+1"),
      ]);
    </script>
  </body>
</html>

```

`render.js`文件

```
const h = (tag, props, children) => {
  // 其实vnode就是一个js对象 =>   {}
  return {
    tag,
    props,
    children,
  };
};
 
```

#### 实现mount函数

首先实现`mount`函数会有点小复杂，这里的`childern`不考虑插槽的问题，我们只考虑`string`类型和`Array`类型,其实如果是`string`类型我就挂载到元素上面，如果是`Array`我们就直接递归调用mount函数就行。

```js
const mount = (vnode, container) => {
  // vnode -> element
  // 1、创建出真实元素，并在vnode上保留el
  const el = (vnode.el = document.createElement(vnode.tag));

  // 2、处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];
      if (key.startsWith("on")) {
        // 对事件的监听
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  // 3、处理children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else {
      vnode.children.forEach((item) => {
        mount(item, el);
      });
    }
  }
  // 4、 将el挂载到container上
  container.appendChild(el);
};
```

`mount`函数的实现我们分四步去理，由h函数我们知道有三块元素分别是（tag, props, children），所以我们先将tag的元素进行创建，再将props的属性进行挂载，最后再去判断children。

`render.js`文件变成

```
const h = (tag, props, children) => {
  // 其实vnode就是一个js对象 =>   {}
  return {
    tag,
    props,
    children,
  };
};

const mount = (vnode, container) => {
  // vnode -> element
  // 1、创建出真实元素，并在vnode上保留el
  const el = (vnode.el = document.createElement(vnode.tag));

  // 2、处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];
      if (key.startsWith("on")) {
        // 对事件的监听
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  // 3、处理children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else {
      vnode.children.forEach((item) => {
        mount(item, el);
      });
    }
  }
  // 4、 将el挂载到container上
  container.appendChild(el);
};

```

`index.html`文件变成

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./render.js"></script>
    <script>
      // 1、通过h函数来创建一个vnode
      const vnode = h("div", { class: "why" }, [
        h("h2", null, "当前计数：100"),
        h("button", null, "+1"),
      ]); // vdom
      console.log(vnode);
      
      // 2、通过mount函数，将vnode挂载到div#app上
      mount(vnode, document.querySelector("#app"));
    </script>
  </body>
</html>

```

页面渲染完成


![image-20230104143948898.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecf8f89ad4fa475f935180da62fff070~tplv-k3u1fbpfcp-watermark.image?)

#### 实现`patch`函数

-   patch函数的实现，分为两种情况

-   n1和n2是不同类型的节点

    -   找到n1的el父节点，删除原来的n1节点的el；
    -   挂载n2节点到n1的el父节点上；

-   n1和n2节点是相同的节点：

    -   处理props的情况

        -   先将新节点的props全部挂载到el上；
        -   判断旧节点的props是否不需要在新节点上，如果不需要，那么删除对应的属性；

    -   处理children的情况

        -   如果新节点是一个字符串类型，那么直接调用 `el.textContent`= `newChildren`；

        -   如果新节点不同一个字符串类型：

            -   旧节点是一个字符串类型

                -   将el的`textContent`设置为空字符串；
                -   旧节点是一个字符串类型，那么直接遍历新节点，挂载到el上；

            -   旧节点也是一个数组类型

                -   取出数组的最小长度；
                -   遍历所有的节点，新节点和旧节点进行path操作；
                -   如果新节点的length更长，那么剩余的新节点进行挂载操作；
                -   如果旧节点的length更长，那么剩余的旧节点进行卸载操作；

```
// 实现diff
const patch = (n1, n2) => {
  if (n1.tag !== n2.tag) {
    const n1ElParent = n1.el.parentElement;
    n1ElParent.removeChild(n1.el);
    mount(n2, n1ElParent);
  } else {
    // 1、去除element对象，并且n2中进行保存
    const el = (n2.el = n1.el);
    // 2、处理props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};
    // 2.1 获取所有的newProps添加到el
    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];
      if (newValue !== oldValue) {
        if (key.startsWith("on")) {
          // 对事件的监听
          el.addEventListener(key.slice(2).toLowerCase(), newValue);
        } else {
          el.setAttribute(key, newValue);
        }
      }
    }
    // 2.2 删除旧的props
    for (const key in oldProps) {
      if (!(key in newProps)) {
        if (key.startsWith("on")) {
          // 对事件的监听
          const value = oldProps[key];
          el.removeEventListener(key.slice(2).toLowerCase(), value);
        } else {
          el.removeAttribute(key);
        }
      }
    }
    // 3、处理children
    const oldChildren = n1.children || [];
    const newChildren = n2.children || [];
    if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else {
        el.innerHTML = newChildren;
      }
    } else {
      // 情况二：newChildren 本身是一个数组
      if (typeof oldChildren === "string") {
        el.innerHTML = "";
        newChildren.forEach((itme) => {
          mount(item, el);
        });
      } else {
        // oldChildren:[v1,v2,v3]
        // newChildren:[v1,v5,v6,v7,v8]
        // 1、前面有相同节点的原生进行patch操作
        const oldLength = oldChildren.length;
        const newLength = newChildren.length;
        const commonLength = Math.min(oldLength, newLength);
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }
        // 2、oldLength < newLength
        if (oldLength < newLength) {
          // mount new
          newChildren.slice(oldLength).forEach((item) => {
            mount(item, el);
          });
        }
        // 3、oldLength > newLength
        if (oldLength > newLength) {
          // remove old
          oldChildren.slice(newLength).forEach((item) => {
            el.removeChild(item.el);
          });
        }
      }
    }
  }
};
```

旧节点：`n1`

新节点：`n2`

先把`patch`函数贴出来,我们来分析一下`tag`我们先判断是不是同一个标签，如果不是我们就移除掉`n1`,如果是同一个标签，那我们就去判断第二个元素也就是`props`，我们可以看到代码`const el = (n2.el = n1.el);`可能会有人问我什么这样写，其实这边`n2.el`是不存在的为什么呢，上节我们知道`el`是在`mount`挂载的时候去填充的为什么要这个`el`，其实很简单对`removeChild`和`appendChild`是比较方便的，因为`n2.el`是不存在，我们已经判断了`n2`和`n1`的tag是一样的，所以我们直接给`n2.el`去赋值并没有什么问题，那么我们`el = (n2.el = n1.el)`为什么这样写呢，其实他们是对象，当`el`修改了，`n1`和`n2`也就修改了也就是**回流**，不懂回流的建议这边去看看定义

[JS回流与重绘](https://blog.csdn.net/qq_46222031/article/details/121352025),其次我们判断`props`会去遍历

```
   // 2.1 获取所有的newProps添加到el
    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];
      if (newValue !== oldValue) {
        if (key.startsWith("on")) {
          // 对事件的监听
          el.addEventListener(key.slice(2).toLowerCase(), newValue);
        } else {
          el.setAttribute(key, newValue);
        }
      }
    }
```

这段是获取`newProps`把新属性加入到`el`里，对于旧节点和新节点共同`key`但是不同`value`进行替换

```
    // 2.2 删除旧的props
    for (const key in oldProps) {
      if (!(key in newProps)) {
        if (key.startsWith("on")) {
          // 对事件的监听
          const value = oldProps[key];
          el.removeEventListener(key.slice(2).toLowerCase(), value);
        } else {
          el.removeAttribute(key);
        }
      }
    }
```

这边主要是遍历旧节点的`props`对于这些属性如果不在`newProps`我们就直接`remove`;

现在我们已经讲解完了对于`props`新旧节点的删除和添加，我们接下来讲解`children`是如何实现的，其实我也看了vue3的源码他对于很多边界进行了判断，当然我们只是学习他的思想，并不可能全部去实现。

```
 if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else {
        el.innerHTML = newChildren;
      }
    }
```

可能会有人问了，为什么用`textContent`？为什么又用`innerHTML`,我们看看如果`newChildren`和`oldChildren`，如果都是文本的话那就是说我们只需要替换文本内容，如果`oldChildren`不是文本内容而是`HTML`那就需要去用`innerHTML`，为什么用的不一样呢，因为`textContent`比`innerHTML`性能更好，这里我给出解释

> 正如其名称，[`Element.innerHTML`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML) 返回 HTML。通常，为了在元素中检索或写入文本，人们使用 `innerHTML`。但是，`textContent` 通常具有更好的性能，因为文本不会被解析为 HTML。

这段文字时MDN给出的解释[innerHTML和textContent](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent#%E4%B8%8E_innerhtml_%E7%9A%84%E5%8C%BA%E5%88%AB)

```
      // 情况二：newChildren 本身是一个数组
      if (typeof oldChildren === "string") {
        el.innerHTML = "";
        newChildren.forEach((itme) => {
          mount(item, el);
        });
      }
```

如果`newChildren`是一个数组那我们把之前的清空，并且去遍历`newChildren`通过`mount`去挂载它

```
else {
        // oldChildren:[v1,v2,v3]
        // newChildren:[v1,v5,v6,v7,v8]
        // 1、前面有相同节点的原生进行patch操作
        const oldLength = oldChildren.length;
        const newLength = newChildren.length;
        const commonLength = Math.min(oldLength, newLength);
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }
        // 2、oldLength < newLength
        if (oldLength < newLength) {
          // mount new
          newChildren.slice(oldLength).forEach((item) => {
            mount(item, el);
          });
        }
        // 3、oldLength > newLength
        if (oldLength > newLength) {
          // remove old
          oldChildren.slice(newLength).forEach((item) => {
            el.removeChild(item.el);
          });
        }
```

这段代码主要是模仿`vue3`源码去写的，这边要先去找最短的长度去遍历，然后去判断`oldChildren`和`newChildren`的长度，如果`oldLength < newLength`那我们就去把`newChildren`多余的去挂载上去,如果`oldLength > newLength`，那就把`oldChildren`多余的去删除。这里我把`vue3`源码贴出来


![image-20230105111957656.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f53c35a6e6f74c4aad83dff93e9bc4f4~tplv-k3u1fbpfcp-watermark.image?)

### 响应式系统

-   上面我们已经实现了渲染系统的代码，接下来我们实现响应式系统，当然vue3和vue2在实现响应式的时候采取了不同策略，vue3采用了`Proxy`,而vue2采用的是`Object.defineProperty`，那么我们要实现简单的响应式系统首先我们必须对这俩个`API`进行学习

#### 1. 通过defineProperty给对象创建属性描述符

```
我们知道在面向对象中对象属性描述符中有`set`与`get`可以对对象中的属性进行取值与赋值的监听。
```

```
const obj = {
  name: "why",
  age: 18
}

Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    get: function() {
      console.log(`监听到obj对象的${key}属性被访问了`)
      return value
    },
    set: function(newValue) {
      console.log(`监听到obj对象的${key}属性被设置值`)
      value = newValue
    }
  })
})

obj.name = "kobe"
obj.age = 30

console.log(obj.name)
console.log(obj.age)
```

```
	虽然现在这种方式可以做到监听属性，因为对象属性描述符设计的初衷是用来定义属性的，我们强行将它变成了数据属性描述符。但是，我们想监听更加丰富的操作，比如新增、删除属性，我们这种方式就无能为力了。
```

#### 2.Proxy

在ES6中新增了一个`Proxy类`，又称代理对象。如果我们希望监听一个对象的相关操作，都可以通过代理对象来完成。代理对象可以监听我们想要对原对象进行的一些操作(13种)

Proxy的使用：

```
const obj = {
  name: "why",
  age: 18
}

const objProxy = new Proxy(obj, {})


objProxy.name = "kobe"
objProxy.age = 30

console.log(obj.name)
console.log(obj.age)
```

上面new一个Proxy对象时我们不对相关属性进行见监听的话，我们去更改代理对象时也会更改原对象的值。


<p align=center><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2a2272bb1d6e4c68a47c9a1885779291~tplv-k3u1fbpfcp-watermark.image?" alt="7ee0c8e372b8ab0a41cbf1f3e038fb3d.png"  /></p>

设置捕获器的放式其实跟第一种方式的写法一样，在创建时对代理对象的捕获方法进行重写：

```
const obj = {
  name: "why",
  age: 18
}

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get: function(target, key) {
    console.log(`监听到对象的${key}属性被访问了`, target)
    return target[key]
  },

  // 设置值时的捕获器
  set: function(target, key, newValue) {
    console.log(`监听到对象的${key}属性被设置值`, target)
    target[key] = newValue
  }
})

console.log(objProxy.name)
console.log(objProxy.age)

objProxy.name = "kobe"
objProxy.age = 30

console.log(obj.name)
console.log(obj.age)
```

在`get`捕获器中的两个参数`target`与`key`分别是被代理的对象与当前获取属性的key值。

而`set`捕获器中的前两个参数与get一直，`newValue`显而易见就是我们要去把对象属性的原值修改成的新值。新增属性时也会被set进行捕获。

其实他们还有最后一个参数`receiver`这里先不展开。

##### Proxy中的其他捕获器

`has`: 监听in操作符的捕获器

```
const objProxy = new Proxy(obj, {
  // 监听in的捕获器
  has: function(target, key) {
    console.log(`监听到对象的${key}属性in操作`, target)
    return key in target
  }
})

console.log("name" in objProxy)
```

`deleteProperty`：监听delete的捕获器

```
const objProxy = new Proxy(obj, {
  // 监听delete的捕获器
  deleteProperty: function(target, key) {
    console.log(`监听到对象的${key}属性in操作`, target)
    delete target[key]
  }
})

delete objProxy.name
```

**Proxy的所有的捕获器**


![beee7ae9ff075097667028b9c9750f62.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/283ea0f9cbea4ba3aad0f98915ca1046~tplv-k3u1fbpfcp-watermark.image?)

最后的两个捕获器`apply`与`construct`比较特殊，他们是用来监听函数对象的捕获器。

```
function foo() {

}

const fooProxy = new Proxy(foo, {
  apply: function(target, thisArg, argArray) {
    console.log("对foo函数进行了apply调用")
    return target.apply(thisArg, argArray)
  },
  construct: function(target, argArray, newTarget) {
    console.log("对foo函数进行了new调用")
    return new target(...argArray)
  }
})

fooProxy.apply({}, ["abc", "cba"])
new fooProxy("abc", "cba")
```

`apply`是对函数进行apply调用时进行捕获，其参数除了第一个是目标对象，其他的参数跟调用apply传的参数一样。

`construct`是对函数进行new操作时进行捕获，它的第一个参数与第三个参数其实都是目标对象，`argArray`是new调用时传递的参数，它是个数组。

#### 3. Reflect的作用

Reflect又称反射，是ES6新增的一个API，它是一个对象。它提供了很多操作对象的方法，有点类似于Object中操作对象的方法。那就有个疑问了，既然我们已经有Object了，为什么还要加一个Reflect呢。

这是因为在Js早期设计时，没有考虑到要对对象进行操作，而后面不知道要将这些操作的api放在哪里，于是一口气将这些api全部方法了Object上面。而Object作为一个构造函数，包含这些api显然不合适，而且还有类似in、delete这些操作，就让js看起来变的很奇怪。于是在ES6中，将这些操作就都放到了Reflect中。

MDN上对二者区别的描述：[比较Reflect和Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods)


![beee7ae9ff075097667028b9c9750f62.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f5dff586a0384d3b83fbda114ac89785~tplv-k3u1fbpfcp-watermark.image?)

##### Reflect和Proxy一起使用

我们在使用Proxy进行捕获操作时：

```
const obj = {
  name: "why",
  age: 18
}

const objProxy = new Proxy(obj, {
  get: function(target, key) {
    return target[key]
  },
  
  set: function(target, key, newValue) {
    target[key] = newValue
  }
})

objProxy.name = "kobe"

console.log(obj.name)
```

我们在`set`与`get`中都是使用`target[key]`的方式进行操作，其实这种操作还是对原对象进行的操作，这与我们使用Porxy对对象进行代理操作的方式背道而驰了。

于是我们可以使用Reflect来进行操作

```
const obj = {
  name: "why",
  age: 18
}

const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    console.log("get---------")
    return Reflect.get(target, key)
  },
  
  set: function(target, key, newValue, receiver) {
    console.log("set---------")
    Reflect.set(target, key, newValue)
})

objProxy.name = "kobe"
console.log(objProxy.name)
```

这样的写法还有一个好处，当我们进行`Reflect.set`操作时，它会返回一个Boole类型的值来判断是否设置成功

```
const obj = {
  name: "why",
  age: 18
}

const objProxy = new Proxy(obj, {
  set: function(target, key, newValue, receiver) {
    console.log("set---------")
    target[key] = newValue

    const result = Reflect.set(target, key, newValue)
    if (result) {
    } else {
    }
  }
})

objProxy.name = "kobe"
console.log(objProxy.name)
```

#### 4. Receiver参数的作用

现在我们有这样一串代码：

```
const obj = {
  _name: "why",
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  }
}

const objProxy = new Proxy(obj, {
  get: function(target, key) {
    console.log("get方法被访问--------", key)
    return Reflect.get(target, key)
  },
  set: function(target, key, newValue) {
    Reflect.set(target, key, newValue)
  }
})

console.log(objProxy.name)
```

我们来分析一下它的运行流程，我们通过代理对象`objProxy.name`去问`obj对象`的`_name`时，它会先去调用代理对象的get方法，通过代理方法的`Reflect.get`去访问到`obj`对象中`name`的get方法，而其中的`this`指向的是`obj`对象。于是`this._name`就等于直接是对原对象`obj._name`进行访问，那么在`obj中的get方法`会绕过代理对象的拦截，直接访问原对象的内容。我们想要对原对象的所有访问都受到拦截就是失去了意义。


![3fb5c3efe1508512cd6546181a6707e4.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21f34b24c6014a5bbca8fe22478b4a2e~tplv-k3u1fbpfcp-watermark.image?)

所以这里只会拦截到 name的访问，而我们其实想要对`_name`的访问也进行拦截。

所以我们需要去想办法让`obj对象`中get方法的`this`指向我们的代理对象。这个时候我们就需要用到`Receiver`参数了。

```
const obj = {
  _name: "why",
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  }
}

const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    // receiver是创建出来的代理对象
    console.log("get方法被访问--------", key, receiver)
    console.log(receiver === objProxy)
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    console.log("set方法被访问--------", key)
    Reflect.set(target, key, newValue, receiver)
  }
})

console.log(objProxy.name)
objProxy.name = "kobe"
```

在代理对象中的`get`、`set`方法中传入的`receiver`会改变原对象中`get`、`set`方法中的

`this`变成`receiver`，而这里的`receiver`在`get`、`set`方法传入时又指向了我们的代理对象，于是就可以将this变成我们的代理对象。


![8780cceb77136ee8b2c474ea91ece21c.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3293fad4c0db48279dc2abffbdc7e1b0~tplv-k3u1fbpfcp-watermark.image?)

这里我们就能对`_name`的访问进行拦截了。

#### 5. Reflect中construct的作用

现在我们有两个构造函数：

```
function Student(name, age) {
  this.name = name
  this.age = age
}

function Teacher() {

}

const stu = new Student("why", 18)
console.log(stu)
console.log(stu.__proto__ === Student.prototype)
```


![10c1f8a036ed407379a671e98329115a.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d16d0c47e6c42bdbbeafeda96abca1a~tplv-k3u1fbpfcp-watermark.image?)

如果我们想要使用`Student`中的构造函数但是创建出来的类型是`Teacher`要怎么做呢？

这里就要使用到`Reflect中construct`了。

```
function Student(name, age) {
  this.name = name
  this.age = age
}

function Teacher() {

}

// 执行Student函数中的内容, 但是创建出来对象是Teacher对象
const teacher = Reflect.construct(Student, ["why", 18], Teacher)
console.log(teacher)
console.log(teacher.__proto__ === Teacher.prototype)
```


![ea1bfa4737e556ceeabf8728ee3a908e.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60b5cc4f546244d89bf5192ce67b4be6~tplv-k3u1fbpfcp-watermark.image?)

#### 6.vue2 实现响应式


![image-20230105114348603.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7c5b63319a6438e99b5352c1c62a4bb~tplv-k3u1fbpfcp-watermark.image?)

现在有张这种图片意思就是当`info.counter`值改变了，`doubleCounter`函数能够自己调用，那么我们可以在他后面继续调用，那么问题来了，如果有很多地方都用到了，那我们应该怎么去实现呢？

这里我们使用一个类去基本是实现响应式的

```
class Dep {
  constructor() {
    this.subscriber = new Set();
  }
  addEffect(effect) {
    this.subscriber.add(effect);
  }
  notify() {
    this.subscriber.forEach((effect) => effect());
  }
}

const dep = new Dep();

const info = { counter: 100 };
function doubleCounter() {
  console.log("doubleCounter", info.counter * 2);
}
function powerCounter() {
  console.log("powerCounter", info.counter * info.counter);
}
dep.addEffect(doubleCounter);
dep.addEffect(powerCounter);
info.counter++;
dep.notify();
```

我们通过这个类去收集了依赖，并且在`info.counter++;`的时候去调用`dep.notify();`便可打印收集的依赖了，但是这样不方便。

接下来我将使用`vue2`的`Object.defineProperty`来写响应式

```
class Dep {
  constructor() {
    this.subscriber = new Set();
  }

  depend() {
    if (activeEffect) {
      this.subscriber.add(activeEffect);
    }
  }
  notify() {
    this.subscriber.forEach((effect) => effect());
  }
}
let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}

// Map({key,value})  key是一个字符串
// WeakMap({key(对象)：value}) key是一个对象，弱引用
const targetMap = new WeakMap();
function getDep(target, key) {
  // 1、根据对象target 取出对应的Map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  // 2、取出具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

// vue2 对row对数据进行劫持
function reactive(raw) {
  Object.keys(raw).forEach((key) => {
    const dep = getDep(raw, key);
    let value = raw[key];
    console.log("dep==>", dep);
    Object.defineProperty(raw, key, {
      get() {
        dep.depend();
        return value;
      },
      set(newValue) {
        if (value !== newValue) {
          value = newValue;
          dep.notify();
        }
      },
    });
  });
  return raw;
}

// 测试代码
const info = reactive({ counter: 100, name: "why" });
const foo = reactive({ height: 1.88 });
// watchEffect1
watchEffect(function () {
  console.log("watchEffect1", info.counter * 2, info.name);
});
// watchEffect2
watchEffect(function () {
  console.log("watchEffect2", info.counter * info.counter);
});
// watchEffect3
watchEffect(function () {
  console.log("watchEffect3", info.counter * info.counter, info.name);
});
// watchEffect4
watchEffect(function () {
  console.log("watchEffect4", foo.height);
});
info.counter++;
info.name = "kobe";
foo.height = 1;
```

这段代码可能回避实现渲染系统的代码更加的绕，

```
// vue2 对row对数据进行劫持
function reactive(raw) {
  Object.keys(raw).forEach((key) => {
    const dep = getDep(raw, key);
    let value = raw[key];
    console.log("dep==>", dep);
    Object.defineProperty(raw, key, {
      get() {
        dep.depend();
        return value;
      },
      set(newValue) {
        if (value !== newValue) {
          value = newValue;
          dep.notify();
        }
      },
    });
  });
  return raw;
}
const info = reactive({ counter: 100, name: "why" });
```

先看这段代码吧，这段代码主要是将变量进行收集，当然熟悉的同学应该知道`reactive`，`vue3`就是使用`reactive`创建一个响应式对象

通过`Object.keys(raw)`去遍历`raw`里的`key`主要是去收集依赖

```
// Map({key,value})  key是一个字符串
// WeakMap({key(对象)：value}) key是一个对象，弱引用
const targetMap = new WeakMap();
function getDep(target, key) {
  // 1、根据对象target 取出对应的Map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  // 2、取出具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}
```

```
let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}
```

```
// watchEffect1
watchEffect(function () {
  console.log("watchEffect1", info.counter * 2, info.name);
});
```

我们先看`watchEffect`这个函数他会打印`info.counter`的值，这个时候就会调用`Object.defineProperty`定义的`get方法`，`get`方法里面有`dep.depend();`就会调用这个方法，此时`activeEffect`已经将这个函数复制给了它，就会`counter`这个key收集了这个函数，当我们去`info.counter++;`就会通知这个函数的调用

但是`vue3`采用的是`proxy`

#### **7. 为什么Vue3选择Proxy呢？**

-   Object.definedProperty 是劫持对象的属性时，如果新增元素

    -   那么Vue2需要再次 调用definedProperty，而 Proxy 劫持的是整个对象，不需要做特殊处理；、
    -  `this.$set(object, key, value) `,vue2如果想在初始化后添加一个属性并进行监听操作，可以使用$set：

-   修改对象的不同：

    -   使用 defineProperty 时，我们修改原来的 obj 对象就可以触发拦截；
    -   而使用 proxy，就必须修改代理对象，即 Proxy 的实例才可以触发拦截；

-   Proxy 能观察的类型比 defineProperty 更丰富

    -   has：in操作符的捕获器；
    -   deleteProperty：delete 操作符的捕捉器；

-   Proxy 作为新标准将受到浏览器厂商重点持续的性能优化；

-   缺点：Proxy 不兼容IE，也没有 polyfill, defineProperty 能支持到IE9

#### 8.vue3实现响应式

由`vue2`的响应式的实现我们只需要对`reactive`这个函数进行改变就行了

```

// vue3 对 row进行数据劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key);
      dep.depend();
      return target[key];
    },
    set(target, key, newValue) {
      const dep = getDep(target, key);
      target[key] = newValue;
      dep.notify();
    },
  });
}

```

### mini-vue成型

此时我们已经将**渲染系统模块**和**可响应式系统模块**实现好了，就剩下了入口的问题。我们知道`vue3`的入口是`createApp`和挂载`mount`

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="../02_渲染器实现/render.js"></script>
    <script src="../03_响应式系统/reactive.js"></script>
    <script src="./index.js"></script>
    <script>
      // 根组件
      const App = {
        data: reactive({
          counter: 0,
        }),
        render() {
          return h("div", null, [
            h("h2", null, `当前计数：${this.data.counter}`),
            h(
              "button",
              {
                onClick: () => {
                  console.log("this", this.data);
                  this.data.counter++;
                },
              },
              `+1`
            ),
          ]);
        },
      };
      // 2、挂载根组件
      createApp(App).mount("#app");
    </script>
  </body>
</html>

```

我们先将`App`先实现一下在`data`里面继续定义响应式数据`counter`,`render`函数返回了`vdom`,导入`./index.js`也就是入口文件

```
function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector);
      let isMounted = false;
      let oldVNode = null;
      watchEffect(function () {
        if (!isMounted) {
          oldVNode = rootComponent.render();
          mount(oldVNode, container);
          isMounted = true;
        } else {
          const newVNode = rootComponent.render();
          patch(oldVNode, newVNode);
          oldVNode = newVNode;
        }
      });
    },
  };
}
```

可能有人会问了为什么`createApp`会导出一个对象

```
const app = createApp(App)
app.mount("#app")；
app.directive()
app.use()
```

其实`vue3`就是可以导出一个对象然后这个对象里面有很多属性比如`directive`等等，所以我们这边也导出一个对象`app.mount("#app")；`,`mount`函数会传入`根元素`也就是要挂载的标签

```
    let isMounted = false;
    let oldVNode = null;
      watchEffect(function () {
        if (!isMounted) {
          oldVNode = rootComponent.render();
          mount(oldVNode, container);
          isMounted = true;
        } else {
          const newVNode = rootComponent.render();
          patch(oldVNode, newVNode);
          oldVNode = newVNode;
        }
      });
```

如果挂载了，我们就去比较新旧节点的这段代码还是比较好理解的，没有挂载我们就去挂载，这边为什么用`watchEffect`，因为`render`函数里面有对`data`依赖，data里面的数据变化了，`watchEffect`也就会重新执行

#### 1.完整代码如下
`render.js`

```
// 实现h函数
const h = (tag, props, children) => {
  // 其实vnode就是一个js对象 =>   {}
  return {
    tag,
    props,
    children,
  };
};

// 实现挂载
const mount = (vnode, container) => {
  // vnode -> element
  // 1、创建出真实元素，并在vnode上保留el
  const el = (vnode.el = document.createElement(vnode.tag));

  // 2、处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];
      if (key.startsWith("on")) {
        // 对事件的监听
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  // 3、处理children
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else {
      vnode.children.forEach((item) => {
        mount(item, el);
      });
    }
  }
  // 4、 将el挂载到container上
  container.appendChild(el);
};

// 实现diff
const patch = (n1, n2) => {
  if (n1.tag !== n2.tag) {
    const n1ElParent = n1.el.parentElement;
    n1ElParent.removeChild(n1.el);
    mount(n2, n1ElParent);
  } else {
    // 1、去除element对象，并且n2中进行保存
    const el = (n2.el = n1.el);
    // 2、处理props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};
    // 2.1 获取所有的newProps添加到el
    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];
      if (newValue !== oldValue) {
        if (key.startsWith("on")) {
          // 对事件的监听
          el.addEventListener(key.slice(2).toLowerCase(), newValue);
        } else {
          el.setAttribute(key, newValue);
        }
      }
    }
    // 2.2 删除旧的props
    for (const key in oldProps) {
      if (key.startsWith("on")) {
        // 对事件的监听
        const value = oldProps[key];
        el.removeEventListener(key.slice(2).toLowerCase(), value);
      }
      if (!(key in newProps)) {
        // if (key.startsWith("on")) {
        //   // 对事件的监听
        //   const value = oldProps[key];
        //   el.removeEventListener(key.slice(2).toLowerCase, value);
        // } else {
        el.removeAttribute(key);
        // }
      }
    }
    // 3、处理children
    const oldChildren = n1.children || [];
    const newChildren = n2.children || [];
    if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else {
        el.innerHTML = newChildren;
      }
    } else {
      // 情况二：newChildren 本身是一个数组
      if (typeof oldChildren === "string") {
        el.innerHTML = "";
        newChildren.forEach((itme) => {
          mount(item, el);
        });
      } else {
        // oldChildren:[v1,v2,v3]
        // newChildren:[v1,v5,v6,v7,v8]
        // 1、前面有相同节点的原生进行patch操作
        const oldLength = oldChildren.length;
        const newLength = newChildren.length;
        const commonLength = Math.min(oldLength, newLength);
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }
        // 2、oldLength < newLength
        if (oldLength < newLength) {
          // mount new
          newChildren.slice(oldLength).forEach((item) => {
            mount(item, el);
          });
        }
        // 3、oldLength > newLength
        if (oldLength > newLength) {
          // remove old
          oldChildren.slice(newLength).forEach((item) => {
            el.removeChild(item.el);
          });
        }
      }
    }
  }
};

export { h, mount, patch };

```

`reactive.js`

```
class Dep {
  constructor() {
    this.subscriber = new Set();
  }

  depend() {
    if (activeEffect) {
      this.subscriber.add(activeEffect);
    }
  }
  notify() {
    this.subscriber.forEach((effect) => effect());
  }
}
let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}

// Map({key,value})  key是一个字符串
// WeakMap({key(对象)：value}) key是一个对象，弱引用
const targetMap = new WeakMap();
function getDep(target, key) {
  // 1、根据对象target 取出对应的Map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }
  // 2、取出具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

// vue3 对 row进行数据劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key);
      dep.depend();
      return target[key];
    },
    set(target, key, newValue) {
      const dep = getDep(target, key);
      target[key] = newValue;
      dep.notify();
      return true;
    },
  });
}

export { watchEffect, reactive };

```

`index.js`

```
import { watchEffect, reactive } from "./reactive.js";
import { h, mount as mounts, patch } from "./render.js";
function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector);
      let isMounted = false;
      let oldVNode = null;
      watchEffect(function () {
        if (!isMounted) {
          oldVNode = rootComponent.render();
          mounts(oldVNode, container);
          isMounted = true;
        } else {
          const newVNode = rootComponent.render();
          patch(oldVNode, newVNode);
          oldVNode = newVNode;
        }
      });
    },
  };
}
export { watchEffect, reactive, h, mounts, patch, createApp };

```

`html`

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module">
      import {
        watchEffect,
        reactive,
        h,
        mounts,
        patch,
        createApp,
      } from "./index.js";
      // 根组件
      const App = {
        data: reactive({
          counter: 0,
        }),
        render() {
          return h("div", null, [
            h("h2", null, `当前计数：${this.data.counter}`),
            h(
              "button",
              {
                onClick: () => {
                  console.log("this", this.data.counter);
                  this.data.counter++;
                },
              },
              `+1`
            ),
          ]);
        },
      };
      // 2、挂载根组件
      createApp(App).mount("#app");
    </script>
  </body>
</html>

```

代码提交到[github](https://github.com/deedhei/mini-vue3.git)



## 渲染函数

![image-20230108094520140](C:\Users\赤子\AppData\Roaming\Typora\typora-user-images\image-20230108094520140.png)

因为`_hoisted1`和`_hoisted2`是静态节点也就是说肯定是不会变的，不会涉及到页面更新也就是不需要去创建新的VNode

## 路由

### 认识路由

+ 路由的概念在软件工程中出现，最早是在后端路由中实现的，原因是web的发展主要经历了这样一些阶段：
  + 后端路由阶段；
  + 前后端分离阶段；
  + 单页面富应用（SPA）；

**后端路由阶段**

+ 早期的网站开发整个HTML页面是由**服务器来渲染**的.
  + 服务器直接生产渲染好对应的HTML页面, 返回给客户端进行展示
+ 但是, 一个网站, **这么多页面服务器如何处理呢?**
  + 一个页面有自己对应的网址, 也就是URL；
  + URL会发送到服务器, 服务器会通过正则对该URL进行匹配, 并且最后交给一个Controller进行
  + Controller进行各种处理, 最终生成HTML或者数据, 返回给前端
+ 上面的这种操作, 就是**后端路由**：
  + 当我们页面中需要请求不同的**路径**内容时, 交给服务器来进行处理, 服务器渲染好整个页面, 并且将页面返回给客户端.
  + 这种情况下渲染好的页面, 不需要单独加载任何的js和css, 可以直接交给浏览器展示, 这样也有利于SEO的优化
+ 后端路由的缺点:
  + 一种情况是整个页面的模块由后端人员来编写和维护的；
  + 另一种情况是前端开发人员如果要开发页面, 需要通过PHP和Java等语言来编写页面代码；
  +  而且通常情况下HTML代码和数据以及对应的逻辑会混在一起, 编写和维护都是非常糟糕的事情；

### URL的hash

+ 前端路由是如何做到URL和内容进行映射呢？监听URL的改变。
+ **URL的hash**
  + URL的hash也就是锚点(#), 本质上是改变window.location的href属性；
  + 我们可以通过直接赋值location.hash来改变href, 但是页面不发生刷新；
+ hash的优势就是兼容性更好，在老版IE中都可以运行，但是缺陷是有一个#，显得不像一个真实的路径。



### HTML5的History

+ history接口是HTML5新增的, 它有l六种模式改变URL而不刷新页面：
  + replaceState：替换原来的路径；
  + pushState：使用新的路径；
  + ppopState：路径的回退；
  + go：向前或向后改变路径；
  + forward：向前改变路径；
  + back：向后改变路径；

### 路由懒加载

+ 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载：

  + 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会

    更加高效；

  + 也可以提高首屏的渲染效率；

+ 其实这里还是我们前面讲到过的webpack的分包知识，而Vue Router默认就支持动态来导入组件：

  + 这是因为component可以传入一个组件，也可以接收一个函数，该函数 需要放回一个Promise；
  + 而import函数就是返回一个Promise；

```
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
```

`/* webpackChunkName: "about" */`是`webback`的魔法注释，也就是`webpack`的特殊语法，如果不加这个就会打包成`chunk-[hash].js`

![image-20230110102546188](C:\Users\赤子\AppData\Roaming\Typora\typora-user-images\image-20230110102546188.png)

如果加入了`/* webpackChunkName: "about" */`

![image-20230110102611817](C:\Users\赤子\AppData\Roaming\Typora\typora-user-images\image-20230110102611817.png)

这样就清楚的区分哪个文件对应的文件了