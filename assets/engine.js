const markdownItMark = require('markdown-it-mark')
const markdownItContainer = require('markdown-it-container')

module.exports = ({ marp}) => marp
  .use(markdownItMark)
  .use(markdownItContainer, "tip")
  .use(markdownItContainer, "warning")
  .use(markdownItContainer, "danger")
  .use(markdownItContainer, "sources")
  .use(markdownItContainer, "columns", {
    render: function (tokens, idx) {
      let className = tokens[idx].info.trim().match(/^\s?columns(\s+(.*))?$/)
      if (tokens[idx].nesting === 1)
        return `<div class="columns ${className[1]}"><div>\n`
      return "</div></div>\n"
    }
  })
  .use(markdownItContainer, "split", {
    render: function (tokens, idx) {
      let className = tokens[idx].info.trim().match(/^\s?split(\s+(.*))?$/)
      if (tokens[idx].nesting === 1)
        return `</div><div class="${className[1]}">\n`
      return "</div></div>\n"
    }
  })