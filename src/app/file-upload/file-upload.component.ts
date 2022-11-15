import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  doc : any 
  uploadedFiles :any = []
  constructor() { }

  ngOnInit(): void {
  }


  handleFileInput(event: any) {
    console.log(event)
    const file =  event.target.files[0]
    let reader  = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (e:any) =>{
      this.doc = e.target.result
      console.log(this.doc)
      this.uploadedFiles.push({
        fileName:file.name,
        size:file.size,
        uploadedDate:file.lastModifiedDate
      })

      console.log(this.uploadedFiles)
    }
}
}
