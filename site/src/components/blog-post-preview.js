import { html, css, LitElement } from "lit";

export class BlogPostPreview extends LitElement {
    static get properties() {
        return {
            post: { type: Object },
        };
    }

    render() {
        return html`
      <article class="post-preview">
        <header>
          <p class="publish-date">${this.post.publishDate}</p>
          <a href="${this.post.url}"
            ><h1 class="title">${this.post.title}</h1></a
          >
        </header>
        <p class="description">${this.post.description}</p>
        <a href=${this.post.url} class="read-more-link">Read more</a>
      </article>
    `;
    }

    static get styles() {
        return css`
      .content :global(main > * + *) {
        margin-top: 1rem;
      }

      .post-preview {
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        border-bottom: 4px solid var(--theme-divider);
      }

      header {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
      }

      .title,
      .author,
      .publish-date {
        margin: 0;
      }

      .publish-date,
      .author {
        font-size: 1.25rem;
        color: var(--theme-text-lighter);
      }

      .description {
        color: var(--color-gray-500);
      }

      a {
        text-decoration: none;
      }

      .title {
        font-size: 2.25rem;
        font-weight: 700;
        color: var(--color-gray-300);
      }

      .read-more-link {
        color: var(--color-blue);
      }
    `;
    }
}

customElements.define("blog-post-preview", BlogPostPreview);
