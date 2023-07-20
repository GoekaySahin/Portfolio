
/* 
export class ScreenSize {
      mobileView = false;
  actualSize = window.innerWidth;

  constructor() {
    this.checkSize(this.actualSize);
  }

/*   @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    const size = screen.availWidth;
    this.checkSize(size);
  } */

  window.onresize = function(event) {
    console.log('resizing')
};

  checkSize() {
    if (size <= 1024) {
      this.mobileView = true;
    } else if (size > 1024) {
      this.mobileView = false;
    }
    return this.mobileView;
} */