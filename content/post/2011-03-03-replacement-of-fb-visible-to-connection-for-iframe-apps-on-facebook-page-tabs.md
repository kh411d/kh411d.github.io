---
date: 2011-03-03T08:31:09+07:00
tags:
- facebook
- tutorial
title: Replacement of fb visible-to-connection for iframe apps on facebook page tabs
url: /2011/03/03/replacement-of-fb-visible-to-connection-for-iframe-apps-on-facebook-page-tabs/
image: /images/facebookdev.jpg
---

Developing an Iframe app an somehow you want to use this FBML tag below.
```html 
    <fb:visible-to-connection>
        Only connections should view this..
    </fb:visible-to-connection>
```

On each call from page tab you can get a `signed_request` variable, the value is like this below,

```html 
    Array (
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
```

And then you can use "page.liked" attribute to determine whether the user already like the page. The next question is how can you extract the signed request? you can use "parseSignedRequest" method from PHP-SDK or you can try to use the code below,

```php 
function parse_signed_request($signed_request = null, $secret = null) {
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
```