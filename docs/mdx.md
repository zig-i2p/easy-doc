---
id: mdx
title: Powered by MDX
---

Вы можете писать JSX и использовать компоненты React в своем Markdown благодаря [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<Highlight color="#25c2a0">Докзавр зеленый</Highlight> и <Highlight color="#1877F2">Facebook blue</Highlight> мои любимые цвета.

я могу написать **Markdown** рядом с моим _JSX_!
