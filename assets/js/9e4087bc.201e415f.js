"use strict";(self.webpackChunkluft_website=self.webpackChunkluft_website||[]).push([[608],{8417:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});s(959);var r=s(1356),a=s(2028),i=s(2106),l=s(2827),n=s(8050),c=s(1527);function h(e){let{year:t,posts:s}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Z,{as:"h3",id:t,children:t}),(0,c.jsx)("ul",{children:s.map((e=>(0,c.jsx)("li",{children:(0,c.jsxs)(r.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:t}=e;return(0,c.jsx)("section",{className:"margin-vert--lg",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,c.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,c.jsx)(h,{...e})},t)))})})})}function o(e){let{archive:t}=e;const s=(0,a.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,a.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const t=e.reduce(((e,t)=>{const s=t.metadata.date.split("-")[0],r=e.get(s)??[];return e.set(s,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,s]=e;return{year:t,posts:s}}))}(t.blogPosts);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.d,{title:s,description:r}),(0,c.jsxs)(l.Z,{children:[(0,c.jsx)("header",{className:"hero hero--primary",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(n.Z,{as:"h1",className:"hero__title",children:s}),(0,c.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,c.jsx)("main",{children:h.length>0&&(0,c.jsx)(d,{years:h})})]})]})}}}]);