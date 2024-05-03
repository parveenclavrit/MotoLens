import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { SocialSharingService } from 'src/app/service/social-sharing.service';

@Component({
  selector: 'app-share-popover',
  templateUrl: './share-popover.component.html',
  styleUrls: ['./share-popover.component.scss'],
})
export class SharePopoverComponent  implements OnInit {

  shareData:any;
  constructor(private socialShareService: SocialSharingService, private socialSharing:SocialSharing) { }

  ngOnInit() {
this.socialShareService.sharedItem$.subscribe((res)=>{
this.shareData = res;
})

  }


   shareViaWhatsApp() {
  
    
    // const helmetDetection = this.shareData.responseData['trippling detection'];
    // const triplingDetection = this.shareData.responseData['trippling detection'];
    // const licensePlateNumber = this.shareData.responseData['liscence plate number'];
     // Helmet Detection: ${helmetDetection}
  // Tripling Detection: ${triplingDetection}
  // License Plate Number: ${licensePlateNumber}
    console.log("Whatsapp")
    const message = `Offence Review:
 
  License Plate Type: ${this.shareData.lPType}
  Extra Offence: ${this.shareData.extraOffence}
  Description: ${this.shareData.comment}
  `;
  // Location: ${this.shareData.locationUrl}
    // const sharingData = {
    //   text: message,
    //   files: [this.imageSource],
    // };
    // const sharingUrl = encodeURIComponent(message);
    // const whatsappUrl = `whatsapp://send?text=${sharingUrl}`;
    // const webWhatsappUrl = `https://wa.me/?text=${sharingUrl}`;

    // this.openAppOrFallback(
    //   whatsappUrl,
    //   webWhatsappUrl,
    //   'whatsapp',
    //   sharingData
    // );
    this.socialSharing.shareViaWhatsApp(message, this.shareData.imageSource, "https://jsonformatter.org/").then((res) => {
      console.log(res);
      
    }).catch((e) => {
      console.log(e);
      
    });
  }

  shareViaFacebook() {
    // const helmetDetection = this.shareData.responseData['trippling detection'];
    // const triplingDetection = this.shareData.responseData['trippling detection'];
    // const licensePlateNumber = this.shareData.responseData['liscence plate number'];
     // Helmet Detection: ${helmetDetection}
  // Tripling Detection: ${triplingDetection}
  // License Plate Number: ${licensePlateNumber}
    console.log("Facebook")
    const message = `Offence Review:
 
  License Plate Type: ${this.shareData.lPType}
  Extra Offence: ${this.shareData.extraOffence}
  Description: ${this.shareData.comment}
 `;
//  Location: ${this.shareData.locationUrl}
    // const sharingData = {
    //   text: message,
    //   files: [this.imageSource],
    // };
    // const sharingUrl = encodeURIComponent(message);
    // const whatsappUrl = `whatsapp://send?text=${sharingUrl}`;
    // const webWhatsappUrl = `https://wa.me/?text=${sharingUrl}`;

    // this.openAppOrFallback(
    //   whatsappUrl,
    //   webWhatsappUrl,
    //   'whatsapp',
    //   sharingData
    // );
    this.socialSharing.shareViaFacebook(message, this.shareData.imageSource, "https://jsonformatter.org/").then((res) => {
      console.log(res);
      
    }).catch((e) => {
      console.log(e);
      
    });
  }

  shareViaTwitter() {
    // const helmetDetection = this.shareData.responseData['trippling detection'];
    // const triplingDetection = this.shareData.responseData['trippling detection'];
    // const licensePlateNumber = this.shareData.responseData['liscence plate number'];
     // Helmet Detection: ${helmetDetection}
  // Tripling Detection: ${triplingDetection}
  // License Plate Number: ${licensePlateNumber}
    console.log("Twitter")
    const message = `Offence Review:
 
  License Plate Type: ${this.shareData.lPType}
  Extra Offence: ${this.shareData.extraOffence}
  Description: ${this.shareData.comment}
 `;
//  Location: ${this.shareData.locationUrl}
    // const sharingData = {
    //   text: message,
    //   files: [this.imageSource],
    // };
    // const sharingUrl = encodeURIComponent(message);
    // const whatsappUrl = `whatsapp://send?text=${sharingUrl}`;
    // const webWhatsappUrl = `https://wa.me/?text=${sharingUrl}`;

    // this.openAppOrFallback(
    //   whatsappUrl,
    //   webWhatsappUrl,
    //   'whatsapp',
    //   sharingData
    // );
    this.socialSharing.shareViaTwitter(message, this.shareData.imageSource, "https://jsonformatter.org/").then((res) => {
      console.log(res);
      
    }).catch((e) => {
      console.log(e);
      
    });
  }

 

}
