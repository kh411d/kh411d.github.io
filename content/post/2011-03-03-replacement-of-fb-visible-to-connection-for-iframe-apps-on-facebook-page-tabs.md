---
categories:
- Internet &amp; Tech
date: 2011-03-03T15:31:09Z
date_gmt: 2011-03-03 08:31:09 +0700
tags: []
title: Replacement of fb visible-to-connection for iframe apps on facebook page tabs
url: /2011/03/03/replacement-of-fb-visible-to-connection-for-iframe-apps-on-facebook-page-tabs/
---

Doing an IFRAME apps an somehow you want to use this tag below.

 
    <pre lang="html"><fb:visible-to-connection>
    Only connections should view this..
    </fb:visible-to-connection>


Don't worry , on each call from page tab you can get a "signed\_request" variable, when you extract it you will get  
 this,

 
    <pre lang="html"> Array
            (
                [algorithm] => HMAC-SHA256
                [expires] => 0
                [issued_at] => 1299140579
                [oauth_token] => xxxxxxxxx|xxxxxxxxxxxxxxxx-xxxxxxxx|xxxxxx-xxxxxxxxxxxxxx
                [page] => Array
                    (
                        [id] => xxxxxxxxxxxxxxxx
                        [liked] => 1
                        [admin] => 1
                    )
    
                [user] => Array
                    (
                        [country] => id
                        [locale] => en_US
                        [age] => Array
                            (
                                [min] => 21
                            )
    
                    )
    
                [user_id] => xxxxxxxxxxx
            )


And then you can use "liked" value to determine if the user has already like the page. The next question is how can you extract the signed request, if you have the new PHP-SDK you can use "parseSignedRequest" method , or you can use the functions below, its the same

 
    <pre lang="php">function parse_signed_request($signed_request = null, $secret = null) {
    $signed_request = $signed_request ? $signed_request : $_REQUEST['signed_request'];
    $secret = $secret ? $secret : APP_SECRET;
    
    list($encoded_sig, $payload) = explode('.', $signed_request, 2);
    
    // decode the data
    $sig = base64_url_decode($encoded_sig);
    $data = json_decode(base64_url_decode($payload), true);
    
    if (strtoupper($data['algorithm']) !== 'HMAC-SHA256') {
    error_log('Unknown algorithm. Expected HMAC-SHA256');
    return null;
    }
    
    // check sig
    $expected_sig = hash_hmac('sha256', $payload, $secret, $raw = true);
    if ($sig !== $expected_sig) {
    error_log('Bad Signed JSON signature!');
    return null;
    }
    
    return $data;
    }
    
    function base64_url_decode($input) {
    return base64_decode(strtr($input, '-_', '+/'));
    }