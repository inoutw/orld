/**
 * Created by qinai on 12/30/16.
 */

/**
 * replace api in javascript
 * replace a param value in url
 */
//$1 represents first part within the () (i.e) src= and $2 represents the second part within the () (i.e) &,
// so this indicates you are going to change the value between src and &.
var text = 'http://localhost/mysite/includes/phpThumb.php?src=http://media2.jupix.co.uk/v3/clients/4/properties/795/IMG_795_1_large.jpg&w=592&aoe=1&q=100';
var newSrc = 'www.google.com';
newText = text.replace(/(src=).*?(&)/,'$1' + newSrc + '$2');