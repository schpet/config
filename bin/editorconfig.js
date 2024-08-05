#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const editorConfigContent = `root = true

[*]
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
charset = utf-8
indent_style = tab
indent_size = 2

[{**.yaml,**.md,justfile,**.json}]
indent_style = space
`;

const outputPath = path.join(process.cwd(), '.editorconfig');

fs.writeFile(outputPath, editorConfigContent, (err) => {
  if (err) {
    console.error('Error writing .editorconfig file:', err);
    process.exit(1);
  }
  console.log('.editorconfig file has been created in the current directory.');
});
