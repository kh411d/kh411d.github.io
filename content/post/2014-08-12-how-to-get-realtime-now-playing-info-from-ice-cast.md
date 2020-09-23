---
date: 2014-08-12T05:04:45+07:00
tags:
- icecast
- online-streaming
title: How to get realtime Now Playing info from Ice Cast
url: /2014/08/12/how-to-get-realtime-now-playing-info-from-ice-cast/
image: /images/icecastnowplaying.png
---

Getting a #NowPlaying info from your Ice Cast 2 server is pretty dead simple. You can get current track information from scrapping the XSPF url periodically by using CURL command. Here I'm going to explain how it works, I'm going to make a short javascript code to periodically update the current playing track and a simple php script to curl the xspf endpoint.

1. Locate your Ice Cast Server url, usually it will look like this `http://xxx.xxx.xxx.xxx:8000/status.xsl`, check your mount point, ex: `/mount`. So your xspf url will be `http://xxx.xxx.xxx.xxx:8000/mount.xspf` 

![Screen_Shot_2014-08-12_at_11_33_32_AM](/images/Screen_Shot_2014-08-12_at_11_33_32_AM.jpg)

2. Create a small function to fetch xspf endpoint for your php file, `xspf_function.php` 
   
```php
function getXSPF(){
	$XSPFurl = 'http://xxx.xxx.xxx.xxx:8000/mount.xspf';
	$xml = simplexml_load_file($XSPFurl);
	$stream['info']['title'] = (string) $xml->trackList->track->title;
	$stream['info']['location'] = (string) $xml->trackList->track->location;

	preg_match_all('/^(.*):(.*)/m', (string) $xml->trackList->track->annotation,$matches);
	if(isset($matches[1]) && isset($matches[2])){
		$t = array_combine($matches[1], $matches[2]);
		foreach($t as $key => $val){
			$fkey = str_replace(" ", "_",$key);
			$stream['info'][strtolower($fkey)] = trim($val);
		}
	}
	return $stream;
}
```
	
3. Setup your ajax php file, `current_track.php` 
    
```php
require_once "xspf_function.php"
$stream = getXSPF();
echo $stream['info']['title'];
```

4. And then, put this script before the end of html head tag 
	
```javascript
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript">
	$(document).ready(function() {     
		setInterval(function(){        
			$("#current-track").load("current_track.php");      
		}, 10 * 1000);    });
</script>
```
	
The `setInterval()` function will periodically execute an ajax request to fetch new content from icecast xspf mount point.