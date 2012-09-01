worker_processes 4 # amount of unicorn workers to spin up
timeout 30         # restarts workers that hang for 30 seconds
preload_app true   # load the application before forking workers (et to true if you use NewRelic or you won't see any data)
                   # prefork not needed for Mongoid as it is lazy loaded
