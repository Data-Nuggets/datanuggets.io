/* START - Rocket auto generated - do not touch */
export const sourceRelativeFilePath = 'blog.rocket.js';
import { html } from './recursive.data.js';
import { layout } from './local.data.js';
export { html, layout };
/* END - Rocket auto generated - do not touch */

import { PageTree } from "@rocket/engine";
import { nothing } from "lit";
import "../src/components/blog-post-preview.js";
import "../src/components/blog-header.js";

// CONFIGURATION PARTS
//
export const title = "Blog";
export const description = "This is where the good stuff's at";

// CONFIGURATION PARTS END

export const pageTree = new PageTree();
await pageTree.restore(
    new URL("./pageTreeData.rocketGenerated.json", import.meta.url)
);

class BlogMenu {
    /**
     * @returns {import('lit').TemplateResult | nothing}
     */
    render() {
        if (!this.currentNode || !this.currentNode.children) {
            return nothing;
        }
        return html`
      <div>
        ${this.currentNode.children.map(
          /** @param {NodeOfPage} child */(child) => html`
            <blog-post-preview .post=${child.model}></blog-post-preview>
          `
        )}
      </div>
    `;
    }
}

export default () => html`
  <main class="blog-main">
    <h1>${title}</h1>
    <p>${description}</p>
  </main>
  <section aria-label="Blog post list">
    ${pageTree.renderMenu(new BlogMenu(), "blog/index.rocket.js")}
  </section>
`;
