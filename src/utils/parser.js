import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';

const parser = unified()
.use(markdown)
.use(html)

export default parser;