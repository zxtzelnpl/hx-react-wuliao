import React from 'react'


export default function({data}){
  let len = data.length;
  if(len===0){
    return (
      <div className="stock-pool-neck">
        <p className="text">暂无股票数据</p>
      </div>
    )
  }
  else{
    let tag = data[0].tag;
    let tagName = tag === '0'?'初选股票':'精选股票'
    return (
      <div className="stock-pool-neck">
        <p className="text">一共筛选出<span>{len}</span>个{tagName}</p>
        <p className="download">下载</p>
      </div>
    )
  }
}
