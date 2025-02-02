export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.scss': 'stylelint "**/*.scss" --fix',
  '*.md': 'remark --frail',
}
