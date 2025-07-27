module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 类型枚举
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新功能
        'fix',      // Bug修复
        'docs',     // 文档更新
        'style',    // 代码格式调整（不影响功能）
        'refactor', // 代码重构
        'test',     // 测试相关
        'chore',    // 构建、配置等杂项
        'perf',     // 性能优化
        'ci',       // CI/CD相关
        'build',    // 构建系统或外部依赖变更
        'revert',   // 回滚提交
      ],
    ],
    
    // 类型必须小写
    'type-case': [2, 'always', 'lower-case'],
    
    // 类型不能为空
    'type-empty': [2, 'never'],
    
    // 范围必须小写
    'scope-case': [2, 'always', 'lower-case'],
    
    // 主题不能为空
    'subject-empty': [2, 'never'],
    
    // 主题不能以句号结尾
    'subject-full-stop': [2, 'never', '.'],
    
    // 主题格式（首字母小写）
    'subject-case': [2, 'always', 'lower-case'],
    
    // 主题最大长度
    'subject-max-length': [2, 'always', 50],
    
    // 主题最小长度
    'subject-min-length': [2, 'always', 10],
    
    // 头部最大长度
    'header-max-length': [2, 'always', 72],
    
    // 正文每行最大长度
    'body-max-line-length': [2, 'always', 100],
    
    // 脚注每行最大长度
    'footer-max-line-length': [2, 'always', 100],
  },
  
  // 自定义解析器选项
  parserPreset: {
    parserOpts: {
      // 支持中文提交信息
      headerPattern: /^(\w*)(?:\(([^)]*)\))?: (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  
  // 忽略规则（用于特殊情况）
  ignores: [
    // 忽略合并提交
    (commit) => commit.includes('Merge'),
    // 忽略回滚提交
    (commit) => commit.includes('Revert'),
    // 忽略初始提交
    (commit) => commit.includes('Initial commit'),
  ],
  
  // 默认忽略
  defaultIgnores: true,
  
  // 帮助URL
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  
  // 自定义提示信息
  prompt: {
    messages: {
      type: '选择你要提交的类型:',
      scope: '选择一个scope (可选):',
      customScope: '请输入自定义的scope:',
      subject: '填写一个简短精炼的描述语句:',
      body: '添加一个更加详细的描述，可以附上新增功能的描述或 bug 链接、截图链接 (可选)。使用 "|" 换行:',
      breaking: '列举非兼容性重大的变更 (可选):',
      footer: '列举出所有变更的 ISSUES CLOSED  (可选)。 例如.: #31, #34:',
      confirmCommit: '确认提交?',
    },
    types: [
      { value: 'feat', name: 'feat:     新增功能' },
      { value: 'fix', name: 'fix:      修复缺陷' },
      { value: 'docs', name: 'docs:     文档变更' },
      { value: 'style', name: 'style:    代码格式（不影响功能，例如空格、分号等格式修正）' },
      { value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）' },
      { value: 'perf', name: 'perf:     性能优化' },
      { value: 'test', name: 'test:     添加疏漏测试或已有测试改动' },
      { value: 'build', name: 'build:    构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）' },
      { value: 'ci', name: 'ci:       修改 CI 配置、脚本' },
      { value: 'chore', name: 'chore:    对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
      { value: 'revert', name: 'revert:   回滚 commit' },
    ],
    useEmoji: false,
    emojiAlign: 'center',
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
  },
};
