
const { html } = require('./misc/utils')
const { boilerplate } = require('./fragments/boilerplate')

const blog = (post) =>
    boilerplate(html`
        <article class="blog singleton">
            <h2 class="blog-title">
                <a href="/blog/${post.slug}">
                    ${post.meta.title}
                </a>
            </h2>
            ${post.html}
        </article>
    `)

module.exports = { blog }