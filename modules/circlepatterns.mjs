import{createWebGlScreenRectCanvas as n}from"../modules/canvastools.mjs";const o="\n        #version 300 es\n        precision highp float;\n        uniform float iTime;\n        uniform vec4 iMouse;\n        uniform vec3 iResolution;\n\n        in vec3 vColor;\n        out vec4 fragColor;\n\n        #define sdCircle(p, r) length(p)-r\n        #define dAdd(d1, d2) min(d1,d2)\n        #define mov(xy, t) xy-t\n        #define asLine(d, thickness) smoothstep(thickness,0.,abs(d))\n\n        void mainImage( out vec4 fragColor, in vec2 fragCoord ) {\n            vec2 uv = (2.*fragCoord-iResolution.xy )/iResolution.y;\n            vec4 m = vec4(2.*iMouse - iResolution.xyxy) /iResolution.y;\n            \n            float objects = max(mod(m.x, 500.)+100., mod(m.y, 500.))+20.;\n            float d = 1000.;\n            float ds = d;\n            \n            for(float i=0.;i<objects;++i) {\n                float fi = float(i);\n                vec2 loc = mov(uv, vec2(sin(fi/mod(m.x,9.)+iTime)*1.9, sin(fi/mod(m.y,9.)+iTime*.5))*.8);\n                ds = dAdd(ds,sdCircle(loc,.2));\n            }\n            \n            d = asLine(ds,0.3);\n        \n            fragColor = vec4(vec3(sin(iTime)*0.5, 0.5*d, 0.7*ds), 1.);\n        }\n\n        void main() {\n            mainImage(fragColor, gl_FragCoord.xy);\n        }".trim();export function preview(e){const i=document.createElement("canvas");e.appendChild(i);n(i,o,e)}export function activate(e){console.log("activated"),document.open(),document.write("\n    <!DOCTYPE html>\n    <html>\n    <head>\n        <title>aShader</title>\n    </head>\n    <body>\n        <canvas id='mainCanvas' style = 'position: absolute; left: 0px; top: 0px; background-color: goldenrod;'></canvas>\n    </body>\n    </html>"),document.close();n(document.getElementById("mainCanvas"),o)}