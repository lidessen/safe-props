// rollup.config.js (building more than one bundle)
export default [{
    input: 'index.js',
    output: {
      file: 'dist/PropsCheck.js',
      format: 'es',
      name: "PropsCheck"
    }
  }];