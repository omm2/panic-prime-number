module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    watch:
      coffee:
        files: '**/*.coffee'
        tasks: 'coffee'
      less:
        files: '**/*.less'
        tasks: 'less'
    copy:
      files:
        expand: yes
        cwd: 'vendor/'
        src: ['**/*.js']
        dest: 'static'
    coffee:
      compile:
        options:
          bare: yes
          sourceMap: yes
        files: [
          expand: yes
          cwd: 'src/coffee/'
          src: ['**/*.coffee']
          dest: 'static/js/'
          ext: '.js'
        ]
    less:
      dist:
        files: [
          expand: yes
          cwd: 'src/less/'
          src: ['**/*.less']
          dest: 'static/css/'
          ext: '.css'
        ]

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-less'

  grunt.registerTask 'default', [
    'coffee', 'copy', 'watch', 'less'
  ]
