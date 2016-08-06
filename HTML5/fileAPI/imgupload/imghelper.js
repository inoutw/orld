/**
 * Created by qinai on 7/26/16.
 */
(function(){
    // click to upload file
    var listGroup = document.querySelector('.list-group'),
        fileSelect = document.forms['upload']['fileSelect'],
        selectBtn = document.getElementById('selectbtn');

    selectBtn.addEventListener('click', function(){
        fileSelect.click();
        event.preventDefault();
    })

    fileSelect.addEventListener('change', displayFileInfo, false);
    function displayFileInfo(event){
        //console.log(event);
        listGroup.innerHTML= '';
        event.stopPropagation();
        event.preventDefault();
        var files = event.target.files || event.dataTransfer.files;
        document.querySelector('.badge').innerHTML = files.length;

        for( i=0; i<files.length; i++){
            //显示图片
            var  liNode = document.createElement('li'),
                img = document.createElement('img'),
                url = window.URL.createObjectURL(files[i]),
                imgDiv = document.createElement('div');

            img.src = url;
            img.onload = function(event){
                window.URL.revokeObjectURL(this.src);
            }
            img.classList.add('thumbnail');
            imgDiv.classList.add('col-md-3');
            imgDiv.appendChild(img);
            listGroup.appendChild(imgDiv);

            //显示文件名称大小
            // var content = document.createTextNode(
            //     files[i].name + ' ' +
            //     files[i].type + ' ' +
            //     Math.round(files[i].size/1024/1024*100)/100 + ' ' + 'MB ' +
            //     files[i].lastModifiedDate.toLocaleDateString()
            // )
            // liNode.appendChild(content);
            //listGroup.appendChild(liNode);
        }
    }

    //drag to upload file
    listGroup.innerHTML='<p class="hint">drop to upload files</p>';
    //listen to drog and drag event
    listGroup.addEventListener('drop', displayFileInfo, false);
    listGroup.addEventListener('dragover', onDragOver, false);

    function onDragOver(event){
        event.stopPropagation();
        //默认会打开文件
        event.preventDefault();
    }

})()