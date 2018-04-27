
'use strict';
module.exports = function (grunt) {
    // Build customizations would be left up to developer to implement.
    // grunt.loadNpmTasks('grunt-dojo');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-karma');
    
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            options: {
              // Task-specific options go here.
            },
            your_target: {
              cmd: 'node',
              args: [
                'app.js'
              ]
            },
            build: {
                // test in real browsers once beofre build
                browsers: ['Chrome', 'Firefox'],
                singleRun: true
              }
          },

          karma: {
            // common options for all targets
            options: {
              // use Karma's defaults
              config: 'karma.conf.js'
            }
        },
        jshint:{
            files:['*.js','!GruntFile.js'],
            options: {
               "curly":true,
               "eqnull":true,
               "eqeqeq":true,
               "undef":false,
               "globals":{
                   "jQuery":true
               }
              }
        },

        uglify: {
            my_target: {
              files: {
                'dest/output.min.js': ['app.js']
              }
            }
          },

          htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'dest/index.html': 'index.html',     // 'destination': 'source'
                
              }
            },
            dev: {                                       // Another target
              files: {
                'dest/index.html': 'index.html',
                
              }
            }
            },

            clean: {
                build: {
                  src: ['dest/']
                }
          }
        
        
    });
  
      grunt.registerTask('default', ['run','karma','jshint','clean','uglify','htmlmin',]);
      
     }; 
  