const h = (tag, props, childrens) => {
  return {
    tag,
    props,
    childrens,
  };
};

const mount = (vnode, container) => {
  console.log("vnode", vnode);
  const el = (vnode.el = document.createElement(vnode.tag));
  // 处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  // 处理childrens
  if (vnode.childrens) {
    if (typeof vnode.childrens === "string") {
      el.textContent = vnode.childrens;
    } else {
      vnode.childrens.forEach((item) => {
        mount(item, el);
      });
    }
  }
  // 挂载
  console.log("container==>", container);
  container.appendChild(el);
};

const patch = (n1, n2) => {
  if (n1.tag !== n2.tag) {
    const n1ElParent = n1.el.parentElement;
    n1ElParent.removeChild(n1.el);
    mount(n2, n1ElParent);
  } else {
    const el = (n2.el = n1.el);
    // 处理props
    let oldProps = n1.props || {};
    let newProps = n2.props || {};
    for (const key in newProps) {
      const newValue = newProps[key];
      const oldValue = oldProps[key];
      if (oldValue !== newValue) {
        if (key.startsWith("on")) {
          el.addEventListener(key.slice(2).toLowerCase(), newValue);
        } else {
          el.setAttribute(key, newValue);
        }
      }
    }
    for (const key in oldProps) {
      if (key.startsWith("on")) {
        const value = newProps[key];
        el.removeEventListener(key.slice(2).toLowerCase(), value);
      }
      if (!(key in newProps)) {
        el.removeAttribute(key);
      }
    }

    // 处理children
    let oldChildrens = n1.childrens || [];
    let newChildrens = n2.childrens || [];
    let commonLength = Math.min(oldChildrens.length, newChildrens.length);
    for (let i = 0; i < commonLength; i++) {
      patch(oldChildrens[i], newChildrens[i]);
    }
    if (newChildrens > oldChildrens) {
      newChildrens.slice(commonLength).forEach((item) => {
        mount(item, el);
      });
    }
    if (newChildrens < oldChildrens) {
      oldChildrens.slice(commonLength).forEach((item) => {
        el.removeChild(item.el);
      });
    }
  }
};
