import{createResizing2dCanvas as e,createFullscreen2dCanvas as n}from"../modules/canvastools.mjs";let t=.01,o=[];function a(e,n){let a=Math.sin(71e-5*e);a*=a;let c=Math.cos(.00121*e);c*=c;for(let e=0,l=0;l<1;e+=4,l+=t)o[e]=a*n.screenWidth(),o[e+1]=a*l*n.screenHeight(),o[e+2]=c*(1-l)*n.screenWidth(),o[e+3]=c*n.screenHeight();n.clear(),n.setPen("lime",1),n.drawLines(o)}export function preview(n){t=.1;const o=document.createElement("canvas");n.appendChild(o),e(o,n,a,!0)}export function activate(){document.open(),document.write("\n    <!DOCTYPE html>\n    <html>\n    <body>\n    <canvas id='mainCanvas' style = 'position: absolute; left: 0px; top: 0px; background-color: black;'></canvas>\n    </body>\n    </html>"),document.close(),t=.01,n(document.getElementById("mainCanvas"),a,!0)}console.log("loaded ");