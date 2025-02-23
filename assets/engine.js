const markdownItMark = require('markdown-it-mark')
const markdownItContainer = require('markdown-it-container')
const markdownItAdmon = require('markdown-it-admon')
const markdownItInclude = require('markdown-it-include')
const markdownItVariable = require('markdown-it-variable')

module.exports = ({ marp}) => marp
  .use(markdownItMark)
  .use(markdownItAdmon)
  .use(markdownItInclude, '/home/marp/app')
  .use(markdownItVariable)
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
