window.Sounder =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}

  init: ->


    SC.initialize({
      client_id: 'abba00fc569ecc9bd64fd225f4e7d6bc',
      redirect_uri: 'http://mujobeatz.com'
    });

    # Initialize Routers
    @Routers.main = new Sounder.Routers.Main()
    Backbone.history.start()


$ ->
  Sounder.init()
