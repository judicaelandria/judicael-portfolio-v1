---
title: Avoid async/await hell
date: 2022-02-22
lang: en
---

Escape from the async/await hell or avoid the chained async tasks

First of all let's talk about async/await hell , and then we'll see how to avoid it

**TL;DR**

This is the async/await hell we're talking about

```js
const user = await getUser(id);
const items = await getItems();

return {
  user,
  items,
};
```

Here we're fetching the specific user details and then fetching a list of items after. You may say, **what's wrong with that?**, the thing is that we're waiting to get the user details before getting the list of items, althought fetching the list of items doesn't depends on the user list. So why bother waiting if we could run them in parallel?. In addition that reduce the perfomance.

Now, consider this example:

```js
  (async () => {
    const user = await getUser(id);
    const items = await getItems();
    return {
      user
       items
    }
  })()
```

We wrapped it using [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), but still this code is executed one by one

So what can we do to avoid that.

We have solutions:

we could fix it using something like

In this case, the user and items returns a promise so could await for the promise to fulfil when returning the value

```js
const user = userPromise(id);
const items = itemsPromise();

return {
  user: await whenUser,
  items: await whenItems,
};
```

But I prefer using Promise.all it's a lot cleaner

```js
const [user, items] = await Promise.all([getUser(id), getItems()]);
return { user, items };
```

simple, elegant 😄 and up to twice as fast because we're running all the promises in parallel

You can learn more about [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) on MDN

> Note: Worth noting that Promise.all will return either when all promises succeed or the first one rejects, whereas Promise.allSettled will wait until every promise has either resolved or rejected
