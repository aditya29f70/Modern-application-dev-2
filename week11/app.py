from flask import Flask
from flask_caching import Cache 
import time


config= {
  "DEBUG":True, # some flask specific configs
  "CACHE_TYPE": "RedisCache", # flask-caching related configs:
  "CACHE_DEFAULT_TIMEOUT":50,
  # if you don't provide time at any where it will take time approx 5 min by default
  # "CACHE_REDIS_HOST": "127.0.0.1",
  # "CACHE_REDIS_PORT": 6379,
  # "CACHE_REDIS_DB": 0,
  # ifyou want to give these above three things directly you can use
  "CACHE_REDIS_URL": "redis://127.0.0.1:6379/0",
  # "CACHE_KEY_PREFIX":"nice_"
}

app= Flask(__name__)
# tell flask to use the above defined config
app.config.from_mapping(config)

# flask_cache_+ view/+ url(/)  => this will be the format of your key_prefix if you will not provide any any where (config as well cache.cached decorter)
# view/ + url => when you haven't provied CACHE_KEY_PREFIx in cache.cached decorater but put it in config as a empty 
# if you give name to CACHE_KEY_PREFIx in config but nothing in cache the key prefix come with you config name + '/view'+url and (note previus key will be running it time will not complete)

# if you put name in both the place then config_name+ cache_name will only come 


cache= Cache(app)


@app.route("/home")
@cache.cached(timeout=70) # you can use this also @cache.cached(timeout=30, key_prefix='home')
def home():
  start= time.time()

  time.sleep(5)

  end= time.time()
  return f"Home generated at {end-start}"

## you will see , it will take time only in it's first search after it will not go to that return statement it will directly give you
# what ever it has stored in ram (redis)
# and that cache timeout=90 mean that stored thing will be expired within 90sec



# as you are seeing when we have are sending some kind of data the
# for getting that cache feature we use memorize
@app.route('/square/<int:num>')
@cache.memoize(timeout=90)
def square(num):
  time.sleep(2) # simulating heavy work
  return f"Square of {num} is {num * num}"


# so in memoize key prefix is not there bz you don't to what data is comming and key_prefix use route so (it will give you it own keyprefix where data will be encoded for)

#clear all cache

@app.route('/clear-cache')
def clear_cache():
  cache.clear()
  return "all cache cleared"

# Delete only Homepage cache
@app.route("/delete-homepage-cache")
def delete_homepage_cache():
  cache.delete('homepage')
  return "Home cache deleted!"

# note for clear a key value in redis you have to know that key , so that why it is not
# posible for cache.cached not or morizer bz in morizer we doesn't know key


app.run()


