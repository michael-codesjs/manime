import React from "react";



export const profilerCallBack: React.ProfilerOnRenderCallback = (...args) => {
  const [id,phase, duration] = args;
  console.log(id,":",phase, "duration:",duration);
  // console.log('interactions: ', args[args.length-1]);
}
