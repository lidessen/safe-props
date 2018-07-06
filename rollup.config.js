// rollup.config.js (building more than one bundle)
export default [{
    input: 'index.js',
    output: {
      file: 'dist/safe-props.js',
      format: 'es'
    }
  }];