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

        var fileReader = new FileReader();
        var eventStatus = document.getElementById('eventStatus');

        var progressDiv = document.createElement('div');
        progressDiv.classList.add('progress','active');
        var progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressDiv.appendChild(progressBar);

        for( i=0; i<files.length; i++){
            //显示图片
            var  liNode = document.createElement('li');

            //显示txt文件内容
            //fileReader.readAsText(files[i]);
            // fileReader.onload = function(event){
            //
            //     liNode.classList.add('list-group-item');
            //     var content = document.createTextNode(
            //        event.target.result
            //     )
            //     liNode.appendChild(content);
            //     listGroup.appendChild(liNode);
            // }
            fileReader.readAsBinaryString(files[i]);
            fileReader.onloadstart= function(){
                eventStatus.appendChild(progressDiv);
            }
            fileReader.onprogress = function(event){
                console.log(event);
                var progressStatus = 'width:' + Math.round(event.loaded/event.total * 100)+'%';
                console.log(progressStatus);
                progressBar.setAttribute('style', progressStatus)

            }
            fileReader.onload = function(){
               eventStatus.innerHTML = '';
            }
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