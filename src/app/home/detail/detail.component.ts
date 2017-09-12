import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
      url: 'http:www.download.com',
      method: "POST",
      itemAlias: "uploadfile"
    }
  );

  constructor() {
  }

  ngOnInit() {
  }

  selectFileOnChanged(event){
    console.log('upload done!');
    console.log('$event=>', event);
    console.log('$event=>', event.target.value);


  };
  uploadFile(){
    // console.log('$event=>', $event);
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      // 上传文件成功
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        console.log(status)
        let tempRes = JSON.parse(response);
      } else {
        // 上传文件后获取服务器返回的数据错误
        alert("qwq");
      }
    };

    this.uploader.queue[0].upload(); // 开始上传
  }
}
