import { html } from "lit";
import { baseHead } from "../parts/baseHead.js";
import "../components/nav-bar.js";

export class LayoutMain {
    render(data) {
        const { title } = data;
        return html`
      <html-server-only lang=${"en"}>
        <head>
          ${baseHead({ title })}
        </head>

        <body>
            <nav-bar></nav-bar>
            ${data.content()}
        </body>
      </html-server-only>
    `;
    }
}
