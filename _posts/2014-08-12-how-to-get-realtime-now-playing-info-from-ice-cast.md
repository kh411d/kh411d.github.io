---
layout: post
title: How to get realtime Now Playing info from Ice Cast
date: '2014-08-12 12:04:45 +0700'
date_gmt: '2014-08-12 05:04:45 +0700'
categories:
- Internet &amp; Tech
tags:
- xspf
- icecast
- radio
- realtime
- onlineradio
- ajax
- jquery
---
[![icecastxspf](/images/icecastxspf.png)](/images/icecastxspf.png)Getting a #NowPlaying info from your Ice Cast 2 server is pretty dead simple. You may get current track information just by fetching an XSPF url from Ice Cast 2 server, unlike M3U, XSPF is an XML data that you can fetch periodically by CURL command or a simple script like php, python, or everything else you like. You may want to check [www.xspf.org](http://www.xspf.org "www.xspf.org") to know more about it. Here I'm going to explain how it works, I'm gonna use a simple jquery ajax script, a short javascript code for periodically update the ajax request and a simple php script to fetch the xspf endpoint.

1. Locate your Ice Cast Server url, usually it will look like this http://xxx.xxx.xxx.xxx:8000/status.xsl, check your mount point, ex: /mount. So your xspf url will be http://xxx.xxx.xxx.xxx:8000/mount.xspf [![Screen_Shot_2014-08-12_at_11_33_32_AM](/images/Screen_Shot_2014-08-12_at_11_33_32_AM-1024x359.jpg)](/images/Screen_Shot_2014-08-12_at_11_33_32_AM.jpg)
2. Create a small function to fetch xspf endpoint for your php file, and save it to file "xspf\_function.php" 
    <pre lang="php">function getXSPF(){
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
3. Setup your ajax php file, ex: current\_track.php 
    <pre lang="php">require_once "xspf_function.php"
    $stream = getXSPF();
    echo $stream['info']['title'];
4. Set your javascript periodic track updater on your current streaming website 
    <pre lang="html"><script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" type="text/javascript"></script><script type="text/javascript">// <![CDATA[
    $(document).ready(function() {      setInterval(function(){        $("#current-track").load("current_track.php");      }, 10 * 1000);    });
    // ]]></script>

The setInterval() function will periodically execute an ajax request to fetch new content from icecast xspf mount point.