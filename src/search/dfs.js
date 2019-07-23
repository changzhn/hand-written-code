// 深度优先遍历

const o = require('./o');

function dfs(o) {
  let rlt = [];

  function deep(o) {
    for(let key of Object.keys(o)) {
      rlt.push(key);
      if (typeof o[key] === 'object') {
        deep(o[key])
      }
    }
  }
  deep(o);
  return rlt;
}

let res = dfs(o);
console.log(res)
