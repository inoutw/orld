/**
 * Created by qinai on 12/30/16.
 */

/**
 * replace api in javascript
 * replace a param value in url
 */
//$1 represents first part within the () (i.e src=) and $2 represents the second part within the () (i.e &),
// so this indicates you are going to change the value between src and &.
var text = 'http://localhost/phpThumb.php?src=http://prop/IMG_large.jpg&w=592&aoe=1&q=100';
var newSrc = 'www.google.com';
newText = text.replace(/(src=).*?(&)/,'$1' + newSrc + '$2');
getSrc = text.match(/src=(.*?)&/);

"13122882223".replace(/^(\d{3})(\d{4})/g, "$1-$2-") //131-2288-2223