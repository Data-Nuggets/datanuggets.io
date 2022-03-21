import { html } from 'lit';
import { baseHead } from '../parts/baseHead.js';
import '../components/blog-post.js';
import '../components/nav-bar.js';

export class LayoutBlogPost {
    render(data) {
        const {
            title,
            publishDate,
            author,
            authorHref,
            heroImage,
            alt,
            lang,
        } = data;
        return html`
      <html-server-only lang=${lang || 'en'}>
        <head>
          ${baseHead({ title })}
        </head>

        <body>
          <nav-bar></nav-bar>
          <div class="blog-post-wrapper">
            <blog-post
              title=${title}
              author=${author}
              .authorHref=${authorHref}
              hero-image=${heroImage}
              publish-date=${publishDate}
              alt=${alt}
            >
              ${data.content()}
            </blog-post>
          </div>
        </body>
      </html-server-only>
    `;
    }
}
