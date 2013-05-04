module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    watch:
      coffee:
        files: '**/*.coffee'
        tasks: 'coffee'
    copy:
      files:
        expand: yes
        cwd: 'vendor/'
        src: ['**/*.js']
        dest: ''
    coffee:
      compile:
        options:
          bare: yes
          sourceMap: yes
        files: [
          expand: yes
          cwd: 'src/'
          src: ['**/*.coffee']
          dest: 'js/'
          ext: '.js'
        ]


  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  grunt.registerTask 'default', [
    'coffee', 'copy', 'watch'
  ]
